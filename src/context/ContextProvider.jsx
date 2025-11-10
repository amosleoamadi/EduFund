import React, { useState } from "react";
import { AppContext } from "./AppContext";
import StudentLinkShare from "../pages/modals/StudentLinkShare";
import CampaignCreation from "../pages/modals/steps/CampaignCreation";
import RequestWithdraw from "../pages/modals/RequestWithdraw";
import WithdrawalReq from "../pages/modals/WithdrawalReq";

const ContextProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [campaigncreate, setCampaignCreate] = useState(false);
  const [campaignData, setCampaignData] = useState(null);
  const [secondWith, setSecondWith] = useState(false);
  const [campaignSucess, setCampaignSucess] = useState(false);

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
      }}
    >
      {children}
      {modalOpen && <StudentLinkShare data={modalData} onClose={closeModal} />}
      {campaigncreate && <CampaignCreation datas={campaignData} />}
    </AppContext.Provider>
  );
};

export default ContextProvider;
