import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectStundentToken } from "../config/slices/studentauthslice";

const PrivateRoute = () => {
  const studentToken = useSelector(selectStundentToken);
  return <>{studentToken ? <Outlet /> : <Navigate to={"/login"} />}</>;
};

export default PrivateRoute;
