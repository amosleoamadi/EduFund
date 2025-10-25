import React from "react";
import styled from "styled-components";
import { LogoBar } from "../components/styles/AccountStyle";
import img from "../assets/EduFundLogo.png";
import Input from "../components/Ui/Input";
import { LabelInput } from "../components/styles/RegisterStyle";
import Button from "../components/Ui/Button";

const ResetEmailCode = () => {
  return (
    <Content>
      <LogoBar>
        <img src={img} alt="" />
      </LogoBar>
      <h3>Reset password</h3>
      <p>Enter your email to receive a verification code</p>
      <nav>Go back to Sign in</nav>
      <Holder>
        <h4>Profile Email</h4>
        <LabelInput>
          <label htmlFor="email">Email Address</label>
          <Input
            className="input_place"
            placeholder="john@example.com"
            type="text"
            name="email"
          />
        </LabelInput>
      </Holder>
      <Button className="verify_btn" text="Send Verification Code" />
    </Content>
  );
};

export default ResetEmailCode;
const Content = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(269deg, #fff 0.79%, #f4f8fd 98.01%);
  padding: 35px;
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
    color: #222;
    font-size: 30px;
    margin-bottom: 10px;
  }

  p {
    color: #4b5563;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
  }

  nav {
    color: #2563eb;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 13px;
    cursor: pointer;
  }

  .verify_btn {
    width: 20%;
    height: 48px;
    border-radius: 12px;
    border: 0 solid #e5e7eb;
    background: #2563eb;
    align-self: center;
    margin-top: 30px;
    cursor: pointer;
    font-size: 17px;
    color: #fff;
  }
`;

const Holder = styled.div`
  width: 30%;
  height: max-content;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 2px 20px -3px rgba(0, 0, 0, 0.1);
  align-self: center;
  margin-top: 25px;
  padding: 20px;

  h4 {
    color: #2563eb;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    margin-bottom: 18px;
  }
`;
