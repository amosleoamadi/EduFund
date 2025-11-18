import { useState, useEffect } from "react";
import styled from "styled-components";
import { FileIcon, Upload, AlertCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useUploadDocumentsMutation } from "../../../utils/stundentauth/authapi";
import { useSelector } from "react-redux";
import { selectStudentId } from "../../../config/slices/studentauthslice";
import LoadingState from "../../modals/loadingstate/LoadingState";
import VerificationSuccess from "../../modals/VerificationSuccess";

const initialDocuments = [
  {
    id: "admissionLetter",
    name: "Admission Letter",
    description: "Other universities offer admission",
    optional: true,
    status: "choose",
    selectedFile: null,
  },
  {
    id: "studentIdCard",
    name: "Student ID Card",
    description: "Other universities offer a student id",
    optional: false,
    status: "choose",
    selectedFile: null,
  },
  {
    id: "semesterReceipt",
    name: "Previous Semester Receipt",
    description: "Payment receipt for past semester",
    optional: true,
    status: "choose",
    selectedFile: null,
  },
  {
    id: "academicResult",
    name: "Academic Result",
    description: "Official result for past semester",
    optional: false,
    status: "choose",
    selectedFile: null,
  },
  {
    id: "nin",
    name: "National Identity Number (NIN)",
    description: "Your NIN is required to proceed",
    optional: false,
    status: "choose",
    selectedFile: null,
  },
];

