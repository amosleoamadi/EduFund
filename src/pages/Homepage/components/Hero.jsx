import React from "react";
import { HeroSection, StatsBox } from "./HeroStyle";

const Hero = () => {
  return (
    <HeroSection>
      <div className="heroText">
        <h1>Empowering Education Through Trust</h1>
        <p>
          EduFund connects verified students with trusted donors to keep dreams
          alive and classrooms full.
        </p>
        <div className="buttons">
          <button className="primary">Start a Campaign</button>
          <button className="secondary">Donate Now</button>
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
      <div className="heroImage"></div>
    </HeroSection>
  );
};

export default Hero;
