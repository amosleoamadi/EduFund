import React, { useState, useContext } from "react";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import PaymentMethodModal from "./PaymentMethodModal";
import { useSelector } from "react-redux";
import { selectStudentId } from "../../../config/slices/studentauthslice";
import { useDonorPaymentMutation } from "../../../utils/donorauth/donoropayment";
import toast from "react-hot-toast";
import LoadingState from "../loadingstate/LoadingState";
import { AppContext } from "../../../context/AppContext";

const DonationModal = ({ onClose, campaign, data }) => {
  const [amount, setAmount] = useState("");
  const donorId = useSelector(selectStudentId);
  const recieverId = data?.studentId?._id;
  const campaingId = data?._id;
  const [payment, { isLoading }] = useDonorPaymentMutation();
  const { profileImages, getProfileImageGlobal } = useContext(AppContext);

  const getStudentAvatar = (student) => {
    if (!student?.studentId?._id) return null;
    const profileImage = getProfileImageGlobal(student.studentId._id);
    if (profileImage) return profileImage;
    if (student.studentId.avatar) return student.studentId.avatar;
    return null;
  };

  const getUserInitials = (student) => {
    if (!student?.studentId?.fullName) return "U";
    return student.studentId.fullName
      .split(" ")
      .map((name) => name.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handlePayment = async () => {
    if (!amount) {
      toast.error("Please enter or select an amount");
      return;
    }
    try {
      const res = await payment({
        amount: amount,
        donorId,
        recieverId: recieverId,
        campaingId: campaingId,
      }).unwrap();
      const paymentLink = res?.data?.checkout_url;

      if (paymentLink) {
        window.location.href = paymentLink;
        return;
      }
    } catch (err) {
      toast.error(err?.data?.message);
    }
  };

  const studentAvatar = getStudentAvatar(data);
  const studentInitials = getUserInitials(data);

  return (
    <>
      {campaign && (
        <Overlay>
          <Modal>
            <Header>
              <h2>Make a Donation</h2>
              <CloseBtn onClick={onClose}>×</CloseBtn>
            </Header>

            <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
              Support {data?.studentId?.fullName}'s education journey
            </p>
            <StudentInfo>
              <AvatarContainer>
                {studentAvatar ? (
                  <Avatar src={studentAvatar} alt={data?.studentId?.fullName} />
                ) : (
                  <AvatarPlaceholder>{studentInitials}</AvatarPlaceholder>
                )}
              </AvatarContainer>
              <div>
                <h4>{data?.studentId?.fullName}</h4>
                <p>
                  {data?.course} - {data?.schoolName}
                </p>
              </div>
            </StudentInfo>

            <Form>
              <label>Donation Amount (₦)</label>
              <input
                type="number"
                placeholder="100000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <AmountButtons>
                <button onClick={() => setAmount(50000)}>₦50,000</button>
                <button onClick={() => setAmount(100000)}>₦100,000</button>
                <button onClick={() => setAmount(200000)}>₦200,000</button>
              </AmountButtons>

              <label>Message (Optional)</label>
              <textarea placeholder="Add an encouraging message..."></textarea>

              <Buttons>
                <Cancel onClick={onClose}>Cancel</Cancel>
                <Donate onClick={handlePayment}>
                  <FaRegHeart /> Donate
                </Donate>
              </Buttons>
            </Form>
          </Modal>
        </Overlay>
      )}

      {isLoading && <LoadingState />}
    </>
  );
};

export default DonationModal;

// Add new styled components for avatar
const AvatarContainer = styled.div`
  position: relative;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const AvatarPlaceholder = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #2563eb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    font-size: 1rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const Modal = styled.div`
  background: #fff;
  border-radius: 12px;
  width: 32%;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 1200px) {
    width: 45%;
  }

  @media (max-width: 1024px) {
    width: 55%;
  }

  @media (max-width: 768px) {
    width: 70%;
    padding: 1.25rem;
    max-height: 85vh;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
    border-radius: 12px 12px 0 0;
    max-height: 90vh;
  }

  @media (max-width: 320px) {
    padding: 0.875rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.2rem;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    margin-bottom: 0.875rem;
  }
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f1f5f9;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    min-width: 44px;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StudentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f8fafc;
  padding: 0.8rem;
  border-radius: 8px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    padding: 0.7rem;
    margin-bottom: 0.875rem;
    gap: 0.875rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    margin-bottom: 0.75rem;
    gap: 0.75rem;
    flex-direction: column;
    text-align: center;
  }

  h4 {
    margin: 0;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    color: #64748b;

    @media (max-width: 768px) {
      font-size: 0.75rem;
    }

    @media (max-width: 480px) {
      font-size: 0.7rem;
    }
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 768px) {
    gap: 0.7rem;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
  }

  label {
    font-size: 0.85rem;
    color: #334155;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
  }

  input,
  textarea {
    width: 100%;
    padding: 0.6rem;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    font-size: 0.9rem;

    @media (max-width: 768px) {
      padding: 0.55rem;
      font-size: 0.85rem;
    }

    @media (max-width: 480px) {
      padding: 0.5rem;
      font-size: 0.8rem;
      min-height: 44px;
    }
  }

  textarea {
    resize: none;
    height: 60px;

    @media (max-width: 480px) {
      height: 70px;
      min-height: 70px;
    }
  }
`;

const AmountButtons = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 480px) {
    gap: 0.4rem;
    flex-wrap: wrap;
  }

  button {
    flex: 1;
    background: #f1f5f9;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    padding: 0.4rem;
    cursor: pointer;
    font-size: 0.85rem;
    transition: all 0.2s;

    &:hover {
      background: #e0e7ff;
    }

    @media (max-width: 768px) {
      padding: 0.35rem;
      font-size: 0.8rem;
    }

    @media (max-width: 480px) {
      padding: 0.5rem 0.3rem;
      font-size: 0.75rem;
      min-height: 44px;
      flex: 1 1 calc(50% - 0.4rem);
    }

    @media (max-width: 320px) {
      flex: 1 1 100%;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 0.4rem;
    margin-top: 0.875rem;
  }

  @media (max-width: 480px) {
    gap: 0.3rem;
    margin-top: 0.75rem;
    flex-direction: column;
  }
`;

const Cancel = styled.button`
  border: 1px solid #e5e7eb;
  background: #fff;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  width: 50%;
  font-size: 0.9rem;
  transition: all 0.2s;

  &:hover {
    background: #f8fafc;
  }

  @media (max-width: 768px) {
    padding: 0.45rem 0.875rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    min-height: 48px;
  }
`;

const Donate = styled.button`
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  width: 50%;
  font-size: 0.9rem;
  transition: all 0.2s;

  &:hover {
    background: #1d4ed8;
  }

  @media (max-width: 768px) {
    padding: 0.45rem 0.875rem;
    font-size: 0.85rem;
    gap: 0.875rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    min-height: 48px;
    gap: 0.75rem;
  }
`;
