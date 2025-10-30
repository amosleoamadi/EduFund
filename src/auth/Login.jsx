import React from "react";
import {
  LogContainer,
  LogForm,
  LogHolder,
  RemContent,
} from "../components/styles/LoginStyle";
import { LogoBar } from "../components/styles/AccountStyle";
import img from "../assets/EduFundLogo.png";
import { LabelInput } from "../components/styles/RegisterStyle";
import Input from "../components/Ui/Input";
import Button from "../components/Ui/Button";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  return (
    <LogContainer>
      <LogoBar onClick={() => nav(-1)}>
        <img src={img} alt="" />
      </LogoBar>
      <LogHolder>
        <h3>Welcome back</h3>
        <p>Sign in to your EduFund account</p>
        <LogForm>
          <LabelInput>
            <label htmlFor="email">Email or Phone</label>
            <Input
              className="input_place"
              placeholder="Enter your Email"
              type="text"
              name="email"
            />
          </LabelInput>
          <LabelInput>
            <label htmlFor="password">Password</label>
            <Input
              className="input_place"
              placeholder="Enter your password"
              type="text"
              name="password"
            />
          </LabelInput>
          <RemContent>
            <div className="rem">
              <Input type="checkbox" />
              Remember me
            </div>
            <nav>Forgot Password?</nav>
          </RemContent>
          <Button className="signup_btn" text="Sign in" />
          <p>
            Don't have an account?{" "}
            <NavLink to={"/register"}>
              <span>Create an Account</span>
            </NavLink>
          </p>
        </LogForm>
      </LogHolder>
    </LogContainer>
  );
};

export default Login;
