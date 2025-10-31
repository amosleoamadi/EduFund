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
  width: 150px;
  height: 80px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  .btn {
    color: #f2f2f2;
    text-decoration: none;
    font-weight: normal;
    font-size: 1rem;
    cursor: pointer;
    transition: all 350ms ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }

  .actives {
    text-decoration: underline;
    font-weight: normal;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
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
    transition: all 350ms ease-in-out;
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
    font-weight: normal;
    transition: all 350ms ease-in-out;

    &:hover {
      background-color: #0090db;
    }
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
  /* transform: translateY(-10px); */
  transition: all 350ms ease-in-out;
  z-index: 1000;

  &.show {
    opacity: 1;
    visibility: visible;
    /* transform: translateY(0); */
    transform: translateX(-50%) translateY(0);
  }

  nav {
    padding: 10px 15px;
    text-decoration: none;
    color: #001145;
    font-weight: normal;
    font-size: 0.9rem;
    transition: all 350ms ease-in-out;
    cursor: pointer;

    &:hover {
      color: #007bff;
    }
  }
`;
