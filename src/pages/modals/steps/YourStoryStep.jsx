import React from "react";
import styled from "styled-components";
import { Button, Form, Input } from "antd";
import { FaExclamationCircle, FaChevronRight } from "react-icons/fa";

const { TextArea } = Input;

const YourStoryStep = ({ formData, onNext, onPrev }) => {
  const [form] = Form.useForm();
  const storyText = Form.useWatch("story", form);
  const characterCount = storyText ? storyText.length : 0;
  const minChars = 500;
  const maxChars = 1000;
  const isTooShort = characterCount > 0 && characterCount < minChars;
  const isTooLong = characterCount > maxChars;
  const hasError = isTooShort || isTooLong;

  const handleFinish = (values) => {
    if (!hasError) {
      onNext(values);
    }
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
          label="Your Story"
          name="story"
          rules={[
            { required: true, message: "Please tell your story!" },
            {
              validator: (_, value) => {
                if (
                  !value ||
                  (value.length >= minChars && value.length <= maxChars)
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(`Aim for ${minChars}-${maxChars} characters.`)
                );
              },
            },
          ]}
        >
          <TextArea
            style={{ resize: "none" }}
            rows={8}
            placeholder="Share your journey, challenges, dreams, and why you need support. Be authentic and personal - donors connect with real stories."
            showCount={{
              formatter: ({ count }) => (
                <CharacterCount $error={hasError}>
                  {count} characters • Aim for {minChars}-{maxChars} characters
                </CharacterCount>
              ),
            }}
          />
        </Form.Item>
      </FormGroup>

      <WhatToIncludeBox>
        <WarningIcon />
        <div>
          <h4>What to include in your story:</h4>
          <ul>
            <li>Your academic background and achievements</li>
            <li>Current challenges you're facing</li>
            <li>Your goals and aspirations</li>
            <li>How the funds will help you</li>
            <li>Your commitment to giving back</li>
          </ul>
        </div>
      </WhatToIncludeBox>

      <ActionsContainer>
        <Button onClick={onPrev}>Back</Button>
        <Button type="primary" htmlType="submit" disabled={hasError}>
          Continue <FaChevronRight />
        </Button>
      </ActionsContainer>
    </Form>
  );
};

export default YourStoryStep;
const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const CharacterCount = styled.p`
  font-size: 12px;
  color: ${(props) => (props.$error ? "#ff4d4f" : "#777")};
  margin-top: -10px;
`;

const WhatToIncludeBox = styled.div`
  background-color: #fff3cd;
  border-radius: 8px;
  padding: 15px 20px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #664d03;
  margin-top: 25px;
  font-size: 14px;
  line-height: 1.5;

  ul {
    margin: 0;
    padding-left: 20px;
  }
`;

const WarningIcon = styled(FaExclamationCircle)`
  font-size: 20px;
  color: #ffc107;
  margin-top: 2px;
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
