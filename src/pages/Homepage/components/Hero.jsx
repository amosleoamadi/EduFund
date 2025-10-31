import React from "react";
import { DonationPopup, HeroSection, StatsBox } from "./HeroStyle";
import { useNavigate } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";

const Hero = () => {
  const nav = useNavigate();
  return (
    <HeroSection>
      <div className="heroText">
        <h1>Empowering Education Through Trust</h1>
        <span className="connector">
          EduFund connects verified students with trusted donors to keep dreams
          alive and classrooms full.
        </span>

        <div className="buttons">
          <button className="primary" onClick={() => nav("/register")}>
            Start a Campaign
          </button>
          <button className="secondary" onClick={() => nav("/donor_signup")}>
            Donate Now
          </button>
        </div>

        <div className="stats">
          <StatsBox>
            <h3>₦12M+</h3>
            <p>Funds Raised</p>
          </StatsBox>
          <StatsBox>
            <h3>400+</h3>
            <p>Students Helped</p>
          </StatsBox>
          <StatsBox>
            <h3>60+</h3>
            <p>Partner Schools</p>
          </StatsBox>
        </div>
      </div>
      <DonationPopup>
        <div>
          {" "}
          <IoMdHeartEmpty className="love" />
        </div>
        <div className="text">
          <p>Recent Impact</p>
          <h4>₦75,000 donated</h4>
          <p>3 minutes ago</p>
        </div>
      </DonationPopup>

      <div className="heroImage"></div>
    </HeroSection>
  );
};

export default Hero;
