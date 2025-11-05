import React, { useState } from "react";
import {
  Gations,
  LogContainer,
  LogForm,
  LogHolder,
  RemContent,
} from "../components/styles/LoginStyle";
import { LogoBar } from "../components/styles/AccountStyle";
import img from "../assets/EduFundLogo.png";
import { LabelInput, PasswordToggle } from "../components/styles/RegisterStyle";
import Input from "../components/Ui/Input";
import Button from "../components/Ui/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useStudentloginMutation } from "../utils/stundentauth/authapi";
import toast from "react-hot-toast";
import { Spin } from "antd";
import { setUserState, userLogout } from "../config/slices/studentauthslice";
import { useDispatch } from "react-redux";
import { IoIosEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [toogle, setToogle] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [studentLogin, { isLoading }] = useStudentloginMutation();

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUserLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      dispatch(userLogout());
      const res = await studentLogin(userLogin).unwrap();
      const userRole = res?.data?.role?.toLowerCase();
      dispatch(
        setUserState({
          firstname: res?.data?.firstName,
          lastname: res?.data?.lastName,
          userId: res?.data?._id,
          userToken: res?.token,
          email: res?.data?.email,
        })
      );
      if (userRole === "student") {
        nav("/student-dashbord");
      } else if (userRole === "sponsor") {
        nav("/donor_dashboard");
        return;
      }
      toast.success(res?.message);
    } catch (err) {
      toast.error(err?.data?.message);
    }
  };

  return (
    <LogContainer>
      <LogoBar onClick={() => nav(-1)}>
        <img src={img} alt="" />
      </LogoBar>
      <LogHolder>
        <h3>Welcome back</h3>
        <p>Sign in to your EduFund account</p>
        <LogForm onSubmit={handleSumbit}>
          <LabelInput>
            <label htmlFor="email">Email or Phone</label>
            <Input
              className="input_place"
              placeholder="Enter your Email"
              type="text"
              name="email"
              value={userLogin.email}
              onChange={handleOnchange}
            />
          </LabelInput>
          <LabelInput>
            <label htmlFor="password">Password</label>
            <PasswordToggle>
              <Input
                className="input_place"
                placeholder="Enter your password"
                type={toogle ? "text" : "password"}
                name="password"
                value={userLogin.password}
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
          </LabelInput>
          <RemContent>
            <div className="rem">
              <Input type="checkbox" />
              Remember me
            </div>
            <Gations to={"/email-reset"}>Forgot Password?</Gations>
          </RemContent>
          <Button
            className="signup_btn"
            text={isLoading ? <Spin /> : "Sign in"}
            type="submit"
          />
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
