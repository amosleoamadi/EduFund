import React, { useState } from "react";
import styled from "styled-components";
import { GoVerified } from "react-icons/go";
import { MdOutlineHome } from "react-icons/md";
import { LuTarget } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { TbMoneybag } from "react-icons/tb";
import { LuSettings } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import safe from "../../../assets/iconamoon_shield-yes-light.svg";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Sidebar = () => {
  const [active, setActice] = useState("overview");
  const nav = useNavigate();
  return (
    <Container>
      <nav
        className={`btn ${active === "overview" ? "active" : ""}`}
        onClick={() => {
          setActice("overview"), nav("");
        }}
      >
        <MdOutlineHome className="bars" /> Overview
      </nav>
      <nav
        className={`btn ${active === "campaign" ? "active" : ""}`}
        onClick={() => {
          setActice("campaign"), nav("/student-dashbord/campaigns");
        }}
      >
        <LuTarget className="bar" /> My Campaign
      </nav>
      <nav
        className={`btn ${active === "donor" ? "active" : ""}`}
        onClick={() => {
          setActice("donor"), nav("/student-dashbord/donors");
        }}
      >
        <GoPeople className="bar" /> Donors
      </nav>
      <nav
        className={`btn ${active === "verify" ? "active" : ""}`}
        onClick={() => {
          setActice("verify"), nav("/student-dashbord/verification");
        }}
      >
        <GoVerified className="bar" /> Verification
      </nav>
      <nav
        className={`btn ${active === "withdraw" ? "active" : ""}`}
        onClick={() => {
          setActice("withdraw"), nav("/student-dashbord/withdraws");
        }}
      >
        <TbMoneybag className="bar" /> Withdrawals
      </nav>
      <div className="divider"></div>
      <nav
        className={`btn ${active === "setting" ? "active" : ""}`}
        onClick={() => {
          setActice("setting"), nav("/student-dashbord/student-setting");
        }}
      >
        <LuSettings className="bar" /> Settings
      </nav>
      <Holder>
        <p className="foot">
          <span>
            <img src={safe} alt="" />
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
  }

  .foot {
    display: flex;
    align-items: center;
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
`;
const Container = styled.main`
  display: flex;
  width: 21%;
  height: 95%;
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

  .divider {
    width: 100%;
    height: 1.5px;
    background: rgba(0, 0, 0, 0.1);
  }

  .btn {
    width: 100%;
    height: 40px;
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
      height: 40px;
      border-radius: 9.474px;
      background: #2563eb;
      color: white;
    }
  }

  .active {
    width: 100%;
    height: 40px;
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
  }
`;
