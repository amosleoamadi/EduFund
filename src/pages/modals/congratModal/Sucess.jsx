import { useNavigate } from "react-router-dom";
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ModalContent,
  Title,
  Subtitle,
  CampaignCard,
  CampaignHeader,
  CampaignIcon,
  CampaignTitle,
  CampaignDetails,
  DetailLabel,
  DetailValue,
  StatusBadge,
  NextStepsSection,
  NextStepsTitle,
  StepItem,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription,
  SecurityMessage,
  ButtonGroup,
  SecondaryButton,
  PrimaryButton,
} from "./SucessModal";

import React from "react";

const Sucess = ({ setCampaignsucess }) => {
  const nav = useNavigate();
  return (
    <ModalOverlay>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setCampaignsucess(false)}>✕</CloseButton>

        <ModalContent>
          <Title>Campaign Created Successfully! 🎉</Title>
          <Subtitle>
            Your campaign has been submitted and is now pending admin
            verification.
          </Subtitle>

          <CampaignCard>
            <CampaignHeader>
              <CampaignIcon>⊙</CampaignIcon>
              <CampaignTitle>campaignName</CampaignTitle>
            </CampaignHeader>

            <CampaignDetails>
              <DetailLabel>Funding Goal</DetailLabel>
              <DetailValue>fundingGoal</DetailValue>
            </CampaignDetails>

            <CampaignDetails>
              <DetailLabel>Status</DetailLabel>
              <StatusBadge>⏱ Pending Review</StatusBadge>
            </CampaignDetails>
          </CampaignCard>

          <NextStepsSection>
            <NextStepsTitle>🚀 What happens next?</NextStepsTitle>

            <StepItem>
              <StepNumber>1</StepNumber>
              <StepContent>
                <StepTitle>Admin Review</StepTitle>
                <StepDescription>
                  Our team will verify your campaign details and documents
                </StepDescription>
              </StepContent>
            </StepItem>

            <StepItem>
              <StepNumber>2</StepNumber>
              <StepContent>
                <StepTitle>Get Notified</StepTitle>
                <StepDescription>
                  You'll receive an email when your campaign is approved
                  (usually within 24-48 hours)
                </StepDescription>
              </StepContent>
            </StepItem>

            <StepItem>
              <StepNumber>3</StepNumber>
              <StepContent>
                <StepTitle>Go Live & Share</StepTitle>
                <StepDescription>
                  Once approved, start sharing your campaign and receive
                  donations
                </StepDescription>
              </StepContent>
            </StepItem>
          </NextStepsSection>

          <SecurityMessage>
            ✓ 100% secure and verified by EduFund team
          </SecurityMessage>

          <ButtonGroup>
            <SecondaryButton onClick={() => nav("/student-dashbord")}>
              Back to Overview
            </SecondaryButton>
            <PrimaryButton onClick={() => nav("/student-dashbord/campaigns")}>
              View Campaign ↗
            </PrimaryButton>
          </ButtonGroup>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Sucess;
