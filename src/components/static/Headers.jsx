import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import eduLogo from "../../assets/Edulogo.png";
import {
  Dropdown,
  DropdownMenu,
  Logo,
  Nav,
  NavButtons,
  NavLinks,
  MobileMenuIcon,
  MobileMenu,
} from "./HeadersStyle";

const Headers = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const nav = useNavigate();

  return (
    <>
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
            className={`btn ${
              location.pathname === "/contact" ? "actives" : ""
            }`}
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

        <MobileMenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </MobileMenuIcon>
      </Nav>

      <MobileMenu open={menuOpen}>
        <div
          className="mobile-link"
          onClick={() => {
            nav("/");
            setMenuOpen(false);
          }}
        >
          Home
        </div>
        <div
          className="mobile-link"
          onClick={() => {
            nav("/about");
            setMenuOpen(false);
          }}
        >
          About Us
        </div>
        <div
          className="mobile-link"
          onClick={() => {
            nav("/contact");
            setMenuOpen(false);
          }}
        >
          Contact Us
        </div>

        <button
          className="mobile-btn sign-in"
          onClick={() => {
            nav("/login");
            setMenuOpen(false);
          }}
        >
          Sign In
        </button>
        <button
          className="mobile-btn sign-up"
          onClick={() => {
            nav("/account-type");
            setMenuOpen(false);
          }}
        >
          Sign up for free
        </button>
      </MobileMenu>
    </>
  );
};

export default Headers;
