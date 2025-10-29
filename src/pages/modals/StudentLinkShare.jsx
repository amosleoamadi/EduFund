import React from "react";
import styled from "styled-components";
import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaCopy,
  FaShareSquare,
} from "react-icons/fa";

const StudentLinkShare = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(campaignLink);
    alert("Link copied to clipboard!");
  };
  return (
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton>&times;</CloseButton>

        <Header>
          <Title>Share Your Campaign</Title>
          <Subtitle>Help spread the word and reach more donors</Subtitle>
        </Header>

        <ButtonGrid>
          <ShareButton>
            <Icon platform="WhatsApp">
              <FaWhatsapp />
            </Icon>
            WhatsApp
          </ShareButton>
          <ShareButton>
            <Icon platform="Twitter">
              <FaTwitter />
            </Icon>
            Twitter / X
          </ShareButton>
          <ShareButton>
            <Icon platform="Facebook">
              <FaFacebookF />
            </Icon>
            Facebook
          </ShareButton>
          <ShareButton>
            <Icon platform="LinkedIn">
              <FaLinkedinIn />
            </Icon>
            LinkedIn
          </ShareButton>
        </ButtonGrid>

        <LinkLabel>Campaign Link</LinkLabel>
        <LinkContainer>
          <LinkDisplay type="text" readOnly />
          <CopyButton onClick={handleCopy}>
            <CopyIcon />
            Copy
          </CopyButton>
        </LinkContainer>

        <ImpactBox>
          <ImpactHeader>
            <StyledFaShareSquare />
            Share Impact
          </ImpactHeader>
          <ImpactText>
            Your campaign has been shared 156 times and viewed by 2,340 people!
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
`;

const LinkDisplay = styled.input`
  flex-grow: 1;
  border: none;
  padding: 12px 15px;
  font-size: 14px;
  color: #333;
  background-color: #f8f8f8;
  cursor: text;

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

  &:hover {
    background-color: #e0e0e0;
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

const StyledFaShareSquare = styled(FaShareSquare)`
  margin-right: 8px;
  font-size: 18px;
`;
