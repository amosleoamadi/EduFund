import React from "react";
import styled from "styled-components";
import { FiUpload, FiTrash2 } from "react-icons/fi";
import profilePhoto from "../../../../assets/Amos.jpg";

const ProfileCard = () => {
  const handleUpload = () => {
    console.log("Upload photo");
  };

  const handleRemove = () => {
    console.log("Remove photo");
  };

  const handleSave = () => {
    console.log("Save changes");
  };
  return (
    <CardContainer>
      <Header>
        <Title>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Profile Information
        </Title>
        <Badge>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          Not Verified
        </Badge>
      </Header>

      <PhotoSection>
        <PhotoContainer>
          <ProfilePhoto src={profilePhoto} alt="Profile" />
        </PhotoContainer>

        <ButtonGroup>
          <PhotoLabel>Profile Photo</PhotoLabel>
          <Group>
            <IconButton onClick={handleUpload} title="Upload New">
              <FiUpload /> Update New
            </IconButton>
            <IconButton
              className="remove"
              onClick={handleRemove}
              title="Remove"
            >
              <span style={{ color: "#E7000B" }}>Remove</span>
            </IconButton>
          </Group>
        </ButtonGroup>
      </PhotoSection>

      <FieldsGrid>
        <FieldGroup>
          <FieldLabel>Full Name</FieldLabel>
          <FieldValue>Amadi Amos</FieldValue>
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>Student ID</FieldLabel>
          <FieldValue>studentId</FieldValue>
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>Email Address</FieldLabel>
          <FieldValue>email</FieldValue>
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>Phone Number</FieldLabel>
          <FieldValue>phone</FieldValue>
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>University</FieldLabel>
          <FieldValue>university</FieldValue>
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>Department</FieldLabel>
          <FieldValue>department</FieldValue>
        </FieldGroup>
      </FieldsGrid>

      <Footer>
        <SaveButton onClick={handleSave}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            <polyline points="17 21 17 13 7 13 7 21" />
            <polyline points="7 3 7 8 15 8" />
          </svg>
          Save Changes
        </SaveButton>
      </Footer>
    </CardContainer>
  );
};

export default ProfileCard;
const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: 100%;
  margin-bottom: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;

  svg {
    color: #2563eb;
    width: 24px;
    height: 24px;
  }
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #f3f4f6;
  border-radius: 6px;
  font-size: 14px;
  color: #6b7280;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const PhotoSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 40px;
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfilePhoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #e5e7eb;
`;

const PhotoLabel = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin-top: 8px;
  margin-bottom: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Group = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 130px;
  height: 40px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 16px;

  svg {
    width: 20px;
    height: 20px;
    color: #374151;
  }

  &:hover {
    border-color: #d1d5db;
    background: #f9fafb;
  }

  &.remove {
    svg {
      color: #ef4444;
    }

    &:hover {
      background: #fef2f2;
    }
  }
`;

const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 48px;
  margin-bottom: 32px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FieldLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;
`;

const FieldValue = styled.p`
  font-size: 16px;
  color: #1f2937;
  margin: 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: #1d4ed8;
  }
`;
