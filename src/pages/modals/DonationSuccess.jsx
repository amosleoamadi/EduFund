import React from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

const GuestDonorModal = ({
  isOpen,
  onClose,
  donationAmount,
  onJoinApp,
  onContinueAsGuest,
}) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <SuccessIcon>
          <FaCheckCircle />
        </SuccessIcon>

        {donationAmount ? (
          <>
            <Title>Thank You for Your Donation</Title>
            <Description>
              Your generous donation of ₦{donationAmount.toLocaleString()} has
              been successfully processed and will directly support this
              student's education.
            </Description>
          </>
        ) : (
          <>
            <Title>Support This Student</Title>
            <Description>
              Make a difference in this student's educational journey. Your
              donation will help cover tuition fees and educational expenses.
            </Description>
          </>
        )}

        <InviteSection>
          <InviteTitle>Join Our Community</InviteTitle>
          <InviteText>
            Become part of our platform to track your donations, and make a
            greater impact in students' lives.
          </InviteText>
        </InviteSection>

        <ButtonGroup>
          <JoinButton onClick={onJoinApp}>Join Our Platform</JoinButton>
          <ContinueButton onClick={onContinueAsGuest}>
            {donationAmount ? "Continue as Guest Donor" : "Donate as Guest"}
          </ContinueButton>
        </ButtonGroup>

        <FeatureList>
          <Feature>
            <FeatureBullet>•</FeatureBullet>
            <span>Track all your donations in one place</span>
          </Feature>
          <Feature>
            <FeatureBullet>•</FeatureBullet>
            <span>Connect with verified students and causes</span>
          </Feature>
        </FeatureList>
      </ModalContainer>
    </Overlay>
  );
};

export default GuestDonorModal;

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
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  text-align: center;
  animation: slideUp 0.4s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2.5rem;
  color: white;
  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
`;

const Title = styled.h2`
  color: #101828;
  font-size: 1.75rem;
  margin: 0 0 1rem 0;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const InviteSection = styled.div`
  background: #f0f9ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const InviteTitle = styled.h3`
  color: #1e40af;
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
`;

const InviteText = styled.p`
  color: #1e40af;
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const JoinButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    padding: 0.875rem;
    font-size: 0.95rem;
  }
`;

const ContinueButton = styled.button`
  width: 100%;
  background: white;
  color: #2563eb;
  border: 2px solid #2563eb;
  border-radius: 8px;
  padding: 0.875rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #f0f9ff;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    font-size: 0.95rem;
  }
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: left;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #4b5563;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    gap: 0.6rem;
  }
`;

const FeatureBullet = styled.span`
  color: #10b981;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1;
`;
