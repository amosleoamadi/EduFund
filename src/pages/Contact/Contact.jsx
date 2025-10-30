import React from "react";
import { useState } from "react";
import "../../components/styles/Contact.css";
import toast from "react-hot-toast";
import axios from "axios";

const Contact = () => {
  const [inputData, setInputData] = useState({
    email: "",
    message: "",
  });
  const Baseurl = import.meta.env.VITE_EDUFUND_BASEURL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setInputData({
      email: "",
      message: "",
    });
    console.log(Baseurl);
    if (!inputData.email || !inputData.message) {
      toast.error("please fill in your details");
    } else {
      try {
        const res = await axios.post(`${Baseurl}/contact-us`, inputData);
        toast.success("message successfully sent");
        setInputData(res?.data);
        console.log("working", res);
      } catch (error) {
        console.log("message not sent", error);
      }
    }
  };

  return (
    <div className="contact_page">
      <div className="contact_card">
        <h3>Get in touch</h3>
        <p>Our friendly team would love to hear from you.</p>
        <form className="inputtype" onSubmit={handleSubmit}>
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            value={inputData.email}
            placeholder="your email address"
            className="form"
            onChange={handleChange}
            required
          />
          <label for="message">Message</label>
          <textarea
            className="form2"
            name="message"
            value={inputData.message}
            onChange={handleChange}
            placeholder="Drop your message here"
            required
          />
          <div
            className="btn2"
            role="button"
            tabIndex={0}
            onClick={handleSubmit}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
          >
            Send message
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
