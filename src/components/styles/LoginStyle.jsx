import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LogContainer = styled.main`
  width: 100%;
  height: 100vh;
  min-height: max-content;
  background: linear-gradient(269deg, #fff 0.79%, #f4f8fd 98.01%);
  padding: 35px;

  @media (min-width: 1024px) {
    padding: 35px;
    background: linear-gradient(269deg, #fff 0.79%, #f4f8fd 98.01%);
  }

  @media (max-width: 1023px) and (min-width: 769px) {
    height: auto;
    padding: 25px;
    background: linear-gradient(269deg, #fff 0.79%, #f4f8fd 98.01%);
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
    background: #fff;
  }

  @media (max-width: 480px) {
    height: auto;
    padding: 16px;
    background: #fff;
  }
`;

export const LogHolder = styled.div`
  width: 40%;
  height: 90vh;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.1);
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px;

  h3 {
    color: #111827;
    font-family: "Inter", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }

  p {
    color: #4b5563;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    width: 40%;
    height: 90vh;
    background: #fff;
    box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.1);
    padding: 80px;
    border-radius: 20px;

    h3 {
      font-size: 20px;
      line-height: 32px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 1023px) and (min-width: 769px) {
    width: 60%;
    height: auto;
    background: #fff;
    box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.1);
    padding: 60px 50px;
    border-radius: 16px;

    h3 {
      font-size: 18px;
      line-height: 28px;
    }

    p {
      font-size: 15px;
      line-height: 22px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    background: transparent;
    box-shadow: none;
    padding: 40px 20px;
    border-radius: 0;

    h3 {
      font-size: 18px;
      line-height: 28px;
    }

    p {
      font-size: 14px;
      line-height: 20px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    background: transparent;
    box-shadow: none;
    padding: 30px 16px;
    border-radius: 0;

    h3 {
      font-size: 16px;
      line-height: 24px;
    }

    p {
      font-size: 13px;
      line-height: 18px;
    }
  }
`;

export const LogForm = styled.form`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;

  .signup_btn {
    width: 100%;
    height: 45px;
    border-radius: 16px;
    border: 0 solid #e5e7eb;
    background: #1a3de9;
    margin-top: 20px;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;

    @media (max-width: 768px) {
      height: 42px;
      font-size: 0.95rem;
    }

    @media (max-width: 480px) {
      height: 40px;
      font-size: 0.9rem;
    }
  }

  p {
    color: #4b5563;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    margin-top: 20px;

    span {
      color: #1a3de9;
      font-family: "Inter", sans-serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      font-size: 14px;

      span {
        font-size: 14px;
      }
    }

    @media (max-width: 480px) {
      font-size: 13px;

      span {
        font-size: 13px;
      }
    }
  }
`;

export const RemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;

  .rem {
    display: flex;
    gap: 10px;
    color: #4b5563;
    font-family: "Inter", sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 10px;
    align-items: center;

    .rem {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    gap: 8px;
    align-items: flex-start;

    .rem {
      font-size: 12px;
    }
  }
`;

export const Gations = styled(NavLink)`
  color: #1a3de9;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
