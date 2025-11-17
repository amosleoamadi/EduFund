import { useSelector } from "react-redux";
import { SetContainer } from "../../../components/styles/studentstyle/StudentsettingStyle";
import { selectStudentId } from "../../../config/slices/studentauthslice";
import { useGetOneUserQuery } from "../../../utils/usersettting";
import DangerZone from "../../student-dashboard/components/studsettings/DangerZone";
import DonorNotiification from "./donorSetting/DonorNotiification";
import DonorProfile from "./donorSetting/DonorProfile";
import LoadingState from "../../modals/loadingstate/LoadingState";

const DonorSetting = () => {
  const userId = useSelector(selectStudentId);
  const { data, isLoading } = useGetOneUserQuery(userId);

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <SetContainer>
      <h3>Settings</h3>
      <p>Manage your account preferences and security</p>
      <DonorProfile data={data} />
      <DonorNotiification />
      <DangerZone />
    </SetContainer>
  );
};

export default DonorSetting;
