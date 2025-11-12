import React, { useState } from "react";
import { AppContext } from "./AppContext";
import StudentLinkShare from "../pages/modals/StudentLinkShare";
import CampaignCreation from "../pages/modals/steps/CampaignCreation";
import WithdrawalReq from "../pages/modals/WithdrawalReq";

const ContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [campaigncreate, setCampaignCreate] = useState(false);
  const [campaignData, setCampaignData] = useState(null);
  const [secondWith, setSecondWith] = useState(false);
  const [campaignSucess, setCampaignSucess] = useState(false);
  const [dispatched, setDispatched] = useState(null);

  const [profileImage, setProfileImage] = useState(null);
  const [userInitials, setUserInitials] = useState("U");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const openModal = (data) => {
    setModalData(data || null);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalData(null);
    setModalOpen(false);
  };

  const openCampaign = (data) => {
    setCampaignData(data || null);
    setCampaignCreate(true);
  };

  const closeCampaign = () => {
    setCampaignCreate(false);
    setCampaignData(null);
  };

  const setProfileImageGlobal = (imageUrl) => {
    setProfileImage(imageUrl);
  };

  const removeProfileImageGlobal = () => {
    setProfileImage(null);
  };

  const setUserDataGlobal = (userData) => {
    const { firstName, lastName, email } = userData;
    const initials =
      `${firstName?.charAt(0) || ""}${
        lastName?.charAt(0) || ""
      }`.toUpperCase() || "U";

    setUserName(`${firstName || ""} ${lastName || ""}`.trim());
    setUserInitials(initials);
    setUserEmail(email || "");
  };

  const updateUserInitialsGlobal = (initials) => {
    setUserInitials(initials);
  };

  return (
    <AppContext.Provider
      value={{
        openModal,
        closeModal,
        openCampaign,
        closeCampaign,
        setSecondWith,
        campaignSucess,
        setCampaignSucess,
        setDispatched,
        profileImage,
        userInitials,
        userName,
        userEmail,
        setProfileImageGlobal,
        removeProfileImageGlobal,
        setUserDataGlobal,
        updateUserInitialsGlobal,
      }}
    >
      {children}
      {modalOpen && <StudentLinkShare data={modalData} onClose={closeModal} />}
      {campaigncreate && <CampaignCreation datas={campaignData} />}
      {secondWith && <WithdrawalReq dispatched={dispatched} />}
    </AppContext.Provider>
  );
};

export default ContextProvider;
