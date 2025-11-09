import styled from "styled-components";

export const TabsContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

export const TabsHeader = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 30px;
  background: #f5f5f5;
  padding: 4px;
  border-radius: 24px;
  width: fit-content;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const TabButton = styled.button`
  padding: 10px 25px;
  border: none;
  background: ${(props) => (props.$isActive ? "white" : "transparent")};
  color: #333;
  font-size: 16px;
  font-weight: 500;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.$isActive ? "0 2px 8px rgba(0, 0, 0, 0.08)" : "none"};

  &:hover {
    background: ${(props) => (props.$isActive ? "white" : "#efefef")};
  }

  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 13px;
  }
`;

export const SuccessAlert = styled.div`
  background: #e8f5e9;
  border: 1px solid #4caf50;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 24px;
  display: flex;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 10px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    margin-bottom: 16px;
  }
`;

export const AlertContent = styled.div`
  flex: 1;

  > span {
    display: block;
    font-size: 16px;
    font-weight: 600;
    color: #2e7d32;
    margin-bottom: 8px;
  }

  > p {
    font-size: 14px;
    color: #558b2f;
    margin: 0;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    > span {
      font-size: 14px;
    }

    > p {
      font-size: 13px;
    }
  }
`;

export const CampaignDetails = styled.div`
  background: #f0f4ff;
  border: 1px solid #e0e7ff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 12px 16px;
    margin-bottom: 20px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    margin-bottom: 16px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CampaignCard = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 24px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const CampaignTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const BadgeContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  background: ${(props) =>
    props.$type === "verified" ? "#e8f5e9" : "#e3f2fd"};
  color: ${(props) => (props.$type === "verified" ? "#2e7d32" : "#1976d2")};
  border: 1px solid
    ${(props) => (props.$type === "verified" ? "#4caf50" : "#90caf9")};
`;

export const ShareButton = styled.button`
  border-radius: 9.474px;
  border: 1.184px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 6.737px 13.449px 6.263px 13.025px;
  color: #6b7280;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  transition: color 0.2s;

  &:hover {
    color: #1a1a1a;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 12px;
  }
`;

export const ProgressSection = styled.div`
  margin-bottom: 30px;
`;

export const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 13px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
`;

export const ProgressTrack = styled.div`
  width: 100%;
  height: 12px;
  background: #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 8px;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background: #2563eb;
  border-radius: 6px;
  transition: width 0.3s ease;
`;

export const ProgressText = styled.p`
  font-size: 13px;
  color: #666;
  margin: 0;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  border-top: 1px solid #e0e0e0;
  padding-top: 15px;

  @media (max-width: 768px) {
    gap: 24px;
    padding-top: 24px;
  }

  @media (max-width: 480px) {
    gap: 16px;
    padding-top: 16px;
  }
`;

export const StatItem = styled.div``;

export const StatNumber = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #333;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 4px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const StatusButtonsContainer = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 480px) {
    width: 100%;
    gap: 6px;
  }
`;

export const StatusButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #ddd;
  background: ${(props) => (props.$isActive ? "#1a1a1a" : "#f5f5f5")};
  color: ${(props) => (props.$isActive ? "white" : "#666")};
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.$isActive ? "#000" : "#efefef")};
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 11px;
  }
`;
