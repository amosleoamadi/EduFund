import React from "react";
import styled from "styled-components";
import { FiBook, FiHash, FiAward } from "react-icons/fi";

const AcademicDetailsStep = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <FormContainer>
      <FormGroup>
        <Label>
          <FiBook size={16} />
          School Name
        </Label>
        <Input
          type="text"
          name="schoolName"
          placeholder="e.g., University of Lagos"
          value={formData.schoolName || ""}
          onChange={handleChange}
          error={errors.schoolName}
        />
        {errors.schoolName && <ErrorMessage>{errors.schoolName}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label>
          <FiAward size={16} />
          Year/Level
        </Label>
        <Input
          type="text"
          name="year"
          placeholder="e.g., 300 Level or Year 3"
          value={formData.year || ""}
          onChange={handleChange}
          error={errors.year}
        />
        {errors.year && <ErrorMessage>{errors.year}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label>
          <FiHash size={16} />
          Matric Number
        </Label>
        <Input
          type="text"
          name="matricNumber"
          placeholder="e.g., UNILAG/CSC/2021/1234"
          value={formData.matricNumber || ""}
          onChange={handleChange}
          error={errors.matricNumber}
        />
        {errors.matricNumber && (
          <ErrorMessage>{errors.matricNumber}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label>
          <FiHash size={16} />
          JAMB Registration Number
        </Label>
        <Input
          type="text"
          name="jambRegistrationNumber"
          placeholder="e.g., 12345678AB"
          value={formData.jambRegistrationNumber || ""}
          onChange={handleChange}
          error={errors.jambRegistrationNumber}
        />
        {errors.jambRegistrationNumber && (
          <ErrorMessage>{errors.jambRegistrationNumber}</ErrorMessage>
        )}
      </FormGroup>

      <InfoBox>
        <span>ℹ️</span>
        <span>
          This information will be verified by our admin team to ensure campaign
          authenticity.
        </span>
      </InfoBox>
    </FormContainer>
  );
};

export default AcademicDetailsStep;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #1f2937;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 13px;
    gap: 6px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    gap: 4px;
  }
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

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;

    min-height: 44px;
  }
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: #ef4444;
  margin-top: 4px;

  @media (max-width: 480px) {
    font-size: 11px;
    margin-top: 2px;
  }
`;

const InfoBox = styled.div`
  background-color: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 6px;
  padding: 12px;
  display: flex;
  gap: 8px;
  font-size: 13px;
  color: #1e40af;

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
