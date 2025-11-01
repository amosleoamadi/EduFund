import styled from "styled-components";

export const DonorContainer = styled.main`
  width: 100%;
  height: 100vh;
  min-height: max-content;
  background: linear-gradient(269deg, #fff 0.79%, #f4f8fd 98.01%);
  padding: 35px;

  @media (min-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 1023px) and (min-width: 769px) {
    padding: 30px;
  }

  @media (max-width: 768px) {
    background: #ffffff;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const DonorContent = styled.div`
  width: 45%;
  height: 100vh;
  min-height: max-content;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.1);
  justify-self: center;
  padding: 10px 93px 10px 93px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    width: 45%;
    padding: 10px 93px;
  }

  @media (max-width: 1023px) and (min-width: 769px) {
    width: 75%;
    padding: 10px 50px;
  }

  @media (max-width: 768px) {
    width: 90%;
    background: transparent;
    box-shadow: none;
    padding: 10px 30px;
  }

  @media (max-width: 480px) {
    width: 100%;
    background: transparent;
    box-shadow: none;
    padding: 10px 20px;
  }

  .terms {
    color: #4b5563;
    font-family: "Inter", sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 15px;

    @media (max-width: 480px) {
      font-size: 12px;
      margin-bottom: 12px;
    }

    span {
      color: #2563eb;
      font-family: "Inter", sans-serif;
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      cursor: pointer;

      @media (max-width: 480px) {
        font-size: 12px;
      }
    }
  }

  h2 {
    font-family: "Inter", sans-serif;
    font-size: 28px;
    color: #222;
    font-weight: 700;
    margin-bottom: 8px;

    @media (max-width: 1023px) and (min-width: 769px) {
      font-size: 26px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    color: rgba(59, 53, 53, 0.8);

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  .signup_btn {
    width: 100%;
    height: 43px;
    border-radius: 8.554px;
    border: 0 solid #e5e7eb;
    background: #2563eb;
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    margin-bottom: 15px;

    @media (max-width: 480px) {
      height: 40px;
      font-size: 14px;
    }
  }

  .signin {
    color: #4b5563;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;

    @media (max-width: 480px) {
      font-size: 13px;
    }

    span {
      color: #2563eb;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      cursor: pointer;

      @media (max-width: 480px) {
        font-size: 13px;
      }
    }
  }

  .foot {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    color: rgba(59, 53, 53, 0.8);

    @media (max-width: 480px) {
      margin-top: 12px;
      font-size: 12px;
    }
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 43px;
  background-color: #f5f5f5;
  border-radius: 8.554px;
  padding: 5px;
  margin-top: 15px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    height: 40px;
  }
`;

export const ToggleButton = styled.div`
  flex: 1;
  border: none;
  background: ${({ active }) => (active ? "#ffffff" : "transparent")};
  color: ${({ active }) => (active ? "#007bff" : "#555")};
  font-weight: 500;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 8px;

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 6px;
  }
`;

export const DonorForm = styled.form`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
`;
