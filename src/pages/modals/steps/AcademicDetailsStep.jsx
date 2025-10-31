import React from "react";
import styled from "styled-components";
import { Button, Form, Input } from "antd";
import { FaChevronRight, FaShieldAlt } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { TfiIdBadge } from "react-icons/tfi";
import { FaGraduationCap } from "react-icons/fa";
import { GoHash } from "react-icons/go";

const AcademicDetailsStep = ({ formData, onNext, onPrev }) => {
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    onNext(values);
  };
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={formData}
      onFinish={handleFinish}
      requiredMark={false}
    >
      <FormGroup>
        <Form.Item
          label={
            <LabelWithIcon>
              <TiDocumentText style={{ color: "#0056b3", fontSize: "18px" }} />{" "}
              School Name
            </LabelWithIcon>
          }
          name="schoolName"
          rules={[
            { required: true, message: "Please enter your school name!" },
          ]}
        >
          <Input placeholder="e.g., University of Lagos" />
        </Form.Item>
      </FormGroup>

      <FormGroup>
        <Form.Item
          label={
            <LabelWithIcon>
              <TfiIdBadge style={{ color: "#0056b3", fontSize: "18px" }} />{" "}
              Year/Level
            </LabelWithIcon>
          }
          name="yearLevel"
          rules={[
            {
              required: true,
              message: "Please enter your current year/level!",
            },
          ]}
        >
          <Input placeholder="e.g., 300 Level or Year 3" />
        </Form.Item>
      </FormGroup>

      <FormGroup>
        <Form.Item
          label={
            <LabelWithIcon>
              <FaGraduationCap style={{ color: "#0056b3", fontSize: "18px" }} />{" "}
              Matric Number
            </LabelWithIcon>
          }
          name="matricNumber"
          rules={[
            { required: true, message: "Please enter your matric number!" },
          ]}
        >
          <Input placeholder="e.g., UNILAG/CSC/2021/1234" />
        </Form.Item>
      </FormGroup>

      <FormGroup>
        <Form.Item
          label={
            <LabelWithIcon>
              <GoHash style={{ color: "#0056b3", fontSize: "18px" }} /> Jamb
              Registration Number
            </LabelWithIcon>
          }
          name="jambRegistrationNumber"
          rules={[
            {
              required: true,
              message: "Please enter your JAMB registration number!",
            },
          ]}
        >
          <Input placeholder="e.g., 12345678AB" />
        </Form.Item>
      </FormGroup>

      <InfoBox>
        <InfoIcon />
        <span>
          This information will be verified by our admin team to ensure campaign
          authenticity.
        </span>
      </InfoBox>

      <ActionsContainer>
        <Button onClick={onPrev} disabled={true}>
          Cancel
        </Button>
        <NextButton type="primary" htmlType="submit">
          Continue <FaChevronRight />
        </NextButton>
      </ActionsContainer>
    </Form>
  );
};

export default AcademicDetailsStep;
const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const LabelWithIcon = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InfoBox = styled.div`
  background-color: #e6f0ff;
  border-radius: 8px;
  padding: 15px 20px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #0056b3;
  margin-top: 25px;
  font-size: 14px;
  line-height: 1.5;
`;

const InfoIcon = styled(FaShieldAlt)`
  font-size: 20px;
  color: #007bff;
  margin-top: 2px;
  flex-shrink: 0;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 30px;
  border-top: 1px solid #f0f0f0;
  padding-top: 20px;
`;

const NextButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 5px;
`;
