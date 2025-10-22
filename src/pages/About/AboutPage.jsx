import React from 'react'
import { FaMoneyBillWave, FaUserGraduate, FaSchool, FaHandHoldingHeart } from "react-icons/fa";
import "../../components/styles/About.css"

const About = () => {
    const impact =[
         {
      id: 1,
      icon: <FaMoneyBillWave />,
      amount: "₦12M+",
      description: "Total Raised",
      color: "#0284C7",
      bg: "#E0F2FE",
    },
    {
      id: 2,
      icon: <FaUserGraduate />,
      amount: "400+",
      description: "Verified Students",
      color: "#7B61FF",
      bg: "#ECEBFF",
    },
    {
      id: 3,
      icon: <FaSchool />,
      amount: "60+",
      description: "Partner Schools",
      color: "#F97316",
      bg: "#FFF4E5",
    },
    {
      id: 4,
      icon: <FaHandHoldingHeart />,
      amount: "98%",
      description: "Donor Satisfaction",
      color: "#047857",
      bg: "#E5F9F0",
    },
    ]
  return (
    <div className='Hero_container'>
        <div className='container'> 
             <h1 className='text'>Fund Education.</h1>
             <h1 className='text'>Enpower the Future</h1>
            <p className='text2'>More than a platform, we're a community </p>
             <p className='text2'>making education accessible for all.</p>     
        </div>
      <section className="impact-section">
      <h1 className="impact-title">Our Impact</h1>
      <div className="impact-container">
        {impact.map((item) => (
          <div className="impact-card" key={item.id}>
            <div
              className="icon-box"
              style={{ backgroundColor: item.bg, color: item.color }}
            >
              {item.icon}
            </div>
            <div className="impact-info">
              <h3>{item.amount}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <div className='body'>
        <h1>We are Edufund</h1>
        <p>We are a community driven crowdfunding platform committed to making education accessible to every student, regardless of their financial</p>
        <p>background. We connect students who need support to sponsors and oragnization willing to help fund their academic dreams.Through</p>
        <p>tranperancy,trust, and inovation, we're building a bridge between opportunity and education </p>
    </div>
    </div>
  )
}

export default About
