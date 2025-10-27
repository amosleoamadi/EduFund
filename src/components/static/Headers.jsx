import React, { useState } from "react";
import eduLogo from "../../../public/Logo.png";

import { FiChevronDown } from "react-icons/fi";

import {
  Dropdown,
  DropdownMenu,
  Logo,
  Nav,
  NavButtons,
  NavLinks,
} from "./HeadersStyle";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [active, setActive] = useState("home");
  const nav = useNavigate();

  return (
    <Nav>
      <Logo>
        <img src={eduLogo} alt="" />
      </Logo>

      <NavLinks>
        <nav
          className={`btn ${active ? "actives" : ""}`}
          onClick={() => {
            setActive("home"), nav("");
          }}
        >
          Home
        </nav>
        <nav
          className={`btn ${active ? "actives" : ""}`}
          onClick={() => {
            setActive("about"), nav("/about");
          }}
        >
          About Us
        </nav>
        <nav
          className={`btn ${active ? "actives" : ""}`}
          onClick={() => setActive("contact")}
        >
          Contact Us
        </nav>
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
              <nav>Student Sign in</nav>
              <nav>Donor Sign in</nav>
            </DropdownMenu>
          )}
        </Dropdown>

        <button className="sign-up">Sign up for free</button>
      </NavButtons>
    </Nav>
  );
};

export default Headers;
