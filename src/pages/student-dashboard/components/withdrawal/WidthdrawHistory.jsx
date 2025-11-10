import { useState } from "react";
import styled from "styled-components";

const WithdrawalHistory = ({ information }) => {
  const [activeTab, setActiveTab] = useState("all");

  const withdrawals = information;

  console.log(withdrawals);

  const filteredWithdrawals =
    activeTab === "all"
      ? withdrawals
      : withdrawals.filter((w) => w.status === activeTab);

  const allCount = withdrawals.length;
  const completedCount = withdrawals.filter(
    (w) => w.status === "completed"
  ).length;
  const processingCount = withdrawals.filter(
    (w) => w.status === "processing"
  ).length;
  const rejectedCount = withdrawals.filter(
    (w) => w.status === "rejected"
  ).length;

  return (
    <Container>
      <Header>
        <Title>Withdrawal History</Title>
        <TabsContainer>
          <Tab active={activeTab === "all"} onClick={() => setActiveTab("all")}>
            All ({allCount})
          </Tab>
          <Tab
            active={activeTab === "completed"}
            onClick={() => setActiveTab("completed")}
          >
            Completed ({completedCount})
          </Tab>
          <Tab
            active={activeTab === "processing"}
            onClick={() => setActiveTab("processing")}
          >
            Processing ({processingCount})
          </Tab>
          <Tab
            active={activeTab === "rejected"}
            onClick={() => setActiveTab("rejected")}
          >
            Rejected ({rejectedCount})
          </Tab>
        </TabsContainer>
      </Header>

      <CardsContainer>
        {filteredWithdrawals.map((withdrawal) => (
          <Card key={withdrawal._id}>
            <CardTop>
              <IconBox className={withdrawal.status}>{withdrawal.icon}</IconBox>
              <InfoSection>
                <Amount>₦{withdrawal.amount.toLocaleString()}</Amount>
                <Title2>{withdrawal.campaignId.title}</Title2>
              </InfoSection>
              <StatusBadge className={withdrawal.status}>
                {withdrawal.status === "completed" && "✓ Completed"}
                {withdrawal.status === "processing" && "⏱ Processing"}
                {withdrawal.status === "rejected" && "✕ Rejected"}
              </StatusBadge>
            </CardTop>

            <CardDetails>
              <DetailItem>
                Requested: {new Date(withdrawal.createdAt).toLocaleDateString()}
              </DetailItem>
              {/* <DetailItem>Ref: {withdrawal.ref}</DetailItem> */}
              {withdrawal.processed && (
                <DetailItem>{withdrawal.processed}</DetailItem>
              )}
            </CardDetails>

            {withdrawal.note && <Note>Note: {withdrawal.note}</Note>}
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default WithdrawalHistory;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 16px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
    gap: 6px;
  }
`;

const Tab = styled.button`
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  background: ${(props) => (props.active ? "#1e40af" : "#ffffff")};
  color: ${(props) => (props.active ? "#ffffff" : "#374151")};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    border-color: #1e40af;
    background: ${(props) => (props.active ? "#1e40af" : "#f3f4f6")};
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
  position: relative;

  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    gap: 12px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }
`;

const IconBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  flex-shrink: 0;

  &.completed {
    background: #d1fae5;
  }

  &.processing {
    background: #fef3c7;
  }

  &.rejected {
    background: #fee2e2;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }
`;

const InfoSection = styled.div`
  flex: 1;
`;

const Amount = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 4px 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Title2 = styled.p`
  font-size: 14px;
  color: #4b5563;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const StatusBadge = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;

  &.completed {
    background: #d1fae5;
    color: #10b981;
  }

  &.processing {
    background: #fef3c7;
    color: #f59e0b;
  }

  &.rejected {
    background: #fee2e2;
    color: #ef4444;
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 11px;
  }
`;

const CardDetails = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 12px;
  font-size: 12px;
  color: #6b7280;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 11px;
  }
`;

const DetailItem = styled.span`
  color: #6b7280;
`;

const Note = styled.p`
  font-size: 12px;
  color: #6b7280;
  font-style: italic;
  margin: 8px 0 0 0;
  padding-top: 8px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;
