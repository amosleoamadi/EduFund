import React, { useContext } from "react";
import styled from "styled-components";
import { FaTimes, FaRegClock, FaCheckCircle } from "react-icons/fa";
import { AppContext } from "../../context/AppContext";

const WithdrawalReq = ({ amount, onClose }) => {
  const formattedAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
  const { setSecondWith } = useContext(AppContext);
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setSecondWith(false)}>
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

        <DoneButton onClick={() => setSecondWith(false)}>Done</DoneButton>
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

  @media (max-width: 1199px) {
    padding: 26px;
    max-width: 480px;
  }

  @media (max-width: 767px) {
    padding: 22px;
    max-width: 420px;
    gap: 18px;
  }

  @media (max-width: 479px) {
    padding: 18px;
    width: 95%;
    max-width: 350px;
    border-radius: 10px;
    gap: 16px;
  }
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

  @media (max-width: 767px) {
    top: 12px;
    right: 12px;
    font-size: 22px;
  }

  @media (max-width: 479px) {
    top: 10px;
    right: 10px;
    font-size: 20px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 479px) {
    margin-bottom: 8px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0;

  @media (max-width: 1199px) {
    font-size: 22px;
  }

  @media (max-width: 767px) {
    font-size: 20px;
  }

  @media (max-width: 479px) {
    font-size: 18px;
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0 0 0;

  @media (max-width: 767px) {
    font-size: 13px;
    margin: 4px 0 0 0;
  }

  @media (max-width: 479px) {
    font-size: 12px;
    margin: 3px 0 0 0;
  }
`;

const DetailsSection = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 767px) {
    padding: 13px 16px;
    gap: 13px;
  }

  @media (max-width: 479px) {
    padding: 12px 14px;
    gap: 12px;
    border-radius: 6px;
  }
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

  @media (max-width: 479px) {
    padding-bottom: 8px;
  }
`;

const DetailLabel = styled.span`
  font-size: 15px;
  color: #555;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (max-width: 479px) {
    font-size: 13px;
  }
`;

const DetailValue = styled.span`
  font-size: 15px;
  color: #333;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (max-width: 479px) {
    font-size: 13px;
  }
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

  @media (max-width: 767px) {
    font-size: 12px;
    padding: 4px 8px;
  }

  @media (max-width: 479px) {
    font-size: 11px;
    padding: 3px 6px;
  }
`;

const NextStepsBox = styled.div`
  background-color: #e6f0ff;
  border-radius: 8px;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  color: #0056b3;

  @media (max-width: 767px) {
    padding: 16px 18px;
    border-radius: 7px;
  }

  @media (max-width: 479px) {
    padding: 14px 16px;
    border-radius: 6px;
  }
`;

const NextStepsTitle = styled.h4`
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 10px 0;

  @media (max-width: 767px) {
    font-size: 14px;
    margin-bottom: 8px;
  }

  @media (max-width: 479px) {
    font-size: 13px;
    margin-bottom: 6px;
  }
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

  @media (max-width: 767px) {
    font-size: 13px;

    li {
      margin-bottom: 6px;
    }
  }

  @media (max-width: 479px) {
    font-size: 12px;

    li {
      margin-bottom: 5px;
    }
  }
`;

const CheckIcon = styled(FaCheckCircle)`
  color: #28a745;
  margin-right: 8px;
  font-size: 18px;
  flex-shrink: 0;

  @media (max-width: 767px) {
    font-size: 16px;
    margin-right: 6px;
  }

  @media (max-width: 479px) {
    font-size: 14px;
    margin-right: 5px;
  }
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

  @media (max-width: 767px) {
    padding: 11px 20px;
    font-size: 15px;
    margin-top: 8px;
  }

  @media (max-width: 479px) {
    padding: 10px 18px;
    font-size: 14px;
    border-radius: 6px;
    margin-top: 6px;
  }
`;
