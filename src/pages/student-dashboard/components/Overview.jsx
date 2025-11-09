import React from "react";
import Firstview from "./overview(com)/Firstview";
import styled from "styled-components";
import DashOverview from "./overview(com)/DashOverview";
import { useGetDasboardQuery } from "../../../utils/stundentauth/createcampaignapi";
import { useSelector } from "react-redux";
import { selectStudentId } from "../../../config/slices/studentauthslice";
import LoadingState from "../../modals/loadingstate/LoadingState";

const Overview = () => {
  const studentId = useSelector(selectStudentId);
  const { data, isLoading, isError } = useGetDasboardQuery(studentId);

  if (isLoading) {
    return <LoadingState />;
  }

  if (isError || !data?.data?.activeCampaign) {
    return <Firstview data={data} />;
  }

  return (
    <Content>
      {data?.data?.activeCampaign && <DashOverview data={data} />}
    </Content>
  );
};

export default Overview;
const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: max-content;
`;
