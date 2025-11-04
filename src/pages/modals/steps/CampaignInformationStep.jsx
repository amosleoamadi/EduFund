import React from "react";
import styled from "styled-components";

const CampaignInformationStep = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuickSelect = (amount) => {
    setFormData((prev) => ({
      ...prev,
      fundingGoal: amount,
    }));
  };
  return (
    <FormContainer>
      <FormGroup>
        <Label>Campaign Title</Label>
        <Input
          type="text"
          name="campaignTitle"
          placeholder="e.g., Help me complete my Computer Science degree"
          value={formData.title || ""}
          onChange={handleChange}
          error={errors.title}
        />
        <div style={{ fontSize: "12px", color: "#6b7280" }}>
          Make it compelling and personal
        </div>
        {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label>Funding Goal (₦)</Label>
        <Input
          type="number"
          name="fundingGoal"
          placeholder="Enter the total tuition amount you need"
          value={formData.target || ""}
          onChange={handleChange}
          error={errors.target}
        />
        <QuickSelectContainer>
          <QuickSelectButton
            className={formData.fundingGoal === 100000 ? "active" : ""}
            onClick={() => handleQuickSelect(100000)}
          >
            ₦100K
          </QuickSelectButton>
          <QuickSelectButton
            className={formData.fundingGoal === 200000 ? "active" : ""}
            onClick={() => handleQuickSelect(200000)}
          >
            ₦200K
          </QuickSelectButton>
          <QuickSelectButton
            className={formData.fundingGoal === 300000 ? "active" : ""}
            onClick={() => handleQuickSelect(300000)}
          >
            ₦300K
          </QuickSelectButton>
        </QuickSelectContainer>
        {errors.target && <ErrorMessage>{errors.target}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label>Campaign Duration (Days)</Label>
        <Input
          type="number"
          name="campaignDuration"
          placeholder="e.g., 30"
          value={formData.duration || ""}
          onChange={handleChange}
          error={errors.duration}
        />
        {errors.duration && <ErrorMessage>{errors.duration}</ErrorMessage>}
      </FormGroup>

      <InfoBox>
        <div>
          <InfoTitle>💡 Tips for a successful campaign:</InfoTitle>
          <InfoList>
            <li>Set a realistic and specific goal</li>
            <li>Be transparent about how funds will be used</li>
            <li>Update your donors regularly</li>
          </InfoList>
        </div>
      </InfoBox>
    </FormContainer>
  );
};

export default CampaignInformationStep;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

const Input = styled.input`
  padding: 12px;
  border: 1px solid ${(props) => (props.error ? "#ef4444" : "#e5e7eb")};
  border-radius: 6px;
  font-size: 14px;
  background-color: #f9fafb;
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

const ErrorMessage = styled.span`
  font-size: 12px;
  color: #ef4444;
`;

const QuickSelectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 8px;
`;

const QuickSelectButton = styled.button`
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background-color: #fff;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #2563eb;
    color: #2563eb;
  }

  &.active {
    background-color: #2563eb;
    color: #fff;
    border-color: #2563eb;
  }
`;

const InfoBox = styled.div`
  background-color: #dbeafe;
  border: 1px solid #93c5fd;
  border-radius: 6px;
  padding: 12px;
  display: flex;
  gap: 8px;
  font-size: 13px;
  color: #1e40af;
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
