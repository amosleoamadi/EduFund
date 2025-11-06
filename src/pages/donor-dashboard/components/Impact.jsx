import React from "react";
import styled from "styled-components";
import { FaUserGraduate, FaCheckCircle } from "react-icons/fa";
import { RiGraduationCapLine } from "react-icons/ri";
import { LuBookOpen } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import oluwaseun from "../../../assets/Babatunde.png";
import chiamaka from "../../../assets/Chiamaka.png";
import tunde from "../../../assets/Tunde.png";

const Impact = () => {
  const summaryData = [
    { icon: <RiGraduationCapLine />, value: 12, label: "Students Supported" },
    { icon: <FaUserGraduate />, value: 7, label: "Graduated Students" },
    {
      icon: <IoMdHeartEmpty />,
      value: "₦2,450,000",
      label: "Total Contributions",
    },
  ];

  const successStories = [
    {
      id: 1,
      name: "Oluwaseun Babatunde",
      avatar: oluwaseun,
      course: "B.Sc. Computer Science",
      school: "University of Lagos • Class of 2024",
      award: "First Class Honours",
      quote:
        "Thanks to the generous donors on EduFund, I was able to complete my degree and now I'm giving back to the community. Forever grateful!",
      job: "Software Engineer at Andela",
      amount: "₦650,000",
    },
    {
      id: 2,
      name: "Chiamaka Eze",
      avatar: chiamaka,
      course: "Medicine & Surgery",
      school: "University of Nigeria • Class of 2024",
      award: "Outstanding Medical Graduate Award",
      quote:
        "EduFund donors made my dream of becoming a doctor a reality. I'm now serving my community and helping others.",
      job: "Medical Officer at Lagos University Teaching Hospital",
      amount: "₦1,200,000",
    },
    {
      id: 3,
      name: "Tunde Adeyemi",
      avatar: tunde,
      course: "B.Eng. Mechanical Engineering",
      school: "Ahmadu Bello University •  Class of 2023",
      award: "Best Graduating Student",
      quote:
        "The support I received changed my life trajectory. Now I sponsor two students myself!",
      job: "Project Engineer at Shell Nigeria",
      amount: "₦890,000",
    },
  ];

  return (
    <Holder>
      <h3 className="impact">Your Impact</h3>
      <p className="impact-text">
        See the lives you've changed through education
      </p>

      <SummaryCards>
        {summaryData.map((item, index) => (
          <SummaryCard key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </SummaryCard>
        ))}
      </SummaryCards>

      <StoriesSection>
        <h3 className="stories">Success Stories</h3>
        {successStories.map((story, idx) => (
          <StoryItem key={idx}>
            <StoryLeft>
              <Avatar src={story.avatar} alt={story.name} />
              <StoryDetails>
                <NameWrapper>
                  <Name>{story.name}</Name>
                  <VerifiedBadge>
                    <FaUserGraduate /> Graduated
                  </VerifiedBadge>
                </NameWrapper>
                <Course>{story.course}</Course>
                <School>{story.school}</School>
                <Award>{story.award}</Award>
                <Quote>“{story.quote}”</Quote>
                <Job>
                  <LuBookOpen />
                  {story.job}
                </Job>
              </StoryDetails>
            </StoryLeft>

            <StoryRight>
              <ContributionBox>
                <ContributionLabel>Your Contribution</ContributionLabel>
                <ContributionAmount>{story.amount}</ContributionAmount>
              </ContributionBox>

              <Tags>
                <Tag>
                  <FaCheckCircle /> Education Completed
                </Tag>
                <Tag>
                  <FaCheckCircle /> Career Launched
                </Tag>
                <Tag>
                  <FaCheckCircle /> Giving Back
                </Tag>
              </Tags>
            </StoryRight>
          </StoryItem>
        ))}
      </StoriesSection>
    </Holder>
  );
};

export default Impact;

const Holder = styled.main`
  width: 100%;
  background-color: #f9fafb;

  .impact {
    color: #101828;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 0.3rem;
  }

  .impact-text {
    color: #4a5565;
    font-size: 14px;
    margin-bottom: 1.5rem;
  }
`;

const SummaryCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2563eb;
  border-radius: 16px;
  padding: 2rem;
  color: white;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const SummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  .icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    background: rgba(255, 255, 255, 0.15);
    padding: 0.8rem;
    border-radius: 12px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0.3rem 0;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.9;
  }
`;

const StoriesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .stories {
    color: #101828;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 0.5rem;
  }
`;

const StoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  gap: 1.5rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const StoryLeft = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex: 1;
`;

const Avatar = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

const StoryDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const Name = styled.p`
  color: #101828;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`;

const VerifiedBadge = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background-color: #dcfce7;
  color: #16a34a;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;

  svg {
    font-size: 0.9rem;
  }
`;

const Course = styled.p`
  margin: 0;
  color: #4b5563;
`;

const School = styled.p`
  margin: 0;
  color: #6b7280;
`;

const Award = styled.p`
  background: #f5f3ff;
  color: #7e22ce;
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  width: fit-content;
`;

const Quote = styled.p`
  color: #374151;
  font-style: italic;
  font-size: 0.95rem;
  margin: 0.5rem 0;
`;

const Job = styled.p`
  color: #4b5563;
  font-size: 0.9rem;
`;

const StoryRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.8rem;
`;

const ContributionBox = styled.div`
  background: linear-gradient(135deg, #f0fdf4, #ecfdf5);
  border-radius: 10px;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 6px rgba(16, 185, 129, 0.1);
`;

const ContributionLabel = styled.span`
  color: #4b5563;
  font-size: 0.85rem;
`;

const ContributionAmount = styled.h3`
  color: black;
  font-size: 1.3rem;
  margin: 0.3rem 0 0;
  font-weight: normal;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Tag = styled.span`
  color: #16a34a;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  svg {
    font-size: 0.9rem;
  }
`;
