import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { FaCheckCircle } from "react-icons/fa";

const ReviewAndSubmitStep = ({ allFormData, onPrev, onSubmitFinal }) => {
  const { academicDetails, campaignInformation, yourStory } = allFormData;

  const formattedFundingGoal = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(campaignInformation.fundingGoal);
  return (
    <div>
      <SectionContainer>
        <SectionTitle>Academic Details</SectionTitle>
        <DetailGrid>
          <DetailItem>
            <DetailLabel>School</DetailLabel>
            <DetailValue>{academicDetails.schoolName}</DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailLabel>Year/Level</DetailLabel>
            <DetailValue>{academicDetails.yearLevel}</DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailLabel>Matric Number</DetailLabel>
            <DetailValue>{academicDetails.matricNumber}</DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailLabel>JAMB Reg</DetailLabel>
            <DetailValue>{academicDetails.jambRegistrationNumber}</DetailValue>
          </DetailItem>
        </DetailGrid>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Campaign Information</SectionTitle>
        <DetailItem style={{ marginBottom: 15 }}>
          <DetailLabel>Title</DetailLabel>
          <DetailValue>{campaignInformation.campaignTitle}</DetailValue>
        </DetailItem>
        <DetailItem style={{ marginBottom: 15 }}>
          <DetailLabel>Funding Goal</DetailLabel>
          <FundingGoalDisplay>{formattedFundingGoal}</FundingGoalDisplay>
        </DetailItem>
        <DetailItem>
          <DetailLabel>Story Preview</DetailLabel>
          <StoryPreview>{yourStory.story}</StoryPreview>
        </DetailItem>
      </SectionContainer>

      <NextStepsBox>
        <NextStepsTitle>Next steps after submission:</NextStepsTitle>
        <NextStepsList>
          <li>
            <CheckIcon /> Your campaign will be reviewed by our admin team
          </li>
          <li>
            <CheckIcon /> You'll receive a notification once it's approved
          </li>
          <li>
            <CheckIcon /> Approved campaigns go live immediately
          </li>
          <li>
            <CheckIcon /> You can start sharing and receiving donations
          </li>
        </NextStepsList>
      </NextStepsBox>

      <ActionsContainer>
        <Button onClick={onPrev}>Back</Button>
        <Button type="primary" onClick={onSubmitFinal}>
          <FaCheckCircle style={{ marginRight: 8 }} /> Create Campaign
        </Button>
      </ActionsContainer>
    </div>
  );
};

export default ReviewAndSubmitStep;
const SectionContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 25px;
  border: 1px solid #eee;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-top: 0;
  margin-bottom: 15px;
`;

const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 25px;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailLabel = styled.span`
  font-size: 13px;
  color: #777;
  margin-bottom: 4px;
  font-weight: 500;
`;

const DetailValue = styled.span`
  font-size: 15px;
  color: #333;
  font-weight: 600;
`;

const FundingGoalDisplay = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #007bff;
`;

const StoryPreview = styled.div`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin-top: 15px;
  max-height: 150px;
  overflow-y: auto;
  border-top: 1px solid #f0f0f0;
  padding-top: 15px;
  white-space: pre-wrap;
`;

const NextStepsBox = styled.div`
  background-color: #e6f9ed;
  border-radius: 8px;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  color: #1a473a;
  margin-top: 25px;
`;

const NextStepsTitle = styled.h4`
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 10px 0;
`;

const NextStepsList = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
  font-size: 14px;

  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const CheckIcon = styled(FaCheckCircle)`
  color: #28a745;
  margin-right: 8px;
  font-size: 18px;
  flex-shrink: 0;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 30px;
  border-top: 1px solid #f0f0f0;
  padding-top: 20px;
`;
