import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaCopy,
  FaShareSquare,
} from "react-icons/fa";
import { AppContext } from "../../context/AppContext";
import { useSelector } from "react-redux";
import { selectStudentId } from "../../config/slices/studentauthslice";

const StudentLinkShare = ({ data }) => {
  const { closeModal } = useContext(AppContext);
  const studentId = useSelector(selectStudentId);
  const [copied, setCopied] = useState(false);

  // Extract campaign data from modalData
  const campaign = data;
  const isSharingCampaign = !!campaign?._id;

  const Hosted = "https://edu-fund-gamma.vercel.app";

  // Generate URLs and content
  let shareUrl = "";
  let shareTitle = "";
  let shareDescription = "";

  if (isSharingCampaign) {
    shareUrl = `${Hosted}/campaign/${campaign._id}`;
    shareTitle = campaign.course || "My Campaign";
    shareDescription =
      campaign.story || `Support my campaign "${shareTitle}" on EduFund!`;
  } else {
    // Sharing student profile
    shareUrl = `${window.location.origin}/student/${studentId}`;
    shareTitle = "My Education Profile";
    shareDescription =
      "Support my education on EduFund! I'm raising funds for my academic journey.";
  }

  const shareText = `${shareDescription}\n\n${shareUrl}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareOnWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank");
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareDescription
    )}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank");
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}&quote=${encodeURIComponent(shareDescription)}`;
    window.open(url, "_blank");
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl
    )}`;
    window.open(url, "_blank");
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareDescription,
          url: shareUrl,
        });
      } catch (error) {
        console.log("Native sharing failed", error);
      }
    } else {
      handleCopy();
    }
  };

  return (
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>&times;</CloseButton>

        <Header>
          <Title>
            {isSharingCampaign
              ? `Share "${campaign.course || "My Campaign"}"`
              : "Share Your Profile"}
          </Title>
          <Subtitle>
            {isSharingCampaign
              ? "Spread the word about your campaign and reach more supporters"
              : "Share your education profile and let people support your journey"}
          </Subtitle>
        </Header>

        <ButtonGrid>
          <ShareButton onClick={shareOnWhatsApp}>
            <Icon platform="WhatsApp">
              <FaWhatsapp />
            </Icon>
            WhatsApp
          </ShareButton>

          <ShareButton onClick={shareOnTwitter}>
            <Icon platform="Twitter">
              <FaTwitter />
            </Icon>
            Twitter / X
          </ShareButton>

          <ShareButton onClick={shareOnFacebook}>
            <Icon platform="Facebook">
              <FaFacebookF />
            </Icon>
            Facebook
          </ShareButton>

          <ShareButton onClick={shareOnLinkedIn}>
            <Icon platform="LinkedIn">
              <FaLinkedinIn />
            </Icon>
            LinkedIn
          </ShareButton>
        </ButtonGrid>

        {/* Native Share Button for Mobile */}
        {navigator.share && (
          <NativeShareButton onClick={handleNativeShare}>
            <FaShareSquare style={{ marginRight: "8px" }} />
            Share via...
          </NativeShareButton>
        )}

        <LinkLabel>
          {isSharingCampaign ? "Campaign Link" : "Profile Link"}
        </LinkLabel>
        <LinkContainer>
          <LinkDisplay
            type="text"
            value={shareUrl}
            readOnly
            onClick={(e) => e.target.select()}
          />
          <CopyButton onClick={handleCopy}>
            <CopyIcon />
            {copied ? "Copied!" : "Copy"}
          </CopyButton>
        </LinkContainer>

        <ImpactBox>
          <ImpactHeader>
            <FaShareSquare style={{ marginRight: "8px" }} />
            Sharing Impact
          </ImpactHeader>
          <ImpactText>
            {isSharingCampaign
              ? "Campaigns that are shared regularly receive 2-3x more donations!"
              : "Active profiles that share regularly get more visibility and support!"}
          </ImpactText>
        </ImpactBox>
      </ModalContent>
    </ModalOverlay>
  );
};

export default StudentLinkShare;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
  font-family: Arial, sans-serif;
  max-height: 90vh;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #000;
  }
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0 0 0;
  line-height: 1.4;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 25px;
`;

const ShareButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: #333;

  &:hover {
    border-color: #007bff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transform: translateY(-1px);
  }
`;

const NativeShareButton = styled(ShareButton)`
  grid-column: 1 / -1;
  justify-content: center;
  background: #007bff;
  color: white;
  border-color: #007bff;

  &:hover {
    background: #0056b3;
    border-color: #0056b3;
  }
`;

const Icon = styled.span`
  margin-right: 10px;
  font-size: 20px;
  ${(props) => props.platform === "WhatsApp" && "color: #25D366;"}
  ${(props) => props.platform === "Twitter" && "color: #1DA1F2;"}
  ${(props) => props.platform === "Facebook" && "color: #4267B2;"}
  ${(props) => props.platform === "LinkedIn" && "color: #0077B5;"}
`;

const LinkLabel = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const LinkContainer = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 25px;
  transition: border-color 0.2s;

  &:focus-within {
    border-color: #007bff;
  }
`;

const LinkDisplay = styled.input`
  flex-grow: 1;
  border: none;
  padding: 12px 15px;
  font-size: 14px;
  color: #333;
  background-color: #f8f8f8;
  cursor: text;
  font-family: monospace;

  &:focus {
    outline: none;
  }
`;

const CopyButton = styled.button`
  background-color: #f2f2f2;
  color: #333;
  border: none;
  padding: 0 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.2s;
  min-width: 80px;
  justify-content: center;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #d0d0d0;
  }
`;

const CopyIcon = styled(FaCopy)`
  margin-right: 5px;
`;

const ImpactBox = styled.div`
  background-color: #e6f0ff;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  color: #0056b3;
  border-left: 4px solid #007bff;
`;

const ImpactHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const ImpactText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
`;
