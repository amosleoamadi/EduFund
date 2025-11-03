import styled from "styled-components";
import heroBg from "../../../assets/heroPix.jpg";

export const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 6%;
  background: url(${heroBg}) center center / cover no-repeat;
  color: white;
  flex-wrap: wrap;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.15) 5.95px 5.95px 6.6px;
  transition: background-position 0.3s ease;

  .heroText {
    flex: 1;
    min-width: 300px;
    margin-top: 2.5%;

    h1 {
      font-size: 3.3rem;
      margin-bottom: 1rem;
      line-height: 1.3;
    }

    .connector {
      width: 100%;
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      opacity: 0.9;
      max-width: 450px;
    }

    .buttons {
      display: flex;
      gap: 10%;
      margin-top: 12%;
      width: 80%;

      .primary {
        width: 45%;
        background: #ff3366;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
          background: #920640;
          transition: all 350ms ease-in-out;
        }
      }

      .secondary {
        width: 45%;
        background: transparent;
        border: 1.5px solid white;
        color: white;
        padding: 10px 15px;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
          background: white;
          color: #001145;
          transition: all 350ms ease-in-out;
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
    flex: 1;
    display: flex;
    justify-content: center;
    img {
      width: 90%;
      max-width: 400px;
      border-radius: 10px;
    }
  }

  @media (max-width: 1024px) {
    background-position: top center;
    height: auto;
    padding: 100px 5%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    height: auto;
    padding: 100px 5% 60px;
    background: linear-gradient(rgba(0, 17, 69, 0.85), rgba(0, 17, 69, 0.85)),
      url(${heroBg}) center top / cover no-repeat;

    .heroText {
      h1 {
        font-size: 2rem;
      }

      .connector {
        font-size: 1rem;
        max-width: 100%;
      }

      .buttons {
        flex-direction: column;
        gap: 15px;
        align-items: center;
        width: 100%;

        .primary,
        .secondary {
          width: 80%;
          font-size: 0.95rem;
          padding: 12px;
        }
      }

      .stats {
        justify-content: center;
        margin-top: 30px;
      }
    }

    .heroImage {
      margin-top: 30px;
      img {
        width: 100%;
        max-width: 350px;
      }
    }
  }

  @media (max-width: 480px) {
    background-position: center top;
    background-size: cover;
    padding: 80px 4% 40px;

    .heroText h1 {
      font-size: 1.8rem;
    }

    .connector {
      font-size: 0.95rem;
    }

    .buttons {
      .primary,
      .secondary {
        width: 100%;
      }
    }

    .stats {
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }
  }
`;

export const StatsBox = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2;
  align-items: center;

  h3 {
    font-size: 1.1rem;
    font-weight: normal;
  }

  p {
    font-size: 9px;
    font-weight: normal;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.7rem;
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
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    position: static;
    margin: 25px auto 0;
  }
`;
