import styled from "styled-components";

export const ReqContainer = styled.main`
  width: 100%;
  height: 100vh;
  min-height: max-content;
  background: linear-gradient(269deg, #fff 4.29%, #f4f8fd 88.02%);
  padding: 35px;

  .foot {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    color: rgba(59, 53, 53, 0.8);
  }
`;
export const RegContent = styled.div`
  width: 45%;
  height: 103vh;
  padding: 24px 93px 23px 93px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
  justify-self: center;

  h2 {
    font-family: "Inter", sans-serif;
    font-size: 28px;
    color: #222;
    font-weight: 700;
    margin-bottom: 23px;
  }
`;
export const RegForm = styled.form`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;

  .terms {
    color: #4b5563;
    font-family: "Inter", sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 12px;

    span {
      color: #2563eb;
      font-family: "Inter", sans-serif;
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      cursor: pointer;
    }
  }

  .signup_btn {
    padding: 14px 100px 14px 100px;
    border-radius: 8.554px;
    border: 0 solid #e5e7eb;
    background: #2563eb;
    font-family: "Inter", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .signin {
    color: #4b5563;
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;

    span {
      color: #2563eb;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;
export const InpuLabel = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

  .label_input {
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column;

    label {
      color: #3b3535;
      font-family: "Inter", sans-serif;
      font-size: 14.969px;
      font-style: normal;
      font-weight: 500;
      margin-bottom: 6px;
    }

    .input_place {
      width: 100%;
      height: 50px;
      padding-left: 17.107px;
      border-radius: 8.554px;
      border: 1.069px solid #d1d5db;
      background: #fff;
      outline: none;
      color: #adaebc;
    }
  }
`;
export const LabelInput = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;

  label {
    color: #3b3535;
    font-family: "Inter", sans-serif;
    font-size: 14.969px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 6px;
  }

  .input_place {
    width: 100%;
    height: 50px;
    padding-left: 17.107px;
    border-radius: 8.554px;
    border: 1.069px solid #d1d5db;
    background: #fff;
    outline: none;
    color: #adaebc;
  }
`;

export const PasswordInput = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  label {
    color: #3b3535;
    font-family: "Inter", sans-serif;
    font-size: 14.969px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 6px;
  }

  .input_place {
    width: 100%;
    height: 50px;
    padding-left: 17.107px;
    border-radius: 8.554px;
    border: 1.069px solid #d1d5db;
    background: #fff;
    outline: none;
    color: #adaebc;
    margin-bottom: 10px;
  }

  .text {
    display: flex;
    justify-content: space-between;
    color: #7b7e80;
    font-size: 15px;
    margin-bottom: 6px;
  }

  .boxes {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;

    .box1 {
      width: 70px;
      height: 5px;
      border-radius: 4.5px;
      background: rgba(123, 126, 128, 0.7);
    }
  }

  .description {
    display: flex;
    flex-direction: column;

    nav {
      display: flex;
      gap: 10px;
      color: #7b7e80;
      font-size: 15px;
      font-weight: 400;
      margin-bottom: 6px;
    }
  }
`;
