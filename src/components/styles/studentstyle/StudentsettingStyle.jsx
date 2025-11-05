import styled from "styled-components";

export const SetContainer = styled.main`
  width: 100%;
  height: 100%;
  min-height: max-content;

  h3 {
    color: #101828;
    font-size: 30.299px;
    font-style: normal;
    font-weight: 400;
    line-height: 40.358px;
  }

  p {
    color: #4a5565;
    font-size: 21.493px;
    font-style: normal;
    font-weight: 400;
    line-height: 32.239px;
    margin-bottom: 10px;
  }

  @media (max-width: 1199px) {
    h3 {
      font-size: 26.299px;
      line-height: 36.358px;
    }

    p {
      font-size: 18.493px;
      line-height: 28.239px;
    }
  }

  @media (max-width: 767px) {
    h3 {
      font-size: 22.299px;
      line-height: 32.358px;
    }

    p {
      font-size: 16.493px;
      line-height: 26.239px;
      margin-bottom: 8px;
    }
  }

  @media (max-width: 479px) {
    h3 {
      font-size: 20.299px;
      line-height: 28.358px;
    }

    p {
      font-size: 14.493px;
      line-height: 22.239px;
      margin-bottom: 6px;
    }
  }
`;
