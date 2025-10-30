import React from "react";
import styled from "styled-components";
import { FaTimes, FaRegClock, FaCheckCircle } from "react-icons/fa";

const WithdrawalReq = ({ amount, onClose }) => {
  const formattedAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>

        <Header>
          <Title>Withdrawal Requested!</Title>
          <Subtitle>
            Your withdrawal request has been submitted successfully.
          </Subtitle>
        </Header>

        <DetailsSection>
          <DetailRow>
            <DetailLabel>Amount</DetailLabel>
            <DetailValue>
              <NairaSymbol>₦</NairaSymbol>
              {amount}
            </DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>Status</DetailLabel>
            <DetailValue>
              <StatusPill>
                <FaRegClock /> Processing
              </StatusPill>
            </DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>Processing Time</DetailLabel>
            <DetailValue>3-5 business days</DetailValue>
          </DetailRow>
        </DetailsSection>

        <NextStepsBox>
          <NextStepsTitle>What happens next?</NextStepsTitle>
          <NextStepsList>
            <li>
              <CheckIcon /> Admin team will review your request
            </li>
            <li>
              <CheckIcon /> Funds will be sent to your school's bursary
            </li>
            <li>
              <CheckIcon /> You'll receive email confirmation
            </li>
            <li>
              <CheckIcon /> Track status in "Withdrawals" tab
            </li>
          </NextStepsList>
        </NextStepsBox>

        <DoneButton onClick={onClose}>Done</DoneButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default WithdrawalReq;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #000;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0 0 0;
`;

const DetailsSection = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const DetailLabel = styled.span`
  font-size: 15px;
  color: #555;
  font-weight: 500;
`;

const DetailValue = styled.span`
  font-size: 15px;
  color: #333;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const NairaSymbol = styled.span`
  font-weight: bold;
`;

const StatusPill = styled.span`
  background-color: #fffbe6;
  color: #cc9900;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const NextStepsBox = styled.div`
  background-color: #e6f0ff;
  border-radius: 8px;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  color: #0056b3;
`;

const NextStepsTitle = styled.h4`
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 10px 0;
`;

const NextStepsList = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
  font-size: 14px;

  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const CheckIcon = styled(FaCheckCircle)`
  color: #28a745;
  margin-right: 8px;
  font-size: 18px;
  flex-shrink: 0;
`;

const DoneButton = styled.button`
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;
