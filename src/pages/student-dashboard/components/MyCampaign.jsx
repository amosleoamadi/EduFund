import React from "react";
import styled from "styled-components";
import FirstCampaign from "./campaign/FirstCampaign";

const MyCampaign = () => {
  return (
    <Hero>
      <FirstCampaign />
    </Hero>
  );
};

export default MyCampaign;
const Hero = styled.div`
  width: 100%;
  height: 100%;
  min-height: max-content;
`;