const Verificcations = () => {
  const studentId = useSelector(selectStudentId);

  // Load initial state from localStorage or use initialDocuments
  const [docs, setDocs] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`verificationDocs_${studentId}`);
      return saved ? JSON.parse(saved) : initialDocuments;
    }
    return initialDocuments;
  });

  const [uploading, setUploading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [uploadDoc, { isLoading }] = useUploadDocumentsMutation();

  // Save to localStorage whenever docs change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        `verificationDocs_${studentId}`,
        JSON.stringify(docs)
      );
    }
  }, [docs, studentId]);

  const onClose = () => {
    setComplete(false);
  };

  const isOpen = () => {
    setComplete(true);
  };

  const handleFileSelect = (docId) => {
    const fileInput = document.getElementById(`file-${docId}`);
    fileInput?.click();
  };

  const handleFileChange = (docId, event) => {
    const file = event.target.files?.[0];
    if (file) {
      setDocs((prevDocs) =>
        prevDocs.map((doc) =>
          doc.id === docId
            ? {
                ...doc,
                selectedFile: {
                  name: file.name,
                  size: file.size,
                  type: file.type,
                },
                status: doc.status === "pending" ? "pending" : "change",
              }
            : doc
        )
      );
    }
  };

  const handleUploadAll = async () => {
    const requiredDocsWithFiles = docs.filter(
      (doc) => !doc.optional && doc.selectedFile
    ).length;
    const requiredDocsTotal = docs.filter((doc) => !doc.optional).length;

    if (requiredDocsWithFiles < requiredDocsTotal) {
      toast.error("Please upload all required documents");
      return;
    }

    setUploading(true);

    // Create FormData with actual File objects from input elements
    const formData = new FormData();
    let hasValidFiles = true;

    // Get fresh file objects from input elements
    docs.forEach((doc) => {
      if (doc.selectedFile) {
        const fileInput = document.getElementById(`file-${doc.id}`);
        const file = fileInput?.files?.[0];
        if (file) {
          formData.append(doc.id, file);
        } else {
          hasValidFiles = false;
          toast.error(`Please re-select file for ${doc.name}`);
        }
      }
    });

    if (!hasValidFiles) {
      setUploading(false);
      return;
    }

    try {
      const response = await uploadDoc({
        verificationDocuments: formData,
        studentId,
      }).unwrap();

      // Update all documents with files to pending status
      setDocs((prevDocs) =>
        prevDocs.map((doc) =>
          doc.selectedFile ? { ...doc, status: "pending" } : doc
        )
      );

      setComplete(true);
    } catch (error) {
      toast.error(error?.data?.message || "Failed to upload documents");
    } finally {
      setUploading(false);
    }
  };

  const isUploadDisabled =
    docs.filter((doc) => !doc.optional && doc.selectedFile).length === 0 ||
    uploading ||
    docs.some((doc) => doc.status === "pending");

  const hasPendingDocuments = docs.some((doc) => doc.status === "pending");

  return (
    <PageWrapper>
      <HeaderWrapper>
        <HeaderContent>
          <Title>Verification Documents</Title>
          <Subtitle>Upload and manage your verification documents</Subtitle>
          {hasPendingDocuments && (
            <StatusMessage>
              ⏳ Documents are under review. You cannot upload new files until
              review is complete.
            </StatusMessage>
          )}
        </HeaderContent>
        <UploadButton onClick={handleUploadAll} disabled={isUploadDisabled}>
          <Upload />
          {uploading ? "Uploading..." : "Upload All Documents"}
        </UploadButton>
      </HeaderWrapper>

      {complete && <VerificationSuccess isOpen={isOpen} onClose={onClose} />}

      <Container>
        <DocumentList>
          {docs.map((doc) => (
            <DocumentItem
              key={doc.id}
              $hasFile={doc.selectedFile !== null}
              $isPending={doc.status === "pending"}
            >
              <DocumentInfo>
                <IconWrapper
                  $hasFile={doc.selectedFile !== null}
                  $isPending={doc.status === "pending"}
                >
                  <FileIcon />
                </IconWrapper>
                <DocumentDetails>
                  <DocumentName>
                    {doc.name}
                    {doc.optional && <OptionalBadge>(Optional)</OptionalBadge>}
                  </DocumentName>
                  <DocumentDescription>{doc.description}</DocumentDescription>
                  {doc.selectedFile && (
                    <SelectedFile>
                      📎 {doc.selectedFile.name}
                      {doc.status === "pending" && " - Under Review"}
                    </SelectedFile>
                  )}
                </DocumentDetails>
              </DocumentInfo>
              <ActionGroup>
                {doc.status === "pending" ? (
                  <PendingBadge>⏳ Pending Review</PendingBadge>
                ) : (
                  <>
                    <ActionButton
                      state={doc.status}
                      onClick={() => handleFileSelect(doc.id)}
                      disabled={doc.status === "pending" || hasPendingDocuments}
                    >
                      <Upload />
                      {doc.status === "choose" && "Choose File"}
                      {doc.status === "change" && "Change File"}
                    </ActionButton>
                    <FileInput
                      id={`file-${doc.id}`}
                      type="file"
                      onChange={(e) => handleFileChange(doc.id, e)}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                  </>
                )}
              </ActionGroup>
            </DocumentItem>
          ))}
          {isLoading && <LoadingState />}
        </DocumentList>

        <InfoBox>
          <InfoIcon>
            <AlertCircle />
          </InfoIcon>
          <InfoContent>
            <InfoTitle>Document Verification Tips</InfoTitle>
            Ensure all documents are clear and legible. Documents should be in
            PDF format. File size should not exceed 5MB. All information must
            match your profile details.
            {hasPendingDocuments && (
              <div
                style={{
                  marginTop: "8px",
                  fontWeight: "500",
                  color: "#f59e0b",
                }}
              >
                Your documents are currently under review. You will be notified
                once the verification is complete.
              </div>
            )}
          </InfoContent>
        </InfoBox>
      </Container>
    </PageWrapper>
  );
};

export default Verificcations;

// New styled components
const StatusMessage = styled.div`
  background: #fffbeb;
  border: 1px solid #fcd34d;
  color: #92400e;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  margin-top: 8px;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const PendingBadge = styled.span`
  background-color: #fef3c7;
  color: #92400e;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid #fbbf24;
`;

const SelectedFile = styled.div`
  font-size: 11px;
  color: #666;
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

// Keep all your existing styled components below...
const PageWrapper = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 16px;
  }

  @media (min-width: 1025px) {
    padding: 20px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 14px;
    margin-bottom: 18px;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 4px 0;
  letter-spacing: -0.3px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 19px;
  }

  @media (min-width: 1025px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.p`
  font-size: 13px;
  color: #666;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 12px;
  }

  @media (min-width: 1025px) {
    font-size: 13px;
  }
`;

const UploadButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#ccc" : "#2563eb")};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 13px;
  font-weight: 500;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 12px;
    width: 100%;
    justify-content: center;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 10px 14px;
    font-size: 12px;
  }

  @media (min-width: 1025px) {
    padding: 10px 16px;
    font-size: 13px;
  }

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#1d4ed8")};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const Container = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 32px;

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 10px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 24px;
    border-radius: 11px;
  }

  @media (min-width: 1025px) {
    padding: 32px;
    border-radius: 12px;
  }
