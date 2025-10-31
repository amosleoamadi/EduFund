import React, { useState } from "react";
import {
  InpuLabel,
  LabelInput,
  RegContent,
  RegForm,
  ReqContainer,
  PasswordInput,
} from "../components/styles/RegisterStyle";
import { LogoBar } from "../components/styles/AccountStyle";
import img from "../assets/EduFundLogo.png";
import Input from "../components/Ui/Input";
import cancel from "../assets/cancel.svg";
import Button from "../components/Ui/Button";
import safe from "../assets/iconamoon_shield-yes-light.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useStudentregisterMutation } from "../utils/stundentauth/authapi";
import { useDispatch } from "react-redux";
import { setStudent } from "../config/studentslices/studentauthslice";
import toast from "react-hot-toast";
import { Spin } from "antd";

const Register = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [studentdetail, setStudentdetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [register, { isLoading }] = useStudentregisterMutation();

  const conditions = {
    length: studentdetail.password.length >= 8,
    uppercase: /[A-Z]/.test(studentdetail.password),
    lowercase: /[a-z]/.test(studentdetail.password),
    number: /\d/.test(studentdetail.password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(studentdetail.password),
  };

  const passedCount = Object.values(conditions).filter(Boolean).length;
  const allPassed = passedCount === 5;

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setStudentdetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !(
        studentdetail.password ||
        studentdetail.email ||
        studentdetail.firstName ||
        studentdetail.lastName
      )
    ) {
      toast.error("Input correct details");
    } else if (!emailRegex.test(studentdetail.email)) {
      toast.error("Invalid Email format");
    } else if (!allPassed) {
      toast.error("Password is not strong");
    } else {
      try {
        const res = await register(studentdetail).unwrap();
        dispatch(
          setStudent({
            firstname: res?.data?.firstName,
            lastname: res?.data?.lastName,
            email: res?.data?.email,
            studentId: res?.data?._id,
            role: res?.data?.role,
          })
        );
        localStorage.setItem("EmailDetails", res?.data?.email);
        toast.success(res?.message);
        nav("/verify-email");
      } catch (err) {
        toast.error(err?.data?.message);
      }
    }
  };
  return (
    <ReqContainer>
      <LogoBar onClick={() => nav(-1)}>
        <img src={img} alt="Logo" />
      </LogoBar>
      <RegContent>
        <h2>Create your account</h2>
        <RegForm onSubmit={handleSubmit}>
          <InpuLabel>
            <div className="label_input">
              <label htmlFor="firstName">First name</label>
              <Input
                className="input_place"
                placeholder="Alex"
                type="text"
                name="firstName"
                value={studentdetail.firstName}
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
                value={studentdetail.lastName}
                onChange={handleOnchange}
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
              value={studentdetail.email}
              onChange={handleOnchange}
            />
          </LabelInput>
          <PasswordInput>
            <label htmlFor="password">Password</label>
            <Input
              className="input_place"
              placeholder="Enter Password"
              type="text"
              name="password"
              value={studentdetail.password}
              onChange={handleOnchange}
            />
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
          <button className="signup_btn" type="submit" disabled={isLoading}>
            {isLoading ? <Spin /> : "Sign up"}
          </button>
          <p className="signin">
            Already have an account?{" "}
            <NavLink to={"/login"}>
              <span>Sign in</span>
            </NavLink>
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
