import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FaTimes, FaExclamationCircle } from "react-icons/fa";
import { AppContext } from "../../context/AppContext";

const RequestWithdraw = () => {
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [notes, setNotes] = useState("");
  const { setWithdraw, setSecondWith } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ withdrawalAmount, purpose, notes });
    setWithdraw(false);
    setTimeout(() => {
      setSecondWith(true);
    }, 200);
  };
  return (
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setWithdraw(false)}>
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
            <CancelButton type="button" onClick={() => setWithdraw(false)}>
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
  align-items: flex-start;
  height: 100vh;
  z-index: 1000;
  overflow-y: auto;
  padding: 20px;

  @media (max-width: 1024px) {
    padding: 16px;
  }

  @media (max-width: 768px) {
    padding: 12px;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 8px;
    align-items: flex-end;
  }
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  width: 45%;
  min-height: max-content;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 1200px) {
    width: 55%;
  }

  @media (max-width: 1024px) {
    width: 65%;
    padding: 25px;
  }

  @media (max-width: 768px) {
    width: 80%;
    padding: 20px;
    gap: 16px;
    max-height: 85vh;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 16px;
    gap: 12px;
    border-radius: 12px 12px 0 0;
    max-height: 90vh;
  }

  @media (max-width: 320px) {
    padding: 12px;
    gap: 10px;
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
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    color: #000;
    background-color: #f5f5f5;
  }

  @media (max-width: 768px) {
    top: 12px;
    right: 12px;
    font-size: 22px;
  }

  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    font-size: 20px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Header = styled.div`
  margin-bottom: 5px;

  @media (max-width: 480px) {
    margin-bottom: 0;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0 0 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin: 3px 0 0 0;
  }
`;

const BalanceCard = styled.div`
  background-color: #e8f9ed;
  border-radius: 8px;
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1a473a;

  @media (max-width: 768px) {
    padding: 16px 18px;
  }

  @media (max-width: 480px) {
    padding: 14px 16px;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`;

const BalanceText = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const BalanceLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const BalanceAmount = styled.span`
  font-size: 22px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
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

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  color: #333;
  display: block;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
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

  @media (max-width: 768px) {
    padding: 11px 14px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 13px;
    min-height: 44px;
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

  @media (max-width: 768px) {
    padding: 11px 14px;
    font-size: 14px;
    min-height: 70px;
  }

  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 13px;
    min-height: 60px;
  }
`;

const HintText = styled.p`
  font-size: 12px;
  color: #777;
  margin-top: -4px;

  @media (max-width: 480px) {
    font-size: 11px;
    margin-top: -2px;
  }
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

  @media (max-width: 768px) {
    padding: 14px 18px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    gap: 8px;
    flex-direction: column;
  }
`;

const NoticeIcon = styled(FaExclamationCircle)`
  font-size: 20px;
  color: #ffc107;
  margin-top: 2px;

  @media (max-width: 480px) {
    font-size: 18px;
    margin-top: 0;
  }
`;

const NoticeContent = styled.div`
  flex-grow: 1;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const NoticeTitle = styled.h4`
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 8px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    margin: 0 0 6px 0;
  }
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

  @media (max-width: 768px) {
    font-size: 12px;
    padding-left: 18px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    padding-left: 16px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 10px;

  @media (max-width: 768px) {
    gap: 12px;
    margin-top: 8px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-top: 6px;
    flex-direction: column;
  }
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

  @media (max-width: 768px) {
    padding: 11px 22px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 14px 20px;
    font-size: 16px;
    width: 100%;
    min-height: 48px;
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

  @media (max-width: 768px) {
    padding: 11px 22px;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    padding: 14px 20px;
    font-size: 16px;
    width: 100%;
    min-height: 48px;
    order: -1;
  }
`;
