import React from "react";
import { createGlobalStyle } from "styled-components";
import CampaignCreation from "./CampaignCreation";

const GlobalStep = () => {
  return (
    <>
      <GlobalStyle />
      <CampaignCreation />
    </>
  );
};

export default GlobalStep;
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f2f5; 
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;
