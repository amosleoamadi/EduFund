import React, { useContext } from "react";
import "../../../components/styles/Donation.css";
import { MdOutlineFilterAlt } from "react-icons/md";
import { LuClock2 } from "react-icons/lu";
import { BiShareAlt } from "react-icons/bi";
import { CiCircleCheck } from "react-icons/ci";
import demo from "../../../assets/Chioma.jpg";
import ibra from "../../../assets/Ibrahhim.jpg";
import con from "../../../assets/Container.png";
import { useGetAllDonorDonationQuery } from "../../../utils/donorauth/donoropayment";
import { useSelector } from "react-redux";
import { selectStudentId } from "../../../config/slices/studentauthslice";
import LoadingState from "../../modals/loadingstate/LoadingState";
import { AppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Donations = () => {
  const donorId = useSelector(selectStudentId);
  const { data, isLoading } = useGetAllDonorDonationQuery(donorId);
  const { getProfileImageGlobal, openModal } = useContext(AppContext);
  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingState />;
  }

  const dataSet = data?.data || [];

  const options = {
    year: "numeric",
    month: "long",
  };

  // Function to get student avatar
  const getStudentAvatar = (student) => {
    if (!student?.receiverId?._id) return null;
    const profileImage = getProfileImageGlobal(student.receiverId._id);
    if (profileImage) return profileImage;
    if (student.receiverId.avatar) return student.receiverId.avatar;
    return null;
  };

  // Function to get student initials
  const getStudentInitials = (student) => {
    if (!student?.receiverId?.fullName) return "U";
    return student.receiverId.fullName
      .split(" ")
      .map((name) => name.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Function to get student name
  const getStudentName = (student) => {
    return student?.receiverId?.fullName || "Unknown Student";
  };

  return (
    <div className="donor-donation-container">
      <div className="donor-donation-heading">
        <h1>My Donation</h1>
        <p>Tract all your contributions and their impact </p>
      </div>
      <section className="donor-donation-students">
        {dataSet && dataSet.length > 0 ? (
          dataSet.map((e) => {
            const studentAvatar = getStudentAvatar(e);
            const studentInitials = getStudentInitials(e);
            const studentName = getStudentName(e);

            return (
              <div className="fixit" key={e?._id}>
                <aside className="donor-student-credentials">
                  <div className="part1">
                    <div className="donor-student-image-profile">
                      {studentAvatar ? (
                        <img
                          src={studentAvatar}
                          alt={`${studentName} profile`}
                          className="profile-image"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                      ) : (
                        <div
                          className="profile-initials"
                          style={{ display: studentAvatar ? "none" : "flex" }}
                        >
                          {studentInitials}
                        </div>
                      )}
                    </div>
                    <div className="donor-name-credentials">
                      <h2>{studentName}</h2>
                      <p>{e?.campaignId?.course}</p>
                      <p>{e?.campaignId?.schoolName}</p>
                    </div>
                  </div>
                  <section className="myHelper">
                    <div className="part2">
                      <div className="donor-progress-percent">
                        <p>Campaign Progress</p>
                        <p>{e?.campaignId?.fundedPercentage || 0}%</p>
                      </div>
                      <div className="progress-container">
                        <div className="progress-track">
                          <div
                            className="progress-bar"
                            style={{
                              width: `${e?.campaignId?.fundedPercentage || 0}%`,
                            }}
                          ></div>
                        </div>
                      </div>

                      <div
                        className={
                          (e?.campaignId?.fundedPercentage || 0) >= 100
                            ? "color-green"
                            : "color-blue"
                        }
                      >
                        <CiCircleCheck />
                        <p>
                          {(e?.campaignId?.fundedPercentage || 0) >= 100
                            ? "Completed"
                            : "Pending"}
                        </p>
                      </div>
                    </div>
                    <div className="part3">
                      <p className="part3-n1">Your Donations </p>
                      <p className="part3-n2">₦{e?.amount?.toLocaleString()}</p>
                      <p className="part3-n3">
                        {e?.campaignId?.updatedAt
                          ? new Date(e.campaignId.updatedAt).toLocaleString(
                              "en-US",
                              options
                            )
                          : "Date not available"}
                      </p>
                    </div>
                  </section>
                </aside>
                <aside className="donor-share-profile">
                  <div className="forbiden-code">
                    <div onClick={() => openModal(e.campaignId)}>
                      <BiShareAlt size={17} />
                    </div>
                    <div
                      onClick={() =>
                        navigate(
                          `/donor_dashboard/student_detail/${e.campaignId._id}`
                        )
                      }
                    >
                      View Profile
                    </div>
                  </div>
                </aside>
              </div>
            );
          })
        ) : (
          <p>No Student helped yet</p>
        )}
      </section>
      <div className="load-more">Load More Donations</div>
    </div>
  );
};

export default Donations;
