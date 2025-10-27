import React from "react";
import styled from "styled-components";
import Button from "../../../../components/Ui/Button";
import safe from "../../../../assets/safeguard.svg";
import { IoIosAdd } from "react-icons/io";

const FirstWithdraw = () => {
  return (
    <Container>
      <TextHolder>
        <h3>Withdrawals</h3>
        <p>Request fund withdrawals to your school</p>
      </TextHolder>
      <Amount>
        <Tag>
          <h3>Available for Withdrawal</h3>
          <Button className="btn" text="Request Withdrawal" disabled />
        </Tag>
        <MoneyBal>₦0</MoneyBal>
        <Down>
          <Safe>
            <img src={safe} alt="" />
          </Safe>
          <p>Funds will be sent directly to University of Lagos</p>
        </Down>
      </Amount>
      <Wrapper>
        <Card>₦</Card>
        <h4>No withdrawal history</h4>
        <p>Start fundraising to request withdrawals for your tuition fees</p>
        <Button
          className="create"
          icon={<IoIosAdd style={{ fontSize: "20px" }} />}
          text="Create Campaign"
        />
      </Wrapper>
    </Container>
  );
};

export default FirstWithdraw;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: max-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TextHolder = styled.div`
  h3 {
    color: #101828;
    font-size: 28.441px;
    font-style: normal;
    font-weight: 400;
  }

  p {
    color: #4a5565;
    font-size: 18.961px;
    font-style: normal;
    font-weight: 400;
  }
`;
const Amount = styled.div`
  width: 100%;
  height: 45%;
  border-radius: 16.59px;
  border: 1.185px solid rgba(0, 0, 0, 0.1);
  background: var(--primary-base, #2563eb);
  box-shadow: 0 23.701px 29.626px -5.925px rgba(0, 0, 0, 0.1),
    0 9.48px 11.85px -7.11px rgba(0, 0, 0, 0.1);
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Tag = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .btn {
    width: 140px;
    height: 38px;
    border-radius: 8px;
    background: #fff;
    cursor: pointer;
    border: none;
    font-size: 14px;
  }

  h3 {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`;
const MoneyBal = styled.div`
  color: #fff;
  font-size: 42.661px;
  font-style: normal;
  font-weight: 400;
`;
const Down = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    color: #fff;
    font-size: 16.59px;
    font-style: normal;
    font-weight: 400;
  }
`;
const Safe = styled.div`
  width: 20px;
  height: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 15.699px;
  border: 1.121px solid #e5e7eb;
  background: rgb(255, 255, 255);
  box-shadow: 0 11.214px 16.82px -3.364px rgba(0, 0, 0, 0.1),
    0 4.485px 6.728px -4.485px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  .create {
    width: 20%;
    height: 45px;
    border-radius: 9.087px;
    background: #2563eb;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    cursor: pointer;
  }
`;
const Card = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(59, 53, 53, 0.3);
  font-size: 3rem;
`;
