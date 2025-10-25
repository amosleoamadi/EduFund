import styled from "styled-components";
import impactBg from "../../../assets/Our impact bg.png";

export const ImpactStyle = styled.section`
  background: url(${impactBg}) center/cover no-repeat;
  color: white;
  padding: 100px 10%;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 1rem;
    opacity: 0.9;
    margin-bottom: 50px;
  }

  .stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }

  .stat {
    min-width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 5px;
    }

    p {
      font-size: 0.95rem;
      opacity: 0.9;
    }
  }

  @media (max-width: 768px) {
    padding: 70px 5%;
    .stats {
      flex-direction: column;
      align-items: center;
      gap: 25px;
    }
  }
`;
