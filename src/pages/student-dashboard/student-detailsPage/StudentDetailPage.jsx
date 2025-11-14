import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MdAccessTime, MdTrendingUp } from "react-icons/md";
import { FaRegCheckCircle, FaCheckCircle } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { LuGraduationCap } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa6";
import { LuSchool, LuHeart, LuShield, LuUsers } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FiDollarSign } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import { useParams, useNavigate } from "react-router-dom";
import { useGetCampaignByIdQuery } from "../../../utils/stundentauth/createcampaignapi";
import { AppContext } from "../../../context/AppContext";
import LoadingState from "../../modals/loadingstate/LoadingState";
import DonationModal from "../../modals/steps/DonationModal";

const StudentDetailPage = () => {
  const { campaignId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetCampaignByIdQuery(campaignId);
  const { profileImages, getProfileImageGlobal, openModal, openCampaign } =
    useContext(AppContext);
  const [selectedCampaign, setSelectedCampaign] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  if (isLoading) {
    return <LoadingState />;
  }

  const campaign = data?.data;

  if (!campaign) {
    return (
      <PageContainer>
        <ContentWrapper>
          <ErrorMessage>Campaign not found</ErrorMessage>
        </ContentWrapper>
      </PageContainer>
    );
  }

  // Get student avatar
  const getStudentAvatar = (student) => {
    if (!student?.studentId?._id) return null;
    const profileImage = getProfileImageGlobal(student.studentId._id);
    if (profileImage) return profileImage;
    if (student.studentId.avatar) return student.studentId.avatar;
    return null;
  };

  // Get user initials
  const getUserInitials = (student) => {
    if (!student?.studentId?.fullName) return "U";
    return student.studentId.fullName
      .split(" ")
      .map((name) => name.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const studentAvatar = getStudentAvatar(campaign);
  const studentInitials = getUserInitials(campaign);

  // Calculate campaign metrics
  const progress = campaign?.target
    ? (campaign.totalDonations / campaign.target) * 100
    : 0;
  const remaining = campaign?.target
    ? campaign.target - campaign.totalDonations
    : 0;
  const avgDonation = campaign?.donors
    ? campaign.totalDonations / campaign.donors
    : 0;

  const handleBack = () => {
    navigate(-1);
  };

  const handleDonateClick = () => {
    setSelectedCampaign(true);
    setSelectedStudent(campaign);
  };

  return (
    <>
      <PageContainer>
        <ContentWrapper>
          <MainLayout>
            <LeftSection>
              <CampaignInfo>
                <HeaderSection>
                  <Title>
                    {campaign?.course} - {campaign?.schoolName}
                  </Title>
                  <SchoolMeta>
                    <IoLocationOutline />
                    <span>{campaign?.schoolName}</span>
                    <GoBook />
                    <span>{campaign?.course}</span>
                    <span>
                      <LuGraduationCap /> {campaign?.level || "Student"}
                    </span>
                  </SchoolMeta>
                </HeaderSection>

                <ProgressSection>
                  <AmountRow>
                    <div>
                      <RaisedAmount>
                        ₦{campaign?.totalDonations?.toLocaleString()}
                      </RaisedAmount>
                      <GoalText>
                        raised of ₦{campaign?.target?.toLocaleString()} goal
                      </GoalText>
                    </div>
                    <DonorText>
                      <DonorCount>{campaign?.donors}</DonorCount>
                      <DonorLabel>donors</DonorLabel>
                    </DonorText>
                  </AmountRow>

                  <ProgressBar>
                    <div className="filled" style={{ width: `${progress}%` }} />
                  </ProgressBar>

                  <ProgressFooter>
                    <span>{progress.toFixed(1)}% funded</span>
                    <span>
                      <MdAccessTime /> {campaign?.daysLeft} days left
                    </span>
                  </ProgressFooter>

                  <StatCards>
                    <StatCard1>
                      <FiDollarSign className="icon" />
                      <div>
                        <StatLabel>Remaining</StatLabel>
                        <StatValue>₦{remaining.toLocaleString()}</StatValue>
                      </div>
                    </StatCard1>
                    <StatCard2>
                      <LuUsers className="icon" />
                      <div>
                        <StatLabel>Avg Donation</StatLabel>
                        <StatValue>
                          ₦{Math.round(avgDonation).toLocaleString()}
                        </StatValue>
                      </div>
                    </StatCard2>
                    <StatCard3>
                      <MdTrendingUp className="icon" />
                      <div>
                        <StatLabel>Progress</StatLabel>
                        <StatValue>{progress.toFixed(1)}%</StatValue>
                      </div>
                    </StatCard3>
                  </StatCards>
                </ProgressSection>

                <Divider />

                <StorySection>
                  <SectionTitle>Campaign Story</SectionTitle>
                  <StudentName>{campaign?.studentId?.fullName}</StudentName>
                  <StoryText>{campaign?.story}</StoryText>

                  <WhySupport>
                    <SupportTitle>Why I Need Your Support</SupportTitle>
                    <ReasonBox>
                      <ReasonIcon>
                        <FaRegCheckCircle />
                      </ReasonIcon>
                      <ReasonContent>
                        <ReasonTitle>Tuition Fees</ReasonTitle>
                        <ReasonDescription>
                          Cover full academic year tuition and registration fees
                          to continue my education without financial barriers.
                        </ReasonDescription>
                      </ReasonContent>
                    </ReasonBox>
                    <ReasonBox>
                      <ReasonIcon>
                        <FaRegCheckCircle />
                      </ReasonIcon>
                      <ReasonContent>
                        <ReasonTitle>Educational Materials</ReasonTitle>
                        <ReasonDescription>
                          Purchase necessary textbooks, software, and learning
                          resources to excel in my studies.
                        </ReasonDescription>
                      </ReasonContent>
                    </ReasonBox>
                    <ReasonBox>
                      <ReasonIcon>
                        <FaRegCheckCircle />
                      </ReasonIcon>
                      <ReasonContent>
                        <ReasonTitle>Living Expenses</ReasonTitle>
                        <ReasonDescription>
                          Support basic living costs so I can focus entirely on
                          my academic pursuits and projects.
                        </ReasonDescription>
                      </ReasonContent>
                    </ReasonBox>
                  </WhySupport>
                </StorySection>
              </CampaignInfo>
            </LeftSection>

            <RightSection>
              <ProfileCard>
                <ProfileHeader>
                  {studentAvatar ? (
                    <Avatar
                      src={studentAvatar}
                      alt={campaign?.studentId?.fullName}
                    />
                  ) : (
                    <AvatarPlaceholder>{studentInitials}</AvatarPlaceholder>
                  )}
                  <StudentInfo>
                    <StudentNameSmall>
                      {campaign?.studentId?.fullName}
                    </StudentNameSmall>
                    <StudentCourse>{campaign?.course}</StudentCourse>
                  </StudentInfo>
                </ProfileHeader>

                <VerifiedTag>
                  <FaCheckCircle /> Verified Student
                </VerifiedTag>

                <ProfileMeta>
                  <MetaItem>
                    <LuSchool />
                    <span>{campaign?.schoolName}</span>
                  </MetaItem>
                  <MetaItem>
                    <LuGraduationCap />
                    <span>{campaign?.level || "Student"}</span>
                  </MetaItem>
                  <MetaItem>
                    <CiCalendar />
                    <span>Joined recently</span>
                  </MetaItem>
                  <MetaItem>
                    <FaRegStar />
                    <span>Verified Campaign</span>
                  </MetaItem>
                </ProfileMeta>

                <ActionButtons>
                  <DonateBtn onClick={handleDonateClick}>
                    <LuHeart /> Donate Now
                  </DonateBtn>
                  <ShareBtn onClick={() => openModal({ campaign: campaign })}>
                    Share Campaign
                  </ShareBtn>
                </ActionButtons>
              </ProfileCard>

              <TrustCard>
                <TrustHeader>
                  <LuShield />
                  <TrustTitle>Trust & Safety</TrustTitle>
                </TrustHeader>
                <TrustList>
                  <TrustItem>
                    <FaRegCheckCircle /> Identity Verified
                  </TrustItem>
                  <TrustItem>
                    <FaRegCheckCircle /> School Confirmed
                  </TrustItem>
                  <TrustItem>
                    <FaRegCheckCircle /> Documents Authenticated
                  </TrustItem>
                  <TrustItem>
                    <FaRegCheckCircle /> Direct School Payment
                  </TrustItem>
                </TrustList>
              </TrustCard>
            </RightSection>
          </MainLayout>
        </ContentWrapper>
      </PageContainer>

      <DonationModal
        onClose={() => setSelectedCampaign(false)}
        campaign={selectedCampaign}
        data={selectedStudent}
      />
    </>
  );
};

export default StudentDetailPage;

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 0;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 0.5rem;
  }
`;

const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 2.2fr 1fr;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CampaignInfo = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

const HeaderSection = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #101828;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  line-height: 1.3;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const SchoolMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #6b7280;
  font-size: 0.9rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    gap: 0.4rem;
  }
`;

const ProgressSection = styled.div`
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const AmountRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

const RaisedAmount = styled.h2`
  font-size: 1.75rem;
  color: #111827;
  margin: 0;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const GoalText = styled.p`
  color: #6b7280;
  font-size: 0.95rem;
  margin: 0.25rem 0 0 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const DonorText = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;

  @media (max-width: 768px) {
    text-align: left;
    align-items: flex-start;
  }
`;

const DonorCount = styled.span`
  font-size: 1.5rem;
  color: #111827;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const DonorLabel = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  font-weight: normal;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  margin: 1rem 0 0.5rem 0;
  overflow: hidden;

  .filled {
    height: 100%;
    background: #2563eb;
    transition: width 0.3s ease;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    height: 6px;
  }
`;

const ProgressFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  color: #6b7280;
  font-size: 0.85rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const StatCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const StatCard = styled.div`
  background: ${(props) => props.background || "#eff6ff"};
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1rem 0.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .icon {
    font-size: 1.25rem;
    color: ${(props) => props.color || "#2563eb"};
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
  }
`;

const StatLabel = styled.h4`
  color: #6b7280;
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const StatValue = styled.p`
  color: #111827;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const StatCard1 = styled(StatCard)`
  background: #eff6ff;
  .icon {
    color: #2563eb;
  }
`;
const StatCard2 = styled(StatCard)`
  background: #f0fdf4;
  .icon {
    color: #16a34a;
  }
`;
const StatCard3 = styled(StatCard)`
  background: #faf5ff;
  .icon {
    color: #9333ea;
  }
`;

const Divider = styled.hr`
  margin: 1.5rem 0;
  border: none;
  border-top: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const StorySection = styled.div`
  margin-top: 1rem;
`;

const SectionTitle = styled.h2`
  color: #101828;
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const StudentName = styled.h3`
  color: #374151;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StoryText = styled.p`
  color: #374151;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const WhySupport = styled.div`
  margin-top: 1.5rem;
`;

const SupportTitle = styled.h4`
  color: #101828;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ReasonBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 8px;
  background: #f8fafc;
  margin-bottom: 0.75rem;
  border: 1px solid #e5e7eb;

  @media (max-width: 480px) {
    padding: 0.75rem;
    gap: 0.5rem;
  }
`;

const ReasonIcon = styled.div`
  font-size: 1.25rem;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #e5e7eb;
  color: #2563eb;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 1.1rem;
  }
`;

const ReasonContent = styled.div`
  flex: 1;
`;

const ReasonTitle = styled.h5`
  color: #101828;
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ReasonDescription = styled.p`
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProfileCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

const StudentInfo = styled.div`
  flex: 1;
`;

const StudentNameSmall = styled.h3`
  margin: 0;
  color: #101828;
  font-size: 1.1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StudentCourse = styled.p`
  color: #6b7280;
  font-size: 0.9rem;
  margin: 0.25rem 0 0 0;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #f2f2ec;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const AvatarPlaceholder = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #2563eb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.1rem;
  border: 2px solid #f2f2ec;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1rem;
  }
`;

const VerifiedTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #dcfce7;
  color: #166534;
  font-size: 0.8rem;
  padding: 0.4rem 0.75rem;
  border-radius: 16px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.35rem 0.6rem;
  }
`;

const ProfileMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.85rem;

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DonateBtn = styled.button`
  width: 100%;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #1d4ed8;
  }

  @media (max-width: 768px) {
    padding: 0.65rem;
    font-size: 0.85rem;
  }
`;

const ShareBtn = styled.button`
  width: 100%;
  border: 1px solid #e5e7eb;
  color: #374151;
  border-radius: 8px;
  padding: 0.75rem;
  font-weight: 500;
  background: #fff;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 0.9rem;

  &:hover {
    background: #f9fafb;
  }

  @media (max-width: 768px) {
    padding: 0.65rem;
    font-size: 0.85rem;
  }
`;

const TrustCard = styled.div`
  background: #ecfdf5;
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid #bbf7d0;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

const TrustHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

const TrustTitle = styled.h4`
  color: #065f46;
  font-size: 1rem;
  margin: 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TrustList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TrustItem = styled.li`
  color: #065f46;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
