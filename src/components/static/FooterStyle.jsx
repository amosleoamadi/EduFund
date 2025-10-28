// import styled from "styled-components";

// export const FooterStyle = styled.footer`
//   background-color: #00104e;
//   color: #ffffff;
//   padding: 60px 10% 40px;
//   display: flex;
//   justify-content: center;

//   .footer-container {
//     width: 100%;
//     max-width: 1200px;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     gap: 40px;
//   }

//   .footer-left {
//     flex: 1 1 280px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;

//     .logo {
//       display: flex;
//       align-items: center;
//       gap: 10px;

//       img {
//         width: 35px;
//         height: 35px;
//       }

//       h2 {
//         font-size: 1.3rem;
//         font-weight: 700;
//       }
//     }

//     .description {
//       font-size: 0.95rem;
//       line-height: 1.6;
//       color: #c3c6e6;
//       margin: 20px 0;
//       max-width: 340px;
//     }

//     .copyright {
//       font-size: 0.85rem;
//       color: #9da3c7;
//       margin-top: auto;
//     }
//   }

//   .footer-links {
//     display: flex;
//     flex: 2;
//     justify-content: space-around;
//     /* flex-wrap: wrap; */
//     gap: 80px;

//     .link-group {
//       display: flex;
//       flex-direction: column;
//       min-width: 120px;

//       h4 {
//         font-size: 1rem;
//         font-weight: 600;
//         margin-bottom: 15px;
//         color: #ffffff;
//       }

//       a {
//         color: #aeb5d4;
//         text-decoration: none;
//         font-size: 0.95rem;
//         margin-bottom: 10px;
//         transition: color 0.3s ease;

//         &:hover {
//           color: #ffffff;
//         }
//       }
//     }
//   }

//   .socials {
//     display: flex;
//     align-items: center;
//     gap: 15px;
//     flex-wrap: wrap;
//     margin-top: auto;

//     a {
//       color: #d0d3e9;
//       background-color: rgba(255, 255, 255, 0.08);
//       border-radius: 50%;
//       width: 40px;
//       height: 40px;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       transition: all 0.3s ease;

//       &:hover {
//         background-color: rgba(255, 255, 255, 0.2);
//         color: #ffffff;
//       }
//     }
//   }

//   @media (max-width: 900px) {
//     padding: 50px 8%;

//     .footer-container {
//       flex-direction: column;
//       align-items: center;
//       text-align: center;
//     }

//     .footer-links {
//       justify-content: center;
//       gap: 30px;
//     }

//     .socials {
//       justify-content: center;
//       margin-top: 30px;
//     }

//     .footer-left .description {
//       margin: 15px auto;
//     }
//   }
// `;

import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: #00104e;
  color: #ffffff;
  padding: 60px 10% 40px;
  display: flex;
  justify-content: center;
  border-top: 0.2px solid grey;

  .footer-container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    position: relative;
  }

  .footer-left {
    flex: 1 1 320px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;

      h2 {
        font-size: 1.3rem;
        font-weight: 700;
      }
    }

    .description {
      font-size: 0.95rem;
      line-height: 1.6;
      color: #c3c6e6;
      margin: 20px 0;
      max-width: 340px;
    }

    .copyright {
      font-size: 0.85rem;
      color: #9da3c7;
      margin-top: auto;
    }
  }

  .footer-links {
    display: flex;
    flex: 2;
    justify-content: space-around;
    gap: 80px;

    .link-group {
      display: flex;
      flex-direction: column;

      h4 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 15px;
        color: #ffffff;
      }

      a {
        color: #aeb5d4;
        text-decoration: none;
        font-size: 0.95rem;
        margin-bottom: 10px;
        transition: color 0.3s ease;

        &:hover {
          color: #ffffff;
        }
      }
    }
  }

  /* 👇 This moves the social icons to the bottom right corner */
  .socials {
    position: absolute;
    right: 0;
    bottom: -20px;
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      color: #d0d3e9;
      background-color: rgba(255, 255, 255, 0.08);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        color: #ffffff;
      }
    }
  }

  @media (max-width: 900px) {
    padding: 50px 8%;

    .footer-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: static;
    }

    .footer-links {
      justify-content: center;
      gap: 30px;
    }

    .socials {
      position: static;
      justify-content: center;
      margin-top: 30px;
    }

    .footer-left .description {
      margin: 15px auto;
    }
  }
`;
