import React from "react";
import styled from "styled-components";
import { LogoBar } from "../../components/styles/AccountStyle";
import img from "../../assets/EduFundLogo.svg";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const nav = useNavigate();
  return (
    <Container>
      <LogoBar onClick={() => nav(-1)}>
        <img src={img} alt="Logo" />
      </LogoBar>
      <h3>Terms of Service</h3>
      <p className="first">Last updated 19/10/25</p>
      <p className="second">
        Welcome to EduFund, a trusted crowdfunding platform dedicated to making
        education accessible for students by connecting them with sponsors,
        donors, and organizations that believe in empowering learning.These
        Terms of Service (“Terms”) govern your access and use of EduFund’s
        website, mobile site, and related services (collectively, the
        “Platform”). By accessing or using EduFund, you agree to comply with and
        be bound by these Terms. If you do not agree, you must stop using the
        Platform immediately.
      </p>
      <div className="service">
        <h3>Scope of Service</h3>
        <p>
          EduFund provides tools that allow students (“Campaign Creators”) to
          raise funds for educational purposes and donors (“Sponsors”) to
          support these causes securely. EduFund acts as a facilitator between
          both parties and is not itself a lender, financial institution, or
          charitable organization.EduFund reserves the right to improve, update,
          or modify the Platform at any time to enhance user experience or
          comply with regulations
        </p>
      </div>
      <div className="service">
        <h3> Grant of Rights</h3>
        <p>
          By using EduFund, you grant us a non-exclusive, worldwide,
          royalty-free license to host, display, and distribute the content you
          upload (such as campaign descriptions, images, and updates) solely for
          the purpose of operating and promoting your campaign. You retain all
          ownership rights to your content but agree that your materials must
          not contain false, misleading, or unlawful information. EduFund
          reserves the right to remove or edit any content that violates these
          Terms.
        </p>
      </div>
      <div className="service">
        <h3>Payments</h3>
        <p>
          All payments on EduFund are processed through trusted third-party
          payment gateways. By making or receiving donations, you agree to
          comply with their terms and any applicable transaction fees.EduFund
          does not guarantee that a campaign will reach its funding goal, and we
          are not responsible for any disputes between donors and campaign
          creators.Donors acknowledge that contributions are voluntary and
          non-refundable, except in cases where refunds are required by law or
          explicitly supported by EduFund’s refund policy.
        </p>
      </div>
      <div className="service">
        <h3>Your Additional Obligations</h3>
        <p>
          You agree to provide accurate and truthful information when creating
          an account, campaign, or donation.You are responsible for keeping your
          login credentials secure and for any activity that occurs under your
          account.Campaign creators must ensure their campaigns are transparent,
          legitimate, and related to educational purposes only. Misuse of the
          platform may result in suspension or permanent removal.
        </p>
      </div>
      <div className="service">
        <h3>Limited Warranty</h3>
        <p>
          EduFund strives to maintain a reliable and secure platform but does
          not guarantee uninterrupted or error-free service.All information,
          features, and tools are provided “as is” without any express or
          implied warranties, including but not limited to merchantability or
          fitness for a particular purpose.EduFund is not responsible for
          delays, data loss, or technical issues caused by third-party services.
        </p>
      </div>
      <div className="service">
        <h3>Limited Warranty</h3>
        <p>
          EduFund reserves the right to suspend or terminate your access if you
          violate these Terms or engage in fraudulent, abusive, or harmful
          activity.You may stop using EduFund at any time by closing your
          account.Termination of your account does not relieve you of any
          financial obligations related to campaigns, donations, or fees
          incurred before termination.
        </p>
      </div>
      <div className="service">
        <h3>Intellectual Property</h3>
        <p>
          All content, trademarks, logos, and designs appearing on EduFund are
          owned or licensed by EduFund and are protected by copyright and
          intellectual property laws.You may not use EduFund’s branding or
          content without written permission.Campaign creators retain ownership
          of their campaign materials but grant EduFund a limited license to
          display and promote them as part of our services.
        </p>
      </div>
      <div className="service">
        <h3>Limitation of Liability</h3>
        <p>
          EduFund and its affiliates are not liable for any indirect,
          incidental, or consequential damages arising from your use or
          inability to use the Platform.Our total liability to you for any claim
          related to your use of EduFund shall not exceed the total amount of
          fees paid to EduFund during the twelve (12) months prior to the event
          giving rise to such claim.
        </p>
      </div>
      <div className="service">
        <h3>Indemnification</h3>
        <p>
          You agree to defend, indemnify, and hold harmless EduFund, its
          officers, employees, and partners from any claims, damages, or
          expenses arising from your use of the Platform, violation of these
          Terms, or infringement of any third-party rights.
        </p>
      </div>
      <div className="service">
        <h3>General Provisions</h3>
        <p>
          These Terms are governed by and construed in accordance with the laws
          of your country of residence, without regard to conflict of law
          principles.If any part of these Terms is found invalid or
          unenforceable, the remaining sections will remain in effect.Failure by
          EduFund to enforce any right or provision under these Terms does not
          constitute a waiver of that right.We may update these Terms from time
          to time, and continued use of the Platform after changes means you
          accept the new version
        </p>
      </div>
    </Container>
  );
};

export default Terms;

const Container = styled.main`
  background: linear-gradient(269deg, #fff 4.29%, #f4f8fd 88.02%);
  width: 100%;
  height: 100vh;
  min-height: max-content;
  padding: 35px;

  h3 {
    text-align: center;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    color: #222;
    margin-bottom: 13px;
  }

  .first {
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 35px;
  }

  .second {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.32px;
  }

  .service {
    margin-top: 15px;

    h3 {
      font-size: 25px;
      font-style: normal;
      font-weight: 500;
      text-align: center;
      color: #222;
    }

    p {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0.32px;
    }
  }
`;
