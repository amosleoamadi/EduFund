import { FaShieldAlt, FaUsers, FaSchool } from "react-icons/fa";
import { HowItWorksStyle } from "./HowItWorksStyle";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaShieldAlt />,
      title: "Verify",
      text: "Students and donors complete our secure verification process to ensure authenticity and build trust.",
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Fundraise",
      text: "Students create campaigns while donors discover verified profiles and compelling stories.",
    },
    {
      id: 3,
      icon: <FaSchool />,
      title: "Impact Delivered",
      text: "Donations go directly to partner schools, ensuring funds are used for education only.",
    },
  ];

  return (
    <HowItWorksStyle>
      <h2>How It Works</h2>
      <p>Three simple steps to transparent education funding</p>

      <div className="steps-container">
        {steps.map((step) => (
          <div className="step-card" key={step.id}>
            <div className="step-number">{step.id}</div>
            <div className="icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </HowItWorksStyle>
  );
};

export default HowItWorks;
