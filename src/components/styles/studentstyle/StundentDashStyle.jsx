import styled from "styled-components";

export const StudDash = styled.main`
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #eff6ff 0%, #fff 50%, #f0fdf4 100%);
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  height: 78px;
  z-index: 20;
  border-bottom: 1.184px solid #e5e7eb;
  background: #fff;
  box-shadow: 0 1.184px 3.553px 0 rgba(0, 0, 0, 0.1),
    0 1.184px 2.368px -1.184px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
`;

export const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EduLogo = styled.div`
  width: 183.719px;
  height: 55.362px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const NotiProf = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .notify {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    font-size: 19px;
    position: relative;
    cursor: pointer;

    nav {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: #fb2c36;
      position: absolute;
      top: -6px;
      left: 9px;
      font-size: 13px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }

  .profile_pic {
    display: flex;
    gap: 10px;
    align-items: center;

    .pic {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-color: gray;
      cursor: pointer;
    }
  }
`;

export const DashLayout = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  overflow: hidden;
`;

export const SideBarContainer = styled.div`
  width: 25%;
  height: calc(100vh - 78px);
  position: sticky;
  top: 78px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OutletContent = styled.section`
  width: 75%;
  height: calc(100vh - 78px);
  overflow-y: auto;
  padding: 35px;
`;
