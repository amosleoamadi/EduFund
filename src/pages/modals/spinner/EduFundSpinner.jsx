import React from "react";
import styled, { keyframes } from "styled-components";
import { FaSpinner } from "react-icons/fa";

const EduFundSpinner = () => {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
};

export default EduFundSpinner;
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  color: #007bff;
  font-size: 24px;
`;

const Spinner = styled(FaSpinner)`
  animation: ${spin} 1s linear infinite;
  margin-bottom: 15px;
`;
