import React from "react";
import styled from "styled-components";
import people from "../../../../assets/donor.svg";

const DonorFirst = () => {
  return (
    <Contianer>
      <h3>Donors</h3>
      <p>Your supporters will appear here</p>
      <Wrapper>
        <Card>
          <img src={people} alt="" />
        </Card>
        <h4>No donors yet</h4>
        <p>Create a campaign to start receiving donations</p>
      </Wrapper>
    </Contianer>
  );
};

export default DonorFirst;
const Contianer = styled.main`
  width: 100%;
  height: 100%;

  h3 {
    color: #101828;
    font-size: 26.913px;
    font-style: normal;
    font-weight: 400;
    line-height: 35.883px;
  }

  p {
    color: #4a5565;
    font-size: 17.942px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 25px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 48%;
  min-height: max-content;
  padding: 30px;
  border-radius: 15.699px;
  border: 1.121px solid #e5e7eb;
  background: rgb(255, 255, 255);
  box-shadow: 0 11.214px 16.82px -3.364px rgba(0, 0, 0, 0.1),
    0 4.485px 6.728px -4.485px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  h4 {
    color: #101828;
    text-align: center;
    font-family: Arial;
    font-size: 20.184px;
    font-style: normal;
    font-weight: 400;
  }
`;
const Card = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }
`;
