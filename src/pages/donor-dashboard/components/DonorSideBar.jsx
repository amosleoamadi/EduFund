import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineHome } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { SlBadge } from "react-icons/sl";
import { LuSettings } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";
import safe from "../../../assets/iconamoon_shield-yes-light.svg";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const DonorSideBar = ({ onClose }) => {
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
          location.pathname === "/donor_dashboard" ? "active" : ""
        }`}
        onClick={() => handleNavClick("/donor_dashboard")}
      >
        <MdOutlineHome className="bars" /> Overview
      </nav>
      <nav
        className={`btn ${
          location.pathname === "/donor_dashboard/donation" ? "active" : ""
        }`}
        onClick={() => handleNavClick("/donor_dashboard/donation")}
      >
        <GrFavorite className="bar" /> My Donations
      </nav>
      <nav
        className={`btn ${
          location.pathname === "/donor_dashboard/discover" ? "active" : ""
        }`}
        onClick={() => handleNavClick("/donor_dashboard/discover")}
      >
        <CiSearch className="bar" /> Discover
      </nav>
      <nav
        className={`btn ${
          location.pathname === "/donor_dashboard/impact" ? "active" : ""
        }`}
        onClick={() => handleNavClick("/donor_dashboard/impact")}
      >
        <SlBadge className="bar" /> Impact
      </nav>
      <nav
        className={`btn ${
          location.pathname === "/donor_dashboard/donor-setting" ? "active" : ""
        }`}
        onClick={() => handleNavClick("/donor_dashboard/donor-setting")}
      >
        <LuSettings className="bar" /> Settings
      </nav>
    </Container>
  );
};

export default DonorSideBar;
const Container = styled.main`
  display: flex;
  width: 85%;
  height: 85%;
  min-height: max-content;
  padding: 18px 18px 18px 18px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 16.579px;
  position: sticky;
  top: 0;
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
    transition: 550ms ease-in-out;

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
