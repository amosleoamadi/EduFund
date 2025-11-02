import styled from "styled-components";

export const AccountContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  background: #f9fafb;
  padding: 30px;

  @media (max-width: 640px) {
    padding: 18px;
  }

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

export const LogoBar = styled.div`
  width: 183.719px;
  height: 55.362px;
  margin-bottom: 30px;
  cursor: pointer;
  color: #1a3de9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 640px) {
    width: 140px;
    height: 42px;
    margin-bottom: 20px;
  }
`;

export const AccountType = styled.div`
  width: 52%;
  min-height: max-content;
  justify-self: center;
  margin: 0 auto;

  h3 {
    color: #222;
    font-size: 25px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    text-align: center;
  }

  p {
    font-size: 18px;
    color: #3b3535;
    text-align: center;
    font-weight: 400;
    margin-bottom: 35px;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
      margin-bottom: 24px;
    }
  }

  @media (max-width: 640px) {
    h3 {
      font-size: 18px;
    }

    p {
      font-size: 13px;
      margin-bottom: 20px;
    }
  }
`;

export const Holder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Details = styled.div`
  width: 47%;
  border-radius: 16px;
  border: 2px solid #e5e7eb;
  background: #fff;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  }

  h3 {
    color: #111827;
    font-family: "Inter", sans-serif;
    font-size: 20px;
  }

  p {
    font-family: Inter;
    font-size: 12px;
    color: #4b5563;
    font-weight: 400;
    width: 75%;
  }

  ul {
    list-style-type: none;

    li {
      display: flex;
      gap: 10px;
      color: #4b5563;
      font-family: "Inter", sans-serif;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      margin-bottom: 5px;

      span {
        color: rgba(34, 197, 94, 1);
      }
    }
  }

  .choose_btn {
    width: 100%;
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
    transition: background 0.2s ease;

    &:hover {
      background: #1d4ed8;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 20px;

    .shoclar1 {
      width: 50px;
      height: 50px;
    }

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 11px;
    }

    ul li {
      font-size: 12px;
    }
  }

  @media (max-width: 640px) {
    padding: 16px;

    .shoclar1 {
      width: 45px;
      height: 45px;
    }

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 10px;
      width: 85%;
    }

    .choose_btn {
      height: 38px;
      font-size: 13px;
    }
  }
`;
