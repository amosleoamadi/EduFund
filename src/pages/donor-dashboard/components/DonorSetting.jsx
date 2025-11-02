import { SetContainer } from "../../../components/styles/studentstyle/StudentsettingStyle";
import DangerZone from "../../student-dashboard/components/studsettings/DangerZone";
import DonorNotiification from "./donorSetting/DonorNotiification";
import DonorProfile from "./donorSetting/DonorProfile";

const DonorSetting = () => {
  return (
    <SetContainer>
      <h3>Settings</h3>
      <p>Manage your account preferences and security</p>
      <DonorProfile />
      <DonorNotiification />
      <DangerZone />
    </SetContainer>
  );
};

export default DonorSetting;
