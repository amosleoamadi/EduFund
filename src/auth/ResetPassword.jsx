import React, { useState } from "react";
import styled from "styled-components";
import { LogoBar } from "../components/styles/AccountStyle";
import img from "../assets/EduFundLogo.png";
import Input from "../components/Ui/Input";
import Button from "../components/Ui/Button";
import toast from "react-hot-toast";
import { useResetPasswordMutation } from "../utils/stundentauth/authapi";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [userPassword, setUserPassword] = useState({
    password: "",
    conPass: "",
  });

  const nav = useNavigate();
  const email = JSON.parse(localStorage.getItem("userEmail"));
  const [newPassword, { isLoading }] = useResetPasswordMutation();

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUserPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const conditions = {
    length: userPassword.password.length >= 8,
    uppercase: /[A-Z]/.test(userPassword.password),
    lowercase: /[a-z]/.test(userPassword.password),
    number: /\d/.test(userPassword.password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(userPassword.password),
  };

  const passedCount = Object.values(conditions).filter(Boolean).length;
  const allPassed = passedCount === 5;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password } = userPassword;
    if (!(userPassword.password || userPassword.conPass)) {
      toast.error("Input field");
    } else if (!allPassed) {
      toast.error(
        "Password must include at least one uppercase, lowercase, number, special character and 8 character long"
      );
    } else if (!(userPassword.password === userPassword.conPass)) {
      toast.error("Password does not match");
    } else {
      try {
        const res = await newPassword({ password, email: email }).unwrap();
        toast.success(res?.message);
        localStorage.removeItem("userEmail");
        nav("/login");
      } catch (error) {
        toast.error(error?.data?.message);
      }
    }
  };

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
          value={userPassword.password}
          onChange={handleOnchange}
        />
        <Input
          className="pass"
          placeholder="Re-enter Password"
          type="text"
          name="conPass"
          value={userPassword.conPass}
          onChange={handleOnchange}
        />
      </Holder>
      <Button
        className="con_pass"
        text={isLoading ? <Spin /> : "Confirm New Password"}
        onClick={handleSubmit}
      />
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

  @media (max-width: 1023px) and (min-width: 769px) {
    width: 50%;
    height: auto;
    padding: 20px;
    margin-top: 20px;

    h4 {
      font-size: 14px;
      margin-bottom: 15px;
    }

    .pass {
      height: 45px;
      margin-bottom: 18px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    background: transparent;
    box-shadow: none;
    border-radius: 0;
    padding: 15px 0;
    margin-top: 10px;
    margin-bottom: 20px;

    h4 {
      font-size: 13px;
      margin-bottom: 12px;
    }

    .pass {
      height: 42px;
      margin-bottom: 15px;
      padding-left: 8px;
    }
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

  @media (max-width: 1023px) and (min-width: 769px) {
    padding: 25px;

    .con_pass {
      width: 45%;
      height: 44px;
    }

    h3 {
      font-size: 26px;
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    height: 100%;
    background: #ffffff;
    padding: 20px;

    .con_pass {
      width: 70%;
      height: 42px;
      font-size: 14px;
    }

    h3 {
      font-size: 22px;
      margin-bottom: 6px;
    }

    p {
      font-size: 13px;
    }

    nav {
      font-size: 12px;
      margin-top: 8px;
    }
  }
`;
