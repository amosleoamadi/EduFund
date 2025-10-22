import React from "react";
import {
  InpuLabel,
  LabelInput,
  RegContent,
  RegForm,
  ReqContainer,
  PasswordInput,
} from "../components/styles/RegisterStyle";
import { LogoBar } from "../components/styles/AccountStyle";
import img from "../assets/EduFundLogo.svg";
import Input from "../components/Ui/Input";
import cancel from "../assets/cancel.svg";
import Button from "../components/Ui/Button";
import safe from "../assets/iconamoon_shield-yes-light.svg";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <ReqContainer>
      <LogoBar>
        <img src={img} alt="Logo" />
      </LogoBar>
      <RegContent>
        <h2>Create your account</h2>
        <RegForm>
          <InpuLabel>
            <div className="label_input">
              <label htmlFor="firstName">First name</label>
              <Input
                className="input_place"
                placeholder="Alex"
                type="text"
                name="firstName"
              />
            </div>
            <div className="label_input">
              <label htmlFor="firstName">Last name</label>
              <Input
                className="input_place"
                placeholder="Lizzy"
                type="text"
                name="firstName"
              />
            </div>
          </InpuLabel>
          <LabelInput>
            <label htmlFor="email">Email Address</label>
            <Input
              className="input_place"
              placeholder="john@example.com"
              type="text"
              name="email"
            />
          </LabelInput>
          <PasswordInput>
            <label htmlFor="password">Password</label>
            <Input
              className="input_place"
              placeholder="Enter Password"
              type="text"
              name="password"
            />
            <div className="text">
              <p>Password Strength</p>
              <p>Weak</p>
            </div>
            <div className="boxes">
              <div className="box1"></div>
              <div className="box1"></div>
              <div className="box1"></div>
              <div className="box1"></div>
              <div className="box1"></div>
            </div>
            <div className="description">
              <nav>
                <span>
                  <img src={cancel} alt="" />
                </span>
                At least 8 characters
              </nav>
              <nav>
                <span>
                  <img src={cancel} alt="" />
                </span>
                One uppercase letter
              </nav>
              <nav>
                <span>
                  <img src={cancel} alt="" />
                </span>
                One lowercase letter
              </nav>
              <nav>
                <span>
                  <img src={cancel} alt="" />
                </span>
                One number
              </nav>
              <nav>
                <span>
                  <img src={cancel} alt="" />
                </span>
                One special character
              </nav>
            </div>
          </PasswordInput>
          <p className="terms">
            By clicking the Sign Up button below, you agree to the EduFund{" "}
            <NavLink to={"/terms"}>
              <span>Terms of Service</span>
            </NavLink>{" "}
            and acknowledge the{" "}
            <NavLink to={"/policy"}>
              <span>Privacy Policy</span>
            </NavLink>
          </p>
          <Button className="signup_btn" text="Sign up" />
          <p className="signin">
            Already have an account? <span>Sign in</span>
          </p>
        </RegForm>
      </RegContent>
      <p className="foot">
        <span>
          <img src={safe} alt="" />
        </span>
        Your information is secure and encrypted
      </p>
    </ReqContainer>
  );
};

export default Register;
