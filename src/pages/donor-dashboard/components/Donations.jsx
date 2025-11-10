import React from "react";
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

const Donations = () => {
  const donorId = useSelector(selectStudentId);
  const { data, isLoading } = useGetAllDonorDonationQuery(donorId);

  if (isLoading) {
    return <LoadingState />;
  }

  const dataSet = data?.data;

  const options = {
    year: "numeric",
    month: "long",
  };

  return (
    <div className="donor-donation-container">
      <div className="donor-donation-heading">
        <h1>My Donation</h1>
        <p>Tract all your contributions and their impact </p>
      </div>
      <section className="donor-donation-students">
        {dataSet.length > 0 ? (
          dataSet.map((e) => (
            <div className="fixit">
              <aside
                key={e?.campaignId?._id}
                className="donor-student-credentials"
              >
                <div className="part1">
                  <div className="donor-student-image-profile">
                    <img src="" alt="student image" />
                  </div>
                  <div className="donor-name-credentials">
                    <h2>{e?.receiverId?.fullName}</h2>
                    <p>{e?.campaignId?.course}</p>
                    <p>{e?.campaignId?.schoolName}</p>
                  </div>
                </div>
                <section className="myHelper">
                  <div className="part2">
                    <div className="donor-progress-percent">
                      <p>Campaign Progress</p>
                      <p>{e?.campaignId?.fundedPercentage}%</p>
                    </div>
                    <div className="progress-container">
                      <div className="progress-track">
                        <div
                          className="progress-bar"
                          style={{
                            width: `${e?.campaignId?.fundedPercentage}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div
                      className={
                        e.progressStatus === "Completed"
                          ? "color-green"
                          : "color-blue"
                      }
                    >
                      {e.progressStatusIcon}
                      <p>
                        {e?.campaignId?.target === 100
                          ? "Completed"
                          : "Pending"}
                      </p>
                    </div>
                  </div>
                  <div className="part3">
                    <p className="part3-n1">Your Donations </p>
                    <p className="part3-n2">{e.amount.toLocaleString()}</p>
                    <p className="part3-n3">
                      {new Date(e?.campaignId?.updatedAt).toLocaleString(
                        "en-US",
                        options
                      )}
                    </p>
                  </div>
                </section>
              </aside>
              <aside className="donor-share-profile">
                <div className="forbiden-code">
                  <div>
                    <BiShareAlt size={17} />
                  </div>
                  <div>View Profile</div>
                </div>
              </aside>
            </div>
          ))
        ) : (
          <p>No Student helped yet</p>
        )}
      </section>
      <div className="load-more">Load More Donations</div>
    </div>
  );
};

export default Donations;
