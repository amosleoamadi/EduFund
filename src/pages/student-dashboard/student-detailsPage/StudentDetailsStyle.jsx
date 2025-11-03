import styled from "styled-components";

export const DetailContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  min-height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: #333;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    top: 16px;
    left: 16px;
  }
`;

export const ProfileSection = styled.div`
  position: relative;
  margin-bottom: 24px;
  margin-top: 60px;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 240px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const VerifiedBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: #10b981;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
`;

export const CampaignInfo = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const CampaignTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 12px 0;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 12px;
    font-size: 13px;
  }
`;

export const InfoText = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const MetricsSection = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const MetricsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const MetricValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #1f2937;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const MetricLabel = styled.div`
  font-size: 12px;
  color: #9ca3af;
  margin-top: 4px;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background: #1f2937;
  width: ${(props) => props.progress || 0}%;
  border-radius: 4px;
`;

export const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 12px;
  color: #6b7280;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const StatCard = styled.div`
  background: white;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-top: 4px solid
    ${(props) => {
      if (props.color === "blue") return "#3b82f6";
      if (props.color === "green") return "#10b981";
      if (props.color === "purple") return "#8b5cf6";
      return "#3b82f6";
    }};

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const StatIcon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const StatAmount = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #1f2937;
  margin-top: 4px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const StatLabel = styled.div`
  font-size: 11px;
  color: #6b7280;
`;

export const StorySection = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const StoryTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 16px 0;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const StoryContent = styled.div`
  h3 {
    font-size: 14px;
    font-weight: 600;
    color: #1f2937;
    margin: 0 0 8px 0;
  }

  p {
    font-size: 13px;
    color: #4b5563;
    line-height: 1.6;
    margin: 0 0 12px 0;
  }
`;

export const NeedSection = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const NeedItem = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;

  h4 {
    font-size: 14px;
    font-weight: 600;
    color: #1f2937;
    margin: 0 0 4px 0;
  }

  p {
    font-size: 12px;
    color: #6b7280;
    margin: 0;
  }
`;

export const NeedIcon = styled.div`
  font-size: 24px;
  flex-shrink: 0;
`;
