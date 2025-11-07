import React from "react";
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
import { useParams } from "react-router-dom";

const CampaignDetailsModal = () => {
  const { campaignId } = useParams();

  return (
    <Overlay>
      <ModalContent>
        <TopBar>
          <BackButton>
            <IoMdArrowBack size={20} /> Back
          </BackButton>
        </TopBar>

        <MainLayout>
          <LeftSection>
            {/* <Image src={campaign.avatar} alt={campaign.name} /> */}

            <CampaignInfo>
              <h2>Degree - {campaign.school}</h2>

              <SchoolMeta>
                <IoLocationOutline />
                <span>campaign.school</span>
                <GoBook />
                <span>campaign.course</span>
                <span>
                  <LuGraduationCap /> 400 Level
                </span>
              </SchoolMeta>

              <ProgressSection>
                <AmountRow>
                  <div>
                    <h3>₦campaign.raised.toLocaleString</h3>
                    <p>raised of ₦campaign.goal.toLocaleString goal</p>
                  </div>
                  <DonorText>
                    campaign.donors
                    <p>donors</p>
                  </DonorText>
                </AmountRow>

                <ProgressBar>
                  <div className="filled" style={{ width: `${progress}%` }} />
                </ProgressBar>

                <ProgressFooter>
                  <span>% funded</span>
                  <span>
                    <MdAccessTime /> campaign.daysLeft days left
                  </span>
                </ProgressFooter>

                <StatCards>
                  <StatCard1>
                    <FiDollarSign className="icon" />
                    <div>
                      <h4>Remaining</h4>
                      <p>₦remaining.toLocaleString</p>
                    </div>
                  </StatCard1>
                  <StatCard2>
                    <LuUsers className="icon" />
                    <div>
                      <h4>Avg Donation</h4>
                      <p>₦Math.round(avgDonation).toLocaleString()</p>
                    </div>
                  </StatCard2>
                  <StatCard3>
                    <MdTrendingUp className="icon" />
                    <div>
                      <h4>Progress</h4>
                      <p>progress.toFixed(1)%</p>
                    </div>
                  </StatCard3>
                </StatCards>
              </ProgressSection>

              <Divider />

              <StorySection>
                <h3>Story</h3>
                <h3 className="sectionName">{campaign.name}</h3>
                <p>
                  Final year Computer Science student with innovative projects.
                  Despite financial challenges, I’ve maintained excellent
                  academic performance. This scholarship will help me focus on
                  my studies without financial worries.
                </p>

                <WhySupport>
                  <h4>Why I Need Your Support</h4>
                  <ReasonBox>
                    <h4>
                      <FaRegCheckCircle />
                    </h4>
                    <div>
                      <h5>Tuition Fees</h5>
                      <p>
                        Cover full academic year tuition and registration fees.
                      </p>
                    </div>
                  </ReasonBox>
                </WhySupport>
              </StorySection>
            </CampaignInfo>
          </LeftSection>

          <RightSection>
            <ProfileCard>
              <Avatar src="" />
              <h3>campaign.name</h3>
              <p>campaign.course</p>
              <VerifiedTag>
                <FaCheckCircle /> Verified Student
              </VerifiedTag>

              <ProfileMeta>
                <p>
                  <LuSchool /> campaign.school
                </p>
                <p>
                  <LuGraduationCap />
                  400 Level Student
                </p>

                <p>
                  <CiCalendar /> Created campaign.daysLeft days ago
                </p>
                <p>
                  <FaRegStar /> 4.8/5.0 GPA
                </p>
              </ProfileMeta>

              <DonateBtn onClick={onDonate}>
                <LuHeart /> Donate Now
              </DonateBtn>
              <ShareBtn>Share Campaign</ShareBtn>
            </ProfileCard>

            <TrustCard>
              <h4>
                <LuShield /> Trust & Safety
              </h4>
              <ul>
                <li>
                  <FaRegCheckCircle /> Identity Verified
                </li>
                <li>
                  <FaRegCheckCircle /> School Confirmed
                </li>
                <li>
                  <FaRegCheckCircle /> Documents Authenticated
                </li>
                <li>
                  <FaRegCheckCircle /> Direct School Payment
                </li>
              </ul>
            </TrustCard>
          </RightSection>
        </MainLayout>
      </ModalContent>
    </Overlay>
  );
};

export default CampaignDetailsModal;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background: #f9fafb;
  width: 100%;
  max-width: 1200px;
  height: max-content;
  border-radius: 0;
  padding: 1.5rem;
  margin: 2rem 0;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: none;
  border: none;
  font-size: 1rem;
  color: #374151;
  cursor: pointer;
