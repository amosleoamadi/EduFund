import React, { useState } from "react";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";

const DonationModal = ({ open, onClose, campaign }) => {
  if (!open) return null;

  const [amount, setAmount] = useState("");

  return (
    <Overlay>
      <Modal>
        <Header>
          <h2>Make a Donation</h2>
          <CloseBtn onClick={onClose}>×</CloseBtn>
        </Header>

        <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
          Support {campaign.name}'s education journey
        </p>

        <Steps>
          <span className="active">1</span>
          <div className="line" />
          <span>2</span>
          <div className="line" />
          <span>3</span>
          <div className="line" />
          <span>4</span>
        </Steps>

        <StudentInfo>
          <img src={campaign.avatar} alt={campaign.name} />
          <div>
            <h4>{campaign.name}</h4>
            <p>
              {/* {campaign.course} - {campaign.school.split(" ")[0].toUpperCase()} */}
              {campaign.course} - {campaign.school}
            </p>
          </div>
        </StudentInfo>

        <Form>
          <label>Donation Amount (₦)</label>
          <input
            type="number"
            placeholder="100000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <AmountButtons>
            <button onClick={() => setAmount(50000)}>₦50,000</button>
            <button onClick={() => setAmount(100000)}>₦100,000</button>
            <button onClick={() => setAmount(200000)}>₦200,000</button>
          </AmountButtons>

          <label>Message (Optional)</label>
          <textarea placeholder="Add an encouraging message..."></textarea>

          <Buttons>
            <Cancel onClick={onClose}>Cancel</Cancel>
            <Donate>
              <FaRegHeart /> Donate
            </Donate>
          </Buttons>
        </Form>
      </Modal>
    </Overlay>
  );
};

export default DonationModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Modal = styled.div`
  background: #fff;
  border-radius: 12px;
  width: 400px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.2rem;
    margin: 0;
  }
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Steps = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin: 0.8rem 0;
  width: 70%;
  justify-self: center;

  span {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #e2e8f0;
    color: #64748b;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
  }

  .active {
    background: #2563eb;
    border-color: #2563eb;
    color: #fff;
  }

  .line {
    flex: 1;
    height: 2px;
    background: #e2e8f0;
  }
`;

const StudentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f8fafc;
  padding: 0.8rem;
  border-radius: 8px;
  margin-bottom: 1rem;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  h4 {
    margin: 0;
    font-size: 1rem;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    color: #64748b;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  label {
    font-size: 0.85rem;
    color: #334155;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.6rem;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    font-size: 0.9rem;
  }

  textarea {
    resize: none;
    height: 60px;
  }
`;

const AmountButtons = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    flex: 1;
    background: #f1f5f9;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    padding: 0.4rem;
    cursor: pointer;

    &:hover {
      background: #e0e7ff;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
`;

const Cancel = styled.button`
  border: 1px solid #e5e7eb;
  background: #fff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  width: 50%;
`;

const Donate = styled.button`
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  width: 50%;

  &:hover {
    background: #1d4ed8;
  }
`;
