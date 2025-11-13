import React, { useContext } from "react";
import Firstview from "./overview(com)/Firstview";
import styled from "styled-components";
import DashOverview from "./overview(com)/DashOverview";
import { useGetDasboardQuery } from "../../../utils/stundentauth/createcampaignapi";
import { useSelector } from "react-redux";
import { selectStudentId } from "../../../config/slices/studentauthslice";
import LoadingState from "../../modals/loadingstate/LoadingState";
import { AppContext } from "../../../context/AppContext";

const Overview = () => {
  const studentId = useSelector(selectStudentId);
  const { data, isLoading, isError } = useGetDasboardQuery(studentId);
  const { setUserDataGlobal } = useContext(AppContext);

  if (isLoading) {
    return <LoadingState />;
  }

  if (data) {
    setUserDataGlobal({
      firstName: data.data.student.firstName,
      lastName: data.data.student.lastName,
      email: data.data.student.email,
    });
  }

  if (isError || data?.data?.student?.isFullyVerifiedStudent === false) {
    return <Firstview data={data} />;
  }

  return (
    <Content>
      {data?.data?.student?.isFullyVerifiedStudent && (
        <DashOverview data={data} />
      )}
    </Content>
  );
};

export default Overview;
const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: max-content;
`;
