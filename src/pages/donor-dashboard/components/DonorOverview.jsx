import React, { useContext, useEffect, useState } from "react";
import { LuSparkles, LuTrendingUp, LuUsers, LuTarget } from "react-icons/lu";
import { FiDollarSign } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";
import { LiaIdBadgeSolid } from "react-icons/lia";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import "../../../components/styles/DonorOverview.css";
import Ibrahim from "../../../assets/Ibrahhim.jpg";
import Chioma from "../../../assets/Chioma.jpg";
import Container from "../../../assets/Container.png";
import { CiSearch } from "react-icons/ci";
import { SlBadge } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import Donor_Chart from "./Donor_Chart";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  selectStudentId,
  studentFirstname,
} from "../../../config/slices/studentauthslice";
import { useGetDonorOverviewQuery } from "../../../utils/stundentauth/getdonor";
import LoadingState from "../../modals/loadingstate/LoadingState";
import { AppContext } from "../../../context/AppContext";

const DonorOverview = () => {
  const nav = useNavigate();
  const username = useSelector(studentFirstname);
  const donorId = useSelector(selectStudentId);
  const { data, isLoading, isError } = useGetDonorOverviewQuery(donorId);
  const { setUserDataGlobal, getProfileImageGlobal } =
    useContext(AppContext);

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError) {
    return <p>Error Loading Overview</p>;
  }

  if (data?.data) {
    const userData = data.data.donor;
    setUserDataGlobal({
      firstName: userData.firstName || "",
      lastName: userData.lastName || "",
      email: userData.email || "",
      _id: userData._id || "",
      avatar: userData.avatar || "",
    });
  }

  let stats = [
    {
      id: 1,
      title: "Total Donated",
      value: 0,
      icon: <FiDollarSign size={25} color="#2563eb" />,
      change: "+14% this month",
      changeColor: "green",
      subIcon: <MdArrowOutward size={16} color="#10b981" />,
    },
    {
      id: 2,
      title: "Students Helped",
      value: 0,
      icon: <LuUsers size={25} color="#10b981" />,
      change: "Lives changed",
      changeColor: "green",
      subIcon: <IoIosHeartEmpty size={16} color="#10b981" />,
    },
    {
      id: 3,
      title: "Active Campaigns",
      value: 0,
      icon: <LuTrendingUp size={25} color="#7c3aed" />,
      change: "In progress",
      changeColor: "blue",
      subIcon: <HiMiniArrowTrendingDown size={16} color="#2563eb" />,
    },
    {
      id: 4,
      title: "Impact Score",
      value: "94/100",
      icon: <LuTarget size={25} color="#f97316" />,
      change: "Excellent",
      changeColor: "orange",
      subIcon: <LiaIdBadgeSolid size={16} color="#d8752e" />,
    },
  ];

  stats.forEach(
    (item, index) => (item.value = data?.data?.stats?.[index] || 0)
  );
  const cardDate = data?.data?.recentDonations || [];
  const date = new Date(data?.data?.donor?.createdAt || new Date());

  const options = {
    year: "numeric",
    month: "long",
  };

  const formattedDate = date.toLocaleString("en-US", options);

  // Function to get student avatar
  const getStudentAvatar = (student) => {
    if (!student?.receiverId?._id) return null;
    const profileImage = getProfileImageGlobal(student.receiverId._id);
    if (profileImage) return profileImage;
    if (student.receiverId.avatar) return student.receiverId.avatar;
    return null;
  };

  // Function to get student initials
  const getStudentInitials = (student) => {
    if (!student?.receiverId?.fullName) return "U";
    return student.receiverId.fullName
      .split(" ")
      .map((name) => name.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <>
      <div className="container1">
        <div className="greeting">
          <div className="greeting-header">
            <h1>
              Welcome back {username?.charAt(0)?.toUpperCase() || ""}
              {username?.slice(1) || ""} 👋
            </h1>
            <LuSparkles size={35} color="white" />
          </div>
          <p>Thank you for making a difference in students' lives.</p>
          <p>Member since {formattedDate}</p>
        </div>

        <div className="stats-container">
          {stats.map((item) => (
            <div key={item.id} className="stats-card">
              <div className="stats-header">
                <p className="stats-title">{item.title}</p>
                <span className="stats-icon">{item.icon}</span>
              </div>
              <h2 className="stats-value">{item.value || 0}</h2>
              <p className={`stats-change ${item.changeColor}`}>
                {item.subIcon && (
                  <span className="sub-icon">{item.subIcon}</span>
                )}
                {item.change}
              </p>
            </div>
          ))}
        </div>

        <div className="donation">
          <aside>
            <div className="recent">
              <h1>Recent Donations</h1>
              <p>
                View All <FaAngleRight />
              </p>
            </div>
            <div className="donation-card-container">
              {cardDate.length > 0 ? (
                cardDate.map((e) => {
                  const studentAvatar = getStudentAvatar(e);
                  const studentInitials = getStudentInitials(e);

                  return (
                    <div className="donation-card" key={e._id}>
                      <div className="card-img">
                        {studentAvatar ? (
                          <img
                            src={studentAvatar}
                            alt={e?.receiverId?.fullName || "Student"}
                          />
                        ) : (
                          <div className="profile-initials">
                            {studentInitials}
                          </div>
                        )}
                      </div>
                      <div className="card-degree-container">
                        <div>
                          <h2
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                            }}
                          >
                            {e?.receiverId?.fullName || "Unknown Student"}{" "}
                            <FaRegCircleCheck color="#155DFC" />
                          </h2>
                          <p>
                            {e?.campaignId?.course || "No course specified"}
                          </p>
                          <div className="progress-container">
                            <div className="progress-track">
                              <div
                                className="progress-bar"
                                style={{
                                  width: `${
                                    e?.campaignId?.fundedPercentage || 0
                                  }%`,
                                }}
                              ></div>
                            </div>
                            <p>{e?.campaignId?.fundedPercentage || 0}%</p>
                          </div>
                        </div>
                        <div className="card-date">
                          <h2>₦{e?.amount?.toLocaleString() || "0"}</h2>
                          <p>
                            {e?.campaignId?.createdAt
                              ? new Date(
                                  e.campaignId.createdAt
                                ).toLocaleDateString()
                              : "Date not available"}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No recent donations yet</p>
              )}
            </div>
          </aside>
          <aside>
            <div className="recent">
              <h1>Quick Actions</h1>
            </div>
            <div className="side">
              <span
                className="discover"
                onClick={() => nav("/donor_dashboard/discover")}
              >
                {" "}
                <CiSearch />
                Discover Campaigns
              </span>
              <span
                className="discover"
                onClick={() => nav("/donor_dashboard/impact")}
              >
                {" "}
                <SlBadge />
                view impact stories
              </span>
            </div>
            <div className="month">
              <h2>This Month's Impacts</h2>
              <div className="write_up">
                <h3 className="writes">Donations</h3>
                <p className="write_2">
                  ₦{data?.data?.totalDonated?.toLocaleString() || "0"}
                </p>
              </div>
              <div className="write_up">
                <h3 className="writes">Student</h3>
                <p className="write_2">
                  {data?.data?.studentsHelped || 0} students
                </p>
              </div>
              <div className="write_up">
                <h3 className="writes">Campaigns</h3>
                <p className="write_2">
                  {data?.data?.activeCampaigns?.length || 0} campaigns
                </p>
              </div>
            </div>
          </aside>
        </div>
        <div className="chart_img">
          <Donor_Chart />
        </div>
      </div>
    </>
  );
};

export default DonorOverview;
