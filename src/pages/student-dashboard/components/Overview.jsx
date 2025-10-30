import React from "react";
import Firstview from "./overview(com)/Firstview";
import styled from "styled-components";
import DashOverview from "./overview(com)/DashOverview";

const Overview = () => {
  return (
    <Content>
      {/* <Firstview /> */}
      <DashOverview />
    </Content>
  );
};

export default Overview;
const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: max-content;
`;
