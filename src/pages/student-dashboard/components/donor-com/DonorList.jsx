import React, { useContext } from "react";
import styled from "styled-components";
import { MdVerified } from "react-icons/md";
import { AppContext } from "../../../../context/AppContext";

const DonorList = ({ data }) => {
  const defaultDonors = data?.data;
  const { getProfileImageGlobal } = useContext(AppContext);

  const formatDonorTime = (timestamp) => {
    if (!timestamp) return "Recently";

    const donorTime = new Date(timestamp);
    const currentTime = new Date();
    const timeDifference = currentTime - donorTime;

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (timeDifference < 60 * 1000) {
      return "Just now";
    } else if (hours < 1) {
      return `${minutes} min ago`;
    } else if (hours < 24) {
      return minutes > 0 ? `${hours} hr ${minutes} min ago` : `${hours} hr ago`;
    } else if (days < 7) {
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    } else {
      return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
    }
  };

  // Function to get user initials from full name
  const getInitials = (fullName) => {
    if (!fullName) return "U";

    const names = fullName.trim().split(" ");
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
    return (
      names[0].charAt(0) + names[names.length - 1].charAt(0)
    ).toUpperCase();
  };

  return (
    <Holder>
      <h3>Donors</h3>
      <Para>{defaultDonors.length} generous supporters</Para>
      <DonorsContainer>
        {defaultDonors.length > 0 &&
          defaultDonors.map((donor) => {
            const profileImage = getProfileImageGlobal(donor.senderId._id);
            const initials = getInitials(donor.senderId.fullName);

            return (
              <DonorItemWrapper key={donor.senderId._id}>
                <DonorLeftSection>
                  {profileImage ? (
                    <DonorAvatar
                      src={profileImage}
                      alt={donor.senderId.fullName}
                    />
                  ) : (
                    <DonorInitialsAvatar>{initials}</DonorInitialsAvatar>
                  )}
                  <DonorDetails>
                    <DonorNameWrapper>
                      <DonorName>{donor.senderId.fullName}</DonorName>
                      {donor.senderId.isVerified && <VerifiedIcon />}
                    </DonorNameWrapper>
                    <DonorTimestamp>
                      {formatDonorTime(donor?.senderId?.updatedAt)}
                    </DonorTimestamp>
                  </DonorDetails>
                </DonorLeftSection>
                <DonorRightSection>
                  <DonorAmount>₦{donor.amount.toLocaleString()}</DonorAmount>
                </DonorRightSection>
              </DonorItemWrapper>
            );
          })}
      </DonorsContainer>
    </Holder>
  );
};

export default DonorList;

const Holder = styled.main`
  width: 100%;

  h3 {
    color: #101828;
    font-size: 26.733px;
    font-style: normal;
    font-weight: 400;
    line-height: 35.644px;
  }
`;

const Para = styled.p`
  color: #4a5565;
  font-size: 17.822px;
  font-style: normal;
  font-weight: 400;
  line-height: 26.733px;
  margin-bottom: 15px;
`;

const DonorsContainer = styled.div`
  border-radius: 15.594px;
  border: 1.114px solid #e5e7eb;
  background: rgb(255, 255, 255);
  box-shadow: 0 11.139px 16.708px -3.342px rgba(0, 0, 0, 0.1),
    0 4.456px 6.683px -4.456px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 100%;
  min-height: max-content;
`;

const DonorItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`;

const DonorLeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`;

const DonorAvatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 2px solid #e5e7eb;
`;

const DonorInitialsAvatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  flex-shrink: 0;
  border: 2px solid #e5e7eb;
`;

const DonorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const DonorNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DonorName = styled.p`
  font-weight: 500;
  color: #1a1a1a;
  margin: 0;
  font-size: 0.95rem;
`;

const VerifiedIcon = styled(MdVerified)`
  color: #10b981;
  font-size: 1rem;
`;

const DonorTimestamp = styled.p`
  color: #6b7280;
  font-size: 0.8rem;
  margin: 0;
`;

const DonorRightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`;

const DonorAmount = styled.p`
  color: #10b981;
  font-weight: 600;
  margin: 0;
  font-size: 1rem;
`;

const ViewMessageLink = styled.button`
  background: none;
  border: none;
  color: #1a1a1a;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #2563eb;
  }
`;
