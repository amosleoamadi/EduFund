import { useState } from "react";
import styled from "styled-components";
import { FileIcon, Upload, AlertCircle} from "lucide-react";

const documents = [
  {
    id: "admission-letter",
    name: "Admission Letter",
    description: "Other universities offer admission",
    optional: true,
    status: "choose",
    selectedFile: null,
  },
  {
    id: "student-id",
    name: "Student ID Card",
    description: "Other universities offer a student id",
    optional: false,
    status: "choose",
    selectedFile: null,
  },
  {
    id: "semester-receipt",
    name: "Previous Semester Receipt",
    description: "Payment receipt for past semester",
    optional: true,
    status: "choose",
    selectedFile: null,
  },
  {
    id: "academic-result",
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
  const [docs, setDocs] = useState(documents);
  const [uploading, setUploading] = useState(false);

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
            ? { ...doc, selectedFile: file, status: "edit" }
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
      alert("Please upload all required documents");
      return;
    }

    setUploading(true);

    setDocs((prevDocs) =>
      prevDocs.map((doc) =>
        doc.selectedFile ? { ...doc, status: "pending" } : doc
      )
    );

    setTimeout(() => {
      setUploading(false);
      alert("Documents uploaded successfully!");
    }, 2000);
  };

  const isUploadDisabled =
    docs.filter((doc) => !doc.optional && doc.selectedFile).length === 0;

  return (
    <PageWrapper>
      <HeaderWrapper>
        <HeaderContent>
          <Title>Verification Documents</Title>
          <Subtitle>Upload and manage your verification documents</Subtitle>
        </HeaderContent>
        <UploadButton
          onClick={handleUploadAll}
          disabled={isUploadDisabled || uploading}
        >
          <Upload />
          Upload All Documents
        </UploadButton>
      </HeaderWrapper>

      <Container>
        <DocumentList>
          {docs.map((doc) => (
            <DocumentItem key={doc.id}>
              <DocumentInfo>
                <IconWrapper>
                  <FileIcon />
                </IconWrapper>
                <DocumentDetails>
                  <DocumentName>
                    {doc.name}
                    {doc.optional && <OptionalBadge>(Optional)</OptionalBadge>}
                  </DocumentName>
                  <DocumentDescription>{doc.description}</DocumentDescription>
                </DocumentDetails>
              </DocumentInfo>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                {doc.status === "pending" && (
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 500,
                      color: "#fbbf24",
                      marginRight: "8px",
                    }}
                  >
                    Pending
                  </span>
                )}
                <ActionButton
                  state={doc.status}
                  onClick={() => handleFileSelect(doc.id)}
                  disabled={doc.status === "pending"}
                >
                  <Upload />
                  {doc.status === "choose" && "Choose File"}
                  {doc.status === "edit" && "Edit"}
                  {doc.status === "pending" && "Pending"}
                </ActionButton>
                <FileInput
                  id={`file-${doc.id}`}
                  type="file"
                  onChange={(e) => handleFileChange(doc.id, e)}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
              </div>
            </DocumentItem>
          ))}
        </DocumentList>

        <InfoBox>
          <InfoIcon>
            <AlertCircle />
          </InfoIcon>
          <InfoContent>
            <InfoTitle>Document Verification Tips</InfoTitle>
            Ensure all documents are clear and legible. Documents should be in
            PDF or JPG format. File size should not exceed 5MB. All information
            must match your profile details.
          </InfoContent>
        </InfoBox>
      </Container>
    </PageWrapper>
  );
};

export default Verificcations;

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
  border: 1px solid #e8eaed;
  transition: all 0.2s ease;

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
  background-color: #e3f2fd;
  border-radius: 6px;
  flex-shrink: 0;

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
    color: #2563eb;

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

  ${(props) => {
    if (props.state === "pending") {
      return `
        background-color: #fbbf24;
        cursor: not-allowed;
      `;
    }
  }}

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
