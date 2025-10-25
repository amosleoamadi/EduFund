import styled from "styled-components";
import heroBg from "../../../assets/heroPix.jpg";

export const HeroSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 10%;
  background: linear-gradient(100deg, #031b88, #0a58ca);
  background: url(${heroBg}) center/cover no-repeat;
  color: white;
  flex-wrap: wrap;

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
  text-align: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }
  p {
    font-size: 0.9rem;
    opacity: 0.9;
  }
`;
