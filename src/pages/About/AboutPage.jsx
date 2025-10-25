import React from 'react'
import {  FaUserGraduate,  FaHandHoldingHeart } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6"
import { GiGraduateCap } from "react-icons/gi";
import Akeem from "../../assets/Akeem.jpg"
import Amos from "../../assets/Amos.jpg"
import Femi from "../../assets/Femi_Eric.png"
import Godwin from "../../assets/Godwin.jpg"
import Theresa from "../../assets/Theresa.jpg"
import Joy from "../../assets/Joy.jpg"
import Lamre from "../../assets/Lamre.jpg"
import "../../components/styles/About.css"

const About = () => {
    const impact =[
         {
      id: 1,
      icon: <FaSackDollar />,
      amount: "₦12M+",
      description: "Total Raised",
      color: "#0284C7",
      bg: "#5dabdf",
    },
    {
      id: 2,
      icon: <FaUserGraduate />,
      amount: "400+",
      description: "Verified Students",
      color: "#7B61FF",
      bg: "#adacc2",
    },
    {
      id: 3,
      icon: <GiGraduateCap />,
      amount: "60+",
      description: "Partner Schools",
      color: "#F97316",
      bg: "#f5dcba",
    },
    {
      id: 4,
      icon: <FaHandHoldingHeart />,
      amount: "98%",
      description: "Donor Satisfaction",
      color: "#047857",
      bg: "#aaf1d1",
    },
    ]

    const teams = [
  {
    id: 5,
    image: Femi,
    title: "Femi Eric",
    description: "Product Designer",
  },
  {
    id: 6,
    image: Theresa,
    title: "Ogbodo Theresa",
    description: "Product Designer",
  },
  {
    id: 7,
    image: Amos,
    title: "Amadi Amos",
    description: "Front-End Developer",
  },
  {
    id: 8,
    image: Joy,
    title: "David Joy",
    description: "Front-End Developer",
  },
  {
    id: 9,
    image: Akeem,
    title: "Akeem Quadri",
    description: "Front-End Developer",
  },
  {
    id: 10,
    image: Godwin,
    title: "Anadu Godwin",
    description: "Back-End Developer",
  },
  {
    id: 11,
    image: Lamre,
    title: "Olarewaju Alawiye",
    description: "Back-End Developer",
  },
  // {
  //   id: 12,
  //   image: Mustapha,
  //   title: "Mustapha Hameedah",
  //   description: "Back-End Developer",
  // },
];

  return (
    <div className='Hero_container'>
        <div className='container'> 
             <h1 className='text'>Fund Education.</h1>
             <h1 className='text'>Enpower the Future</h1>
            <p className='text2'>More than a platform, we're a community making education accessible for all.</p>
                 
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
              <h4>{item.amount}</h4>
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
        <p>transparency, trust, and inovation, we're building a bridge between opportunity and education </p>
    </div>
    <section className='mission_card'>
      <div  className='session_card'>
          <div className='card1'>
           <h3>OUR MISSION</h3>
           <p>At EduFund, our mission is to make education accessible for every student by creating a transparent, secure, and direct way to fund tuition and educational needs.</p>
         </div>
      <div className='card1'>
        <h3>OUR VISION</h3>
        <p>We envision a future where no student drops out because of financial barriers - where opportunity is based on potential, not income.</p>
        </div>
      <div className='card1'>
        <h3>OUR CORE VALUE</h3>
        <p>Transparency - Every donation is verified and goes directly to schools to build trust<br/>Enpowerment - We help students pursue education despite financial barriers.</p>
        
        </div>
      </div>
      
    </section>

    <section className='edu-section'>
      <div className='edu-image'>
         <img src='src/assets/student.jpg' alt='student graduating'/>
      </div>

      <div className='edu-content'>
        <h2>EduFund <span>The Ultimate Platform for Educational Support</span></h2>
         <p>
          EduFund is the ultimate platform for students who need help paying
          their tuition fees. We connect passionate learners with generous
          sponsors who believe in the power of education. Through a transparent
          and secure system.
        </p>
        <p>
          At EduFund, we’re breaking financial barriers so that every student
          has the chance to stay in school and achieve their dreams.
        </p>

      </div>

    </section>

    <section className='impact-section'>
      <h1 className='title'>Meet The Team</h1>
      <div className='team-container'>
        {teams.map((member) => (
          <div className="team-card" key={member.id}>
            <img src={member.image} alt={member.title} className='team-img'/>
          
              <h4>{member.title}</h4>
              <p>{member.description}</p>
            
          </div>
        ))}
      </div>
    </section>
    
   
  </div>
  )
}

export default About
