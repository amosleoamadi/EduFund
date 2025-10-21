import styled from "styled-components";

export const AccountContainer = styled.main`
  width: 100%;
  height: 100vh;
  background: #f9fafb;
  padding: 35px;
`;
export const LogoBar = styled.div`
  width: 183.719px;
  height: 55.362px;
  background-color: red;
  margin-bottom: 35px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const AccountType = styled.div`
  width: 45%;
  height: 78%;
  justify-self: center;

  h3 {
    color: #222;
    font-size: 25px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    margin-bottom: 7px;
    text-align: center;
  }

  p {
    font-size: 18px;
    color: #3b3535;
    text-align: center;
    font-weight: 400;
    margin-bottom: 35px;
  }
`;
export const Holder = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-around;
`;
export const Details = styled.div`
  width: 42%;
  height: 100%;
  border-radius: 16px;
  border: 2px solid #e5e7eb;
  background: #fff;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .shoclar1 {
    width: 60px;
    height: 60px;
    border-radius: 9999px;
    border: 0 solid #e5e7eb;
    background: rgba(219, 234, 254, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
  }

  h3 {
    color: #111827;
    font-family: "Inter", sans-serif;
    font-size: 18px;
  }

  p {
    font-family: Inter;
    font-size: 16px;
    color: #4b5563;
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 15px;
  }

  ul {
    list-style-type: none;
    margin-bottom: 15px;

    li {
      display: flex;
      gap: 10px;
      color: #4b5563;
      font-family: "Inter", sans-serif;
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      margin-bottom: 5px;

      span {
        color: rgba(34, 197, 94, 1);
      }
    }
  }

  .choose_btn {
    width: 190px;
    height: 43px;
    border-radius: 12px;
    border: 0 solid #e5e7eb;
    background: #2563eb;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
