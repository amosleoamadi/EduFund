import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: #001145;
  color: #ffffff;
  padding: 60px 7% 30px;
  border-top: 0.2px solid rgba(255, 255, 255, 0.1);

  .footer-container {
    max-width: 1200px;
    margin: 0 auto 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 60px;
    flex-wrap: wrap;
  }

  .footer-left {
    flex: 1.5;
    min-width: 250px;

    .description {
      font-size: 0.95rem;
      line-height: 1.8;
      color: #c3c6e6;
      margin-top: 15px;
      max-width: 380px;
    }
  }

  .footer-links {
    flex: 2.5;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    min-width: 350px;

    .link-group {
      display: flex;
      flex-direction: column;
      line-height: 2;

      h4 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 10px;
        color: #ffffff;
      }

      a {
        color: #aeb5d4;
        text-decoration: none;
        font-size: 0.95rem;
        margin-bottom: 5px;
        transition: color 0.3s ease;

        &:hover {
          color: #ffffff;
        }
      }
    }
  }

  .footer-bottom {
    border-top: 0.1px solid rgba(255, 255, 255, 0.1);
    padding-top: 25px;
    display: flex;

    align-items: center;
    justify-content: space-between;
    text-align: center;

    .copyright {
      font-size: 0.95rem;
      color: #9da3c7;
    }

    .socials {
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
  }

  @media (max-width: 900px) {
    padding: 50px 8% 30px;

    .footer-container {
      align-items: center;

      text-align: left;
      gap: 40px;
    }

    .footer-links {
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
    }

    .footer-bottom {
      flex-direction: column;
      gap: 20px;
    }
  }
`;
