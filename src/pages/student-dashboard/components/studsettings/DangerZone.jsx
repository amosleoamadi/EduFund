import React from "react";
import styled from "styled-components";

const DangerZone = () => {
  const handleDeactivate = () => {
    console.log("Deactivate account clicked");
  };

  const handleDeleteAccount = () => {
    console.log("Delete account clicked");
  };
  return (
    <CardContainer>
      <CardTitle>Danger Zone</CardTitle>

      <ActionItem>
        <ActionContent>
          <ActionTitle>Deactivate Account</ActionTitle>
          <ActionDescription>
            Temporarily disable your account
          </ActionDescription>
        </ActionContent>
        <ActionButton onClick={handleDeactivate}>Deactivate</ActionButton>
      </ActionItem>

      <ActionItem>
        <ActionContent>
          <ActionTitle>Delete Account</ActionTitle>
          <ActionDescription>
            Permanently delete your account and all data
          </ActionDescription>
        </ActionContent>
        <ActionButton onClick={handleDeleteAccount}>
          Delete Account
        </ActionButton>
      </ActionItem>
    </CardContainer>
  );
};

export default DangerZone;
const CardContainer = styled.div`
  background-color: #ffe6e6;
  border: 1px solid #ffcccc;
  border-radius: 12px;
  padding: 24px;
  width: 100%;

  @media (max-width: 1199px) {
    padding: 22px;
    border-radius: 11px;
  }

  @media (max-width: 767px) {
    padding: 20px;
    border-radius: 10px;
  }

  @media (max-width: 479px) {
    padding: 16px;
    border-radius: 8px;
  }
`;

const CardTitle = styled.h2`
  color: #c41e3a;
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 24px 0;

  @media (max-width: 1199px) {
    font-size: 19px;
    margin-bottom: 22px;
  }

  @media (max-width: 767px) {
    font-size: 18px;
    margin-bottom: 20px;
  }

  @media (max-width: 479px) {
    font-size: 17px;
    margin-bottom: 18px;
  }
`;

const ActionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  &:not(:last-child) {
    border-bottom: 1px solid #ffcccc;
  }

  @media (max-width: 1199px) {
    padding: 18px 0;
  }

  @media (max-width: 767px) {
    padding: 16px 0;
  }

  @media (max-width: 479px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding: 14px 0;
  }
`;

const ActionContent = styled.div`
  flex: 1;

  @media (max-width: 479px) {
    width: 100%;
  }
`;

const ActionTitle = styled.h4`
  color: #82181a;
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 4px 0;

  @media (max-width: 1199px) {
    font-size: 17px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 3px;
  }

  @media (max-width: 479px) {
    font-size: 15px;
    margin-bottom: 2px;
  }
`;

const ActionDescription = styled.h5`
  color: #c10007;
  font-size: 14px;
  margin: 0;
  opacity: 0.8;

  @media (max-width: 767px) {
    font-size: 13px;
  }

  @media (max-width: 479px) {
    font-size: 12px;
    line-height: 1.4;
  }
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: 2px solid #c41e3a;
  color: #c41e3a;
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  margin-left: 16px;

  &:hover {
    background-color: #c41e3a;
    color: white;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 1199px) {
    padding: 7px 18px;
    font-size: 13px;
  }

  @media (max-width: 767px) {
    padding: 6px 16px;
    font-size: 13px;
    margin-left: 12px;
  }

  @media (max-width: 479px) {
    width: 100%;
    margin-left: 0;
    padding: 8px 16px;
    font-size: 14px;
    white-space: normal;
  }
`;
