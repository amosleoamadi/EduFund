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

  @media (max-width: 768px) {
    height: 70px;
  }
`;

export const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #0a0a0a;
  z-index: 30;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: flex;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NotiProf = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

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

    @media (max-width: 768px) {
      gap: 8px;
    }

    p {
      @media (max-width: 768px) {
        display: none;
      }
    }

    .pic {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-color: gray;
      cursor: pointer;

      @media (max-width: 480px) {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

export const DashLayout = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  overflow: hidden;

  @media (max-width: 768px) {
    position: relative;
  }
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

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: 0;
    width: 70%;
    height: calc(100vh - 70px);
    background: white;
    z-index: 25;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    width: 60%;
  }
`;

export const SidebarOverlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    background: rgba(0, 0, 0, 0.5);
    z-index: 24;
    animation: fadeIn 0.3s ease-in-out;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export const OutletContent = styled.section`
  width: 75%;
  height: calc(100vh - 78px);
  overflow-y: auto;
  padding: 35px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    height: calc(100vh - 70px);
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;
