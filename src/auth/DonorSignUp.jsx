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
  PasswordToggle,
} from "../components/styles/RegisterStyle";
import Input from "../components/Ui/Input";
import cancel from "../assets/cancel.svg";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/Ui/Button";
import safe from "../assets/iconamoon_shield-yes-light.svg";
import {
  useDonorIndividualMutation,
  useDonorOrganizationMutation,
} from "../utils/donorauth/donorauth";
import { Spin } from "antd";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { setUserState } from "../config/slices/studentauthslice";
import { IoEye } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";

const DonorSignUp = () => {
  const [active, setActive] = useState("individual");
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [toogle, setToogle] = useState(false);
  const [individual, { isLoading: isVerifyLoading }] =
    useDonorIndividualMutation();
  const [organization, { isLoading: isOrganLoading }] =
    useDonorOrganizationMutation();
  const [donordetail, setDonordetail] = useState({
    firstName: "",
    lastName: "",
    organizationName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const conditions = {
    length: donordetail.password.length >= 8,
    uppercase: /[A-Z]/.test(donordetail.password),
    lowercase: /[a-z]/.test(donordetail.password),
    number: /\d/.test(donordetail.password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(donordetail.password),
  };

  const passedCount = Object.values(conditions).filter(Boolean).length;
  const allPassed = passedCount === 5;

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setDonordetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleIndividualClick = () => {
    setActive("individual");
    setDonordetail((prev) => ({
      ...prev,
      organizationName: "",
    }));
  };

  const handleOrganizationClick = () => {
    setActive("organization");
    setDonordetail((prev) => ({
      ...prev,
      firstName: "",
      lastName: "",
      email: "",
    }));
  };

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleSumbit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, phoneNumber } = donordetail;
    const data = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    };
    if (
      !donordetail.password ||
      !donordetail.email ||
      !donordetail.firstName ||
      !donordetail.lastName ||
      (active === "organization" && !donordetail.organizationName) ||
      !donordetail.phoneNumber
    ) {
      toast.error("Input correct details");
    } else if (!emailRegex.test(donordetail.email)) {
      toast.error("Invalid Email format");
    } else if (!allPassed) {
      toast.error("Password is not strong");
    } else if (active === "individual") {
      try {
        const response = await individual(data).unwrap();
        dispatch(
          setUserState({
            firstname: response?.data?.firstName,
            lastname: response?.data?.lastName,
            email: response?.data?.email,
            userId: response?.data?._id,
          })
        );
        localStorage.setItem(
          "EmailDetails",
          JSON.stringify(response?.data?.email)
        );
        nav("/verify-email");
        toast.success(response?.message);
      } catch (err) {
        toast.error(err?.data?.message);
      }
    } else if (active === "organization") {
      try {
        const res = await organization(donordetail).unwrap();
        console.log(res);
        setUserState({
          firstname: res?.data?.firstName,
          lastname: res?.data?.lastName,
          email: res?.data?.email,
          userId: res?.data?._id,
        });
        localStorage.setItem("EmailDetails", JSON.stringify(res?.data?.email));
        nav("/verify-email");
        toast.success(res?.message);
      } catch (err) {
        toast.error(err?.data?.message);
      }
    }
  };

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
            onClick={handleIndividualClick}
          >
            Individual
          </ToggleButton>
          <ToggleButton
            active={active === "organization"}
            onClick={handleOrganizationClick}
          >
            Organization
          </ToggleButton>
        </ToggleContainer>
        <DonorForm onSubmit={handleSumbit}>
          <InpuLabel>
            <div className="label_input">
              <label htmlFor="firstName">First name</label>
              <Input
                className="input_place"
                placeholder="Alex"
                type="text"
                name="firstName"
                value={donordetail.firstName}
                onChange={handleOnchange}
              />
            </div>
            <div className="label_input">
              <label htmlFor="lastName">Last name</label>
              <Input
                className="input_place"
                placeholder="Lizzy"
                type="text"
                name="lastName"
                value={donordetail.lastName}
                onChange={handleOnchange}
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
                name="organizationName"
                value={donordetail.organizationName}
                onChange={handleOnchange}
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
              value={donordetail.email}
              onChange={handleOnchange}
            />
          </LabelInput>
          <LabelInput>
            <label htmlFor="email">Phone Number</label>
            <Input
              className="input_place"
              placeholder="+234 800 000 0000"
              type="text"
              name="phoneNumber"
              value={donordetail.phoneNumber}
              onChange={handleOnchange}
            />
          </LabelInput>
          <PasswordInput>
            <label htmlFor="password">Password</label>
            <PasswordToggle>
              <Input
                className="input_place"
                placeholder="Enter Password"
                type={toogle ? "text" : "password"}
                name="password"
                value={donordetail.password}
                onChange={handleOnchange}
              />
              <div className="holder" onClick={() => setToogle(!toogle)}>
                {toogle ? (
                  <IoEye
                    style={{
                      fontSize: "20px",
                      cursor: "pointer",
                      color: "#adaebc",
                    }}
                  />
                ) : (
                  <IoIosEyeOff
                    style={{
                      fontSize: "20px",
                      cursor: "pointer",
                      color: "#adaebc",
                    }}
                  />
                )}
              </div>
            </PasswordToggle>
            <div className="text">
              <p>Password Strength</p>
              <p>{allPassed ? "Strong" : "Weak"}</p>
            </div>
            <div className="boxes">
              <div className={`box1 ${conditions.length ? "good" : ""}`}></div>
              <div
                className={`box1 ${conditions.uppercase ? "good" : ""}`}
              ></div>
              <div
                className={`box1 ${conditions.lowercase ? "good" : ""}`}
              ></div>
              <div className={`box1 ${conditions.number ? "good" : ""}`}></div>
              <div className={`box1 ${conditions.special ? "good" : ""}`}></div>
            </div>
            <div className="description">
              <nav className={`click ${conditions.length ? "set" : ""}`}>
                <span>
                  {conditions.length ? "✔" : <img src={cancel} alt="" />}
                </span>
                At least 8 characters
              </nav>
              <nav className={`click ${conditions.uppercase ? "set" : ""}`}>
                <span>
                  {conditions.uppercase ? "✔" : <img src={cancel} alt="" />}
                </span>
                One uppercase letter
              </nav>
              <nav className={`click ${conditions.lowercase ? "set" : ""}`}>
                <span>
                  {conditions.lowercase ? "✔" : <img src={cancel} alt="" />}
                </span>
                One lowercase letter
              </nav>
              <nav className={`click ${conditions.number ? "set" : ""}`}>
                <span>
                  {conditions.number ? "✔" : <img src={cancel} alt="" />}
                </span>
                One number
              </nav>
              <nav className={`click ${conditions.special ? "set" : ""}`}>
                <span>
                  {conditions.special ? "✔" : <img src={cancel} alt="" />}
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
          <Button
            className="signup_btn"
            text={isVerifyLoading || isOrganLoading ? <Spin /> : "Sign up"}
            type="submit"
          />
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
