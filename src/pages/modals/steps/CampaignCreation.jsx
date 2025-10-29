import React, { useState } from "react";
import styled from "styled-components";
import { Steps, Button } from "antd";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import AcademicDetailsStep from "./AcademicDetailsStep";
import CampaignInformationStep from "./CampaignInformationStep";
import YourStoryStep from "./YourStoryStep";
import ReviewAndSubmitStep from "./ReviewAndSubmitStep";

const { Step } = Steps;

const CampaignCreation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    academicDetails: {},
    campaignInformation: {},
    yourStory: {},
  });

  const updateFormData = (stepName, data) => {
    setFormData((prev) => ({
      ...prev,
      [stepName]: { ...prev[stepName], ...data },
    }));
  };

  const steps = [
    {
      title: "Academic Details",
      subtitle: "Provide your academic information for verification",
      component: AcademicDetailsStep,
      dataKey: "academicDetails",
    },
    {
      title: "Campaign Information",
      subtitle: "Set up your campaign goal and title",
      component: CampaignInformationStep,
      dataKey: "campaignInformation",
    },
    {
      title: "Your Story",
      subtitle: "Share your story with potential donors",
      component: YourStoryStep,
      dataKey: "yourStory",
    },
    {
      title: "Review & Submit",
      subtitle: "Review all details before creating your campaign",
      component: ReviewAndSubmitStep,
      dataKey: "review",
    },
  ];

  const handleNext = (data) => {
    if (steps[currentStep].dataKey) {
      updateFormData(steps[currentStep].dataKey, data);
    }
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmitFinal = () => {
    console.log("Final Form Data:", formData);
    alert("Campaign Created Successfully! (Check console for data)");
  };

  const handleClose = () => {
    console.log("Modal closed");
  };

  const CurrentStepComponent = steps[currentStep].component;
  const currentStepData = steps[currentStep].dataKey
    ? formData[steps[currentStep].dataKey]
    : formData;
  return (
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose}>
          <FaTimes />
        </CloseButton>

        <Header>
          <Title>{steps[currentStep].title}</Title>
          <Subtitle>{steps[currentStep].subtitle}</Subtitle>
        </Header>

        <StepIconWrapper>
          <Steps current={currentStep} size="small">
            {steps.map((item, index) => (
              <Step
                key={item.title}
                title={item.title}
                icon={index < currentStep ? <FaCheckCircle /> : undefined}
              />
            ))}
          </Steps>
        </StepIconWrapper>

        <StepsContent>
          <CurrentStepComponent
            formData={currentStepData}
            onNext={handleNext}
            onPrev={handlePrev}
            onSubmitFinal={handleSubmitFinal}
            allFormData={formData}
          />
        </StepsContent>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CampaignCreation;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto;
  padding: 20px;
`;

const ModalContent = styled.div`
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 12px;
  width: 45%;
  position: relative;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  z-index: 10;
  &:hover {
    color: #000;
  }
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0 0 0;
`;

const StepsContent = styled.div`
  margin-top: 20px;
  padding: 20px 0;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
`;

export const NextButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StepIconWrapper = styled.div`
  .ant-steps-item-icon {
    font-size: 16px;
    line-height: 1;
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-steps-item-process .ant-steps-item-icon {
    background-color: #007bff;
    border-color: #007bff;
    color: white;
  }
  .ant-steps-item-finish .ant-steps-item-icon {
    background-color: #28a745;
    border-color: #28a745;
    color: white;
  }
  .ant-steps-item-wait .ant-steps-item-icon {
    background-color: #f0f2f5;
    border-color: #d9d9d9;
    color: #999;
  }
`;
