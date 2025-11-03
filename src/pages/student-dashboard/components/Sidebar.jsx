import React, { useState } from "react";
import styled from "styled-components";
import { GoVerified } from "react-icons/go";
import { MdOutlineHome } from "react-icons/md";
import { LuTarget } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { TbMoneybag } from "react-icons/tb";
import { LuSettings } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";
import safe from "../../../assets/iconamoon_shield-yes-light.svg";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Sidebar = ({ onClose }) => {
  const location = useLocation();
  const handleNavigation = useNavigate();

  const handleNavClick = (path) => {
    handleNavigation(path);
    if (onClose && window.innerWidth <= 768) {
      onClose();
    }
  };

  return (
    <Container>
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
        <div className="add">
          <IoIosCheckmarkCircleOutline />
          Verified Student
        </div>
      </Holder>
    </Container>
  );
};

export default Sidebar;

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

    @media (max-width: 768px) {
      border-radius: 8px;
      height: 45px;
      font-size: 16px;
      color: #2563eb;
      background: none;
    }
  }
`;
