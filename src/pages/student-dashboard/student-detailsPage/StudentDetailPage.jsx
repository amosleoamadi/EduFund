import styled from "styled-components";
import { FaCheckCircle, FaShieldAlt, FaUserCheck } from "react-icons/fa";
import { CiMapPin } from "react-icons/ci";

const CampaignDetailPage = () => {
  return (
    <Container>
      <ContentWrapper>
        <MainContent>
          <ProfileImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HifQPsfOiaLJGm2fioV5IEN7kxZQeE.png"
            alt="Profile"
          />

          <CampaignCardContainer>
            <Title>Computer Science Degree - UNILAG</Title>

            <InfoRow>
              <InfoItem>
                <CiMapPin />
                <span>University of Lagos</span>
              </InfoItem>
              <InfoItem>
                <span>Computer Science Degree</span>
              </InfoItem>
              <InfoItem>
                {/* <Users /> */}
                <span>400 Level</span>
              </InfoItem>
            </InfoRow>

            <MetricsRow>
              <MetricGroup>
                <Amount>₦300,000</Amount>
                <MetricLabel>raised of ₦900,000 goal</MetricLabel>
              </MetricGroup>
              <MetricGroup>
                <Amount>35</Amount>
                <MetricLabel>supporters</MetricLabel>
              </MetricGroup>
            </MetricsRow>

            <ProgressBarContainer>
              <ProgressBar />
            </ProgressBarContainer>

            <ProgressInfo>
              <span>100% funded</span>
              <span>0 days left</span>
            </ProgressInfo>

            <StatsGrid>
              <StatCard bg="#e8f1ff">
                <StatIcon>💵</StatIcon>
                <StatTitle>Remaining</StatTitle>
                <StatValue>₦0</StatValue>
              </StatCard>
              <StatCard bg="#e8f5e9">
                <StatIcon>👥</StatIcon>
                <StatTitle>Avg Donation</StatTitle>
                <StatValue>₦25,714</StatValue>
              </StatCard>
              <StatCard bg="#f3e5f5">
                <StatIcon>📈</StatIcon>
                <StatTitle>Progress</StatTitle>
                <StatValue>+100%</StatValue>
              </StatCard>
            </StatsGrid>
          </CampaignCardContainer>

          <StorySection>
            <SectionTitle>Story</SectionTitle>
            <StoryContent>
              <StorySubtitle>About Emeka Nwosu</StorySubtitle>
              <StoryText>
                Final year Computer Science student with innovative projects.
                Despite facing financial challenges, I've maintained excellent
                academic performance with a cumulative GPA of 4.5/5.0. I'm
                actively involved in campus activities and community service,
                always looking for ways to give back while pursuing my dreams.
              </StoryText>
              <StoryText>
                This scholarship will not only help me complete my education but
                will also enable me to focus on my studies without the constant
                worry of financial constraints. With your support, I can achieve
                my goal of becoming a professional in my field and making a
                positive impact in my community.
              </StoryText>
            </StoryContent>
          </StorySection>

          <NeedsSection>
            <SectionTitle>Why I Need Your Support</SectionTitle>
            <NeedItem>
              <NeedIcon>💰</NeedIcon>
              <NeedContent>
                <NeedTitle>Tuition Fees</NeedTitle>
                <NeedDescription>
                  Cover full academic year tuition and registration fees
                </NeedDescription>
              </NeedContent>
            </NeedItem>
          </NeedsSection>
        </MainContent>

        <Sidebar>
          <SidebarCard>
            <CreatorAvatar
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HifQPsfOiaLJGm2fioV5IEN7kxZQeE.png"
              alt="Creator"
            />
            <CreatorName>Emeka Nwosu</CreatorName>
            <CreatorRole>Campaign Creator</CreatorRole>
            <VerifiedBadge>Verified</VerifiedBadge>

            <DividerLine />

            <DetailsList>
              <DetailItem>
                <DetailIcon>📍</DetailIcon>
                <DetailText>University of Lagos</DetailText>
              </DetailItem>
              <DetailItem>
                <DetailIcon>📊</DetailIcon>
                <DetailText>Full Leveled</DetailText>
              </DetailItem>
              <DetailItem>
                <DetailIcon>📚</DetailIcon>
                <DetailText>400 Level</DetailText>
              </DetailItem>
              <DetailItem>
                <DetailIcon>🎨</DetailIcon>
                <DetailText>Arts</DetailText>
              </DetailItem>
            </DetailsList>

            <DividerLine />

            <SafetySection>
              <SafetyTitle>Trust & Safety</SafetyTitle>
              <SafetyItem>
                <FaCheckCircle />
                <SafetyText>Identity verified</SafetyText>
              </SafetyItem>
              <SafetyItem>
                <FaUserCheck />
                <SafetyText>Account verified</SafetyText>
              </SafetyItem>
              <SafetyItem>
                <FaShieldAlt />
                <SafetyText>School Verified Payment</SafetyText>
              </SafetyItem>
            </SafetySection>
          </SidebarCard>
        </Sidebar>
      </ContentWrapper>
    </Container>
  );
};

export default CampaignDetailPage;

const Container = styled.div`
  min-height: 100vh;
  background: #f9f9f9;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 280px;
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  background: #e5e5e5;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const CampaignCardContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 12px 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;

  @media (max-width: 480px) {
    gap: 12px;
    font-size: 12px;
    margin-bottom: 16px;
    padding-bottom: 16px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 16px;
    height: 16px;
    color: #999;
  }
`;

const MetricsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const MetricGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Amount = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const MetricLabel = styled.span`
  font-size: 13px;
  color: #666;
  margin-top: 2px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 12px;

  @media (max-width: 480px) {
    height: 6px;
    margin-bottom: 10px;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  border-radius: 4px;
`;

const ProgressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #666;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 16px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const StatCard = styled.div`
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  background: ${(props) => props.bg};

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const StatIcon = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 6px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const StatTitle = styled.div`
  font-size: 13px;
  color: #666;
  margin-bottom: 6px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const StatValue = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
const StorySection = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #111;
  margin-bottom: 16px;
`;

const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StorySubtitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111;
  margin-bottom: 8px;
`;

const StoryText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #555;
`;

const NeedsSection = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const NeedItem = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`;

const NeedIcon = styled.div`
  font-size: 24px;
  flex-shrink: 0;
`;

const NeedContent = styled.div``;

const NeedTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #111;
  margin-bottom: 4px;
`;

const NeedDescription = styled.p`
  font-size: 13px;
  color: #666;
`;

const Sidebar = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CreatorAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 8px;
`;

const CreatorName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #111;
  text-align: center;
`;

const CreatorRole = styled.div`
  font-size: 12px;
  color: #999;
  text-align: center;
`;

const VerifiedBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 12px;
  color: #10b981;
  margin-top: 4px;
`;

const DividerLine = styled.div`
  height: 1px;
  background: #e5e5e5;
  margin: 8px 0;
`;

const DetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #666;
`;

const DetailIcon = styled.span`
  font-size: 14px;
`;

const DetailText = styled.span``;

const SafetySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SafetyTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #111;
  margin-bottom: 4px;
`;

const SafetyItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #666;

  svg {
    color: #10b981;
    font-size: 14px;
  }
`;

const SafetyText = styled.span``;
