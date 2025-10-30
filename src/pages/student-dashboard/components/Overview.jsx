import React from "react";
import Firstview from "./overview(com)/Firstview";
import styled from "styled-components";

const Overview = () => {
  return (
    <Content>
      <Firstview />
    </Content>
  );
};

export default Overview;
const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: max-content;
`;
