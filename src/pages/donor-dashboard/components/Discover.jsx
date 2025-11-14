import React, { useState, useContext } from "react";
import styled from "styled-components";
import { MdLocationOn, MdAccessTime } from "react-icons/md";
import { FaCheckCircle, FaRegHeart, FaShareAlt } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import DonationModal from "../../modals/steps/DonationModal";
import { useGetCampaignQuery } from "../../../utils/stundentauth/createcampaignapi";
import LoadingState from "../../modals/loadingstate/LoadingState";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";

const Discover = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const { data, isLoading } = useGetCampaignQuery();
  const nav = useNavigate();
  const { profileImages, openModal } = useContext(AppContext);

  if (isLoading) {
    return <LoadingState />;
  }

  const campaigns = data?.data;

  const getAvatarSrc = (student) => {
    if (!student?.studentId?._id) return null;
    const profileImage = profileImages[student.studentId._id];
    if (profileImage) return profileImage;
    if (student.studentId.avatar) return student.studentId.avatar;
    return null;
  };

  const getUserInitials = (student) => {
    if (!student?.studentId?.fullName) return "U";
    return student.studentId.fullName
      .split(" ")
      .map((name) => name.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Holder>
      <Header>
        <h3>Discover Campaigns</h3>
        <p>Find students who need your support</p>
      </Header>

      <CampaignContainer>
        {campaigns?.length > 0 ? (
          campaigns.map((c) => {
            const avatarSrc = getAvatarSrc(c);
            const userInitials = getUserInitials(c);

            return (
              <CampaignCard key={c._id}>
                <CardTop>
                  <AvatarContainer>
                    {avatarSrc ? (
                      <Avatar
                        src={avatarSrc}
                        alt={c?.studentId?.fullName}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    ) : (
                      <AvatarPlaceholder>{userInitials}</AvatarPlaceholder>
                    )}
                  </AvatarContainer>
                  <Info>
                    <NameWrapper>
                      <Name>{c?.studentId?.fullName}</Name>
                      <FaCheckCircle className="verified" />
                    </NameWrapper>
                    <Course>{c?.course}</Course>
                    <School>
                      <MdLocationOn /> {c?.schoolName}
                    </School>
                  </Info>
                </CardTop>

                <Description>{c?.story}</Description>

                <Progress>
                  <ProgressAmounts>
                    <span>₦{c?.totalDonations?.toLocaleString()}</span>
                    <span>of ₦{c?.target?.toLocaleString()}</span>
                  </ProgressAmounts>
                  <ProgressBar>
                    <div
                      className="filled"
                      style={{
                        width: `${(c?.totalDonations / c?.target) * 100}%`,
                      }}
                    />
                  </ProgressBar>
                </Progress>

                <Stats>
                  <Stat>
                    <LuUsers /> {c?.donors} donors
                  </Stat>
                  <Stat>
                    <MdAccessTime /> {c?.daysLeft} days left
                  </Stat>
                </Stats>

                <Actions>
                  <DonateButton
                    onClick={() => {
                      setSelectedCampaign(true);
                      setSelectedStudent(c);
                    }}
                  >
                    <FaRegHeart /> Donate Now
                  </DonateButton>

                  <ViewButton
                    onClick={() =>
                      nav(`/donor_dashboard/student_detail/${c?._id}`)
                    }
                  >
                    View Details
                  </ViewButton>

                  <ShareButton onClick={() => openModal(c)}>
                    <FaShareAlt />
                  </ShareButton>
                </Actions>
              </CampaignCard>
            );
          })
        ) : (
          <p>{data?.message}</p>
        )}
      </CampaignContainer>

      <LoadMoreButton>Load More Campaigns</LoadMoreButton>

      <DonationModal
        onClose={() => setSelectedCampaign(false)}
        campaign={selectedCampaign}
        data={selectedStudent}
      />
    </Holder>
  );
};

export default Discover;

const Holder = styled.main`
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.25rem;
  }
`;

const Header = styled.div`
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }

  h3 {
    color: #101828;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 0.3rem;

    @media (max-width: 1024px) {
      font-size: 22px;
    }

    @media (max-width: 768px) {
      font-size: 20px;
      margin-bottom: 0.25rem;
    }

    @media (max-width: 480px) {
      font-size: 18px;
      margin-bottom: 0.2rem;
    }
  }

  p {
    color: #4a5565;
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 13px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

const CampaignContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: 1.25rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

const CampaignCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  transition: all 0.2s ease;
  height: max-content;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1024px) {
    padding: 1.25rem;
    gap: 0.875rem;
    height: max-content;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.75rem;
    border-radius: 10px;
    height: max-content;
  }

  @media (max-width: 480px) {
    padding: 0.875rem;
    gap: 0.625rem;
    border-radius: 8px;
    height: max-content;
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.875rem;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

const AvatarContainer = styled.div`
  position: relative;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }

  @media (max-width: 480px) {
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
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 0.8rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  flex: 1;

  .verified {
    color: #2563eb;
    font-size: 1rem;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  @media (max-width: 480px) {
    gap: 0.2rem;
  }
`;

const Name = styled.p`
  color: #101828;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Course = styled.p`
  color: #4b5563;
  font-size: 0.9rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const School = styled.p`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #6b7280;
  font-size: 0.85rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const Description = styled.p`
  color: #374151;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Progress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  @media (max-width: 480px) {
    gap: 0.2rem;
  }
`;

const ProgressAmounts = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #101828;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 5px;
  }

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

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const Stat = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  @media (max-width: 480px) {
    gap: 0.2rem;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 768px) {
    gap: 0.6rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
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

  @media (max-width: 768px) {
    padding: 0.55rem 0.9rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
    min-height: 44px;
  }
`;

const ViewButton = styled.button`
  flex: 1;
  background: #fff;
  color: #101828;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #f9fafb;
  }

  @media (max-width: 768px) {
    padding: 0.55rem 0.9rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
    min-height: 44px;
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

  @media (max-width: 768px) {
    padding: 0.5rem 0.7rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.7rem;
    font-size: 0.9rem;
    min-height: 44px;
  }
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 2rem auto 0;
  padding: 0.8rem 2rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  color: #101828;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #f9fafb;
  }

  @media (max-width: 768px) {
    margin: 1.5rem auto 0;
    padding: 0.75rem 1.75rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    margin: 1.25rem auto 0;
    padding: 0.875rem 2rem;
    font-size: 0.9rem;
    width: 100%;
    max-width: 200px;
    min-height: 44px;
  }
`;
