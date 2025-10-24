import React from "react";
import {
  DashLayout,
  EduLogo,
  Header,
  NotiProf,
  StudDash,
  Wrapper,
} from "../../components/styles/studentstyle/StundentDashStyle";
import logo from "../../assets/EduFundLogo.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardStudent = () => {
  return (
    <StudDash>
      <Header>
        <Wrapper>
          <EduLogo>
            <img src={logo} alt="" />
          </EduLogo>
          <NotiProf>
            <div className="notify">
              <IoIosNotificationsOutline />
              <nav>5</nav>
            </div>
            <div className="profile_pic">
              <div className="pic"></div>
              <p>Femi</p>
            </div>
          </NotiProf>
        </Wrapper>
      </Header>
      <DashLayout>
        <Sidebar />
        <Outlet />
      </DashLayout>
    </StudDash>
  );
};

export default DashboardStudent;
