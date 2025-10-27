import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 5rem;
  background-color: #001b5e;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 8%;
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
  gap: 35px;

  .btn {
    color: #f2f2f2;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      color: #00a8ff;
    }
  }

  .actives {
    color: #00a8ff;
    text-decoration: none;
    font-weight: 500;
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
    transition: all 0.3s ease;
  }

  .sign-in {
    background: transparent;
    border: 1.5px solid #fff;
    color: #fff;
    padding: 8px 18px;
    display: flex;
    align-items: center;
    gap: 6px;

    .icon {
      font-size: 1rem;
    }

    &:hover {
      background: #fff;
      color: #001b5e;
    }
  }

  .sign-up {
    background-color: #00a8ff;
    color: #fff;
    border: none;
    padding: 8px 18px;

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
  right: 0;
  background-color: #fff;
  color: #001b5e;
  border-radius: 8px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  min-width: 180px;
  overflow: hidden;
  z-index: 1000;

  nav {
    padding: 10px 15px;
    text-decoration: none;
    color: #001b5e;
    font-weight: 500;
    font-size: 0.9rem;
    transition: 0.3s;

    &:hover {
      background-color: #f5f5f5;
      color: #007bff;
    }
  }
`;
