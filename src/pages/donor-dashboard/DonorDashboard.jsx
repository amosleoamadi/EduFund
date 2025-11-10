import React, { useState } from "react";
import {
  DashLayout,
  EduLogo,
  Header,
  MenuButton,
  NotiProf,
  OutletContent,
  SideBarContainer,
  SidebarOverlay,
  StudDash,
  Wrapper,
} from "../../components/styles/studentstyle/StundentDashStyle";
import logo from "../../assets/EduFundLogo.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import DonorSideBar from "./components/DonorSideBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { donorAuth } from "../../utils/donorauth/donorauth";
import { MdLogout } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import styled from "styled-components";
import { persistor } from "../../app/store";
import { AiOutlineMenu } from "react-icons/ai";
import {
  studentFirstname,
  userLogout,
} from "../../config/slices/studentauthslice";

const DonorDashboard = () => {
  const [popup, setPopup] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const firstname = useSelector(studentFirstname);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const LogoutFunction = () => {
    dispatch(userLogout());
    persistor.purge();
    localStorage.removeItem("EmailDetails");
    dispatch(donorAuth.util.resetApiState());
    nav("/login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <StudDash>
      <Header>
        <Wrapper>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <MenuButton onClick={toggleSidebar}>
              <AiOutlineMenu />
            </MenuButton>
            <EduLogo>
              <img src={logo} alt="" />
            </EduLogo>
          </div>
          <NotiProf>
            <div className="notify">
              <IoIosNotificationsOutline />
              <nav>5</nav>
            </div>
            <div className="profile_pic" style={{ position: "relative" }}>
              <div className="pic" onClick={() => setPopup(!popup)}></div>
              <p>{firstname}</p>
            </div>
            {popup && (
              <Dropdown>
                <TopContent>
                  <h3>Dr. Adewale Thompson</h3>
                  <p>amadiamos146@gmail.com</p>
                </TopContent>
                <ProfileSet>
                  <RxPerson style={{ fontSize: "20px" }} />
                  <span>Profile Settings</span>
                </ProfileSet>
                <Logout onClick={LogoutFunction}>
                  <MdLogout style={{ fontSize: "20px" }} />
                  <span>Logout</span>
                </Logout>
              </Dropdown>
            )}
          </NotiProf>
        </Wrapper>
      </Header>
      <DashLayout>
        {isSidebarOpen && <SidebarOverlay onClick={closeSidebar} />}

        <SideBarContainer isOpen={isSidebarOpen}>
          <DonorSideBar onClose={closeSidebar} />
        </SideBarContainer>
        <OutletContent>
          <Outlet />
        </OutletContent>
      </DashLayout>
    </StudDash>
  );
};

export default DonorDashboard;
const Dropdown = styled.div`
  width: 18%;
  height: 170px;
  border-radius: 8px;
  border: 0.909px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 83px;
  right: 60px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 80%;
    right: 10px;
    left: auto;
  }
`;

const TopContent = styled.div`
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  h3 {
    color: #0a0a0a;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
  }

  p {
    color: #6a7282;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
  }
`;

const ProfileSet = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(113, 113, 130, 1);
  cursor: pointer;

  span {
    color: rgb(10, 10, 10);
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
  }
`;

const Logout = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(113, 113, 130, 1);
  cursor: pointer;

  span {
    color: #e7000b;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
  }
`;
