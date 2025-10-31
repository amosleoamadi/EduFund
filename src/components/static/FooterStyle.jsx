import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: #001145;
  color: #ffffff;
  padding: 60px 7%;
  display: flex;
  justify-content: center;
  border-top: 0.2px solid grey;

  .footer-container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    position: relative;
  }

  .footer-left {
    flex: 3;
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
      font-size: 0.98rem;
      line-height: 2;
      color: #c3c6e6;
      margin: 20px 0;
      max-width: 400px;
    }

    .copyright {
      font-size: 0.98rem;
      color: #9da3c7;
      margin-top: 60px;
    }
  }

  .footer-links {
    display: flex;
    flex: 5;
    justify-content: space-around;
    gap: 80px;

    /* background: #000; */

    .link-group {
      display: flex;
      flex-direction: column;
      line-height: 2;

      h4 {
        font-size: 1rem;
        font-weight: normal;
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
