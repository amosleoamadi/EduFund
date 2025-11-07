import React, { useState } from "react";
import styled from "styled-components";
import { FiShare2 } from "react-icons/fi";
import amount from "../../../../assets/amount.svg";
import people from "../../../../assets/people.svg";
import target1 from "../../../../assets/target1.svg";
import last from "../../../../assets/last.svg";
import { GrFavorite } from "react-icons/gr";
import { GoShareAndroid } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { SlBadge } from "react-icons/sl";
import StudentLinkShare from "../../../modals/StudentLinkShare";
import CampaignCreation from "../../../modals/steps/CampaignCreation";
import {
  studentFirstname,
  studentLastname,
} from "../../../../config/slices/studentauthslice";
import { useSelector } from "react-redux";

const DashOverview = ({ data }) => {
  const [share, setShare] = useState(false);
  const [createcampaign, setCreateCampaign] = useState(false);
  const firstname = useSelector(studentFirstname);
  const lastname = useSelector(studentLastname);
  const donors = data?.data?.recentDonors;

  const handleOpen = () => {
    setShare(true);
  };

  const activities = [
    {
      title: "Received ₦50,000 from Dr. Olumide Johnson",
      time: "2 hours ago",
      icon: <GrFavorite />,
      bgColor: "#dbeafe",
      color: "#2563eb",
    },
    {
      title: "Campaign shared 5 times on social media",
      time: "1 hour ago",
      icon: <GoShareAndroid />,
      bgColor: "#dcfce7",
      color: "#10b981",
    },
    {
      title: "Tuition invoice verified",
      time: "30 minutes ago",
      icon: <IoIosCheckmarkCircleOutline />,
      bgColor: "#fef3c7",
      color: "#f59e0b",
    },
    {
      title: "Received ₦25,000 from Mrs. Adenike Okonkwo",
      time: "15 minutes ago",
      icon: <SlBadge />,
      bgColor: "#e0e7ff",
      color: "#6366f1",
    },
  ];
  return (
    <DashboardContainer>
      <Header>
        <SubText>
          <WelcomeText>
            Welcome back, {firstname} {lastname}! 👋
          </WelcomeText>
          <Text>Here's your campaign progress today</Text>
        </SubText>
        <>
          <CreateButton onClick={() => setCreateCampaign(true)}>
            + Create Campaign
          </CreateButton>

          <CampaignCreation
            create={createcampaign}
            setCreate={setCreateCampaign}
          />
        </>
      </Header>

      <InfoBanner>
        <InfoIcon>ℹ️</InfoIcon>
        <InfoText>
          Campaign Live! 🎉
          <span>
            Your campaign has been verified and is now live on the platform.
            Donors can now discover and support your education journey.
          </span>
        </InfoText>
      </InfoBanner>

      <StatsGrid>
        <StatCard>
          <Progress>
            <Rate>
              <img src={amount} alt="" />
            </Rate>
            <Percent>+{data?.data?.goalProgress || 0}%</Percent>
          </Progress>
          <StatValue>₦{data?.data?.totalRaised || 0}</StatValue>
          <StatLabel>Total Raised</StatLabel>
        </StatCard>
        <StatCard>
          <Progress>
            <Rate style={{ background: "#DCFCE7" }}>
              <img src={people} alt="" />
            </Rate>
            <Percent>Active</Percent>
          </Progress>
          <StatValue>{data?.data?.totalDonors || 0}</StatValue>
          <StatLabel>Total Donors</StatLabel>
        </StatCard>
        <StatCard>
          <Progress>
            <Rate style={{ background: "#F3E8FF" }}>
              <img src={target1} alt="" />
            </Rate>
          </Progress>
          <StatValue>{data?.data?.goalProgress || 0}%</StatValue>
          <StatLabel>Goal Progress</StatLabel>
        </StatCard>
        <StatCard>
          <Progress>
            <Rate style={{ background: "#F3E8FF" }}>
              <img src={last} alt="" />
            </Rate>
          </Progress>
          <StatValue>{data?.data?.daysRemaining || 0}</StatValue>
          <StatLabel>Days Remaining</StatLabel>
        </StatCard>
      </StatsGrid>

      <CampaignSection>
        <CampaignHeader>
          <Contents>
            <CampaignTitle>Help From Product Design Degree</CampaignTitle>
            <Para>
              <StatusButton>Verify</StatusButton>
              <StatusButton
                style={{
                  background: "none",
                  border: "1.184px solid #BEDBFF",
                  color: "#155DFC",
                }}
              >
                Active
              </StatusButton>
            </Para>
          </Contents>
          <>
            <ShareButton onClick={handleOpen}>
              <FiShare2 /> Share
            </ShareButton>

            <StudentLinkShare show={share} setShow={setShare} />
          </>
        </CampaignHeader>
        <CampaignText>
          <ProgressText>Campaign Progress</ProgressText>
          <ProgressText>₦0 / ₦0</ProgressText>
        </CampaignText>
        <ProgressBar>
          <ProgressFill percentage={0} />
        </ProgressBar>
        <ProgressText>₦0 more needed to reach your goal</ProgressText>
        <CampaignStatsRow>
          <CampaignStat>
            <CampaignStatValue>0</CampaignStatValue>
            <CampaignStatLabel>Donors</CampaignStatLabel>
          </CampaignStat>
          <CampaignStat>
            <CampaignStatValue>0%</CampaignStatValue>
            <CampaignStatLabel>Goal Progress</CampaignStatLabel>
          </CampaignStat>
          <CampaignStat>
            <CampaignStatValue>0</CampaignStatValue>
            <CampaignStatLabel>Days Left</CampaignStatLabel>
          </CampaignStat>
        </CampaignStatsRow>
      </CampaignSection>

      <ContentGrid>
        <Card>
          <CardHeader>
            <CardTitle>Recent Donors</CardTitle>
            <ViewAllLink>View All →</ViewAllLink>
          </CardHeader>
          {donors.length > 0 ? (
            donors.map((donor, idx) => (
              <DonorItem key={idx}>
                <DonorAvatar>{donor.name}</DonorAvatar>
                <DonorInfo>
                  <DonorName>{donor.name}</DonorName>
                  <DonorStatus>{donor.status}</DonorStatus>
                </DonorInfo>
                <DonorAmount>{donor.amount}</DonorAmount>
              </DonorItem>
            ))
          ) : (
            <ErrorText>No Donors yet</ErrorText>
          )}
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          {activities.map((activity, idx) => (
            <ActivityItem key={idx}>
              <ActivityIcon bgColor={activity.bgColor} color={activity.color}>
                {activity.icon}
              </ActivityIcon>
              <ActivityContent>
                <ActivityTitle>{activity.title}</ActivityTitle>
                <ActivityTime>{activity.time}</ActivityTime>
              </ActivityContent>
            </ActivityItem>
          ))}
        </Card>
      </ContentGrid>
    </DashboardContainer>
  );
};

