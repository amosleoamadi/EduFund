import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../../../../context/AppContext";

const DonorProfile = ({ data }) => {
  const {
    profileImage,
    userInitials,
    userName,
    userEmail,
    setProfileImageGlobal,
    removeProfileImageGlobal,
    setUserDataGlobal,
  } = useContext(AppContext);

  const userData = data?.data || {};
  const fullName = `${userData.firstName || ""} ${
    userData.lastName || ""
  }`.trim();

  if (data?.data) {
    const userData = data.data;
    setUserDataGlobal({
      firstName: userData.firstName || "",
      lastName: userData.lastName || "",
      email: userData.email || "",
    });
  }

  const fileInputRef = useRef(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validTypes.includes(file.type)) {
        alert("Please select a JPG, PNG, or GIF file.");
        return;
      }

      // Validate file size (2MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 2MB.");
        return;
      }

      // Create object URL for the image
      const imageUrl = URL.createObjectURL(file);
      setProfileImageGlobal(imageUrl);

      // Here you would typically upload the file to your server
      // and update the profile image URL in your database
      console.log("File selected:", file);
    }
  };

  const handleRemovePhoto = () => {
    removeProfileImageGlobal();
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleChangePhotoClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleNameChange = (e) => {
    const names = e.target.value.split(" ");
    const firstName = names[0] || "";
    const lastName = names.slice(1).join(" ") || "";
    setUserDataGlobal({
      firstName,
      lastName,
      email: userData.email || "",
    });
  };

  return (
    <ProfileContainer>
      <Title>Profile Information</Title>

      <PhotoSection>
        {profileImage ? (
          <ProfilePhotoWithImage src={profileImage} alt="Profile" />
        ) : (
          <ProfilePhotoWithInitials>{userInitials}</ProfilePhotoWithInitials>
        )}
        <PhotoInfoWrapper>
          <ButtonGroup>
            <ChangePhotoButton onClick={handleChangePhotoClick}>
              {profileImage ? "Change Photo" : "Upload Photo"}
            </ChangePhotoButton>
            {profileImage && (
              <RemovePhotoButton onClick={handleRemovePhoto}>
                Remove
              </RemovePhotoButton>
            )}
          </ButtonGroup>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handlePhotoChange}
            accept="image/jpeg,image/png,image/gif"
            style={{ display: "none" }}
          />
          <PhotoInfo>JPG, PNG or GIF. Max size 2MB.</PhotoInfo>
        </PhotoInfoWrapper>
      </PhotoSection>

      <FormGrid>
        <FieldGroup>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            type="text"
            value={userName || fullName}
            placeholder="Dr. Adewale Thompson"
            onChange={handleNameChange}
          />
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={userData.email || userEmail}
            placeholder="adewale.thompson@gmail.com"
            readOnly
          />
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            type="tel"
            value={userData.phoneNumber || ""}
            placeholder="+234 802 123 4567"
            readOnly
          />
        </FieldGroup>

        <FullWidthField>
          <FieldGroup>
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Tell students a bit about yourself and why you support education..."
            />
          </FieldGroup>
        </FullWidthField>
      </FormGrid>

      <ButtonGroup>
        <SaveButton>Save Changes</SaveButton>
      </ButtonGroup>
    </ProfileContainer>
  );
};

export default DonorProfile;

// Styled Components (keep all your existing styled components exactly as they were)
const ProfileContainer = styled.div`
  width: 100%;
  padding: 32px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 32px;
`;

const PhotoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  align-items: flex-start;
  margin-bottom: 32px;
`;

const ProfilePhotoWithImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: url(${(props) => props.src}) center/cover;
  flex-shrink: 0;
  border: 3px solid #f0f0f0;
`;

const ProfilePhotoWithInitials = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #003d7a, #1a5f9f);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  font-weight: bold;
  border: 3px solid #f0f0f0;
`;

const PhotoInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ChangePhotoButton = styled.button`
  padding: 10px 16px;
  border: 1px solid #e5e5e5;
  background: white;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f9f9f9;
    border-color: #d0d0d0;
  }
`;

const RemovePhotoButton = styled.button`
  padding: 10px 16px;
  border: 1px solid #e5e5e5;
  background: white;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #dc2626;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #fef2f2;
    border-color: #fca5a5;
  }
`;

const PhotoInfo = styled.h4`
  font-size: 14px;
  font-weight: 500;
  color: #666;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FullWidthField = styled.div`
  grid-column: 1 / -1;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
`;

const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 4px;
  background: #f0f0f0;
  font-size: 14px;
  color: ${(props) => (props.readOnly ? "#888" : "#1a1a1a")};
  font-family: inherit;
  opacity: ${(props) => (props.readOnly ? "0.6" : "1")};

  &:focus {
    outline: none;
    background: ${(props) => (props.readOnly ? "#f0f0f0" : "#e8e8e8")};
  }

  ${(props) =>
    props.readOnly &&
    `
    cursor: not-allowed;
  `}
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: none;
  border-radius: 4px;
  background: #f0f0f0;
  font-size: 14px;
  color: #1a1a1a;
  font-family: inherit;
  min-height: 120px;
  resize: none;
  opacity: 1;

  &:focus {
    outline: none;
    background: #e8e8e8;
  }

  &::placeholder {
    color: #999;
  }
`;

const SaveButton = styled.button`
  padding: 10px 24px;
  border: none;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #1d4ed8;
  }

  &:active {
    background: #1e40af;
  }
`;
