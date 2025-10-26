import React, { useState } from "react";
import {
  DonorContainer,
  DonorContent,
  DonorForm,
  ToggleButton,
  ToggleContainer,
} from "../components/styles/DonorSignupStyle";
import { LogoBar } from "../components/styles/AccountStyle";
import img from "../assets/EduFundLogo.png";
import {
  InpuLabel,
  LabelInput,
  PasswordInput,
} from "../components/styles/RegisterStyle";
import Input from "../components/Ui/Input";
import cancel from "../assets/cancel.svg";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/Ui/Button";
import safe from "../assets/iconamoon_shield-yes-light.svg";

const DonorSignUp = () => {
  const [active, setActive] = useState("individual");
  const nav = useNavigate();
  return (
    <DonorContainer>
      <LogoBar onClick={() => nav(-1)}>
        <img src={img} alt="" />
      </LogoBar>
      <DonorContent>
        <h2>Create your account</h2>
        <p>Join our community of impact makers</p>
        <ToggleContainer>
          <ToggleButton
            active={active === "individual"}
            onClick={() => setActive("individual")}
          >
            Individual
          </ToggleButton>
          <ToggleButton
            active={active === "organization"}
            onClick={() => setActive("organization")}
          >
            Organization
          </ToggleButton>
        </ToggleContainer>
        <DonorForm>
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
          {active === "organization" && (
            <LabelInput>
              <label htmlFor="email">Organization Name</label>
              <Input
                className="input_place"
                placeholder="Enter your organization name"
                type="text"
                name="organization"
              />
            </LabelInput>
          )}
          <LabelInput>
            <label htmlFor="email">Email Address</label>
            <Input
              className="input_place"
              placeholder="john@example.com"
              type="text"
              name="email"
            />
          </LabelInput>
          <LabelInput>
            <label htmlFor="email">Password Number</label>
            <Input
              className="input_place"
              placeholder="+234 800 000 0000"
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
        </DonorForm>
        <p className="signin">
          Already have an account?{" "}
          <NavLink to={"/login"}>
            <span>Sign in</span>
          </NavLink>
        </p>
        <p className="foot">
          <span>
            <img src={safe} alt="" />
          </span>
          Your information is secure and encrypted
        </p>
      </DonorContent>
    </DonorContainer>
  );
};

export default DonorSignUp;
