import React, { useContext, useState } from "react";
import styled from "styled-components";
import { GoVerified } from "react-icons/go";
import { MdOutlineHome, MdClose } from "react-icons/md";
import { LuTarget } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { TbMoneybag } from "react-icons/tb";
import { LuSettings } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";
import safe from "../../../assets/iconamoon_shield-yes-light.svg";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AppContext } from "../../../context/AppContext";
import logo from "../../../assets/EduFundLogo.png";

const Sidebar = ({ onClose }) => {
  const location = useLocation();
  const handleNavigation = useNavigate();
  const { savedData } = useContext(AppContext);

  const handleNavClick = (path) => {
    handleNavigation(path);
    if (onClose && window.innerWidth <= 768) {
      onClose();
    }
  };

  return (
    <Container>
      {/* Header with Logo and Close Button - Only shows on mobile/tablet */}
      <MobileHeader>
        <EduLogo>
          <img src={logo} alt="EduFund Logo" />
        </EduLogo>
        <CloseButton onClick={onClose}>
          <MdClose />
        </CloseButton>
      </MobileHeader>

      <nav
        className={`btn ${
          location.pathname === "/student-dashbord" ? "active" : ""
        }`}
        onClick={() => handleNavClick("/student-dashbord")}
      >
        <MdOutlineHome className="bars" /> Overview
      </nav>
      <nav
        className={`btn ${
          location.pathname === "/student-dashbord/campaigns" ? "active" : ""
        }`}
        onClick={() => handleNavClick("/student-dashbord/campaigns")}
      >
        <LuTarget className="bar" /> My Campaign
      </nav>
      <nav
        className={`btn ${
          location.pathname === "/student-dashbord/donors" ? "active" : ""
        }`}
        onClick={() => handleNavClick("/student-dashbord/donors")}
      >
        <GoPeople className="bar" /> Donors
      </nav>
      <nav
        className={`btn ${
          location.pathname === "/student-dashbord/verification" ? "active" : ""
        }`}
        onClick={() => handleNavClick("/student-dashbord/verification")}
      >
        <GoVerified className="bar" /> Verification
      </nav>
      <nav
        className={`btn ${
          location.pathname === "/student-dashbord/withdraws" ? "active" : ""
        }`}
        onClick={() => handleNavClick("/student-dashbord/withdraws")}
      >
        <TbMoneybag className="bar" /> Withdrawals
      </nav>
      <div className="divider"></div>
      <nav
        className={`btn ${
          location.pathname === "/student-dashbord/student-setting"
            ? "active"
            : ""
        }`}
        onClick={() => handleNavClick("/student-dashbord/student-setting")}
      >
        <LuSettings className="bar" /> Settings
      </nav>
      <Holder>
        <p className="foot">
          <span>
            <img src={safe || "/placeholder.svg"} alt="" />
          </span>
          Verification Status
        </p>
        {savedData?.data.student.isFullyVerifiedStudent ? (
          <div className="add">
            <IoIosCheckmarkCircleOutline />
            Verified Student
          </div>
        ) : (
          <Badge>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            Not Verified
          </Badge>
        )}
      </Holder>
    </Container>
  );
};

export default Sidebar;

// New styled components for header
const MobileHeader = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 10px;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const EduLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 60px;
    width: auto;
    object-fit: contain;

    @media (max-width: 480px) {
      height: 35px;
    }
  }
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background: #f3f4f6;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 20px;

  &:hover {
    background: #e5e7eb;
    color: #1f2937;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 18px;
  }
`;

// Your original styled components remain unchanged
const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #f3f4f6;
  border-radius: 6px;
  font-size: 14px;
  color: #6b7280;

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 479px) {
    font-size: 12px;
    padding: 5px 8px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const Holder = styled.div`
  width: 100%;
  height: 20%;
  border-radius: 16.579px;
  border: 1.184px solid #dbeafe;
  background: linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%);
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .add {
    width: 75%;
    padding: 6px;
    border-radius: 9.474px;
    border: 1.184px solid #b9f8cf;
    background: #dcfce7;
    color: #008236;
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 768px) {
      width: 100%;
      padding: 10px;
      border-radius: 9.474px;
      border: 1.184px solid #b9f8cf;
    }
  }

  .foot {
    display: flex;
    align-items: center;
    justify-self: flex-end;
    color: #3d3d3d;
    font-size: 14px;
    gap: 5px;

    span {
      width: 14px;
      height: 14px;
      color: #00b37a;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media (max-width: 768px) {
    border-radius: 0;
    border: none;
    border-top: 1.184px solid #e5e7eb;
    background: #f8fafc;
  }
`;

const Container = styled.main`
  display: flex;
  width: 85%;
  height: 85%;
  min-height: max-content;
  padding: 18px 18px 18px 18px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16.579px;
  border: 1.184px solid #e5e7eb;
  background: rgb(255, 255, 255);
  box-shadow: 0 11.842px 17.763px -3.553px rgba(0, 0, 0, 0.1),
    0 4.737px 7.105px -4.737px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    border: none;
    background: transparent;
    box-shadow: none;
    padding: 20px;
    gap: 5px;
  }

  .divider {
    width: 100%;
    height: 1.5px;
    background: rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      margin: 10px 0;
    }
  }

  .btn {
    width: 100%;
    height: 45px;
    border-radius: 9.474px;
    background: transparent;
    display: flex;
    align-items: center;
    gap: 15px;
    color: black;
    font-size: 15px;
    padding: 15px;
    cursor: pointer;
    transition: 500ms ease-in-out;

    .bar {
      font-size: 18px;
    }

    .bars {
      font-size: 20px;
    }

    &:hover {
      width: 100%;
      height: 45px;
      border-radius: 9.474px;
      background: #eeebeb;
    }

    @media (max-width: 768px) {
      border-radius: 8px;
      height: 45px;
      font-size: 16px;

      &:hover {
        border-radius: 8px;
        color: #2563eb;
        background: none;
      }
    }
  }

  .active {
    width: 100%;
    height: 45px;
    border-radius: 9.474px;
    background: #2563eb;
    display: flex;
    align-items: center;
    gap: 15px;
    color: white;
    font-size: 15px;
    padding: 15px;
    cursor: pointer;

    .bar {
      font-size: 18px;
    }

    .bars {
      font-size: 20px;
    }

    &:hover {
      background: #2563eb;
      color: white;
    }

    @media (max-width: 768px) {
      border-radius: 8px;
      height: 45px;
      font-size: 16px;
      color: #2563eb;
      background: none;

      &:hover {
        background: none;
        color: #2563eb;
      }
    }
  }
`;
