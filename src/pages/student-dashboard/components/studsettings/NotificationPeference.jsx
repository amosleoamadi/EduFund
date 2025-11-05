import styled from "styled-components";
import { FiBell } from "react-icons/fi";
import { useState } from "react";

const NotificationPeference = () => {
  const [preferences, setPreferences] = useState({
    donations: true,
    campaign: true,
    email: true,
  });

  const handleToggle = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const items = [
    {
      key: "donations",
      title: "New Donation Alerts",
      description: "Get notified when you receive a donation",
    },
    {
      key: "campaign",
      title: "Campaign Updates",
      description: "Receive updates about your campaign progress",
    },
    {
      key: "email",
      title: "Email Notifications",
      description: "Get important updates via email",
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

export default NotificationPeference;
const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: 100%;
  margin-bottom: 30px;

  @media (max-width: 1199px) {
    padding: 28px;
    margin-bottom: 28px;
  }

  @media (max-width: 767px) {
    padding: 24px;
    border-radius: 10px;
    margin-bottom: 24px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 479px) {
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  }
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

  @media (max-width: 1199px) {
    margin-bottom: 28px;
    font-size: 22px;

    svg {
      width: 26px;
      height: 26px;
    }
  }

  @media (max-width: 767px) {
    margin-bottom: 24px;
    font-size: 20px;
    gap: 10px;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 479px) {
    margin-bottom: 20px;
    font-size: 18px;
    gap: 8px;

    svg {
      width: 22px;
      height: 22px;
    }
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

  @media (max-width: 767px) {
    padding: 18px 0;
  }

  @media (max-width: 479px) {
    align-items: flex-start;
    gap: 12px;
    padding: 16px 0;
  }
`;

const PreferenceContent = styled.div`
  flex: 1;

  @media (max-width: 479px) {
    width: 100%;
  }
`;

const PreferenceTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 8px 0;

  @media (max-width: 767px) {
    font-size: 17px;
    margin-bottom: 6px;
  }

  @media (max-width: 479px) {
    font-size: 15px;
    margin-bottom: 4px;
  }
`;

const PreferenceDescription = styled.h5`
  font-size: 15px;
  color: #6b7280;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 13px;
  }

  @media (max-width: 479px) {
    font-size: 12px;
    line-height: 1.4;
  }
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

  @media (max-width: 479px) {
    width: 44px;
    height: 26px;

    &::before {
      width: 22px;
      height: 22px;
      top: 2px;
      left: 2px;
    }

    &:checked::before {
      left: 20px;
    }
  }
`;
