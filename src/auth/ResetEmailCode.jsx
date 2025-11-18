import React, { useState } from "react";
import styled from "styled-components";
import { LogoBar } from "../components/styles/AccountStyle";
import img from "../assets/EduFundLogo.png";
import Input from "../components/Ui/Input";
import { LabelInput } from "../components/styles/RegisterStyle";
import Button from "../components/Ui/Button";
import { useForgetPasswordMutation } from "../utils/stundentauth/authapi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ResetEmailCode = () => {
  const [resendMail, setResendMail] = useState("");
  const [resendEmail, { isLoading }] = useForgetPasswordMutation();
  const nav = useNavigate();

  const handleResend = async (e) => {
    e.preventDefault();
    try {
      const response = await resendEmail(resendMail).unwrap();
      localStorage.setItem("userEmail", JSON.stringify(response?.data?.email));
      toast.success(response?.message);
      nav("/reverify");
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };
  return (
    <Content>
      <LogoBar onClick={() => nav(-1)}>
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
            name="resendMail"
            value={resendMail}
            onChange={(e) => setResendMail(e.target.value)}
          />
        </LabelInput>
      </Holder>
      <Button
        className="verify_btn"
        text={isLoading ? "Sending..." : "Send Verification Code"}
        onClick={handleResend}
        disabled={isLoading}
      />
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

  @media (max-width: 768px) {
    background: #fff;
    padding: 20px;

    h3 {
      font-size: 24px;
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
    }

    nav {
      font-size: 12px;
    }

    .verify_btn {
      width: 60%;
      height: 44px;
      font-size: 15px;
    }
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    padding: 30px;

    h3 {
      font-size: 28px;
    }

    p {
      font-size: 14px;
    }

    .verify_btn {
      width: 30%;
      height: 46px;
      font-size: 16px;
    }
  }
`;

const Holder = styled.form`
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

  @media (max-width: 768px) {
    width: 100%;
    background: transparent;
    box-shadow: none;
    padding: 0;
    margin-top: 20px;

    h4 {
      font-size: 14px;
      margin-bottom: 16px;
    }
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    width: 50%;
    padding: 18px;

    h4 {
      font-size: 14px;
    }
  }
`;
