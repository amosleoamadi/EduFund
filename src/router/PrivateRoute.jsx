import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectStundentToken } from "../config/studentslices/studentauthslice";
import { selectDonorToken } from "../config/donorslices/donorslice";

const PrivateRoute = () => {
  const studentToken = useSelector(selectStundentToken);
  const donorToken = useSelector(selectDonorToken);
  return <>{studentToken || donorToken ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default PrivateRoute;
