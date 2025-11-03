import React from "react";
import styled from "styled-components";
import FirstCampaign from "./campaign/FirstCampaign";
import ActiveCampaing from "./campaign/ActiveCampaing";

const MyCampaign = () => {
  return (
    <Hero>
      {/* <FirstCampaign /> */}
      <ActiveCampaing />
    </Hero>
  );
};

export default MyCampaign;
const Hero = styled.div`
  width: 100%;
  height: 100%;
  min-height: max-content;
`;
