import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes, FaExclamationCircle } from "react-icons/fa";

const RequestWithdraw = ({ availableBalance, onClose }) => {
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ withdrawalAmount, purpose, notes });
  };
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>

        <Header>
          <Title>Request Withdrawal</Title>
          <Subtitle>
            Submit a withdrawal request to receive funds directly to your school
          </Subtitle>
        </Header>

        <BalanceCard>
          <BalanceText>
            <BalanceLabel>Available Balance</BalanceLabel>
            <BalanceAmount>200</BalanceAmount>
          </BalanceText>
          <NairaIconContainer>₦</NairaIconContainer>
        </BalanceCard>

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="withdrawalAmount">Withdrawal Amount (₦) *</Label>
            <Input
              id="withdrawalAmount"
              type="number"
              placeholder={`Maximum: ₦500`}
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(e.target.value)}
              max={availableBalance}
              required
            />
            <HintText>Maximum: ₦800</HintText>
          </FormGroup>

          <FormGroup style={{ marginTop: "20px" }}>
            <Label htmlFor="purposeOfWithdrawal">Purpose of Withdrawal *</Label>
            <Input
              as="textarea"
              id="purposeOfWithdrawal"
              placeholder="e.g., School fees, Project funding"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup style={{ marginTop: "20px" }}>
            <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
            <TextArea
              id="additionalNotes"
              placeholder="Add any additional information..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </FormGroup>

          <NoticeBox style={{ marginTop: "25px" }}>
            <NoticeIcon />
            <NoticeContent>
              <NoticeTitle>Important Notice</NoticeTitle>
              <NoticeList>
                <li>
                  Funds will be sent directly to your school's bursary
                  department
                </li>
                <li>Processing typically takes 3-5 business days</li>
                <li>You'll receive email confirmation once processed</li>
                <li>Withdrawals cannot be cancelled once submitted</li>
              </NoticeList>
            </NoticeContent>
          </NoticeBox>

          <ButtonContainer>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
            <SubmitButton
              type="submit"
              disabled={!withdrawalAmount || !purpose}
            >
              Submit Request
            </SubmitButton>
          </ButtonContainer>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default RequestWithdraw;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  height: 100vh;
  z-index: 1000;
  overflow-y: auto;
  padding: 15px;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  width: 45%;
  height: 100%;
  min-height: max-content;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
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
  margin-bottom: 5px;
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

const BalanceCard = styled.div`
  background-color: #e8f9ed;
  border-radius: 8px;
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1a473a;
`;

const BalanceText = styled.div`
  display: flex;
  flex-direction: column;
`;

const BalanceLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const BalanceAmount = styled.span`
  font-size: 22px;
  font-weight: 700;
`;

const NairaIconContainer = styled.div`
  background-color: #c7eed5;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #1a473a;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  color: #333;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  color: #333;
  background-color: white;
  box-sizing: border-box;
  resize: none;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  color: #333;
  background-color: white;
  box-sizing: border-box;
  min-height: 80px;
  resize: none;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

const HintText = styled.p`
  font-size: 12px;
  color: #777;
  margin-top: -4px;
`;

const NoticeBox = styled.div`
  background-color: #fff3cd;
  border-radius: 8px;
  padding: 15px 20px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #664d03;
  border: 1px solid #ffeeba;
`;

const NoticeIcon = styled(FaExclamationCircle)`
  font-size: 20px;
  color: #ffc107;
  margin-top: 2px;
`;

const NoticeContent = styled.div`
  flex-grow: 1;
`;

const NoticeTitle = styled.h4`
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 8px 0;
`;

const NoticeList = styled.ul`
  margin: 0;
  padding-left: 20px;
  font-size: 13px;
  list-style-type: disc;

  li {
    margin-bottom: 5px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 10px;
`;

const CancelButton = styled.button`
  padding: 12px 25px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
    border-color: #ccc;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #a8d1ff;
    cursor: not-allowed;
  }
`;
