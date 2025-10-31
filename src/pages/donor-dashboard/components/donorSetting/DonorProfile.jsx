import React from "react";
import styled from "styled-components";

const DonorProfile = () => {
  return (
    <ProfileContainer>
      <Title>Profile Information</Title>

      <PhotoSection>
        <ProfilePhoto />
        <PhotoInfoWrapper>
          <ChangePhotoButton>Change Photo</ChangePhotoButton>
          <PhotoInfo>JPG, PNG or GIF. Max size 2MB.</PhotoInfo>
        </PhotoInfoWrapper>
      </PhotoSection>

      <FormGrid>
        <FieldGroup>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" type="text" placeholder="Dr. Adewale Thompson" />
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="adewale.thompson@gmail.com"
            readOnly
          />
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input id="phoneNumber" type="tel" placeholder="+234 802 123 4567" />
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

const ProfilePhoto = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23003d7a;stop-opacity:1" /><stop offset="100%" style="stop-color:%231a5f9f;stop-opacity:1" /></linearGradient></defs><rect width="120" height="120" fill="url(%23grad)"/></svg>')
    center/cover;
  flex-shrink: 0;
`;

const PhotoInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ChangePhotoButton = styled.button`
  padding: 10px 10px;
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
  color: ${(props) => (props.readonly ? "#888" : "#1a1a1a")};
  font-family: inherit;
  opacity: 0.6;

  &:focus {
    outline: none;
    background: ${(props) => (props.readonly ? "#f0f0f0" : "#e8e8e8")};
  }

  ${(props) =>
    props.readonly &&
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
  color: #888;
  font-family: inherit;
  min-height: 120px;
  resize: none;
  opacity: 0.6;

  &:focus {
    outline: none;
    background: #e8e8e8;
  }

  &::placeholder {
    color: #999;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
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
