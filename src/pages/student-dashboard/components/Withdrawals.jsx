import React from "react";
import styled from "styled-components";
import FirstWithdraw from "./withdrawal/FirstWithdraw";
import { useGetTotalWalletBalQuery } from "../../../utils/stundentauth/walletbalapi";
import { useSelector } from "react-redux";
import { selectStudentId } from "../../../config/slices/studentauthslice";
import LoadingState from "../../modals/loadingstate/LoadingState";

const Withdrawals = () => {
  const studentId = useSelector(selectStudentId);
  const { data, isLoading } = useGetTotalWalletBalQuery(studentId);

  if (isLoading) {
    return <LoadingState />;
  }

  console.log(data);

  return (
    <Content>
      <FirstWithdraw data={data} />
    </Content>
  );
};

export default Withdrawals;
const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: max-content;
`;
