import React, { useState } from "react";
import { FiBell } from "react-icons/fi";
import styled from "styled-components";

const DonorNotiification = () => {
  const [preferences, setPreferences] = useState({
    message: true,
    campaign: true,
    impact: true,
    suggestion: true,
    stories: true,
  });

  const handleToggle = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const items = [
    {
      key: "campaign",
      title: "Campaign updates",
      description: "Get notified when campaigns you support reach milestones",
    },
    {
      key: "message",
      title: "Student messages",
      description: "Receive thank you messages from students",
    },
    {
      key: "impact",
      title: "Impact reports",
      description: "Monthly reports about your donation impact",
    },
    {
      key: "suggestion",
      title: "New campaign suggestions",
      description: "Discover new campaigns that match your interests",
    },
    {
      key: "stories",
      title: "Success stories",
      description: "Hear about students who have graduated",
    },
  ];
  return (
    <CardContainer>
      <Header>
        <FiBell />
        Notification Preferences
      </Header>

      {items.map((item) => (
        <PreferenceItem key={item.key}>
          <PreferenceContent>
            <PreferenceTitle>{item.title}</PreferenceTitle>
            <PreferenceDescription>{item.description}</PreferenceDescription>
          </PreferenceContent>
          <ToggleSwitch
            type="checkbox"
            checked={preferences[item.key]}
            onChange={() => handleToggle(item.key)}
          />
        </PreferenceItem>
      ))}
    </CardContainer>
  );
};

export default DonorNotiification;
const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: 100%;
  margin-bottom: 30px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;

  svg {
    color: #2563eb;
    width: 28px;
    height: 28px;
  }
`;

const PreferenceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`;

const PreferenceContent = styled.div`
  flex: 1;
`;

const PreferenceTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 8px 0;
`;

const PreferenceDescription = styled.h5`
  font-size: 15px;
  color: #6b7280;
  margin: 0;
`;

const ToggleSwitch = styled.input`
  appearance: none;
  width: 48px;
  height: 28px;
  background-color: #d1d5db;
  border-radius: 14px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
  border: none;
  outline: none;

  &:checked {
    background-color: #10b981;
  }

  &::before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: white;
    top: 2px;
    left: 2px;
    transition: left 0.3s ease;
  }

  &:checked::before {
    left: 22px;
  }
`;
