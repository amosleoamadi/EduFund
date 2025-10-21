import React from "react";
import styled from "styled-components";
import { LogoBar } from "../components/styles/AccountStyle";
import img from "../assets/EduFundLogo.svg";

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
        <h4></h4>
      </Holder>
    </Container>
  );
};

export default ResetPassword;
const Holder = styled.div`
  width: 35%;
  height: 45%;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 2px 20px -3px rgba(0, 0, 0, 0.1);
  justify-self: center;
  margin-top: 15px;
  padding: 15px;
`;
const Container = styled.div`
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
