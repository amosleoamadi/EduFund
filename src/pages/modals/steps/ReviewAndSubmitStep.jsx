import React from "react";
import styled from "styled-components";
import { FiCheckCircle } from "react-icons/fi";

const ReviewAndSubmitStep = ({ formData }) => {
  return (
    <ReviewContainer>
      <ReviewSection>
        <SectionTitle>Academic Details</SectionTitle>
        <ReviewGrid>
          <ReviewItem>
            <ReviewLabel>School</ReviewLabel>
            <ReviewValue>{formData.schoolName}</ReviewValue>
          </ReviewItem>
          <ReviewItem>
            <ReviewLabel>Year/Level</ReviewLabel>
            <ReviewValue>{formData.year}</ReviewValue>
          </ReviewItem>
          <ReviewItem>
            <ReviewLabel>Matric Number</ReviewLabel>
            <ReviewValue>{formData.matricNumber}</ReviewValue>
          </ReviewItem>
          <ReviewItem>
            <ReviewLabel>JAMB Reg</ReviewLabel>
            <ReviewValue>{formData.jambRegistrationNumber}</ReviewValue>
          </ReviewItem>
        </ReviewGrid>
      </ReviewSection>

      <ReviewSection>
        <SectionTitle>Campaign Information</SectionTitle>

        <ReviewGrid>
          <ReviewItem fullWidth>
            <ReviewLabel>Title</ReviewLabel>
            <ReviewValue>{formData.title}</ReviewValue>
          </ReviewItem>

          <ReviewItem>
            <ReviewLabel>Funding Goal</ReviewLabel>
            <ReviewValue>
              ₦{Number(formData.target).toLocaleString()}
            </ReviewValue>
          </ReviewItem>

          <ReviewItem>
            <ReviewLabel>Campaign Duration</ReviewLabel>
            <ReviewValue>{formData.duration} Days</ReviewValue>
          </ReviewItem>
        </ReviewGrid>

        <Divider></Divider>

        <ReviewItem fullWidth>
          <ReviewLabel>Story Preview</ReviewLabel>
          <StoryPreview>{formData.story}</StoryPreview>
        </ReviewItem>
      </ReviewSection>

      <SuccessBox>
        <div>
          <SuccessTitle>✓ Next steps after submission:</SuccessTitle>
          <SuccessList>
            <li>Your campaign will be reviewed by our admin team</li>
            <li>You'll receive a notification once it's approved</li>
            <li>Approved campaigns go live immediately</li>
            <li>You can start sharing and receiving donations</li>
          </SuccessList>
        </div>
      </SuccessBox>
    </ReviewContainer>
  );
};

export default ReviewAndSubmitStep;
const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const ReviewSection = styled.div`
  background-color: #f0f9ff;
  border: 1px solid #bfdbfe;
  border-radius: 6px;
  padding: 16px;

  @media (max-width: 768px) {
    padding: 14px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 4px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 12px 0;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 8px;
  }
`;

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  grid-column: ${({ fullWidth }) => (fullWidth ? "1 / -1" : "auto")};

  @media (max-width: 480px) {
    gap: 2px;
    grid-column: 1;
  }
`;

const ReviewLabel = styled.span`
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const ReviewValue = styled.span`
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 1.4;
    word-break: break-word;
  }
`;

const StoryPreview = styled.div`
  background-color: #fff;
  padding: 12px;
  border-radius: 4px;
  font-size: 13px;
  color: #374151;
  line-height: 1.6;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 12px;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 11px;
    line-height: 1.4;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 10px 0 20px 0;

  @media (max-width: 768px) {
    margin: 8px 0 16px 0;
  }

  @media (max-width: 480px) {
    margin: 6px 0 12px 0;
  }
`;

const SuccessBox = styled.div`
  background-color: #dcfce7;
  border: 1px solid #86efac;
  border-radius: 6px;
  padding: 12px;
  display: flex;
  gap: 8px;
  font-size: 13px;
  color: #166534;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 12px;
    gap: 6px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 11px;
    gap: 4px;
    flex-direction: column;
  }
`;

const SuccessTitle = styled.div`
  font-weight: 600;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    margin-bottom: 6px;
    font-size: 12px;
  }
`;

const SuccessList = styled.ul`
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 480px) {
    padding-left: 16px;
    gap: 2px;
  }
`;
