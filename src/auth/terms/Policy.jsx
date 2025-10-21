import React from "react";
import styled from "styled-components";
import img from "../../assets/EduFundLogo.svg";
import { LogoBar } from "../../components/styles/AccountStyle";
import { useNavigate } from "react-router-dom";

const Policy = () => {
  const nav = useNavigate();
  return (
    <Content>
      <LogoBar onClick={() => nav(-1)}>
        <img src={img} alt="Logo" />
      </LogoBar>
      <h3>Privacy Policy</h3>
      <p className="first">Last updated 19/10/25</p>
      <p className="second">
        At EduFund, your privacy matters to us. This Privacy Policy explains how
        we collect, use, store, and protect your personal information when you
        use our website, mobile app, and related services (collectively, the
        “Platform”). By using EduFund, you agree to the terms described here.
        EduFund is committed to protecting your data and ensuring transparency
        about how it is handled.
      </p>
      <Info>
        <h3>Information We Collect</h3>
        <p>
          We collect information to provide and improve our services. This
          includes
        </p>
        <ul>
          <h4>1. Information You provide</h4>
          <li>
            When you create an account, we collect your name, email address, and
            password
          </li>
          <li>
            When you create a fundraising campaign, we collect details such as
            your educational information, fundraising goal, and story
          </li>
          <li>
            When you donate, we collect payment information (handled securely by
            our payment partners)
          </li>
          <li>
            When you contact us, we collect any messages or inquiries you send
          </li>
        </ul>
        <ul>
          <h4>2. Information from Third Parties</h4>
          <li>
            In some cases, we may receive limited information from payment
            processors or verification services to confirm transactions and
            prevent fraud
          </li>
        </ul>
      </Info>
      <Handle>
        <h3>How We Use Your Information</h3>
        <p>We use your personal information to:</p>
        <ul>
          <li>
            Create and manage your EduFund accountCreate and manage your EduFund
            account
          </li>
          <li>Process and verify donations</li>
          <li>Support, promote, and manage fundraising campaigns</li>
          <li>Communicate with you about updates or support requests</li>
          <li>Ensure the safety and integrity of our platform</li>
          <li>Comply with legal and regulatory obligations</li>
        </ul>
        <p>
          We do not sell, rent, or trade your information with third parties.
        </p>
      </Handle>
      <Handle>
        <h3>How We Share Information</h3>
        <p>We may share information only when necessary:</p>
        <ul>
          <li>With payment providers to process transactions securely</li>
          <li>
            With service providers who help us operate the platform (e.g., cloud
            hosting, email delivery)
          </li>
          <li>
            With legal authorities, if required to comply with applicable laws
            or investigations
          </li>
          <li>
            With your consent, when you choose to make your campaign public or
            share it with sponsors
          </li>
        </ul>
        <p>
          All partners handling data on our behalf are required to maintain
          strict confidentiality and security standards
        </p>
      </Handle>
      <Contact>
        <h3>Data Security</h3>
        <p>
          EduFund uses secure technologies and administrative measures to
          protect your information against unauthorized access, alteration, or
          loss.This includes encryption, secure servers, and limited access to
          sensitive data by authorized personnel only. While we take every
          precaution, please note that no online service is completely immune to
          risks.
        </p>
      </Contact>
      <Contact>
        <h3>Data Retention</h3>
        <p>
          We retain your information for as long as your account is active or as
          needed to fulfill our legal and operational obligations. if you close
          your account, we may retain certain details for audit, compliance, or
          fraud prevention purposes.
        </p>
      </Contact>
      <Handle>
        <h3>Your Rights</h3>
        <p>Depending on your region, you may have the right to:</p>
        <ul>
          <li>Access or request a copy of your personal data</li>
          <li>Request correction or deletion of inaccurate information</li>
          <li>Withdraw consent for certain uses</li>
          <li>Request that we limit how we process your information</li>
        </ul>
      </Handle>
      <Contact>
        <h3>Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or applicable laws.If updates are made, we’ll post a
          notice on our website and update the “Last Updated” date above.
        </p>
      </Contact>
    </Content>
  );
};

export default Policy;

const Contact = styled.div`
  margin-top: 20px;

  h3 {
    text-align: center;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    color: #222;
  }

  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 13px;
  }
`;
const Handle = styled.div`
  margin-top: 20px;

  h3 {
    text-align: center;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    color: #222;
  }

  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 13px;
  }

  ul {
    li {
      list-style: inside;
      font-size: 15px;
      margin-bottom: 8px;
      color: #222;
    }
  }
`;
const Content = styled.main`
  width: 100%;
  height: 100vh;
  min-height: max-content;
  background: linear-gradient(269deg, #fff 4.29%, #f4f8fd 88.02%);
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
`;
const Info = styled.div`
  margin-top: 20px;

  h3 {
    text-align: center;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    color: #222;
  }

  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
  }

  ul {
    margin-top: 20px;
    list-style-type: disc;

    h4 {
      margin-bottom: 8px;
    }

    li {
      list-style: inside;
      margin-bottom: 8px;
      color: #222;
      font-size: 15px;
    }
  }
`;
