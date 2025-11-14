import React from "react";
import styled from "styled-components";
import CampaignDetailsModal from "./steps/CampaignDetailsModal";

const CampaignDetailsWrapper = () => {
  return (
    <WrapperContainer>
      <CampaignDetailsModal />
    </WrapperContainer>
  );
};

const WrapperContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;

  & > div {
    width: 100% !important;
    max-width: none !important;
  }
`;

export default CampaignDetailsWrapper;
