import styled from "styled-components";

export const WhyChooseUsStyle = styled.section`
  width: 100%;
  background: #e4dada;
  background-color: #e9edff;
  padding: 80px 5%;
  text-align: center;

  h2 {
    font-size: 3rem;
    color: #031b88;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 50px;
  }

  .features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: left;
    gap: 25px;
  }

  .card {
    background: #ffffff;
    padding: 30px 25px;
    border-radius: 16px;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 10px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: rgba(3, 27, 136, 0.15) 0px 6px 18px;
    }

    .icon {
      background: #e9edff;
      width: 55px;
      height: 55px;
      border-radius: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #0b84ba;
      font-size: 1.8rem;
      margin-bottom: 15px;
    }

    h3 {
      font-size: 1.5rem;
      color: black;
      margin-bottom: 8px;
      font-weight: normal;
    }

    p {
      color: #555;
      font-size: 0.95rem;
      line-height: 1.5;
    }
  }

  @media (max-width: 768px) {
    padding: 60px 5%;

    .card {
      width: 100%;
      align-items: center;
      text-align: center;
    }
  }
`;
