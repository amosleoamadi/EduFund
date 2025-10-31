import React from "react";
import { SetContainer } from "../../../components/styles/studentstyle/StudentsettingStyle";
import ProfileCard from "./studsettings/ProfileCard";
import SecurityCard from "./studsettings/SecurityCard";
import NotificationPeference from "./studsettings/NotificationPeference";
import DangerZone from "./studsettings/DangerZone";

const StudentSettings = () => {
  return (
    <SetContainer>
      <h3>Settings</h3>
      <p>Manage your account preferences and security</p>
      <ProfileCard />
      <SecurityCard />
      <NotificationPeference />
      <DangerZone />
    </SetContainer>
  );
};

export default StudentSettings;