`;

const DocumentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 28px;

  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 14px;
    margin-bottom: 24px;
  }

  @media (min-width: 1025px) {
    gap: 16px;
    margin-bottom: 28px;
  }
`;

const DocumentItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.$hasFile ? "#2563eb" : "#e8eaed")};
  transition: all 0.2s ease;
  background-color: ${(props) =>
    props.$isPending ? "#fffbeb" : props.$hasFile ? "#f0f4ff" : "white"};
  box-shadow: ${(props) =>
    props.$hasFile ? "0 2px 8px rgba(37, 99, 235, 0.1)" : "none"};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    gap: 12px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 14px;
  }

  @media (min-width: 1025px) {
    padding: 16px;
  }
`;

const DocumentInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex: 1;

  @media (max-width: 768px) {
    gap: 10px;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 11px;
  }

  @media (min-width: 1025px) {
    gap: 12px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${(props) =>
    props.$isPending ? "#fef3c7" : props.$hasFile ? "#2563eb" : "#e3f2fd"};
  border-radius: 6px;
  flex-shrink: 0;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 38px;
    height: 38px;
  }

  @media (min-width: 1025px) {
    width: 40px;
    height: 40px;
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${(props) =>
      props.$isPending ? "#d97706" : props.$hasFile ? "white" : "#2563eb"};
    transition: all 0.2s ease;

    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      width: 22px;
      height: 22px;
    }

    @media (min-width: 1025px) {
      width: 24px;
      height: 24px;
    }
  }
`;

const DocumentDetails = styled.div`
  flex: 1;
`;

const DocumentName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 768px) {
    font-size: 13px;
    flex-wrap: wrap;
    gap: 4px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 13px;
  }

  @media (min-width: 1025px) {
    font-size: 14px;
  }
`;

const OptionalBadge = styled.span`
  font-size: 11px;
  color: #666;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 10px;
  }

  @media (min-width: 1025px) {
    font-size: 11px;
  }
`;

const DocumentDescription = styled.p`
  font-size: 12px;
  color: #999;
  margin: 4px 0 0 0;

  @media (max-width: 768px) {
    font-size: 11px;
    margin: 2px 0 0 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 11px;
  }

  @media (min-width: 1025px) {
    font-size: 12px;
  }
`;

const ActionButton = styled.button`
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 11px;
    width: 100%;
    justify-content: center;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 8px 13px;
    font-size: 11px;
  }

  @media (min-width: 1025px) {
    padding: 8px 14px;
    font-size: 12px;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #1d4ed8;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px 16px;
  background-color: #f0f4ff;
  border-radius: 8px;
  border-left: 3px solid #2563eb;

  @media (max-width: 768px) {
    gap: 10px;
    padding: 10px 12px;
    border-radius: 6px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 11px;
    padding: 11px 14px;
  }

  @media (min-width: 1025px) {
    gap: 12px;
    padding: 12px 16px;
  }
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;

  svg {
    width: 18px;
    height: 18px;
    color: #2563eb;
    margin-top: 1px;

    @media (max-width: 768px) {
      width: 16px;
      height: 16px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      width: 17px;
      height: 17px;
    }

    @media (min-width: 1025px) {
      width: 18px;
      height: 18px;
    }
  }
`;

const InfoContent = styled.div`
  font-size: 12px;
  color: #333;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 11px;
    line-height: 1.4;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 11px;
  }

  @media (min-width: 1025px) {
    font-size: 12px;
  }
`;

const InfoTitle = styled.strong`
  display: block;
  font-weight: 600;
  margin-bottom: 4px;
  color: #1a1a1a;

  @media (max-width: 768px) {
    margin-bottom: 3px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 3px;
  }

  @media (min-width: 1025px) {
    margin-bottom: 4px;
  }
`;

const FileInput = styled.input`
  display: none;
`;
