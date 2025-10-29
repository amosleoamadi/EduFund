import styled from "styled-components";
import heroBg from "../../../assets/heroPix.jpg";

export const HeroSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 10%;
  background: url(${heroBg}) center/cover no-repeat;
  color: white;
  flex-wrap: wrap;
  position: relative;

  .heroText {
    flex: 1;
    min-width: 300px;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      line-height: 1.3;
    }

    p {
      font-size: 1rem;
      margin-bottom: 1.5rem;
      opacity: 0.9;
      max-width: 450px;
    }

    .buttons {
      display: flex;
      gap: 15px;

      .primary {
        background: #ff3366;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
      }

      .secondary {
        background: transparent;
        border: 1.5px solid white;
        color: white;
        padding: 10px 20px;
        border-radius: 8px;
        cursor: pointer;
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

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    .buttons {
      justify-content: center;
    }

    .stats {
      justify-content: center;
    }
  }
`;

export const StatsBox = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: normal;
  }

  p {
    font-size: 10px;
    font-weight: normal;
    /* opacity: 0.9; */
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
  bottom: 15%;
  line-height: 13px;

  .icon {
    background: #34a853;
    /* color: white;
    border: none; */
    font-size: 1rem;
    border-radius: 20%;
    width: 30px;
    height: 30px;
    display: flex;
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
    margin: 25px auto 0;
  }
`;
