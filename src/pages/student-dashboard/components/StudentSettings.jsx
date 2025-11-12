import React from "react";
import { SetContainer } from "../../../components/styles/studentstyle/StudentsettingStyle";
import ProfileCard from "./studsettings/ProfileCard";
import SecurityCard from "./studsettings/SecurityCard";
import NotificationPeference from "./studsettings/NotificationPeference";
import DangerZone from "./studsettings/DangerZone";
import { useGetOneUserQuery } from "../../../utils/usersettting";
import { useSelector } from "react-redux";
import { selectStudentId } from "../../../config/slices/studentauthslice";
import LoadingState from "../../modals/loadingstate/LoadingState";

const StudentSettings = () => {
  const userId = useSelector(selectStudentId);
  const { data, isLoading } = useGetOneUserQuery(userId);

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <SetContainer>
      <h3>Settings</h3>
      <p>Manage your account preferences and security</p>
      <ProfileCard data={data} />
      <SecurityCard />
      <NotificationPeference />
      <DangerZone />
    </SetContainer>
  );
};

export default StudentSettings;
