import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import { FiUpload, FiTrash2 } from "react-icons/fi";
import { useUpdateProfileMutation } from "../../../../utils/usersettting";
import { useSelector } from "react-redux";
import { selectStudentId } from "../../../../config/slices/studentauthslice";
import { AppContext } from "../../../../context/AppContext";

const ProfileCard = ({ data }) => {
  const {
    profileImage,
    userInitials,
    setProfileImageGlobal,
    removeProfileImageGlobal,
    setUserDataGlobal,
  } = useContext(AppContext);

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const userId = useSelector(selectStudentId);

  if (data?.data) {
    setUserDataGlobal({
      firstName: data.data.firstName,
      lastName: data.data.lastName,
      email: data.data.email,
    });
  }

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      if (file.size > 6 * 1024 * 1024) {
        alert("File size should be less than 5MB");
        return;
      }

      setSelectedFile(file);

      const imageUrl = URL.createObjectURL(file);
      setProfileImageGlobal(imageUrl);

      console.log("File selected:", file.name);
    }
  };

  const handleRemove = () => {
    removeProfileImageGlobal();
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSave = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("profilePicture", selectedFile);

        const res = await updateProfile({
          userId: userId,
          profilePicture: formData,
        }).unwrap();
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("No changes to save");
    }
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
          {profileImage ? (
            <ProfilePhoto src={profileImage} alt="Profile" />
          ) : (
            <AvatarContainer>
              <AvatarIcon>{userInitials}</AvatarIcon>
            </AvatarContainer>
          )}
          <PhotoLabel>Profile Photo</PhotoLabel>
        </PhotoContainer>

        <ButtonGroup>
          <Group>
            <IconButton onClick={handleUpload} title="Upload New">
              <FiUpload /> Update New
            </IconButton>
            <IconButton
              className="remove"
              onClick={handleRemove}
              title="Remove"
              disabled={!profileImage}
            >
              <span style={{ color: "#E7000B" }}>Remove</span>
            </IconButton>
          </Group>

          <HiddenFileInput
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
          />

          {selectedFile && <FileInfo>Selected: {selectedFile.name}</FileInfo>}
        </ButtonGroup>
      </PhotoSection>

      <FieldsGrid>
        <FieldGroup>
          <FieldLabel>Full Name</FieldLabel>
          <FieldValue>
            {data?.data?.firstName} {data?.data?.lastName}
          </FieldValue>
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>Email Address</FieldLabel>
          <FieldValue>{data?.data?.email}</FieldValue>
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>University</FieldLabel>
          <FieldValue>{data?.data?.educationInfo?.schoolName}</FieldValue>
        </FieldGroup>

        <FieldGroup>
          <FieldLabel>Department</FieldLabel>
          <FieldValue>{data?.data?.educationInfo?.course}</FieldValue>
        </FieldGroup>
      </FieldsGrid>

      <Footer>
        <SaveButton onClick={handleSave} disabled={isLoading}>
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
          {isLoading ? "Updating..." : "Save Changes"}
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

  @media (max-width: 1199px) {
    padding: 28px;
    margin-bottom: 28px;
  }

  @media (max-width: 767px) {
    padding: 24px;
    border-radius: 10px;
    margin-bottom: 24px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 479px) {
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  @media (max-width: 1199px) {
    margin-bottom: 28px;
  }

  @media (max-width: 767px) {
    margin-bottom: 24px;
  }

  @media (max-width: 479px) {
    gap: 16px;
    align-items: center;
    margin-bottom: 20px;
  }
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

  @media (max-width: 1199px) {
    font-size: 19px;

    svg {
      width: 22px;
      height: 22px;
    }
  }

  @media (max-width: 767px) {
    font-size: 18px;
    gap: 7px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 479px) {
    font-size: 14px;
    gap: 6px;

    svg {
      width: 15px;
      height: 15px;
    }
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

  @media (max-width: 479px) {
    font-size: 12px;
    padding: 5px 8px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const PhotoSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 1199px) {
    margin-bottom: 36px;
  }

  @media (max-width: 767px) {
    margin-bottom: 32px;
    gap: 20px;
  }

  @media (max-width: 479px) {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 28px;
  }
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

  @media (max-width: 1199px) {
    width: 110px;
    height: 110px;
  }

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 479px) {
    width: 90px;
    height: 90px;
    border: 2px solid #e5e7eb;
  }
`;

const AvatarContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #e5e7eb;

  @media (max-width: 1199px) {
    width: 110px;
    height: 110px;
  }

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 479px) {
    width: 90px;
    height: 90px;
    border: 2px solid #e5e7eb;
  }
`;

const AvatarIcon = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1199px) {
    font-size: 34px;
  }

  @media (max-width: 767px) {
    font-size: 32px;
  }

  @media (max-width: 479px) {
    font-size: 28px;
  }
`;

const PhotoLabel = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin-top: 8px;
  margin-bottom: 0;

  @media (max-width: 479px) {
    font-size: 13px;
    text-align: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 479px) {
    align-items: flex-start;
    width: 100%;
    gap: 5px;
  }
`;

const Group = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: 479px) {
    width: 100%;
    gap: 8px;
  }
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

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;

      &:hover {
        background: white;
        border-color: #e5e7eb;
      }
    }
  }

  @media (max-width: 767px) {
    width: 120px;
    font-size: 15px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 479px) {
    width: 100%;
    font-size: 14px;
    height: 44px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const FileInfo = styled.div`
  font-size: 12px;
  color: #6b7280;
  padding: 4px 8px;
  background: #f3f4f6;
  border-radius: 4px;
  margin-top: 4px;

  @media (max-width: 479px) {
    font-size: 11px;
    text-align: center;
    width: 100%;
  }
`;

const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 48px;
  margin-bottom: 32px;

  @media (max-width: 1199px) {
    gap: 28px 40px;
    margin-bottom: 28px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 24px;
  }

  @media (max-width: 479px) {
    gap: 20px;
    margin-bottom: 20px;
  }
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

  @media (max-width: 479px) {
    font-size: 13px;
    margin-bottom: 6px;
  }
`;

const FieldValue = styled.p`
  font-size: 16px;
  color: #1f2937;
  margin: 0;

  @media (max-width: 479px) {
    font-size: 15px;
    word-break: break-word;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 479px) {
    justify-content: center;
  }
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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    padding: 11px 22px;
  }

  @media (max-width: 479px) {
    width: 100%;
    padding: 12px 20px;
    font-size: 15px;
    justify-content: center;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
