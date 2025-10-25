import styled from "styled-components";

export const HowItWorksStyle = styled.section`
  width: 100%;
  background: #f9fbff;
  padding: 80px 10%;
  text-align: center;
  color: #0a1a3f;

  h2 {
    font-size: 2.2rem;
    font-weight: 700;
    color: #0a1a3f;
    margin-bottom: 10px;
  }

  > p {
    color: #445;
    margin-bottom: 60px;
    font-size: 1.1rem;
  }

  .steps-container {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 30px;
    flex-wrap: wrap;
  }

  .step-card {
    position: relative;
    flex: 1;
    min-width: 280px;
    max-width: 340px;
    background: #fff;
    border-radius: 20px;
    padding: 50px 25px 35px;
    box-shadow: 0px 8px 20px rgba(0, 50, 150, 0.08);
    transition: all 0.3s ease;
    text-align: left;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0px 10px 25px rgba(0, 70, 200, 0.15);
    }
  }

  .step-number {
    position: absolute;
    top: -15px;
    left: 25px;
    width: 35px;
    height: 35px;
    background: #0b57d0;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.9rem;
    box-shadow: 0 4px 8px rgba(0, 50, 150, 0.3);
  }

  .icon {
    background: linear-gradient(135deg, #2e7bff, #0048ff);
    color: #fff;
    width: 60px;
    height: 60px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    margin-bottom: 20px;
    box-shadow: 0 5px 10px rgba(0, 80, 255, 0.2);
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #111b4a;
    margin-bottom: 10px;
  }

  .step-card p {
    color: #555e77;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    padding: 60px 5%;

    .steps-container {
      flex-direction: column;
      align-items: center;
    }

    .step-card {
      max-width: 100%;
    }

    h2 {
      font-size: 1.8rem;
    }
  }
`;
