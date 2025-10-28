import styled from "styled-components";

export const FaqStyle = styled.section`
  background: #00104e;
  color: #fff;
  text-align: center;
  padding: 100px 10%;
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
      font-size: 1rem;
      color: #d5d8f0;
      max-width: 600px;
      margin-bottom: 25px;
      line-height: 1.6;
    }

    .cta-button {
      background: #fff;
      color: #00104e;
      padding: 0.9rem 2rem;
      font-weight: 600;
      font-size: 1rem;
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

    /* .need-help {
      font-size: 0.85rem;
      font-weight: 500;
      letter-spacing: 1px;
      color: #c4c4c4;
      margin-bottom: 8px;
    } */

    h2 {
      font-size: 1.8rem;
      margin-bottom: 10px;
    }

    /* .subtitle {
      font-size: 0.95rem;
      opacity: 0.9;
    } */
  }

  .faq-columns {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
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
    border-radius: 6px;
    margin-bottom: 10px;
    overflow: hidden;
    transition: all 0.3s ease;

    .faq-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 20px;
      cursor: pointer;
      font-weight: 600;
      background: #fff;
      transition: background 0.3s ease;

      &:hover {
        background: #f4f6fa;
      }

      .arrow {
        font-size: 1.2rem;
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
        opacity: 0.85;
        line-height: 1.5;
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
