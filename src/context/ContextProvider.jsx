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
  const [savedData, setSavedData] = useState(null);

  // Profile management by user ID
  const [profileImages, setProfileImages] = useState({});
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

  const setProfileImageGlobal = (userId, imageUrl) => {
    setProfileImages((prev) => ({
      ...prev,
      [userId]: imageUrl,
    }));
  };

  // Remove profile image for a specific user
  const removeProfileImageGlobal = (userId) => {
    setProfileImages((prev) => {
      const updated = { ...prev };
      delete updated[userId];
      return updated;
    });
  };

  // Get profile image for a specific user
  const getProfileImageGlobal = (userId) => {
    return profileImages[userId] || null;
  };

  // Set current user data (for the logged-in user)
  const setUserDataGlobal = (userData) => {
    const { firstName, lastName, email, _id } = userData;
    const initials =
      `${firstName?.charAt(0) || ""}${
        lastName?.charAt(0) || ""
      }`.toUpperCase() || "U";

    setUserName(`${firstName || ""} ${lastName || ""}`.trim());
    setUserInitials(initials);
    setUserEmail(email || "");

    // If user has an avatar, set it in profileImages
    if (userData.avatar && _id) {
      setProfileImages((prev) => ({
        ...prev,
        [_id]: userData.avatar,
      }));
    }
  };

  // Update current user initials
  const updateUserInitialsGlobal = (initials) => {
    setUserInitials(initials);
  };

  // Bulk set profile images (useful when loading multiple users)
  const setBulkProfileImages = (imagesMap) => {
    setProfileImages((prev) => ({
      ...prev,
      ...imagesMap,
    }));
  };

  // Clear all profile images (useful for logout)
  const clearAllProfileImages = () => {
    setProfileImages({});
  };

  return (
    <AppContext.Provider
      value={{
        openModal,
        closeModal,
        openCampaign,
        closeCampaign,

        // Campaign state
        setSecondWith,
        campaignSucess,
        setCampaignSucess,
        setDispatched,

        // Current user data
        userInitials,
        userName,
        userEmail,
        savedData,
        setSavedData,

        // Profile image management
        profileImages,
        setProfileImageGlobal,
        removeProfileImageGlobal,
        getProfileImageGlobal,
        setBulkProfileImages,
        clearAllProfileImages,

        // User data management
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
