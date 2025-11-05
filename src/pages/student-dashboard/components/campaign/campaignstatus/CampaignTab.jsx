import { useState } from "react";
import {
  TabsContainer,
  TabsHeader,
  TabButton,
  SuccessAlert,
  AlertContent,
  CampaignDetails,
  CampaignCard,
  CampaignTitle,
  BadgeContainer,
  Badge,
  ShareButton,
  ProgressSection,
  ProgressLabel,
  ProgressTrack,
  ProgressFill,
  ProgressText,
  StatsContainer,
  StatItem,
  StatNumber,
  StatLabel,
  StatusButtonsContainer,
  StatusButton,
} from "./CampaignTabStyle";
import { FiShare2 } from "react-icons/fi";

const CampaignTabs = () => {
  const [activeTab, setActiveTab] = useState("current");

  const currentCampaignData = {
    title: "Help Femi Product Design Degree",
    status: "Active",
    verified: true,
    demoText: "Demo: Test States",
    raised: 75000,
    goal: 100000,
    donors: 47,
    fundedPercent: 74,
    daysLeft: 45,
    statusOptions: ["Active", "Pending", "Rejected"],
    activeStatus: "Active",
  };

  const historyData = [
    {
      title: "Previous Campaign 1",
      status: "Completed",
      verified: true,
      demoText: "Demo: Completed Campaign",
      raised: 50000,
      goal: 50000,
      donors: 30,
      fundedPercent: 100,
      daysLeft: 0,
      statusOptions: ["Active", "Pending", "Rejected"],
      activeStatus: "Completed",
    },
  ];

  const data = activeTab === "current" ? currentCampaignData : historyData[0];

  return (
    <TabsContainer>
      <TabsHeader>
        <TabButton
          $isActive={activeTab === "current"}
          onClick={() => setActiveTab("current")}
        >
          Current Campaign
        </TabButton>
        <TabButton
          $isActive={activeTab === "history"}
          onClick={() => setActiveTab("history")}
        >
          Campaign History
        </TabButton>
      </TabsHeader>

      <SuccessAlert>
        <AlertContent>
          <span>✨ Campaign Live!</span>
          <p>
            Your campaign has been verified and is now live on the platform.
            Donors can now discover and support your education journey.
          </p>
        </AlertContent>
      </SuccessAlert>

      <CampaignDetails>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>{data.demoText}</span>
        </div>
        <StatusButtonsContainer>
          {data.statusOptions.map((status) => (
            <StatusButton key={status} $isActive={status === data.activeStatus}>
              {status}
            </StatusButton>
          ))}
        </StatusButtonsContainer>
      </CampaignDetails>

      <CampaignCard>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "24px",
          }}
        >
          <div>
            <CampaignTitle>{data.title}</CampaignTitle>
            <BadgeContainer>
              <Badge $type="verified">✓ Verified</Badge>
              <Badge $type="active">{data.status}</Badge>
            </BadgeContainer>
          </div>
          <ShareButton>
            <span style={{ marginRight: "8px" }}>
              <FiShare2 />{" "}
            </span>
            Share
          </ShareButton>
        </div>

        <ProgressSection>
          <ProgressLabel>
            <span>Campaign Progress</span>
            <span>
              ₦{data.raised.toLocaleString()} of ₦{data.goal.toLocaleString()}
            </span>
          </ProgressLabel>
          <ProgressTrack>
            <ProgressFill $percentage={0} />
          </ProgressTrack>
          <ProgressText>
            ₦{(data.goal - data.raised).toLocaleString()} more needed to reach
            your goal
          </ProgressText>
        </ProgressSection>

        <StatsContainer>
          <StatItem>
            <StatNumber>{data.donors}</StatNumber>
            <StatLabel>Donors</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{data.fundedPercent}%</StatNumber>
            <StatLabel>Funded</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{data.daysLeft}</StatNumber>
            <StatLabel>Days Left</StatLabel>
          </StatItem>
        </StatsContainer>
      </CampaignCard>
    </TabsContainer>
  );
};

export default CampaignTabs;
