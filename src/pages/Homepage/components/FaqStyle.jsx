import styled from "styled-components";

export const FaqStyle = styled.section`
  background-color: #001145;
  color: #fff;
  text-align: center;
  padding: 70px 6%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .faq-wrapper {
    width: 100%;
    max-width: 1200px;
  }

  .hero-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;

    h1 {
      font-size: 2.4rem;
      font-weight: 700;
      margin-bottom: 15px;
    }

    p {
      font-size: 0.85rem;
      color: #d5d8f0;
      max-width: 500px;
      margin-bottom: 25px;
      line-height: 1.6;
    }

    .cta-button {
      background: #fff;
      color: #00104e;
      padding: 0.6rem 1rem;
      font-weight: normal;
      font-size: 0.9rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .cta-button:hover {
      background: #dbe3ff;
    }
  }

  .help-header {
    margin-bottom: 50px;
    margin-top: 150px;

    h2 {
      font-size: 1.4rem;
      /* margin-bottom: 10px; */
    }
  }

  .faq-columns {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /* background: #000; */
    width: 100%;
    text-align: left;
    gap: 80px;
    flex-wrap: wrap;
  }

  .faq-column {
    flex: 1;
    min-width: 320px;
    max-width: 500px;
  }

  .faq-item {
    background: #fff;
    color: #000;
    /* border-radius: 6px; */
    /* margin-bottom: 10px; */
    border-bottom: 1px solid black;
    overflow: hidden;
    transition: all 0.3s ease;

    .faq-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 20px;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 600;
      background: #fff;
      transition: background 0.3s ease;

      &:hover {
        background: #f4f6fa;
      }

      .arrow {
        font-size: 2rem;
        transition: transform 0.3s ease;
      }

      .arrow.rotate {
        transform: rotate(180deg);
      }
    }

    .faq-body {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease, padding 0.3s ease;
      padding: 0 20px;
      background: #fafafa;

      p {
        font-size: 0.9rem;
        /* opacity: 0.85; */
        color: gray;
        line-height: 2;
      }
    }

    &.active .faq-body {
      max-height: 200px;
      padding: 15px 20px 20px;
    }
  }

  @media (max-width: 768px) {
    padding: 70px 5%;

    .hero-section h1 {
      font-size: 1.8rem;
    }

    .faq-columns {
      flex-direction: column;
      gap: 25px;
    }

    .faq-column {
      width: 100%;
    }
  }
`;
