import React from "react";
import styled from "styled-components";
import DonorFirst from "./donor-com/DonorFirst";
import DonorList from "./donor-com/DonorList";
import { useGetAllDonorQuery } from "../../../utils/stundentauth/getdonor";
import { useSelector } from "react-redux";
import { selectStudentId } from "../../../config/slices/studentauthslice";
import LoadingState from "../../modals/loadingstate/LoadingState";

const Donors = () => {
  const studentId = useSelector(selectStudentId);
  const { data, isLoading, isError } = useGetAllDonorQuery(studentId);

  if (isLoading) {
    return <LoadingState />;
  }
  if (isError || data?.data?.length === 0) {
    return <DonorFirst />;
  }
  return (
    <Content>{data?.data?.length > 0 && <DonorList data={data} />}</Content>
  );
};

export default Donors;
const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: max-content;
`;