`;

const MainLayout = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 2.2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
`;

const CampaignInfo = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.3rem;
    color: #101828;
    font-weight: normal;
  }
`;

const SchoolMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.9rem;
  margin-top: 0.3rem;
  flex-wrap: wrap;
`;

const ProgressSection = styled.div`
  margin-top: 1rem;
`;

const AmountRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  h3 {
    font-size: 1.4rem;
    color: #111827;
    margin: 0;
    font-weight: normal;
  }

  p {
    color: #6b7280;
    font-size: 0.9rem;
    margin: 0;
  }
`;

const DonorText = styled.span`
  font-size: 1.5rem;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.3rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 5px;
  margin-top: 0.6rem;
  overflow: hidden;

  .filled {
    height: 100%;
    background: #2563eb;
  }
`;

const ProgressFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.4rem;
  color: #6b7280;
  font-size: 0.85rem;
`;

const StatCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 1rem;
`;

const StatCard1 = styled.div`
  flex: 1;
  background: #eff6ff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  text-align: center;
  padding: 0.6rem 0.2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .icon {
    font-size: 1.3rem;
    color: #2563eb;
  }

  h4 {
    color: #6b7280;
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
    font-weight: normal;
  }

  p {
    color: #111827;
    font-weight: normal;
  }
`;
const StatCard2 = styled.div`
  flex: 1;
  background: #f0fdf4;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  text-align: center;
  padding: 0.6rem 0.2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .icon {
    font-size: 1.3rem;
    color: #3de456;
  }

  h4 {
    color: #6b7280;
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
    font-weight: normal;
  }

  p {
    color: #111827;
    font-weight: normal;
  }
`;

const StatCard3 = styled.div`
  flex: 1;
  background: #faf5ff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  text-align: center;
  padding: 0.6rem 0.2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .icon {
    font-size: 1.3rem;
    color: #eb25eb;
  }

  h4 {
    color: #6b7280;
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
    font-weight: normal;
  }

  p {
    color: #111827;
    font-weight: normal;
  }
`;
const Divider = styled.hr`
  margin: 1.5rem 0;
  border: none;
  border-top: 1px solid #e5e7eb;
`;

const StorySection = styled.div`
  margin-top: 1.5rem;

  h3 {
    color: #101828;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .sectionName {
    font-weight: normal;
  }

  p {
    color: #374151;
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const WhySupport = styled.div`
  margin-top: 1rem;

  h4 {
    color: #101828;
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
    font-weight: normal;
  }
`;

const ReasonBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 0.8rem;
  border-radius: 8px;

  h4 {
    font-size: 1.2rem;
    width: 40px;
    height: 40px;
    display: flex;

    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background: #e5e7eb;
    color: #2563eb;
    object-fit: cover;
  }

  h5 {
    color: #101828;
    margin: 0;
    font-size: 0.9rem;
    font-weight: normal;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6b7280;
    font-size: 0.85rem;
    margin: 0;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1;
`;

const ProfileCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);

  h3 {
    margin: 0.4rem 0;
    color: #101828;
    font-weight: normal;
  }

  p {
    color: #6b7280;
    font-size: 0.9rem;
    line-height: 2;
    margin-bottom: 0.5rem;
  }
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #f2f2ec;
  margin-bottom: 0.3rem;
`;

const VerifiedTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: #bdf0c3;
  color: #0c5815;
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

const ProfileMeta = styled.div`
  text-align: left;
  margin-top: 0.8rem;
  p {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin: 0.2rem 0;
  }
`;

const DonateBtn = styled.button`
  width: 100%;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-weight: 500;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background: #1d4ed8;
  }
`;

const ShareBtn = styled.button`
  width: 100%;
  border: 1px solid #e5e7eb;
  color: #374151;
  border-radius: 8px;
  padding: 0.6rem 0;
  font-weight: 500;
  margin-top: 0.5rem;
  background: #fff;

  &:hover {
    background: #f9fafb;
  }
`;

const TrustCard = styled.div`
  background: #ecfdf5;
  border-radius: 12px;
  padding: 1rem;
  line-height: 2;
  border: 1px solid #bbf7d0;

  h4 {
    color: #065f46;
    font-size: 1rem;
    margin-bottom: 0.6rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-weight: normal;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: #065f46;
      font-size: 0.9rem;
      margin-bottom: 0.4rem;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
  }
`;
