import React from "react";
import styled from "styled-components";
import FirstCampaign from "./campaign/FirstCampaign";
import ActiveCampaing from "./campaign/ActiveCampaing";
import { useGetallCampaignQuery } from "../../../utils/stundentauth/createcampaignapi";
import { useSelector } from "react-redux";
import { selectStudentId } from "../../../config/slices/studentauthslice";
import LoadingState from "../../modals/loadingstate/LoadingState";

const MyCampaign = () => {
  const studentId = useSelector(selectStudentId);
  const { data, isLoading, isError } = useGetallCampaignQuery(studentId);
  console.log("My datas", data);

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <Hero>
      {data?.data?.length ? <ActiveCampaing data={data} /> : <FirstCampaign />}
    </Hero>
  );
};

export default MyCampaign;
const Hero = styled.div`
  width: 100%;
  height: 100%;
  min-height: max-content;
`;
