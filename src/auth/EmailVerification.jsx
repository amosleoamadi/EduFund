import React, { useState } from "react";
import styled from "styled-components";
import { LogoBar } from "../components/styles/AccountStyle";
import img from "../assets/EduFundLogo.png";
import Input from "../components/Ui/Input";
import {
  useResendOtpMutation,
  useVerifyOtpMutation,
} from "../utils/stundentauth/authapi";
import { useSelector, useDispatch } from "react-redux";
import { Spin } from "antd";
import { selectStudentEmail } from "../config/studentslices/studentauthslice";
import { setStudent } from "../config/studentslices/studentauthslice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const [otp, setOtp] = useState();
  const email = useSelector(selectStudentEmail);
  const [veryOtp, { isLoading }] = useVerifyOtpMutation();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [resendOtp] = useResendOtpMutation();

  const handleVerificationCodeChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setOtp(value);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const res = await veryOtp({ otp, email: email }).unwrap();
      console.log(res);
      dispatch(setStudent({ studentToken: res?.token }));
      toast.success(res?.message);
      nav("/login");
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message);
    }
  };

  const handleResendOtp = async () => {
    try {
      const res = await resendOtp(email).unwrap();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <MailHolder>
      <LogoBar>
        <img src={img} alt="" />
      </LogoBar>
      <h3>Verify Email Address</h3>
      <p>Enter the 6-digit code sent to your email</p>
      <Wrapper>
        <VerifyContent onSubmit={handleSumbit}>
          <InputVerify>
            <label htmlFor="verify">Verification Code</label>
            <Input
              className="input"
              placeholder="Enter 6-digit code"
              type="text"
              name="otp"
              inputMode="numeric"
              pattern="[0-9]*"
              value={otp}
              onChange={handleVerificationCodeChange}
            />
          </InputVerify>
          <p>Code sent to {email}</p>
          <p>
            Didn't receive the code?{" "}
            <span onClick={handleResendOtp}>Resend</span>
          </p>
          <button className="verify_btn" type="submit" disabled={isLoading}>
            {isLoading ? <Spin /> : "Verify code"}
          </button>
          <p className="signin">
            Already have an account? <span>Sign in</span>
          </p>
        </VerifyContent>
      </Wrapper>
    </MailHolder>
  );
};

export default EmailVerification;
const InputVerify = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    color: #0a0a0a;
  }

  .input {
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    color: #adaebc;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    border-radius: 8px;
    border: 1px solid #d1d5db;
    background: #fff;
    outline: none;
  }
`;
const MailHolder = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(269deg, #fff 4.29%, #f4f8fd 88.02%);
  padding: 35px;

  h3 {
    text-align: center;
    color: #222;
    font-size: 30px;
    margin-bottom: 10px;
  }

  p {
    color: #4b5563;
    text-align: center;
    font-family: Inter;
    font-size: 17.107px;
    font-style: normal;
    font-weight: 400;
  }
`;
const Wrapper = styled.div`
  margin-top: 25px;
  width: 35%;
  height: 55%;
  border-radius: 16px;
  border: 1px solid #f3f4f6;
  background: #fff;
  box-shadow: 0 2px 20px -3px rgba(0, 0, 0, 0.1);
  justify-self: center;
  padding: 25px;
`;
const VerifyContent = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .verify_btn {
    width: 60%;
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

  p {
    margin-top: 15px;
    color: #6a7282;
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;

    span {
      color: #155dfc;
      font-family: "Inter", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      cursor: pointer;
    }
  }

  .signin {
    color: #4b5563;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;

    span {
      color: #2563eb;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;
