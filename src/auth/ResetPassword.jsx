import React from "react";
import styled from "styled-components";
import { LogoBar } from "../components/styles/AccountStyle";
import img from "../assets/EduFundLogo.png";
import Input from "../components/Ui/Input";
import Button from "../components/Ui/Button";

const ResetPassword = () => {
  return (
    <Container>
      <LogoBar>
        <img src={img} alt="" />
      </LogoBar>
      <h3>Reset your password</h3>
      <p>Reset your password below</p>
      <nav>Go back to Sign in</nav>
      <Holder>
        <h4>New Password</h4>
        <Input
          className="pass"
          placeholder="Enter Password"
          type="text"
          name="password"
        />
        <Input
          className="pass"
          placeholder="Re-enter Password"
          type="text"
          name="con_password"
        />
      </Holder>
      <Button className="con_pass" text="Confirm New Password" />
    </Container>
  );
};

export default ResetPassword;
const Holder = styled.div`
  width: 35%;
  height: 35%;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 2px 20px -3px rgba(0, 0, 0, 0.1);
  align-self: center;
  margin-top: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  h4 {
    color: #2563eb;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    margin-bottom: 18px;
  }

  .pass {
    width: 100%;
    height: 50px;
    border: 1px solid #e5e7eb;
    background: rgba(0, 0, 0, 0);
    border-radius: 8px;
    margin-bottom: 20px;
    padding-left: 10px;
    outline: none;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(269deg, #fff 4.29%, #f4f8fd 88.02%);
  padding: 35px;
  display: flex;
  flex-direction: column;

  .con_pass {
    width: 20%;
    height: 48px;
    border-radius: 12px;
    border: 0 solid #e5e7eb;
    background: #2563eb;
    align-self: center;
    cursor: pointer;
    color: #fff;
  }

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
    margin-top: 10px;
    cursor: pointer;
  }
`;
