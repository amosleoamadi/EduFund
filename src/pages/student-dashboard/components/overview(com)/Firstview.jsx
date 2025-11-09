import React, { useContext, useState } from "react";
import styled from "styled-components";
import icon from "../../../../assets/Icon.svg";
import book from "../../../../assets/book.svg";
import guard from "../../../../assets/guard.svg";
import fav from "../../../../assets/fav.svg";
import Button from "../../../../components/Ui/Button";
import { IoIosAdd } from "react-icons/io";
import { useSelector } from "react-redux";
import {
  studentFirstname,
  studentLastname,
} from "../../../../config/slices/studentauthslice";
import CampaignCreation from "../../../modals/steps/CampaignCreation";
import { AppContext } from "../../../../context/AppContext";

const Firstview = ({ data }) => {
  const firstname = useSelector(studentFirstname);
  const lastname = useSelector(studentLastname);
  const { openCampaign } = useContext(AppContext);

  return (
    <Container>
      <h3>
        Welcome {firstname} {lastname}! 👋
      </h3>
      <p>your journey begins here!</p>
      <Wrapper>
        <Card>
          <img src={icon} alt="" />
        </Card>
        <Text>Start Your Funding Journey</Text>
        <Para>
          You’ve joined thousands of students shaping their future through
          EduFund. Tell your story, set your goal, and let the world help fund
          your education.
        </Para>
        <Para style={{ marginTop: "0" }}>
          Over ₦50M raised • 2,500+ students supported • 100% verified
        </Para>
        <Subcard>
          <Cards>
            <Icon>
              <img src={book} alt="" />
            </Icon>
            <h3>Share Your Story</h3>
            <p>Tell donors about your dreams and challenges</p>
          </Cards>
          <Cards>
            <Icon>
              <img src={guard} alt="" />
            </Icon>
            <h3>Get Verified</h3>
            <p>Quick verification for authenticity</p>
          </Cards>
          <Cards>
            <Icon>
              <img src={fav} alt="" />
            </Icon>
            <h3>Receive Support</h3>
            <p>Get donations from verified donors</p>
          </Cards>
        </Subcard>
        <>
          <Button
            className="create"
            icon={<IoIosAdd style={{ fontSize: "20px" }} />}
            text="Create Your Campaign Now"
            onClick={() => openCampaign({ source: "first" })}
          />
        </>
      </Wrapper>
    </Container>
  );
};

export default Firstview;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: max-content;

  h3 {
    color: #3b3535;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 42.632px;
  }

  p {
    font-size: 18.947px;
    font-style: normal;
    font-weight: 400;
    color: #575858;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 17px;
      line-height: 38.632px;
    }

    p {
      font-size: 15.947px;
      margin-bottom: 12px;
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 17px;
      line-height: 34.632px;
    }

    p {
      font-size: 14.947px;
      margin-bottom: 10px;
    }
  }
`;

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: max-content;
  padding: 30px;
  border-radius: 15.903px;
  border: 1.136px solid #e5e7eb;
  background: rgb(255, 255, 255);
  box-shadow: 0 11.359px 17.038px -3.408px rgba(0, 0, 0, 0.1),
    0 4.544px 6.815px -4.544px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .create {
    margin-top: 20px;
    width: 28%;
    height: 40px;
    border-radius: 9.087px;
    background: #2563eb;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 14.903px;

    .create {
      width: 70%;
      height: 38px;
      font-size: 13px;
      gap: 14px;
    }
  }

  @media (max-width: 480px) {
    padding: 18px;
    border-radius: 12.903px;

    .create {
      width: 90%;
      height: 42px;
      font-size: 14px;
      gap: 12px;
      margin-top: 15px;
    }
  }
`;

const Card = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

const Text = styled.h3`
  color: #101828;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 36.349px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 32.349px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 28.349px;
  }
`;

const Para = styled.p`
  color: #4a5565;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.261px;
  width: 75%;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24.261px;
    width: 85%;
    margin-top: 8px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 22.261px;
    width: 100%;
    margin-top: 6px;
  }
`;

const Subcard = styled.div`
  width: 60%;
  height: 33%;
  display: flex;
  justify-content: center;
  gap: 15px;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: auto;
  }
`;

const Cards = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 15.903px;
  background: #eff6ff;
  display: flex;
  flex-direction: column;
  padding: 10px;

  h3 {
    color: #101828;
    font-size: 14.903px;
    font-style: normal;
    font-weight: 400;
  }

  p {
    color: #4a5565;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 90%;
    border-radius: 13.903px;
    padding: 8px;

    h3 {
      font-size: 13.903px;
    }

    p {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    border-radius: 12.903px;
    padding: 12px;

    h3 {
      font-size: 14px;
    }

    p {
      font-size: 13px;
    }
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 11.359px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    border-radius: 10.359px;
  }

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    border-radius: 9.359px;
  }
`;
