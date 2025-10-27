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
import { useLocation, useNavigate } from "react-router-dom";

const Headers = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const nav = useNavigate();

  return (
    <Nav>
      <Logo>
        <img src={eduLogo} alt="" />
      </Logo>

      <NavLinks>
        <nav
          className={`btn ${location.pathname === "/" ? "actives" : ""}`}
          onClick={() => nav("")}
        >
          Home
        </nav>
        <nav
          className={`btn ${location.pathname === "/about" ? "actives" : ""}`}
          onClick={() => nav("about")}
        >
          About Us
        </nav>
        <nav
          className={`btn ${location.pathname === "/contact" ? "actives" : ""}`}
          onClick={() => nav("contact")}
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
              <nav onClick={() => nav("/login")}>Student Sign in</nav>
              <nav onClick={() => nav("/login")}>Donor Sign in</nav>
            </DropdownMenu>
          )}
        </Dropdown>

        <button className="sign-up" onClick={() => nav("/account-type")}>
          Sign up for free
        </button>
      </NavButtons>
    </Nav>
  );
};

export default Headers;
