import React from "react";
import styled from "styled-components";
import { MdVerified } from "react-icons/md";

const DonorList = () => {
  const defaultDonors = [
    {
      id: 1,
      name: "Dr. Olumide Johnson",
      avatar: "/doctor-profile.jpg",
      amount: "₦50,000",
      timestamp: "2 hours ago",
      verified: true,
      hasMessage: true,
    },
    {
      id: 2,
      name: "Mrs. Adenike Okonkwo",
      avatar: "/woman-profile.jpg",
      amount: "₦25,000",
      timestamp: "5 hours ago",
      verified: true,
      hasMessage: false,
    },
    {
      id: 3,
      name: "Ahmed Isiaka",
      avatar: "/man-profile.jpg",
      amount: "₦15,000",
      timestamp: "1 day ago",
      verified: false,
      hasMessage: false,
    },
    {
      id: 4,
      name: "Ibrahim Yusuf",
      avatar: "/man-profile-2.jpg",
      amount: "₦35,000",
      timestamp: "2 days ago",
      verified: true,
      hasMessage: true,
    },
    {
      id: 5,
      name: "Victor Momoh",
      avatar: "/man-profile-3.jpg",
      amount: "₦35,000",
      timestamp: "2 days ago",
      verified: true,
      hasMessage: true,
    },
  ];
  return (
    <Holder>
      <h3>Donors</h3>
      <Para>47 generous supporters</Para>
      <DonorsContainer>
        {defaultDonors.map((donor, idx) => (
          <DonorItemWrapper key={idx}>
            <DonorLeftSection>
              <DonorAvatar src={donor.avatar} alt={donor.name} />
              <DonorDetails>
                <DonorNameWrapper>
                  <DonorName>{donor.name}</DonorName>
                  {donor.verified && <VerifiedIcon />}
                </DonorNameWrapper>
                <DonorTimestamp>{donor.timestamp}</DonorTimestamp>
              </DonorDetails>
            </DonorLeftSection>
            <DonorRightSection>
              <DonorAmount>{donor.amount}</DonorAmount>
              {donor.hasMessage && (
                <ViewMessageLink onClick={() => onViewMessage?.(donor.id)}>
                  View Message
                </ViewMessageLink>
              )}
            </DonorRightSection>
          </DonorItemWrapper>
        ))}
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
