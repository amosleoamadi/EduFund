import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import eduLogo from "../../../public/Logo.png";

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
  const location = useLocation();
  const nav = useNavigate();

  return (
    <Nav>
      <Logo>
        <img src={eduLogo} alt="EduFund Logo" />
      </Logo>

      <NavLinks>
        <nav
          className={`btn ${location.pathname === "/" ? "actives" : ""}`}
          onClick={() => nav("/")}
        >
          Home
        </nav>
        <nav
          className={`btn ${location.pathname === "/about" ? "actives" : ""}`}
          onClick={() => nav("/about")}
        >
          About Us
        </nav>
        <nav
          className={`btn ${location.pathname === "/contact" ? "actives" : ""}`}
          onClick={() => nav("/contact")}
        >
          Contact Us
        </nav>
      </NavLinks>

      <NavButtons>
        <Dropdown
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            className="sign-in"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Sign In{" "}
            {dropdownOpen ? (
              <FiChevronUp className="icon" />
            ) : (
              <FiChevronDown className="icon" />
            )}
          </button>

          <DropdownMenu className={dropdownOpen ? "show" : ""}>
            <nav onClick={() => nav("/login")}>Student Sign in</nav>
            <nav onClick={() => nav("/login")}>Donor Sign in</nav>
          </DropdownMenu>
        </Dropdown>

        <button className="sign-up" onClick={() => nav("/account-type")}>
          Sign up for free
        </button>
      </NavButtons>
    </Nav>
  );
};

export default Headers;
