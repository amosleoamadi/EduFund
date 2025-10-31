import React from "react";
import { WhyChooseUsStyle } from "./WhyChooseUsStyle";
import { FaSchool } from "react-icons/fa";
import { RiGraduationCapLine } from "react-icons/ri";
import { LuShield, LuUsers } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiLock } from "react-icons/fi";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <LuShield />,
      title: "Verified Students Only",
      desc: "Every campaign is backed by verified student and school credentials.",
    },
    {
      icon: <MdOutlineRemoveRedEye />,
      title: "Transparent Fund Tracking",
      desc: "Donors see exactly how and when funds are used.",
    },
    {
      icon: <FiLock />,
      title: "Secure Donations",
      desc: "End-to-end encrypted payment gateway ensures funds go directly to the cause.",
    },
    {
      icon: <FaSchool />,
      title: "Direct School Payments",
      desc: "Funds sent directly to educational institutions.",
    },
    {
      icon: <LuUsers />,
      title: "Trusted by Communities",
      desc: "Supported by schools, NGOs, and giving communities across Nigeria.",
    },
    {
      icon: <RiGraduationCapLine />,
      title: "Empowering Real Impact",
      desc: "Your support doesn’t just pay tuition — it changes lives.",
    },
  ];

  return (
    <WhyChooseUsStyle>
      <h2>Why Choose Us?</h2>
      <p className="subtitle">Built on trust and transparency</p>

      <div className="features">
        {features.map((feature, index) => (
          <div className="card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </WhyChooseUsStyle>
  );
};

export default WhyChooseUs;
