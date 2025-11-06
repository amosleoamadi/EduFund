import React, { useState } from "react";
import styled from "styled-components";
import { FiX } from "react-icons/fi";
import AcademicDetailsStep from "./AcademicDetailsStep";
import CampaignInformationStep from "./CampaignInformationStep";
import YourStoryStep from "./YourStoryStep";
import ReviewAndSubmitStep from "./ReviewAndSubmitStep";
import ProgressInndicator from "./ProgressInndicator";
import Sucess from "../congratModal/Sucess";
import { useCampaigncreateMutation } from "../../../utils/stundentauth/createcampaignapi";
import { selectStudentId } from "../../../config/slices/studentauthslice";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoadingState from "../../modals/loadingstate/LoadingState";

const CampaignCreation = ({ setCreate, create }) => {
  const [campaignCreate, { isLoading }] = useCampaigncreateMutation();
  const studentId = useSelector(selectStudentId);
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
  const [campaignsucess, setCampaignsucess] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: "",
    year: "",
    matricNumber: "",
    jambRegistrationNumber: "",
    story: "",
    duration: "",
    title: "",
    target: "",
    course: "",
  });
  const [errors, setErrors] = useState({});

  const handleSumbit = async (e) => {
    e.preventDefault();

    if (validateStep(currentStep)) {
      if (currentStep === 4) {
        try {
          const res = await campaignCreate({
            campaignStatus: formData,
            studentId: studentId,
          }).unwrap();
          console.log(res);
          setCreate(false);

          setTimeout(() => {
            setCampaignsucess(true);
          }, 300);
        } catch (err) {
          toast.error(err?.data?.message);
          setCreate(false);
        }
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.schoolName?.trim())
        newErrors.schoolName = "School name is required";
      if (!formData.year?.trim()) newErrors.year = "Year/Level is required";
      if (!formData.matricNumber?.trim())
        newErrors.matricNumber = "Matric number is required";
      if (!formData.jambRegistrationNumber?.trim())
        newErrors.jambRegistrationNumber = "JAMB number is required";
      if (!formData.course?.trim())
        newErrors.course = "Course of study is required";
    }

    if (step === 2) {
      if (!formData.story?.trim()) newErrors.story = "Story is required";
      if (formData.story?.length < 150)
        newErrors.story = "Story must be at least 500 characters";
      if (formData.story?.length > 1000)
        newErrors.story = "Story must not exceed 1000 characters";
    }

    if (step === 3) {
      if (!formData.title?.trim())
        newErrors.title = "Campaign title is required";
      if (!formData.target) newErrors.target = "Funding goal is required";
      if (!formData.duration)
        newErrors.duration = "Campaign duration is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
              <CloseButton onClick={() => setCreate(false)}>
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
              <ContinueButton onClick={handleSumbit} disabled={isLoading}>
                {isLoading
                  ? "Creating..."
                  : currentStep === 4
                  ? "Create Campaign"
                  : "Continue"}
              </ContinueButton>
            </FooterContainer>
          </ModalContainer>
        </Backdrop>
      )}

      {isLoading && <LoadingState />}

      {campaignsucess && (
        <Backdrop>
          <Sucess setCampaignsucess={setCampaignsucess} />
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
  align-items: flex-start;
  overflow-y: auto;
  z-index: 50;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 12px;
    align-items: flex-end;
  }
`;

const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  width: 45%;
  min-height: max-content;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  max-height: 90vh;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 65%;
  }

  @media (max-width: 768px) {
    width: 90%;
    max-height: 85vh;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-height: 100vh;
    border-radius: 12px 12px 0 0;
    margin-bottom: 0;
  }

  @media (max-width: 320px) {
    max-height: 98vh;
  }
`;

const ModalHeader = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    align-items: center;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
  padding-right: 16px;

  @media (max-width: 480px) {
    padding-right: 12px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 4px 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin: 0 0 2px 0;
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 1.3;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 4px;

  &:hover {
    color: #1f2937;
    background-color: #f3f4f6;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    padding: 6px;

    min-width: 44px;
    min-height: 44px;
  }
`;

const ProgressContainer = styled.div`
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 24px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    max-height: 60vh;
  }
`;

const FooterContainer = styled.div`
  padding: 24px;
  display: flex;
  gap: 12px;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 20px;
    gap: 10px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    gap: 8px;
    flex-direction: column-reverse;
  }
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

  @media (max-width: 480px) {
    padding: 14px 16px;
    font-size: 16px;
    width: 100%;

    min-height: 48px;
  }
`;

const BackButton = styled(Button)`
  background-color: #f3f4f6;
  color: #1f2937;
  flex: 1;

  &:hover:not(:disabled) {
    background-color: #e5e7eb;
  }

  @media (max-width: 480px) {
    flex: none;
  }
`;

const ContinueButton = styled(Button)`
  background-color: #2563eb;
  color: #fff;
  flex: 1;

  &:hover:not(:disabled) {
    background-color: #1d4ed8;
  }

  @media (max-width: 480px) {
    flex: none;
  }
`;
