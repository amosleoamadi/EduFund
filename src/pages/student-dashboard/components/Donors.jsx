import React from "react";
import styled from "styled-components";
import DonorFirst from "./donor-com/DonorFirst";

const Donors = () => {
  return (
    <Content>
      <DonorFirst />
    </Content>
  );
};

export default Donors;
const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: max-content;
`;
