import React from "react";
import {
  AccountContainer,
  AccountType,
  Details,
  Holder,
  LogoBar,
} from "../components/styles/AccountStyle";
import img from "../assets/EduFundLogo.svg";
import scholar from "../assets/Frame.svg";
import scholars from "../assets/Frame1.svg";
import Button from "../components/Ui/Button";
import { useNavigate } from "react-router-dom";

const AccoutType = () => {
  const nav = useNavigate();

  return (
    <AccountContainer>
      <LogoBar>
        <img src={img} alt="Logo" />
      </LogoBar>
      <AccountType>
        <h3>Choose Your Account Type</h3>
        <p>Select the option that best describes how you'll use our platform</p>
        <Holder>
          <Details>
            <div className="shoclar1">
              <img src={scholar} alt="" />
            </div>
            <h3>I'm a Student</h3>
            <p>
              Empowering students to fund their academic dreams through
              transparent, verified support.
            </p>
            <ul>
              <li>
                <span>✔</span>Apply for funding
              </li>
              <li>
                <span>✔</span>Track progress & alerts
              </li>
              <li>
                <span>✔</span>Connect with donors
              </li>
              <li>
                <span>✔</span>Manage your student profile
              </li>
            </ul>
            <Button
              className="choose_btn"
              text="Continue as Student"
              onClick={() => nav("/register")}
            />
          </Details>
          <Details>
            <div className="shoclar1">
              <img src={scholars} alt="" />
            </div>
            <h3>I'm a Donor</h3>
            <p>
              Empower verified students by funding their education
              transparently.
            </p>
            <ul>
              <li>
                <span>✔</span>Browse verified student requests
              </li>
              <li>
                <span>✔</span>Donate securely
              </li>
              <li>
                <span>✔</span>Track impact & updates
              </li>
              <li>
                <span>✔</span>Manage your donations
              </li>
            </ul>
            <Button className="choose_btn" text="Continue as Donor" />
          </Details>
        </Holder>
      </AccountType>
    </AccountContainer>
  );
};

export default AccoutType;
