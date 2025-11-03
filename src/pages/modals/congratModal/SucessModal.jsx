import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  overflow-y: auto;
  z-index: 100;
  padding: 25px 0;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 12px;
  width: 40%;
  height: 70%;
  min-height: max-content;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  position: relative;

  @media (max-width: 768px) {
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    height: auto;
    border-radius: 8px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 480px) {
    top: 12px;
    right: 12px;
    font-size: 20px;
  }
`;

export const ModalContent = styled.div`
  padding: 40px 32px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 32px 24px;
  }

  @media (max-width: 480px) {
    padding: 24px 16px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #222;
  margin: 0 0 12px 0;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 24px 0;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 20px;
  }
`;

export const CampaignCard = styled.div`
  background: #f0f8ff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  text-align: left;

  @media (max-width: 480px) {
    padding: 12px;
    margin-bottom: 20px;
  }
`;

export const CampaignHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 12px;
  }
`;

export const CampaignIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #1e40af;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }
`;

export const CampaignTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #222;
`;

export const CampaignDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 480px) {
    padding: 6px 0;
    font-size: 13px;
  }
`;

export const DetailLabel = styled.span`
  font-size: 13px;
  color: #666;
  font-weight: 500;
`;

export const DetailValue = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #222;
`;

export const StatusBadge = styled.span`
  background: #fef3c7;
  color: #d97706;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 480px) {
    padding: 3px 10px;
    font-size: 11px;
  }
`;

export const NextStepsSection = styled.div`
  text-align: left;
  background: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    margin-bottom: 20px;
  }
`;

export const NextStepsTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: #222;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 12px;
  }
`;

export const StepItem = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 10px;
  }
`;

export const StepNumber = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #e0e7ff;
  color: #1e40af;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 12px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 22px;
    height: 22px;
    font-size: 11px;
  }
`;

export const StepContent = styled.div`
  text-align: left;
`;

export const StepTitle = styled.p`
  margin: 0 0 4px 0;
  font-size: 13px;
  font-weight: 600;
  color: #222;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const StepDescription = styled.p`
  margin: 0;
  font-size: 12px;
  color: #666;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const SecurityMessage = styled.p`
  font-size: 12px;
  color: #16a34a;
  margin: 0 0 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  @media (max-width: 480px) {
    font-size: 11px;
    margin-bottom: 20px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 10px;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
  min-width: 140px;

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 13px;
    flex: auto;
    min-width: auto;
  }
`;

export const SecondaryButton = styled(Button)`
  background: white;
  color: #222;
  border: 1px solid #ddd;

  &:hover {
    background: #f9f9f9;
  }
`;

export const PrimaryButton = styled(Button)`
  background: #1e40af;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover {
    background: #1e3a8a;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
