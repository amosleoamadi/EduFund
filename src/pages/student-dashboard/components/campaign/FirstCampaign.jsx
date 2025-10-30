import React from "react";
import styled from "styled-components";
import target from "../../../../assets/target.svg";
import Button from "../../../../components/Ui/Button";
import { IoIosAdd } from "react-icons/io";

const FirstCampaign = () => {
  return (
    <Content>
      <h3>Campaign Management</h3>
      <Wrapper>
        <Card>
          <img src={target} alt="" />
        </Card>
        <h3>Create Your Campaign</h3>
        <p>
          Start your journey to completing your education. Share your story and
          connect with donors who believe in your potential.
        </p>
        <Button
          className="create"
          icon={<IoIosAdd style={{ fontSize: "20px" }} />}
          text="Create Campaign"
        />
      </Wrapper>
    </Content>
  );
};

export default FirstCampaign;
const Content = styled.main`
  width: 100%;
  height: 100%;
  min-height: max-content;

  h3 {
    color: #101828;
    font-size: 28.427px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 30px;
  }
`;

const Wrapper = styled.section`
  width: 100%;
  height: 60%;
  min-height: max-content;
  border-radius: 15.7px;
  border: 1.121px solid #e5e7eb;
  background: rgb(255, 255, 255);
  box-shadow: 0 11.214px 16.821px -3.364px rgba(0, 0, 0, 0.1),
    0 4.486px 6.728px -4.486px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  h3 {
    color: #101828;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    margin: 0;
  }

  p {
    color: #4a5565;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    width: 45%;
  }

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

  img {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }
`;
