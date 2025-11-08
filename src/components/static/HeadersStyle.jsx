// import styled from "styled-components";

// export const Nav = styled.nav`
//   width: 100%;
//   height: 4.5rem;
//   background-color: #001145;
//   color: #fff;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 5%;
//   position: sticky;
//   top: 0;
//   z-index: 999;
// `;

// export const Logo = styled.div`
//   width: 130px;
//   height: 60px;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//   }
// `;

// export const NavLinks = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 45px;

//   .btn {
//     color: #f2f2f2;
//     font-size: 1rem;
//     cursor: pointer;
//     transition: color 0.3s ease;

//     &:hover {
//       text-decoration: underline;
//     }
//   }

//   .actives {
//     text-decoration: underline;
//   }

//   @media (max-width: 900px) {
//     display: none;
//   }
// `;

// export const NavButtons = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 15px;

//   button {
//     cursor: pointer;
//     font-size: 0.95rem;
//     font-weight: 500;
//     border-radius: 8px;
//     transition: all 0.3s ease;
//   }

//   .sign-in {
//     background: transparent;
//     border: 2px solid #fff;
//     color: #fff;
//     padding: 7px 10px;
//     display: flex;
//     align-items: center;
//     gap: 6px;

//     .icon {
//       font-size: 1rem;
//     }

//     &:hover {
//       background-color: rgba(255, 255, 255, 0.1);
//     }
//   }

//   .sign-up {
//     background-color: #00a8ff;
//     color: #fff;
//     border: none;
//     font-size: 0.9rem;
//     padding: 9px 19px;

//     &:hover {
//       background-color: #0090db;
//     }
//   }

//   @media (max-width: 900px) {
//     display: none;
//   }
// `;

// export const Dropdown = styled.div`
//   position: relative;
// `;

// export const DropdownMenu = styled.div`
//   position: absolute;
//   top: 45px;
//   left: 50%;
//   transform: translateX(-50%) translateY(-10px);
//   background-color: #fff;
//   color: black;
//   border-radius: 8px;
//   padding: 10px 0;
//   border: 1px solid #00a8ff;
//   box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
//   display: flex;
//   flex-direction: column;
//   min-width: 180px;
//   opacity: 0;
//   visibility: hidden;
//   transition: all 0.3s ease;
//   z-index: 1000;

//   &.show {
//     opacity: 1;
//     visibility: visible;
//     transform: translateX(-50%) translateY(0);
//   }

//   nav {
//     padding: 10px 15px;
//     color: #001145;
//     font-size: 0.9rem;
//     cursor: pointer;

//     &:hover {
//       color: #007bff;
//       background-color: rgba(0, 168, 255, 0.1);
//     }
//   }
// `;

// export const MobileMenuIcon = styled.div`
//   display: none;
//   color: #fff;
//   font-size: 1.8rem;
//   cursor: pointer;

//   @media (max-width: 900px) {
//     display: block;
//   }
// `;

// export const MobileMenu = styled.div`
//   background-color: #001145;
//   color: #fff;
//   position: fixed;
//   top: 4.5rem;
//   left: 0;
//   width: 100%;
//   height: ${({ open }) => (open ? "100vh" : "0")};
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: ${({ open }) => (open ? "flex-start" : "center")};
//   gap: 25px;
//   padding-top: ${({ open }) => (open ? "40px" : "0")};
//   transition: all 0.3s ease;
//   z-index: 998;

//   .mobile-link {
//     font-size: 1.1rem;
//     font-weight: 500;
//     cursor: pointer;
//     transition: color 0.3s ease;

//     &:hover {
//       color: #00a8ff;
//     }
//   }

//   .mobile-btn {
//     font-size: 1rem;
//     font-weight: 500;
//     border-radius: 6px;
//     width: 80%;
//     padding: 10px;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     text-align: center;
//   }

//   .sign-in {
//     background: transparent;
//     border: 2px solid #fff;
//     color: #fff;

//     &:hover {
//       background-color: rgba(255, 255, 255, 0.15);
//     }
//   }

//   .sign-up {
//     background-color: #00a8ff;
//     color: #fff;
//     border: none;

//     &:hover {
//       background-color: #0090db;
//     }
//   }

//   @media (min-width: 901px) {
//     display: none;
//   }
// `;

import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 4.5rem;
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
  gap: 45px;

  .btn {
    color: #f2f2f2;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  }

  .actives {
    text-decoration: underline;
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

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
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
  padding: 10px 0;
  border: 1px solid #00a8ff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  min-width: 180px;
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
      background-color: rgba(0, 168, 255, 0.1);
    }
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  background-color: #001145;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  max-width: 320px;
  height: 100vh;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  z-index: 2000;

  .mobile-link {
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.3s ease;
    margin: 1.2rem 0;

    &:hover {
      color: #00a8ff;
    }
  }

  .mobile-btn {
    font-size: 1rem;
    font-weight: 500;
    border-radius: 6px;
    width: 100%;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    margin-top: 0.5rem;
  }

  .sign-in {
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 5px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }

  .sign-up {
    background-color: #00a8ff;
    color: #fff;
    border: none;
    width: 100%;

    &:hover {
      background-color: #0090db;
    }
  }

  @media (min-width: 901px) {
    display: none;
  }
`;

export const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding-bottom: 1rem;

  /* .close {
    font-size: 5.5rem;
    cursor: pointer;

    &:hover {
      color: #00a8ff;
    }
  } */
`;

export const MobileLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  img {
    width: 128px;
    height: 128px;
    object-fit: contain;
  }
`;

export const MobileDropdown = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  margin-top: 0.5rem;
  animation: slideDown 0.25s ease forwards;

  nav {
    padding: 10px 12px;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background 0.25s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
