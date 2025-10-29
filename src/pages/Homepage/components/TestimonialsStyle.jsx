import styled from "styled-components";

export const TestimonialsStyle = styled.section`
  padding: 40px 2%;
  text-align: center;
  background: #fff;
  color: #0a1442;

  h2 {
    font-size: 2.7rem;
    font-weight: 800;
    color: #0a1442;
  }

  .subtitle {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 60px;
  }

  .testimonial-card {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: linear-gradient(135deg, #f8fbff, #eef4ff);
    border-radius: 20px;
    padding: 50px 60px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    max-width: 900px;
    margin: 0 auto;
  }

  .left {
    flex: 1 1 250px;
    display: flex;
    justify-content: center;

    .image-wrapper {
      position: relative;

      img {
        width: 240px;
        height: 260px;
        border-radius: 10px;
        object-fit: cover;
      }

      .funded {
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        background: #00b050;
        color: #fff;
        font-size: 0.5rem;
        padding: 4px 8px;
        border-radius: 8px;
      }
    }
  }

  .right {
    flex: 2;
    text-align: left;
    position: relative;

    .quote-icon {
      font-size: 2rem;
      color: #99b8ff;
      position: absolute;
      right: -40px;
      top: 0;
    }

    .quote {
      font-size: 1.1rem;
      font-style: italic;
      color: #333;
      line-height: 1.7;
      margin-bottom: 25px;
    }

    h4 {
      font-size: 1.1rem;
      font-weight: 500;
      margin-bottom: 5px;
    }

    .details {
      font-size: 0.65rem;
      color: #666;
      margin-bottom: 30px;
    }

    .controls {
      display: flex;
      align-items: center;
      gap: 20px;

      button {
        background: #fff;
        border: 1px solid #d6e1ff;
        color: #0a1442;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background: #eaf0ff;
        }

        svg {
          font-size: 1rem;
        }
      }

      .dots {
        display: flex;
        gap: 6px;

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #c8d7ff;
          transition: 0.3s;

          &.active {
            background: #497cff;
            transform: scale(1.1);
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 60px 6%;

    .testimonial-card {
      flex-direction: column;
      padding: 40px 30px;
    }

    .right {
      text-align: center;

      .quote-icon {
        position: static;
        margin-bottom: 10px;
      }

      .controls {
        justify-content: center;
      }
    }
  }
`;
