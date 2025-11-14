import styled from "styled-components";

// ===============================
// 1. Main Page Layout
// ===============================

export const AdminLoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #000; /* Black background as per image */
  padding: 20px;

  @media (max-width: 992px) {
    flex-direction: column; /* Stack sections vertically on tablet/mobile */
    padding: 15px;
  }
`;

// ===============================
// 2. Left Section Styles
// ===============================

export const LeftSection = styled.div`
  flex: 1;
  max-width: 500px; /* Limit width for aesthetic */
  padding: 40px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 25px; /* Spacing between main elements */

  @media (max-width: 992px) {
    max-width: 100%;
    padding: 20px;
    text-align: center; /* Center text when stacked */
    margin-bottom: 30px; /* Space between left and right sections when stacked */
  }
`;

export const EduLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 992px) {
    justify-content: center; /* Center logo on tablet/mobile */
  }
`;

export const EduLogoIcon = styled.div`
  background-color: #fff;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00a06c; /* Green color for the icon */
  font-size: 1.5rem; /* Adjust icon size */
`;

export const EduLogoText = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
  margin: 0;

  @media (max-width: 992px) {
    font-size: 1.5rem;
  }
`;

export const PortalTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;

  @media (max-width: 992px) {
    font-size: 1.8rem;
  }
`;

export const PortalDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #a0a0a0;
  margin: 0;
`;

export const FeatureCard = styled.div`
  display: flex;
  align-items: flex-start; /* Align icon and text at the top */
  gap: 15px;
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  color: #fff;
`;

export const FeatureIcon = styled.div`
  background-color: #00a06c; /* Green background for icons */
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #fff;
  flex-shrink: 0; /* Prevent icon from shrinking */
`;

export const FeatureText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
`;

export const SecurityNotice = styled.div`
  background-color: #ffc107; /* Yellow background */
  color: #333; /* Darker text for contrast */
  padding: 20px;
  border-radius: 10px;
  font-size: 0.9rem;
  line-height: 1.5;
  font-weight: 500;
`;

// ===============================
// 3. Right Section Styles (Login Form)
// ===============================

export const RightSection = styled.div`
  background-color: #fff;
  border-radius: 15px;
  padding: 40px;
  width: 450px; /* Fixed width for the form */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 450px; /* Ensure it doesn't get too wide on larger screens if column layout */
    padding: 30px;
  }
  @media (max-width: 576px) {
    padding: 20px;
  }
`;

export const RightSectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const RightSectionIcon = styled.div`
  background-color: #e0f7fa; /* Light blue background */
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00bcd4; /* Teal color for the icon */
  font-size: 1.5rem;
`;

export const RightSectionTitle = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin: 0;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px 15px;
  background-color: #f9f9f9;

  &:focus-within {
    border-color: #2196f3; /* Highlight on focus */
    box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.2);
  }
`;

export const InputIcon = styled.div`
  color: #999;
  font-size: 1.2rem;
  margin-right: 10px;
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1rem;
  padding: 5px 0; /* Adjust internal padding */

  &::placeholder {
    color: #aaa;
  }
`;

export const PasswordVisibilityToggle = styled.div`
  color: #999;
  cursor: pointer;
  font-size: 1.2rem;
  margin-left: 10px; /* Space from input */
`;

export const RememberForgotRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
`;

export const RememberMeCheckbox = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
  cursor: pointer;

  input[type="checkbox"] {
    /* Basic checkbox styling - consider custom styling for better control */
    appearance: none;
    width: 16px;
    height: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;

    &:checked {
      background-color: #2196f3;
      border-color: #2196f3;
      &:after {
        content: "✔"; /* Unicode checkmark */
        color: white;
        font-size: 12px;
      }
    }
  }
`;

export const ForgotPasswordLink = styled.a`
  color: #2196f3;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginButton = styled.button`
  background: linear-gradient(
    90deg,
    #00bcd4 0%,
    #2196f3 100%
  ); /* Gradient as per image */
  color: #fff;
  border: none;
  padding: 15px 20px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const SecurityMessage = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #555;
  font-size: 0.85rem;
  line-height: 1.4;
`;

export const SecurityIcon = styled.div`
  color: #00a06c; /* Green checkmark */
  font-size: 1.1rem;
  flex-shrink: 0;
`;

export const HelpText = styled.p`
  text-align: center;
  font-size: 0.85rem;
  color: #777;
  margin-top: 15px; /* Space from form */

  a {
    color: #2196f3;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
