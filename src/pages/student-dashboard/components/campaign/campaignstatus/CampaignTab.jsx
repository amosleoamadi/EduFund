import { useContext, useState } from "react";
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
import { AppContext } from "../../../../../context/AppContext";

const CampaignTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState("current");
  const { openModal } = useContext(AppContext);

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
            <CampaignTitle>{data?.data[0]?.title}</CampaignTitle>
            <BadgeContainer>
              <Badge $type="verified">✓ Verified</Badge>
              <Badge $type="active">
                {data?.data[0]?.isActive ? "Active" : "Pending"}
              </Badge>
            </BadgeContainer>
          </div>
          <>
            <ShareButton onClick={() => openModal({ source: "campaign" })}>
              <span style={{ marginRight: "8px" }}>
                <FiShare2 />
              </span>
              Share
            </ShareButton>
          </>
        </div>

        <ProgressSection>
          <ProgressLabel>
            <span>Campaign Progress</span>
            <span>₦{data?.data[0]?.target.toLocaleString()}</span>
          </ProgressLabel>
          <ProgressTrack>
            <ProgressFill
              style={{
                width: `${
                  (data?.data[0]?.totalDonations / data?.data[0]?.target) * 100
                }%`,
              }}
            />
          </ProgressTrack>
          <ProgressText>
            ₦
            {(
              data?.data[0]?.target - data?.data[0]?.totalDonations
            ).toLocaleString()}
            <span>more needed to reach your goal</span>
          </ProgressText>
        </ProgressSection>

        <StatsContainer>
          <StatItem>
            <StatNumber>{data?.data[0]?.donors}</StatNumber>
            <StatLabel>Donors</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{data?.data[0]?.fundedPercentage}%</StatNumber>
            <StatLabel>Funded</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{data?.data[0]?.daysLeft}</StatNumber>
            <StatLabel>Days Left</StatLabel>
          </StatItem>
        </StatsContainer>
      </CampaignCard>
    </TabsContainer>
  );
};

export default CampaignTabs;
