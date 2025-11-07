import React, { useState } from "react";
import styled from "styled-components";
import KoraPayLogo from "../../../assets/kora logo.png";
import toast from "react-hot-toast";

const PaymentMethodModal = ({ open, onGoBack, onClose }) => {
  const [selected, setSelected] = useState(false);

  if (!open) return null;

  const handleRadioChange = () => {
    setSelected((prev) => !prev);
  };

  const handleChooseMethod = () => {
    if (selected) {
      toast.success("Korapay selected! Proceeding to payment...");
      onClose();
    }
  };

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>

        <Title>How would you like to pay?</Title>

        <PaymentOption onClick={handleRadioChange}>
          <Logo src={KoraPayLogo} alt="Korapay" />
          <Label>Pay with Korapay</Label>
          <RadioButton
            type="radio"
            checked={selected}
            onChange={handleRadioChange}
          />
        </PaymentOption>

        <Divider />

        <ChooseButton
          onClick={handleChooseMethod}
          disabled={!selected}
          $active={selected}
        >
          Choose method
        </ChooseButton>

        <GoBack onClick={onGoBack}>Go back</GoBack>
      </ModalContainer>
    </Overlay>
  );
};

export default PaymentMethodModal;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 40px;
  width: 400px;
  max-width: 90%;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 22px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: 600;
`;

const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  padding: 10px 0;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 28px;
  height: 28px;
`;

const Label = styled.label`
  flex-grow: 1;
  text-align: left;
  font-size: 16px;
  margin-left: 12px;
`;

const RadioButton = styled.input`
  accent-color: #2f64f9;
  width: 18px;
  height: 18px;
`;

const Divider = styled.hr`
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ddd;
`;

const ChooseButton = styled.button`
  width: 100%;
  background-color: ${({ $active }) => ($active ? "#2f64f9" : "#2f64f9")};
  color: white;
  border: none;
  padding: 14px 0;
  border-radius: 8px;
  font-weight: 600;
  cursor: ${({ $active }) => ($active ? "pointer" : "not-allowed")};
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: ${({ $active }) => ($active ? 0.9 : 0.5)};
  }
`;

const GoBack = styled.button`
  margin-top: 15px;
  background: none;
  border: none;
  color: #2f64f9;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
