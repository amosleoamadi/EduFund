import styled from "styled-components";
import heroBg from "../../../assets/heroPix.jpg";
import heroBgMobile from "../../../assets/Hero Section BG.png";

export const HeroSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 6%;
  background: url(${heroBg}) center center / cover no-repeat;
  color: white;
  position: relative;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.15) 5.95px 5.95px 6.6px;
  transition: background-position 0.3s ease;

  .heroText {
    flex: 1 1 500px;
    max-width: 600px;
    margin-top: 2.5%;

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      line-height: 1.3;
    }

    .connector {
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      opacity: 0.9;
      max-width: 450px;
    }

    .buttons {
      display: flex;
      gap: 20px;
      margin-top: 20px;
      flex-wrap: wrap;

      .primary,
      .secondary {
        flex: 1 1 45%;
        padding: 12px 20px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1rem;
        border: none;
        text-align: center;
        transition: all 0.3s ease;
      }

      .primary {
        background: #ff3366;
        color: white;

        &:hover {
          background: #920640;
        }
      }

      .secondary {
        background: transparent;
        border: 1.5px solid white;
        color: white;

        &:hover {
          background: white;
          color: #001145;
        }
      }
    }

    .stats {
      display: flex;
      gap: 20px;
      margin-top: 40px;
      flex-wrap: wrap;
    }
  }

  .heroImage {
    flex: 1 1 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    img {
      width: 100%;
      max-width: 400px;
      border-radius: 10px;
    }
  }

  .donationPopup {
    position: absolute;
    right: 5%;
    bottom: 10%;
  }

  @media (max-width: 1024px) {
    background-position: top center;
    padding: 80px 5%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 100px 5% 60px;
    background: url(${heroBgMobile}) center center / cover no-repeat;

    .heroText {
      margin: 0 auto;

      h1 {
        font-size: 2rem;
      }

      .connector {
        font-size: 1rem;
        max-width: 100%;
      }

      .buttons {
        gap: 15px;
      }

      .stats {
        justify-content: center;
        margin-top: 30px;
      }
    }

    .heroImage {
      margin-top: 30px;
      img {
        max-width: 350px;
      }
    }

    .donationPopup {
      left: 50%;
      transform: translateX(-50%);
      bottom: 5%;
      position: absolute;
    }
  }

  @media (max-width: 480px) {
    padding: 80px 4% 40px;

    .heroText h1 {
      font-size: 1.8rem;
    }

    .connector {
      font-size: 0.95rem;
    }

    .stats {
      gap: 15px;
    }

    .heroImage img {
      max-width: 100%;
    }
  }
`;

export const StatsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.5;

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
  }

  p {
    font-size: 0.85rem;
    margin: 0;
    color: rgba(255, 255, 255, 0.85);
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.75rem;
    }
  }
`;

export const DonationPopup = styled.div`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: fit-content;
  transition: all 0.3s ease;
  cursor: default;
  position: absolute;
  right: 36%;
  bottom: 17%;
  line-height: 13px;

  .love {
    font-size: 1rem;
    color: white;
    background: #34a853;
    border-radius: 20%;
    width: 30px;
    height: 30px;
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }

  .text {
    h4 {
      margin: 0;
      font-size: 0.7rem;
      color: black;
      font-weight: normal;
    }
    p {
      margin: 0;
      font-size: 0.55rem;
      color: gray;
      font-weight: normal;
    }
  }

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    position: absolute;
    margin-left: 5%;
    left: 0;
    right: 0;
    bottom: 5%;
  }
`;
