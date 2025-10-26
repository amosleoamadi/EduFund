import { useState } from "react";
import { FaqStyle } from "./FaqStyle";
import { FiChevronDown } from "react-icons/fi";

const FaqSection = () => {
  const [activeLeft, setActiveLeft] = useState(null);
  const [activeRight, setActiveRight] = useState(null);

  const leftFaqs = [
    {
      question: "What is EduFund?",
      answer:
        "EduFund is a transparent crowdfunding platform that helps students access quality education by connecting them with donors and supporters.",
    },
    {
      question: "How do students get verified on EduFund?",
      answer:
        "Students undergo a verification process to confirm their identity, school enrollment, and financial need.",
    },
    {
      question: "Can anyone donate on EduFund?",
      answer:
        "Yes, anyone from anywhere in the world can safely support verified students on EduFund.",
    },
    {
      question: "Is my donation safe and secure?",
      answer:
        "Yes. EduFund uses trusted and secure payment gateways to protect donor information and transactions.",
    },
  ];

  const rightFaqs = [
    {
      question: "Can a student run more than one campaign?",
      answer:
        "Each student is allowed one active campaign at a time to ensure fair access to support.",
    },
    {
      question: "What happens if a campaign doesn’t reach its goal?",
      answer:
        "Funds raised are still disbursed to the student, minus applicable transaction fees.",
    },
    {
      question: "Can schools or institutions partner with EduFund?",
      answer:
        "Yes. EduFund partners with accredited schools and institutions to support students collectively.",
    },
    {
      question: "How long does it take for students to receive funds?",
      answer:
        "Once verified, students typically receive funds within 3–5 business days after campaign completion.",
    },
  ];

  const toggleLeft = (index) => {
    setActiveLeft(activeLeft === index ? null : index);
  };

  const toggleRight = (index) => {
    setActiveRight(activeRight === index ? null : index);
  };

  return (
    <FaqStyle>
      <div className="faq-wrapper">
        <div className="hero-section">
          <h1>Every child deserves the chance to learn</h1>
          <h3>Let's make it happen together.</h3>
          <p>
            Whether you're a student seeking support or a donor ready to make an
            impact, your journey starts here.
          </p>
          <button className="cta-button">Join EduFund</button>
        </div>

        <div className="help-header">
          <p className="need-help">NEED HELP?</p>
          <h2>Frequently Asked Questions</h2>
          <p className="subtitle">
            Before You Get Started, Here's What You Should Know.
          </p>
        </div>

        <div className="faq-columns">
          <div className="faq-column">
            {leftFaqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeLeft === index ? "active" : ""}`}
              >
                <div className="faq-header" onClick={() => toggleLeft(index)}>
                  <span>{faq.question}</span>
                  <FiChevronDown
                    className={`arrow ${activeLeft === index ? "rotate" : ""}`}
                  />
                </div>
                <div className="faq-body">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-column">
            {rightFaqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeRight === index ? "active" : ""}`}
              >
                <div className="faq-header" onClick={() => toggleRight(index)}>
                  <span>{faq.question}</span>
                  <FiChevronDown
                    className={`arrow ${activeRight === index ? "rotate" : ""}`}
                  />
                </div>
                <div className="faq-body">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FaqStyle>
  );
};

export default FaqSection;
