import React from "react";
import styled from "styled-components";
import { Button, Form, Input, InputNumber, Row, Col } from "antd";
import { FaLightbulb, FaChevronRight } from "react-icons/fa";
import { NextButton } from "./CampaignCreation";

const CampaignInformationStep = ({ formData, onNext, onPrev }) => {
  const [form] = Form.useForm();
  const fundingGoalValue = Form.useWatch("fundingGoal", form);

  const handleFinish = (values) => {
    onNext(values);
  };

  const setPresetAmount = (amount) => {
    form.setFieldsValue({ fundingGoal: amount });
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
          label="Campaign Title"
          name="campaignTitle"
          rules={[
            { required: true, message: "Please enter your campaign title!" },
          ]}
        >
          <Input placeholder="e.g., Help me complete my Computer Science degree" />
        </Form.Item>
        <p style={{ fontSize: "12px", color: "#777", marginTop: "-10px" }}>
          Make it compelling and personal
        </p>
      </FormGroup>

      <FormGroup>
        <Form.Item
          label="Funding Goal (₦)"
          name="fundingGoal"
          rules={[
            { required: true, message: "Please enter your funding goal!" },
          ]}
        >
          <InputNumber
            style={{ width: "100%" }}
            placeholder="850000"
            min={1000}
            formatter={(value) =>
              `₦ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/₦\s?|(,*)/g, "")}
          />
        </Form.Item>
        <p style={{ fontSize: "12px", color: "#777", marginTop: "-10px" }}>
          Enter the total tuition amount you need
        </p>
      </FormGroup>

      <ActionsContainer>
        <Button onClick={onPrev}>Back</Button>
        <NextButton type="primary" htmlType="submit">
          Continue <FaChevronRight />
        </NextButton>
      </ActionsContainer>
    </Form>
  );
};

export default CampaignInformationStep;
const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const TipsBox = styled.div`
  background-color: #e6f9ed;
  border-radius: 8px;
  padding: 15px 20px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #1a473a;
  margin-top: 25px;
  font-size: 14px;
  line-height: 1.5;

  ul {
    margin: 0;
    padding-left: 20px;
  }
`;

const TipsIcon = styled(FaLightbulb)`
  font-size: 20px;
  color: #28a745;
  margin-top: 2px;
  flex-shrink: 0;
`;

const AmountPresetButton = styled(Button)`
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  background-color: ${(props) => (props.$active ? "#e6f0ff" : "white")};
  border-color: ${(props) => (props.$active ? "#007bff" : "#d9d9d9")};
  color: ${(props) => (props.$active ? "#007bff" : "#333")};

  &:hover {
    background-color: ${(props) =>
      props.$active ? "#d0e0ff" : "#f0f0f0"} !important;
    border-color: ${(props) => (props.$active ? "#007bff" : "#bbb")} !important;
    color: ${(props) => (props.$active ? "#007bff" : "#333")} !important;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 30px;
  border-top: 1px solid #f0f0f0;
  padding-top: 20px;
`;
