import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 4rem;
  background-color: #001145;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Logo = styled.div`
  width: 130px;
  height: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  .btn {
    color: #f2f2f2;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  }

  .actives {
    text-decoration: underline;
    font-weight: 500;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  button {
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 500;
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .sign-in {
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
    padding: 7px 10px;
    display: flex;
    align-items: center;
    gap: 6px;

    .icon {
      font-size: 1rem;
    }
  }

  .sign-up {
    background-color: #00a8ff;
    color: #fff;
    border: none;
    font-size: 0.9rem;
    padding: 9px 19px;

    &:hover {
      background-color: #0090db;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 45px;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  background-color: #fff;
  color: black;
  border-radius: 8px;
  padding: 18px 35px 18px 10px;
  border: 2px solid #0090db;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  min-width: 180px;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;

  &.show {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }

  nav {
    padding: 10px 15px;
    color: #001145;
    font-size: 0.9rem;
    cursor: pointer;

    &:hover {
      color: #007bff;
    }
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 65px;
    right: 0;
    width: 100%;
    background: #001145;
    border-top: 1px solid #007bff;
    padding: 15px 0;
    z-index: 998;

    .mobile-link {
      color: #fff;
      text-align: center;
      padding: 12px 0;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: #002080;
      }
    }

    .mobile-btn {
      margin: 10px auto;
      padding: 8px 20px;
      border-radius: 8px;
      border: none;
      color: #fff;
      width: 80%;
    }

    .sign-in {
      background: transparent;
      border: 1.5px solid #fff;
    }

    .sign-up {
      background: #00a8ff;
    }
  }
`;
