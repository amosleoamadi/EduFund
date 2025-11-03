import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { TbNotes } from "react-icons/tb";
import { LuUpload } from "react-icons/lu";

const Verificcations = () => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "Admission Letter",
      isUploaded: false,
      uploadedDate: null,
    },
    {
      id: 2,
      name: "Student ID Card",
      isUploaded: false,
      uploadedDate: null,
    },
    {
      id: 3,
      name: "Previous Semester Receipt",
      isUploaded: false,
      uploadedDate: null,
    },
    {
      id: 4,
      name: "NIN",
      isUploaded: false,
      uploadedDate: null,
    },
  ]);

  const handleUploadClick = (docId) => {
    const fileInput = document.getElementById(`file-input-${docId}`);
    fileInput.click();
  };

  const handleFileSelect = (docId, event) => {
    const file = event.target.files[0];
    if (file) {
      const today = new Date().toISOString().split("T")[0];
      setDocuments(
        documents.map((doc) =>
          doc.id === docId
            ? { ...doc, isUploaded: true, uploadedDate: today }
            : doc
        )
      );
    }
  };

  const allDocumentsUploaded = documents.every((doc) => doc.isUploaded);

  const handleSubmitAllDocuments = () => {
    if (allDocumentsUploaded) {
      console.log("[v0] All documents submitted:", documents);
      alert("All documents submitted successfully!");
    }
  };

  return (
    <VerificationDocumentsContainer>
      <Header>
        <TitleSection>
          <Title>Verification Documents</Title>
          <Subtitle>Upload and manage your verification documents</Subtitle>
        </TitleSection>
        <UploadButtonMain
          onClick={handleSubmitAllDocuments}
          disabled={!allDocumentsUploaded}
        >
          <LuUpload /> Upload Document
        </UploadButtonMain>
      </Header>

      <DocumentsList>
        {documents.map((doc) => (
          <DocumentCard key={doc.id} isUploaded={doc.isUploaded}>
            <DocumentIcon>
              <TbNotes />
            </DocumentIcon>
            <DocumentInfo>
              <DocumentName>{doc.name}</DocumentName>
              {doc.uploadedDate && (
                <DocumentDate>Uploaded {doc.uploadedDate}</DocumentDate>
              )}
            </DocumentInfo>
            <UploadButton onClick={() => handleUploadClick(doc.id)}>
              {doc.isUploaded ? "Re-upload" : "Upload"}
            </UploadButton>
            <HiddenFileInput
              id={`file-input-${doc.id}`}
              type="file"
              onChange={(e) => handleFileSelect(doc.id, e)}
              accept=".pdf,.jpg,.jpeg,.png"
            />
          </DocumentCard>
        ))}
      </DocumentsList>

      <InfoBox>
        <InfoIcon>
          <RiErrorWarningLine />
        </InfoIcon>
        <InfoText>
          <InfoTitle>Document Verification Tips</InfoTitle>
          <InfoList>
            <li>Ensure all documents are clear and legible</li>
            <li>Documents should be in PDF or JPG format</li>
            <li>File size should not exceed 5MB</li>
            <li>All information must match your profile details</li>
          </InfoList>
        </InfoText>
      </InfoBox>
    </VerificationDocumentsContainer>
  );
};

export default Verificcations;
const VerificationDocumentsContainer = styled.div`
  border-radius: 12px;

  @media (max-width: 768px) {
    padding: 24px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const UploadButtonMain = styled.button`
  background: #3b82f6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.3s ease;

  &:hover:not(:disabled) {
    background: #2563eb;
  }

  &:disabled {
    background: #d1d5db;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding: 12px 16px;
  }
`;

const DocumentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

const DocumentCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 2px solid ${(props) => (props.isUploaded ? "#3b82f6" : "#E5E7EB")};
  border-radius: 16.393px;
  transition: border-color 0.3s ease;
  background: ${(props) => (props.isUploaded ? "#f0f9ff" : "white")};

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const DocumentIcon = styled.div`
  width: 48px;
  height: 48px;
  background: #dbeafe;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 16px;

  @media (max-width: 480px) {
    margin-right: 0;
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

const DocumentInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DocumentName = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const DocumentDate = styled.p`
  font-size: 13px;
  color: #6b7280;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const UploadButton = styled.button`
  background: white;
  color: #3b82f6;
  border: 2px solid #3b82f6;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: #eff6ff;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px 12px;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const InfoBox = styled.div`
  border-radius: 16.393px;
  border: 1.171px solid #dbeafe;
  background: #eff6ff;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  gap: 12px;

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const InfoIcon = styled.div`
  font-size: 20px;
  color: #3b82f6;
  flex-shrink: 0;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InfoTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const InfoList = styled.ul`
  margin: 0;
  padding-left: 20px;
  font-size: 13px;
  color: #4b5563;
  list-style-position: inside;

  li {
    margin-bottom: 4px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding-left: 16px;
  }
`;
