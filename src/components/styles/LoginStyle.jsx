import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LogContainer = styled.main`
  width: 100%;
  height: 100vh;
  min-height: max-content;
  background: linear-gradient(269deg, #fff 0.79%, #f4f8fd 98.01%);
  padding: 35px;
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
`;
export const Gations = styled(NavLink)`
  color: #1a3de9;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
`;
