import React from "react";
import styled from "styled-components";

const ProgressInndicator = ({ currentStep }) => {
  const steps = [1, 2, 3, 4];

  return (
    <ProgressContainer>
      {steps.map((step, index) => (
        <div
          key={step}
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
          <StepCircle
            completed={step < currentStep}
            active={step === currentStep}
          >
            {step < currentStep ? "✓" : step}
          </StepCircle>
          {index < steps.length - 1 && (
            <Connector completed={step < currentStep} />
          )}
        </div>
      ))}
    </ProgressContainer>
  );
};

export default ProgressInndicator;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
`;

const StepCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  background-color: ${(props) =>
    props.completed ? "#2563eb" : props.active ? "#2563eb" : "#e5e7eb"};
  color: ${(props) => (props.completed || props.active ? "white" : "#6b7280")};
  transition: all 0.3s ease;
`;

const Connector = styled.div`
  width: 40px;
  height: 2px;
  background-color: ${(props) => (props.completed ? "#2563eb" : "#e5e7eb")};
  transition: all 0.3s ease;
`;
