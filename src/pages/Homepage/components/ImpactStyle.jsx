import styled from "styled-components";
import impactBg from "../../../assets/Section.jpg";

export const ImpactStyle = styled.section`
  background: url(${impactBg}) center/cover no-repeat;
  color: #fff;
  padding: 100px 10%;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 700;
  }

  .subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 50px;
  }

  .stats {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 60px;
  }

  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 150px;

    h3 {
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 5px;
    }

    p {
      font-size: 1rem;
      opacity: 0.9;
    }
  }

  @media (max-width: 768px) {
    padding: 70px 5%;
    h2 {
      font-size: 1.9rem;
    }

    .subtitle {
      font-size: 1rem;
      margin-bottom: 40px;
    }

    .stats {
      gap: 35px;
      flex-wrap: wrap;
    }

    .stat {
      h3 {
        font-size: 1.7rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }
`;
