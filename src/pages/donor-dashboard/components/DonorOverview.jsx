import React, { useEffect, useState } from "react";
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

const DonorOverview = () => {
  const nav = useNavigate();
  const [progress, setProgress] = useState(0);
  
  const [analytics, setAnalytics] = useState({
    totalDonated: 0,
    totalStudentsHelped: 0,
    activeCampaigns: 0,
  });

  const BaseUrl = import.meta.env.VITE_EDUFUND_BASEURL;
  const donorId = JSON.parse(localStorage.getItem(import.meta.env.VITE_donorId));

  const fetchProgress = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/donors/analytics/students-helped/${donorId}`);
      setAnalytics(res?.data?.data);
    } catch (error) {
      console.error("Error fetching donor analytics:", error);
    }
  };

  useEffect(() => {
    fetchProgress();
  }, []);

  const stats = [
    {
      id: 1,
      title: "Total Donated",
      value: `₦${analytics?.totalDonated?.toLocaleString?.() || 0}`,
      icon: <FiDollarSign size={25} color="#2563eb" />,
      change: "+14% this month",
      changeColor: "green",
      subIcon: <MdArrowOutward size={16} color="#10b981" />,
    },
    {
      id: 2,
      title: "Students Helped",
      value: analytics?.totalStudentsHelped || 0,
      icon: <LuUsers size={25} color="#10b981" />,
      change: "Lives changed",
      changeColor: "green",
      subIcon: <IoIosHeartEmpty size={16} color="#10b981" />,
    },
    {
      id: 3,
      title: "Active Campaigns",
      value: analytics?.activeCampaigns || 0,
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
  const cardDate = [
    {
      id: 1,
      name: "Chioma Adebayo",
      degree: "Computer Science Degree - UNILAG",
      price: "150,000",
      progress: 85,
      date: "10/18/2025",
      img: Chioma,
    },
    {
      id: 2,
      name: "Ibrahim Yusuf",
      degree: "Medicine Degree - ABU",
      price: "200,000",
      progress: 62,
      date: "10/15/2025",
      img: Ibrahim,
    },
    {
      id: 3,
      name: "Blessing Okafor",
      degree: "Law Degree - UI",
      price: "100,000",
      progress: 45,
      date: "10/10/2025",
      img: Container,
    },
    {
      id: 3,
      name: "Blessing Okafor",
      degree: "Law Degree - UI",
      price: "100,000",
      progress: 45,
      date: "10/10/2025",
      img: Container,
    },
  ];

  return (
    <div className="container1">
      <div className="greeting">
        <div className="greeting-header">
          <h1>Welcome back, Dr. Frank! 👋</h1>
          <LuSparkles size={35} color="white" />
        </div>
        <p>Thank you for making a difference in students' lives.</p>
        <p>Member since June 2025</p>
      </div>

      <div className="stats-container">
        {stats.map((item) => (
          <div key={item.id} className="stats-card">
            <div className="stats-header">
              <p className="stats-title">{item.title}</p>
              <span className="stats-icon">{item.icon}</span>
            </div>
            <h2 className="stats-value">{item.value}</h2>
            <p className={`stats-change ${item.changeColor}`}>
              {item.subIcon && <span className="sub-icon">{item.subIcon}</span>}
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
            {cardDate.map((e) => (
              <div className="donation-card" key={e.id}>
                <div className="card-img">
                  <img src={e.img} alt="" />
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
                      {e.name} <FaRegCircleCheck color="#155DFC" />
                    </h2>
                    <p>{e.degree}</p>
                    <div className="progress-container">
                      <div className="progress-track">
                        <div
                          className="progress-bar"
                          style={{ width: `${e.progress}%` }}
                        ></div>
                      </div>
                      <p>{e.progress}%</p>
                    </div>
                  </div>
                  <div className="card-date">
                    <h2>{e.price}</h2>
                    <p>{e.date}</p>
                  </div>
                </div>
              </div>
            ))}
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
              <p className="write_2">₦350,000</p>
            </div>
            <div className="write_up">
              <h3 className="writes">Student</h3>
              <p className="write_2">3 students</p>
            </div>
            <div className="write_up">
              <h3 className="writes">Campaigns</h3>
              <p className="write_2">2 campaigns</p>
            </div>
          </div>
        </aside>
      </div>
      <div className="chart_img">
        <Donor_Chart />
      </div>
    </div>
  );
};

export default DonorOverview;
