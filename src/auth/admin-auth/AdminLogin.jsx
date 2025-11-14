import React, { useState } from "react";
import {
  AdminLoginPageContainer,
  LeftSection,
  EduLogoContainer,
  EduLogoIcon,
  EduLogoText,
  PortalTitle,
  PortalDescription,
  FeatureCard,
  FeatureIcon,
  FeatureText,
  SecurityNotice,
  RightSection,
  RightSectionHeader,
  RightSectionIcon,
  RightSectionTitle,
  LoginForm,
  InputGroup,
  InputIcon,
  StyledInput,
  PasswordVisibilityToggle,
  RememberForgotRow,
  RememberMeCheckbox,
  ForgotPasswordLink,
  LoginButton,
  SecurityMessage,
  SecurityIcon,
  HelpText,
} from "./AdminStyles"; // Assuming you save the above styles in this file

// Placeholder icons (replace with actual imports from react-icons if you use them)
const PlaceholderShieldIcon = () => "🛡️";
const PlaceholderLockIcon = () => "🔒";
const PlaceholderEyeIcon = () => "👁️";
const PlaceholderCheckCircleIcon = () => "✅";
const PlaceholderBellIcon = () => "🔔"; // For feature card
const PlaceholderListIcon = () => "📋"; // For feature card
const PlaceholderKeyIcon = () => "🔑"; // For feature card

const AdminLoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    alert("Login attempt!");
  };

  return (
    <AdminLoginPageContainer>
      {/* LEFT SECTION */}
      <LeftSection>
        <EduLogoContainer>
          <EduLogoIcon>
            <PlaceholderShieldIcon />
          </EduLogoIcon>
          <EduLogoText>EduFund</EduLogoText>
        </EduLogoContainer>
        <PortalTitle>EduFund Admin Portal</PortalTitle>
        <PortalDescription>
          Access the administrative dashboard to manage platform operations,
          verify users, monitor transactions, and oversee the EduFund ecosystem.
        </PortalDescription>

        <FeatureCard>
          <FeatureIcon>
            <PlaceholderBellIcon />
          </FeatureIcon>
          <FeatureText>Enhanced security with 2FA protection</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>
            <PlaceholderListIcon />
          </FeatureIcon>
          <FeatureText>All admin actions are logged and auditable</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>
            <PlaceholderKeyIcon />
          </FeatureIcon>
          <FeatureText>
            Granular permissions for different admin roles
          </FeatureText>
        </FeatureCard>

        <SecurityNotice>
          Security Notice
          <br />
          This is a restricted area. All access attempts are monitored and
          logged.
        </SecurityNotice>
      </LeftSection>

      {/* RIGHT SECTION (LOGIN FORM) */}
      <RightSection>
        <RightSectionHeader>
          <RightSectionIcon>
            <PlaceholderShieldIcon />
          </RightSectionIcon>
          <RightSectionTitle>
            Enter your credentials to access the admin dashboard
          </RightSectionTitle>
        </RightSectionHeader>

        <LoginForm onSubmit={handleLogin}>
          <InputGroup>
            <InputIcon>
              <PlaceholderBellIcon />
            </InputIcon>{" "}
            {/* Use an email icon here */}
            <StyledInput type="email" placeholder="admin@edufund.ng" required />
          </InputGroup>

          <InputGroup>
            <InputIcon>
              <PlaceholderLockIcon />
            </InputIcon>
            <StyledInput
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
            />
            <PasswordVisibilityToggle
              onClick={() => setShowPassword(!showPassword)}
            >
              <PlaceholderEyeIcon />
            </PasswordVisibilityToggle>
          </InputGroup>

          <RememberForgotRow>
            <RememberMeCheckbox>
              <input type="checkbox" /> Remember this device
            </RememberMeCheckbox>
            <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
          </RememberForgotRow>

          <LoginButton type="submit">Login to Admin Portal</LoginButton>
        </LoginForm>

        <SecurityMessage>
          <SecurityIcon>
            <PlaceholderCheckCircleIcon />
          </SecurityIcon>
          <span>
            Your session will be encrypted with 256-bit SSL. All admin
            activities are logged for security and compliance.
          </span>
        </SecurityMessage>

        <HelpText>
          Need help? Contact{" "}
          <a href="mailto:admin-support@edufund.ng">admin-support@edufund.ng</a>
        </HelpText>
      </RightSection>
    </AdminLoginPageContainer>
  );
};

export default AdminLoginPage;
