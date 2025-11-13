import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "../../../../components/Ui/Button";
import safe from "../../../../assets/safeguard.svg";
import { IoIosAdd } from "react-icons/io";
import WithdrawalHistory from "./WidthdrawHistory";
import RequestWithdraw from "../../../modals/RequestWithdraw";

const FirstWithdraw = ({ data }) => {
  const [withdraw, setWithdraw] = useState(false);
  return (
    <Container>
      <TextHolder>
        <h3>Withdrawals</h3>
        <p>Request fund withdrawals to your school</p>
      </TextHolder>
      <Amount>
        <Tag>
          <h3>Available for Withdrawal</h3>
          <>
            <button
              className="btn"
              disabled={!data?.data?.walletBallance}
              onClick={() => setWithdraw(true)}
            >
              Request Withdrawal
            </button>
            {withdraw && (
              <RequestWithdraw
                datas={data}
                setWithdraw={setWithdraw}
                withdraw={withdraw}
              />
            )}
          </>
        </Tag>
        <MoneyBal>₦{data?.data?.walletBallance?.toLocaleString()}</MoneyBal>
        <Down>
          <Safe>
            <img src={safe} alt="" />
          </Safe>
          <p>Funds will be sent directly to University of Lagos</p>
        </Down>
      </Amount>
      {data?.data?.withdrawals.length > 0 ? (
        <WithdrawalHistory information={data?.data?.withdrawals} />
      ) : (
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
      )}
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

  @media (max-width: 1199px) {
    gap: 18px;
  }

  @media (max-width: 767px) {
    gap: 16px;
  }

  @media (max-width: 479px) {
    gap: 14px;
  }
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

  @media (max-width: 1199px) {
    h3 {
      font-size: 25.441px;
    }

    p {
      font-size: 16.961px;
    }
  }

  @media (max-width: 767px) {
    h3 {
      font-size: 22.441px;
    }

    p {
      font-size: 15.961px;
    }
  }

  @media (max-width: 479px) {
    h3 {
      font-size: 20.441px;
    }

    p {
      font-size: 14.961px;
    }
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

  @media (max-width: 1199px) {
    border-radius: 15.59px;
    padding: 14px;
  }

  @media (max-width: 767px) {
    border-radius: 14.59px;
    padding: 13px;
    height: 40%;
  }

  @media (max-width: 479px) {
    border-radius: 12.59px;
    padding: 12px;
    height: 35%;
  }
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

    &:disabled {
      color: blue;
      background-color: #ffffff81;
    }
  }

  h3 {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  @media (max-width: 1199px) {
    .btn {
      width: 130px;
      height: 36px;
      font-size: 13px;
    }

    h3 {
      font-size: 15px;
    }
  }

  @media (max-width: 767px) {
    .btn {
      width: 120px;
      height: 34px;
      font-size: 13px;
    }

    h3 {
      font-size: 14px;
    }
  }

  @media (max-width: 479px) {
    flex-direction: column;
    gap: 10px;

    .btn {
      width: 100%;
      height: 40px;
      font-size: 14px;
    }

    h3 {
      font-size: 14px;
      text-align: center;
    }
  }
`;

const MoneyBal = styled.div`
  color: #fff;
  font-size: 42.661px;
  font-style: normal;
  font-weight: 400;

  @media (max-width: 1199px) {
    font-size: 38.661px;
  }

  @media (max-width: 767px) {
    font-size: 34.661px;
  }

  @media (max-width: 479px) {
    font-size: 28.661px;
  }
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

  @media (max-width: 1199px) {
    p {
      font-size: 15.59px;
    }
  }

  @media (max-width: 767px) {
    gap: 8px;

    p {
      font-size: 14.59px;
    }
  }

  @media (max-width: 479px) {
    justify-content: center;
    gap: 6px;

    p {
      font-size: 12.59px;
    }
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

  @media (max-width: 767px) {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 479px) {
    width: 16px;
    height: 16px;
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

  @media (max-width: 1199px) {
    border-radius: 14.699px;
    gap: 14px;

    .create {
      width: 22%;
      height: 42px;
      font-size: 13px;
    }
  }

  @media (max-width: 767px) {
    border-radius: 13.699px;
    gap: 13px;
    height: 45%;

    .create {
      width: 25%;
      height: 40px;
      font-size: 13px;
      gap: 14px;
    }
  }

  @media (max-width: 479px) {
    border-radius: 12.699px;
    gap: 12px;
    height: 40%;
    padding: 15px;

    p {
      text-align: center;
    }

    .create {
      width: 100%;
      height: 44px;
      font-size: 14px;
      gap: 12px;
    }
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

  @media (max-width: 1199px) {
    width: 75px;
    height: 75px;
    font-size: 2.8rem;
  }

  @media (max-width: 767px) {
    width: 70px;
    height: 70px;
    font-size: 2.6rem;
  }

  @media (max-width: 479px) {
    width: 65px;
    height: 65px;
    font-size: 2.4rem;
  }
`;
