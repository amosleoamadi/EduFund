import React from "react";
import styled from "styled-components";
import DonorFirst from "./donor-com/DonorFirst";
import DonorList from "./donor-com/DonorList";

const Donors = () => {
  return (
    <Content>
      {/* <DonorFirst /> */}
      <DonorList />
    </Content>
  );
};

export default Donors;
const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: max-content;
`;
