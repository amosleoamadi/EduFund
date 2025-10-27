import React from "react";
import styled from "styled-components";
import FirstWithdraw from "./withdrawal/FirstWithdraw";

const Withdrawals = () => {
  return (
    <Content>
      <FirstWithdraw />
    </Content>
  );
};

export default Withdrawals;
const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: max-content;
`;
