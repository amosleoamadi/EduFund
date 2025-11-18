import React from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

const VerificationSuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <IconWrapper>
          <FaCheckCircle />
        </IconWrapper>

        <Title>Documents Submitted Successfully</Title>

        <Message>
          Thank you for submitting your verification documents. We appreciate
          your patience!
        </Message>

        <InfoBox>
          <InfoIcon>⏱️</InfoIcon>
          <InfoContent>
            <InfoTitle>Verification Timeline</InfoTitle>
            <InfoDescription>
              Your documents will be reviewed and verified within{" "}
              <strong>2-3 working days</strong>. You'll receive an email
              notification once the verification is complete.
            </InfoDescription>
          </InfoContent>
        </InfoBox>

        <TipsBox>
          <TipsTitle>What to Expect</TipsTitle>
          <TipsList>
            <TipItem>
              ✓ Documents will be reviewed by our verification team
            </TipItem>
            <TipItem>✓ You'll be notified via email with the status</TipItem>
            <TipItem>✓ Once verified, you can start creating campaigns</TipItem>
          </TipsList>
        </TipsBox>

        <ButtonContainer>
          <CloseButton onClick={onClose}>Continue</CloseButton>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default VerificationSuccessModal;

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1.5rem;
  max-width: 450px;
  width: 100%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 640px) {
    padding: 2rem 1.5rem;
    border-radius: 12px;
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #2563eb 0%, #2563eb 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2.5rem;
  color: white;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
`;

const Title = styled.h2`
  font-size: 1.3rem;
  color: #111827;
  margin: 0 0 0.75rem 0;
  text-align: center;
  font-weight: 700;

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

const Message = styled.p`
  font-size: 0.85rem;
  color: #6b7280;
  text-align: center;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const InfoBox = styled.div`
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 0.75rem;

  @media (max-width: 640px) {
    padding: 0.75rem;
  }
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h4`
  font-size: 0.85rem;
  color: #065f46;
  margin: 0 0 0.5rem 0;
  font-weight: 600;

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const InfoDescription = styled.p`
  font-size: 0.85rem;
  color: #047857;
  margin: 0;
  line-height: 1.5;

  @media (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const TipsBox = styled.div`
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1.2rem;

  @media (max-width: 640px) {
    padding: 0.75rem;
  }
`;

const TipsTitle = styled.h4`
  font-size: 0.85rem;
  color: #2563eb;
  margin: 0 0 0.75rem 0;
  font-weight: 600;

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const TipsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TipItem = styled.li`
  font-size: 0.85rem;
  color: #1e40af;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const CloseButton = styled.button`
  background: linear-gradient(135deg, #2563eb 0%, #2563eb 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 640px) {
    padding: 0.65rem 1.5rem;
    font-size: 0.95rem;
  }
`;
