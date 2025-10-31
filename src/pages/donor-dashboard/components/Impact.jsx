// import React from "react";

// const Impact = () => {
//   return <div>Impact</div>;
// };

// export default Impact;

import React from "react";
import {
  ImpactContainer,
  SummaryCards,
  SummaryCard,
  SuccessStories,
  StoryCard,
  StoryHeader,
  StoryDetails,
  StoryRight,
  StoryTags,
  Tag,
} from "../../../components/styles/ImpactDashboardStyle";
import { FaGraduationCap, FaUserGraduate, FaHeart } from "react-icons/fa";

const Impact = () => {
  const summaryData = [
    { icon: <FaGraduationCap />, value: 12, label: "Students Supported" },
    { icon: <FaUserGraduate />, value: 7, label: "Graduated Students" },
    { icon: <FaHeart />, value: "₦2,450,000", label: "Total Contributions" },
  ];

  const stories = [
    {
      name: "Oluwasun Babatunde",
      status: "Graduated",
      course: "B.Sc. Computer Science",
      school: "University of Lagos - Class of 2024",
      tag: "First Class Honours",
      story:
        "Thanks to the generous donors on EduFund, I was able to complete my degree and now I’m giving back to the community. Forever grateful!",
      role: "Software Engineer at Andela",
      contribution: "₦650,000",
      achievements: ["Education Completed", "Career Launched", "Giving Back"],
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Chiamaka Eze",
      status: "Graduated",
      course: "Medicine & Surgery",
      school: "University of Nigeria - Class of 2024",
      tag: "Outstanding Medical Graduate Award",
      story:
        "EduFund donors made my dream of becoming a doctor a reality. I’m now serving my community and helping others.",
      role: "Medical Officer at Lagos University Teaching Hospital",
      contribution: "₦1,200,000",
      achievements: ["Education Completed", "Career Launched", "Giving Back"],
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Tunde Adeyemi",
      status: "Graduated",
      course: "B.Eng. Mechanical Engineering",
      school: "Ahmadu Bello University - Class of 2023",
      tag: "Best Graduating Student",
      story:
        "The support I received changed my life trajectory. Now I sponsor two students myself!",
      role: "Project Engineer at Shell Nigeria",
      contribution: "₦890,000",
      achievements: ["Education Completed", "Career Launched", "Giving Back"],
      avatar: "https://via.placeholder.com/50",
    },
  ];

  return (
    <ImpactContainer>
      <h2>Your Impact</h2>
      <p className="subtitle">See the lives you’ve changed through education</p>

      <SummaryCards>
        {summaryData.map((item, i) => (
          <SummaryCard key={i}>
            <div className="icon">{item.icon}</div>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </SummaryCard>
        ))}
      </SummaryCards>

      <SuccessStories>
        <h3>Success Stories</h3>
        {stories.map((story, i) => (
          <StoryCard key={i}>
            <StoryHeader>
              <img src={story.avatar} alt={story.name} />
              <div>
                <h4>
                  {story.name} <span className="status">{story.status}</span>
                </h4>
                <p className="course">{story.course}</p>
                <p className="school">{story.school}</p>
                <Tag>{story.tag}</Tag>
              </div>
            </StoryHeader>

            <StoryDetails>
              <p className="story">{story.story}</p>
              <p className="role">{story.role}</p>
            </StoryDetails>

            <StoryRight>
              <h5>Your Contribution</h5>
              <h2>{story.contribution}</h2>
              <StoryTags>
                {story.achievements.map((ach, i) => (
                  <span key={i}>{ach}</span>
                ))}
              </StoryTags>
            </StoryRight>
          </StoryCard>
        ))}
      </SuccessStories>
    </ImpactContainer>
  );
};

export default Impact;
