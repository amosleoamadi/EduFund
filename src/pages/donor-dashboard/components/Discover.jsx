import React from "react";
import styled from "styled-components";
import { MdLocationOn, MdAccessTime } from "react-icons/md";
import { FaCheckCircle, FaRegHeart, FaShareAlt } from "react-icons/fa";

import { LuUsers } from "react-icons/lu";

import fatima from "../../../assets/Fatimo.img.png";
import ikpe from "../../../assets/Ikpe.img.png";
import grace from "../../../assets/Grace.img.png";
import samuel from "../../../assets/Samuel.img.png";

const Discover = () => {
  const campaigns = [
    {
      id: 1,
      name: "Fatima Hassan",
      avatar: fatima,
      course: "Pharmacy",
      school: "University of Ilorin",
      goal: 950000,
      raised: 580000,
      donors: 23,
      daysLeft: 42,
      description:
        "Passionate pharmacy student seeking support to complete final year...",
    },
    {
      id: 2,
      name: "Ikpe Emmanuel",
      avatar: ikpe,
      course: "Architecture",
      school: "Federal University of Technology. Akure",
      goal: 1200000,
      raised: 850000,
      donors: 35,
      daysLeft: 18,
      description:
        "Final year architecture student with excellent academic performance...",
    },
    {
      id: 3,
      name: "Grace Ezekiel",
      avatar: grace,
      course: "Accounting",
      school: "University of Benin",
      goal: 750000,
      raised: 320000,
      donors: 15,
      daysLeft: 65,
      description:
        "Dedicated Accounting student maintaining first-class grades...",
    },
    {
      id: 4,
      name: "Samuel Oladipupo",
      avatar: samuel,
      course: "Computer Engineering",
      school: "Federal University of Technology, Owerri",
      goal: 1050000,
      raised: 420000,
      donors: 18,
      daysLeft: 55,
      description:
        "Award-winning student innovator seeking educational support",
    },
  ];

  return (
    <Holder>
      <h3>Discover Campaigns</h3>
      <p>Find students who need your support</p>

      <CampaignContainer>
        {campaigns.map((c) => (
          <CampaignCard key={c.id}>
            <CardTop>
              <Avatar src={c.avatar} alt={c.name} />
              <Info>
                <NameWrapper>
                  <Name>{c.name}</Name>
                  <FaCheckCircle className="verified" />
                </NameWrapper>
                <Course>{c.course}</Course>
                <School>
                  <MdLocationOn /> {c.school}
                </School>
              </Info>
            </CardTop>

            <Description>{c.description}</Description>

            <Progress>
              <ProgressAmounts>
                <span>₦{c.raised.toLocaleString()}</span>
                <span>of ₦{c.goal.toLocaleString()}</span>
              </ProgressAmounts>
              <ProgressBar>
                <div
                  className="filled"
                  style={{ width: `${(c.raised / c.goal) * 100}%` }}
                />
              </ProgressBar>
            </Progress>

            <Stats>
              <Stat>
                <LuUsers /> {c.donors} donors
              </Stat>
              <Stat>
                <MdAccessTime /> {c.daysLeft} days left
              </Stat>
            </Stats>

            <Actions>
              <DonateButton>
                <FaRegHeart /> Donate Now
              </DonateButton>
              <ShareButton>
                <FaShareAlt />
              </ShareButton>
            </Actions>
          </CampaignCard>
        ))}
      </CampaignContainer>
    </Holder>
  );
};

export default Discover;

const Holder = styled.main`
  width: 100%;
  background-color: #f9fafb;

  h3 {
    color: #101828;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 0.3rem;
  }

  p {
    color: #4a5565;
    font-size: 14px;
    margin-bottom: 1.5rem;
  }
`;

const CampaignContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const CampaignCard = styled.div`
  flex: 1 1 48%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 900px) {
    flex: 1 1 100%;
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  .verified {
    color: #2563eb;
    font-size: 1rem;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Name = styled.p`
  color: #101828;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`;

const Course = styled.p`
  color: #4b5563;
  font-size: 0.9rem;
  margin: 0;
`;

const School = styled.p`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #6b7280;
  font-size: 0.85rem;
  margin: 0;
`;

const Description = styled.p`
  color: #374151;
  font-size: 0.9rem;
  margin: 0;
`;

const Progress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const ProgressAmounts = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #101828;
  font-weight: 500;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;

  .filled {
    height: 100%;
    background: #2563eb;
    border-radius: 4px;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  color: #4b5563;
  font-size: 0.85rem;
`;

const Stat = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
`;

const DonateButton = styled.button`
  flex: 1;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #1d4ed8;
  }
`;

const ShareButton = styled.button`
  background: none;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.55rem 0.8rem;
  cursor: pointer;
  color: #374151;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f3f4f6;
  }
`;
