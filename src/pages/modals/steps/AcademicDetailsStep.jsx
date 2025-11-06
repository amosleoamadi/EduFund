import React from "react";
import styled from "styled-components";
import { FiBook, FiHash, FiAward } from "react-icons/fi";
import { AiFillBook } from "react-icons/ai";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 6.66699H8.00667"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 9.33301H8.00667"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 4H8.00667"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.666 6.66699H10.6727"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.666 9.33301H10.6727"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.666 4H10.6727"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.33398 6.66699H5.34065"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.33398 9.33301H5.34065"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.33398 4H5.34065"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 14.6667V12.6667C6 12.4899 6.07024 12.3203 6.19526 12.1953C6.32029 12.0702 6.48986 12 6.66667 12H9.33333C9.51014 12 9.67971 12.0702 9.80474 12.1953C9.92976 12.3203 10 12.4899 10 12.6667V14.6667"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9993 1.33301H3.99935C3.26297 1.33301 2.66602 1.92996 2.66602 2.66634V13.333C2.66602 14.0694 3.26297 14.6663 3.99935 14.6663H11.9993C12.7357 14.6663 13.3327 14.0694 13.3327 13.333V2.66634C13.3327 1.92996 12.7357 1.33301 11.9993 1.33301Z"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M14.2799 7.28125C14.3992 7.2286 14.5005 7.14209 14.5712 7.03245C14.6418 6.9228 14.6788 6.79484 14.6774 6.6644C14.6761 6.53397 14.6365 6.40679 14.5636 6.29863C14.4907 6.19048 14.3876 6.10608 14.2672 6.05591L8.5532 3.45325C8.37949 3.37401 8.19079 3.33301 7.99987 3.33301C7.80894 3.33301 7.62024 3.37401 7.44653 3.45325L1.7332 6.05325C1.61451 6.10523 1.51354 6.19067 1.44264 6.29912C1.37174 6.40758 1.33398 6.53434 1.33398 6.66391C1.33398 6.79348 1.37174 6.92025 1.44264 7.0287C1.51354 7.13716 1.61451 7.2226 1.7332 7.27458L7.44653 9.87991C7.62024 9.95915 7.80894 10.0002 7.99987 10.0002C8.19079 10.0002 8.37949 9.95915 8.5532 9.87991L14.2799 7.28125Z"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.666 6.66699V10.667"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 8.33301V10.6663C4 11.1968 4.42143 11.7055 5.17157 12.0806C5.92172 12.4556 6.93913 12.6663 8 12.6663C9.06087 12.6663 10.0783 12.4556 10.8284 12.0806C11.5786 11.7055 12 11.1968 12 10.6663V8.33301"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
          >
            <path
              d="M0 0H1.33333V12H0V0ZM9.33333 0H2V12H9.33333C10.0667 12 10.6667 11.4 10.6667 10.6667V1.33333C10.6667 0.6 10.0667 0 9.33333 0ZM8 4H4V3.33333H8V4ZM8 2.66667H4V2H8V2.66667Z"
              fill="#2563EB"
            />
          </svg>
          Course of Study
        </Label>
        <Input
          type="text"
          name="course"
          placeholder="e.g., Computer Engineering"
          value={formData.course || ""}
          onChange={handleChange}
          error={errors.course}
        />
        {errors.course && <ErrorMessage>{errors.course}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M10.666 6.66699H11.9993"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.666 9.33301H11.9993"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.11328 10.0004C4.25071 9.60971 4.50602 9.27134 4.84396 9.03198C5.18191 8.79262 5.58582 8.66406 5.99995 8.66406C6.41408 8.66406 6.81799 8.79262 7.15594 9.03198C7.49388 9.27134 7.74919 9.60971 7.88661 10.0004"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.99935 8.66667C6.73573 8.66667 7.33268 8.06971 7.33268 7.33333C7.33268 6.59695 6.73573 6 5.99935 6C5.26297 6 4.66602 6.59695 4.66602 7.33333C4.66602 8.06971 5.26297 8.66667 5.99935 8.66667Z"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.334 3.33301H2.66732C1.93094 3.33301 1.33398 3.92996 1.33398 4.66634V11.333C1.33398 12.0694 1.93094 12.6663 2.66732 12.6663H13.334C14.0704 12.6663 14.6673 12.0694 14.6673 11.333V4.66634C14.6673 3.92996 14.0704 3.33301 13.334 3.33301Z"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M2.66602 6H13.3327"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2.66602 10H13.3327"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66732 2L5.33398 14"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.6673 2L9.33398 14"
              stroke="#2563EB"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
