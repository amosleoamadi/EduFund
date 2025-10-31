import React from "react";
import styled from "styled-components";

const YourStoryStep = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length <= 1000) {
      setFormData((prev) => ({
        ...prev,
        story: value,
      }));
    }
  };

  const charCount = formData.story?.length || 0;
  return (
    <FormContainer>
      <FormGroup>
        <Label>Your Story</Label>
        <Textarea
          placeholder="Share your journey, challenges, dreams, and why you need support. Be authentic and personal donors connect with real stories."
          value={formData.story || ""}
          onChange={handleChange}
          error={errors.story}
        />
        <CharacterCount error={charCount < 500 || charCount > 1000}>
          {charCount} characters • Aim for 500-1000 characters
        </CharacterCount>
        {errors.story && <ErrorMessage>{errors.story}</ErrorMessage>}
      </FormGroup>

      <InfoBox>
        <div>
          <InfoTitle>💡 What to include in your story:</InfoTitle>
          <InfoList>
            <li>Your academic background and achievements</li>
            <li>Current challenges you're facing</li>
            <li>Your goals and aspirations</li>
            <li>How the funds will help you</li>
            <li>Your commitment to giving back</li>
          </InfoList>
        </div>
      </InfoBox>
    </FormContainer>
  );
};

export default YourStoryStep;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid ${(props) => (props.error ? "#ef4444" : "#e5e7eb")};
  border-radius: 6px;
  font-size: 14px;
  background-color: #f9fafb;
  font-family: inherit;
  resize: none;
  min-height: 120px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #2563eb;
    background-color: #fff;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const CharacterCount = styled.div`
  font-size: 12px;
  color: ${(props) => (props.error ? "#ef4444" : "#6b7280")};
  text-align: right;
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: #ef4444;
`;

const InfoBox = styled.div`
  background-color: #fef3c7;
  border: 1px solid #fcd34d;
  border-radius: 6px;
  padding: 12px;
  display: flex;
  gap: 8px;
  font-size: 13px;
  color: #92400e;
`;

const InfoTitle = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
`;

const InfoList = styled.ul`
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
