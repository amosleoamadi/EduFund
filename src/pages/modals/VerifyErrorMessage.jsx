import React from "react";
import styled from "styled-components";
import { Check, X, Shield, Info } from "lucide-react";

const VerifyErrorMessage = ({ onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <X size={24} />
        </CloseButton>

        <IconContainer>
          <ShieldIcon>
            <Shield size={56} color="white" strokeWidth={1.5} />
          </ShieldIcon>
        </IconContainer>

        <Title>Verification Required</Title>
        <Description>
          Before you can create a campaign, you need to verify your student
          account first.
        </Description>

        <InfoBox>
          <InfoTitle>
            <Info size={20} />
            Why verification is important:
          </InfoTitle>
          <InfoList>
            <InfoItem>
              <CheckmarkIcon>
                <Check size={20} />
              </CheckmarkIcon>
              Builds trust with potential donors
            </InfoItem>
            <InfoItem>
              <CheckmarkIcon>
                <Check size={20} />
              </CheckmarkIcon>
              Ensures transparency and authenticity
            </InfoItem>
            <InfoItem>
              <CheckmarkIcon>
                <Check size={20} />
              </CheckmarkIcon>
              Increases chances of reaching your goal
            </InfoItem>
          </InfoList>
        </InfoBox>

        <ButtonGroup>
          <SecondaryButton onClick={onClose}>Maybe Later</SecondaryButton>
          <PrimaryButton>
            <Check size={20} />
            Verify Account Now
          </PrimaryButton>
        </ButtonGroup>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default VerifyErrorMessage;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 1000;
  width: 100%;
  overflow-y: auto;
`;

const ModalContainer = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  border: 3px solid #d4a574;
  padding: 48px 32px;
  width: 40%;
  height: max-content;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 32px 24px;
    border-radius: 16px;
    width: 65%;
  }

  @media (max-width: 480px) {
    padding: 24px 16px;
    width: 80%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const ShieldIcon = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #ff5722 0%, #ff7043 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(255, 87, 34, 0.3);

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  text-align: center;
  margin-bottom: 32px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const InfoBox = styled.div`
  background-color: #e3f2fd;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  border-left: 4px solid #1976d2;

  @media (max-width: 768px) {
    padding: 18px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    padding: 14px;
    margin-bottom: 20px;
  }
`;

const InfoTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #1976d2;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    gap: 10px;
    margin-bottom: 10px;
  }
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 13px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    gap: 8px;
  }
`;

const CheckmarkIcon = styled.div`
  color: #4caf50;
  flex-shrink: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const SecondaryButton = styled.button`
  flex: 1;
  padding: 14px 24px;
  border: 1px solid #ddd;
  background-color: #f5f5f5;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #eee;
    border-color: #ccc;
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`;

const PrimaryButton = styled.button`
  flex: 1;
  padding: 14px 24px;
  background-color: #1976d2;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;

  &:hover {
    background-color: #1565c0;
    box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 14px;
    gap: 6px;
  }
`;
