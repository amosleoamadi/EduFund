import React, { useState } from "react";
import styled from "styled-components";
import { FiX } from "react-icons/fi";
import AcademicDetailsStep from "./AcademicDetailsStep";
import CampaignInformationStep from "./CampaignInformationStep";
import YourStoryStep from "./YourStoryStep";
import ReviewAndSubmitStep from "./ReviewAndSubmitStep";
import ProgressInndicator from "./ProgressInndicator";

const CampaignCreation = ({ setCreate, create }) => {
  const stepTitles = {
    1: "Academic Details",
    2: "Your Story",
    3: "Campaign Information",
    4: "Review & Submit",
  };

  const stepSubtitles = {
    1: "Provide your academic information for verification",
    2: "Share your story with potential donors",
    3: "Set up your campaign goal and title",
    4: "Review all details before creating your campaign",
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    schoolName: "",
    yearLevel: "",
    matricNumber: "",
    jambNumber: "",
    story: "",
    campaignTitle: "",
    fundingGoal: "",
    campaignDuration: "",
  });
  const [errors, setErrors] = useState({});

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.schoolName?.trim())
        newErrors.schoolName = "School name is required";
      if (!formData.yearLevel?.trim())
        newErrors.yearLevel = "Year/Level is required";
      if (!formData.matricNumber?.trim())
        newErrors.matricNumber = "Matric number is required";
      if (!formData.jambNumber?.trim())
        newErrors.jambNumber = "JAMB number is required";
    }

    if (step === 2) {
      if (!formData.story?.trim()) newErrors.story = "Story is required";
      if (formData.story?.length < 500)
        newErrors.story = "Story must be at least 500 characters";
      if (formData.story?.length > 1000)
        newErrors.story = "Story must not exceed 1000 characters";
    }

    if (step === 3) {
      if (!formData.campaignTitle?.trim())
        newErrors.campaignTitle = "Campaign title is required";
      if (!formData.fundingGoal)
        newErrors.fundingGoal = "Funding goal is required";
      if (!formData.campaignDuration)
        newErrors.campaignDuration = "Campaign duration is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 4) {
        // Submit campaign
        console.log("Campaign submitted:", formData);
        onClose();
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  return (
    <>
      {create && (
        <Backdrop>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <HeaderContent>
                <Title>{stepTitles[currentStep]}</Title>
                <Subtitle>{stepSubtitles[currentStep]}</Subtitle>
              </HeaderContent>
              <CloseButton onClick={() => setCreate()}>
                <FiX />
              </CloseButton>
            </ModalHeader>

            <ProgressContainer>
              <ProgressInndicator currentStep={currentStep} />
            </ProgressContainer>

            <ContentArea>
              {currentStep === 1 && (
                <AcademicDetailsStep
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                />
              )}
              {currentStep === 2 && (
                <YourStoryStep
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                />
              )}
              {currentStep === 3 && (
                <CampaignInformationStep
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                />
              )}
              {currentStep === 4 && <ReviewAndSubmitStep formData={formData} />}
            </ContentArea>

            <FooterContainer>
              <BackButton onClick={handleBack} disabled={currentStep === 1}>
                Back
              </BackButton>
              <ContinueButton onClick={handleContinue}>
                {currentStep === 4 ? "Create Campaign" : "Continue"}
              </ContinueButton>
            </FooterContainer>
          </ModalContainer>
        </Backdrop>
      )}
    </>
  );
};

export default CampaignCreation;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  overflow-y: auto;
  z-index: 50;
  padding: 25px 0;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  width: 90%;
  width: 45%;
  height: 70%;
  min-height: max-content;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 4px 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #6b7280;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #1f2937;
  }
`;

const ProgressContainer = styled.div`
  padding: 0 24px;
`;

const ContentArea = styled.div`
  flex: 1;
  /* overflow-y: auto; */
  padding: 24px;
`;

const FooterContainer = styled.div`
  padding: 24px;
  /* border-top: 1px solid #e5e7eb; */
  display: flex;
  gap: 12px;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const BackButton = styled(Button)`
  background-color: #f3f4f6;
  color: #1f2937;
  flex: 1;

  &:hover:not(:disabled) {
    background-color: #e5e7eb;
  }
`;

const ContinueButton = styled(Button)`
  background-color: #2563eb;
  color: #fff;
  flex: 1;

  &:hover:not(:disabled) {
    background-color: #1d4ed8;
  }
`;