export default DashOverview;
const DashboardContainer = styled.div`
  height: 100%;
  min-height: max-content;
  width: 100%;

  @media (max-width: 992px) {
    padding: 1rem;
  }

  @media (max-width: 576px) {
    padding: 0.5rem;
  }
`;

const ErrorText = styled.p`
  text-align: center;
  font-size: 1.5rem;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

const WelcomeText = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const SubText = styled.div``;

const Text = styled.p`
  color: #575858;
  font-size: 15.947px;
  font-style: normal;
  font-weight: 400;
  line-height: 28.421px;
`;

const CreateButton = styled.button`
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const InfoBanner = styled.div`
  border-radius: 11.225px;
  border: 1.123px solid #b9f8cf;
  background: #f0fdf4;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const InfoIcon = styled.div`
  color: #2563eb;
  font-size: 1.25rem;
  flex-shrink: 0;
`;

const InfoText = styled.p`
  margin: 0;
  color: #1e40af;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #016630;
  display: flex;
  flex-direction: column;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  padding: 1.5rem;
  border-radius: 16.579px;
  border: 1.184px solid #e5e7eb;
  background: rgb(255, 255, 255);
  box-shadow: 0 11.842px 17.763px -3.553px rgba(0, 0, 0, 0.1),
    0 4.737px 7.105px -4.737px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

const Progress = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Rate = styled.section`
  width: 54.842px;
  height: 54.842px;
  border-radius: 16.579px;
  background: #dbeafe;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
    height: 60%;
    object-fit: cover;
  }
`;

const Percent = styled.div`
  width: 56.731px;
  height: 26.053px;
  border-radius: 9.474px;
  border: 1.184px solid #b9f8cf;
  color: #00a63e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatLabel = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0 0 0.5rem 0;
`;

const StatValue = styled.p`
  font-size: 1.875rem;
  font-weight: 400;
  color: #3b3535;
  margin: 0;
`;

const CampaignSection = styled.div`
  padding: 1.5rem;
  border-radius: 16.579px;
  border: 1.184px solid #e5e7eb;
  background: rgb(255, 255, 255);
  box-shadow: 0 11.842px 17.763px -3.553px rgba(0, 0, 0, 0.1),
    0 4.737px 7.105px -4.737px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const CampaignHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CampaignTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
`;

const ShareButton = styled.button`
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
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: #2563eb;
  width: ${(props) => props.percentage}%;
  transition: width 0.3s;
`;

const CampaignText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ProgressText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

const CampaignStatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
`;

const CampaignStat = styled.div``;

const Para = styled.div`
  display: flex;
  gap: 5px;
`;

const StatusButton = styled.button`
  width: 65px;
  height: 25px;
  padding: 6px 6px 6px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9.474px;
  border: 1.184px solid #b9f8cf;
  background: #dcfce7;
`;

const CampaignStatLabel = styled.p`
  color: #6b7280;
  font-size: 0.75rem;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
`;

const CampaignStatValue = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 1.5rem;
  border-radius: 16.579px;
  border: 1.184px solid #e5e7eb;
  background: rgb(255, 255, 255);
  box-shadow: 0 11.842px 17.763px -3.553px rgba(0, 0, 0, 0.1),
    0 4.737px 7.105px -4.737px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
`;

const ViewAllLink = styled.p`
  color: #222;
  text-decoration: none;
  font-size: 0.875rem;
  cursor: pointer;
`;

const DonorItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 16.579px;
  border: 1.184px solid #f3f4f6;
  background: linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%);
`;

const DonorAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  flex-shrink: 0;
`;

const DonorInfo = styled.div`
  flex: 1;
`;

const DonorName = styled.p`
  font-weight: 500;
  color: #1a1a1a;
  margin: 0 0 0.25rem 0;
  font-size: 0.875rem;
`;

const DonorStatus = styled.p`
  color: #6b7280;
  font-size: 0.75rem;
  margin: 0;
`;

const DonorAmount = styled.p`
  color: #10b981;
  font-weight: 600;
  margin: 0;
  font-size: 0.875rem;
`;

const ActivityItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`;

const ActivityIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor || "#e5e7eb"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color || "#6b7280"};
  flex-shrink: 0;
  font-size: 1rem;
`;

const ActivityContent = styled.div`
  flex: 1;
`;

const ActivityTitle = styled.p`
  font-weight: 500;
  color: #1a1a1a;
  margin: 0 0 0.25rem 0;
  font-size: 0.875rem;
`;

const ActivityTime = styled.p`
  color: #6b7280;
  font-size: 0.75rem;
  margin: 0;
`;
