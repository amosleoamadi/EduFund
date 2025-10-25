import React, { useState } from "react";
// import eduLogo from "../../assets/EduFund Logo.png";
import { FaGraduationCap } from "react-icons/fa";

import { FiChevronDown } from "react-icons/fi";

import {
  Dropdown,
  DropdownMenu,
  Logo,
  Nav,
  NavButtons,
  NavLinks,
} from "./HeadersStyle";

const Headers = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Nav>
      <Logo>
        {/* <img src={eduLogo} style={{ width: 150, height: 110 }} alt="" /> */}
        <FaGraduationCap className="logo-icon" />
        <span>EduFund</span>
      </Logo>

      <NavLinks>
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </NavLinks>

      <NavButtons>
        <Dropdown>
          <button
            className="sign-in"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Sign In <FiChevronDown className="icon" />
          </button>

          {dropdownOpen && (
            <DropdownMenu>
              <a href="#student">Student Sign in</a>
              <a href="#sponsor">Donor Sign in</a>
            </DropdownMenu>
          )}
        </Dropdown>

        <button className="sign-up">Sign up for free</button>
      </NavButtons>
    </Nav>
  );
};

export default Headers;
