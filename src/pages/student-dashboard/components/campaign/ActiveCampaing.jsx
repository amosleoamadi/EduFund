import React from "react";
import styled from "styled-components";
import CampaignTabs from "./campaignstatus/CampaignTab";

const ActiveCampaing = () => {
  return (
    <Content>
      <h3>Campaign Management</h3>
      <CampaignTabs />
    </Content>
  );
};

export default ActiveCampaing;
const Content = styled.main`
  width: 100%;
  height: 100%;
  min-height: max-content;

  h3 {
    color: #101828;
    font-size: 28.427px;
    font-style: normal;
    font-weight: 400;
    line-height: 37.903px;
    margin-bottom: 25px;
  }
`;
