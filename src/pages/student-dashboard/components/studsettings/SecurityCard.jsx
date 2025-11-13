import React from "react";
import styled from "styled-components";
import { FiLock } from "react-icons/fi";
import { useState } from "react";
import { useChangePasswordMutation } from "../../../../utils/stundentauth/authapi";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectStudentId } from "../../../../config/slices/studentauthslice";

const SecurityCard = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    password: "",
    confirmPassword: "",
  });
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const userId = useSelector(selectStudentId);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await changePassword({
        password: formData.password,
        newPassword: formData.newPassword,
        userId: userId,
      }).unwrap();
      formData.confirmPassword = "";
      formData.newPassword = "";
      formData.password = "";
      toast.success(res?.message);
    } catch (err) {
      toast.error(err?.data?.message);
    }
  };
  return (
    <CardContainer>
      <Header>
        <FiLock />
        Security
      </Header>

      <SectionTitle>Change Password</SectionTitle>

      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="password">Current Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter current password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>

        <TwoColumnGrid>
          <FormGroup>
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              id="newPassword"
              name="newPassword"
              type="password"
              placeholder="Enter new password"
              value={formData.newPassword}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </FormGroup>
        </TwoColumnGrid>

        <Button type="submit">
          <FiLock />
          {isLoading ? "Updating..." : "Update Password"}
        </Button>
      </form>
    </CardContainer>
  );
};

export default SecurityCard;
const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: 100%;
  margin: 0 auto;
  margin-bottom: 30px;

  @media (max-width: 1199px) {
    padding: 28px;
    margin-bottom: 28px;
  }

  @media (max-width: 767px) {
    padding: 24px;
    border-radius: 10px;
    margin-bottom: 24px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: 479px) {
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;

  svg {
    color: #2563eb;
    width: 28px;
    height: 28px;
  }

  @media (max-width: 1199px) {
    margin-bottom: 28px;
    font-size: 22px;

    svg {
      width: 26px;
      height: 26px;
    }
  }

  @media (max-width: 767px) {
    margin-bottom: 24px;
    font-size: 20px;
    gap: 10px;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 479px) {
    margin-bottom: 20px;
    font-size: 18px;
    gap: 8px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 20px;
  margin-top: 0;

  @media (max-width: 767px) {
    font-size: 15px;
    margin-bottom: 18px;
  }

  @media (max-width: 479px) {
    font-size: 14px;
    margin-bottom: 16px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  @media (max-width: 767px) {
    margin-bottom: 18px;
  }

  @media (max-width: 479px) {
    margin-bottom: 16px;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 8px;

  @media (max-width: 479px) {
    font-size: 13px;
    margin-bottom: 6px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  color: #1a1a1a;
  background: white;
  transition: border-color 0.2s;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  @media (max-width: 479px) {
    padding: 8px 10px;
    font-size: 13px;
    border-radius: 6px;
  }
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 18px;
    margin-bottom: 20px;
  }

  @media (max-width: 479px) {
    gap: 16px;
    margin-bottom: 16px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: white;
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  cursor: pointer;
  transition: all 0.2s;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    border-color: #9ca3af;
    background: #f9fafb;
  }

  &:active {
    background: #f3f4f6;
  }

  @media (max-width: 767px) {
    padding: 9px 14px;
    font-size: 13px;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media (max-width: 479px) {
    width: 100%;
    padding: 10px 12px;
    justify-content: center;
    border-radius: 6px;
  }
`;
