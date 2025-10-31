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
        "EduFund is a digital crowdfunding platform that connects verified students who struggle to pay their school fees with trusted donors, sponsors, and organizations willing to help. Every campaign is verified to ensure funds reach real students for their education.",
    },
    {
      question: "How do students get verified on EduFund?",
      answer:
        "Each student must upload valid identification, school admission details, and proof of enrollment. EduFund then cross-checks this information with the student’s institution or official verification APIs before approving their campaign.",
    },
    {
      question: "Can anyone donate on EduFund?",
      answer:
        "Yes. Individuals, organizations, and corporate sponsors can all donate to verified student campaigns. Donors can choose to support one student, multiple students, or contribute to EduFund’s general education support pool.",
    },
    {
      question: "Is my donation safe and secure?",
      answer:
        "Absolutely. EduFund uses trusted payment gateways and end-to-end encryption to protect all transactions. Funds are disbursed directly to verified school accounts  not to individual students  ensuring complete transparency.",
    },
  ];

  const rightFaqs = [
    {
      question: "Can a student run more than one campaign?",
      answer:
        "No. Each student can only have one active campaign at a time. Once a campaign goal is reached and verified, the student can apply for another campaign only if approved by EduFund’s verification team.",
    },
    {
      question: "What happens if a campaign doesn’t reach its goal?",
      answer:
        "If a campaign doesn’t reach its target by the set deadline, donors are notified. The funds raised may still be disbursed proportionally toward tuition, or donors can choose to reassign their donation to another verified student campaign.",
    },
    {
      question: "Can schools or institutions partner with EduFund?",
      answer:
        "Yes. EduFund actively partners with accredited schools and universities to verify student details and manage direct tuition payments.",
    },
    {
      question: "How long does it take for students to receive funds?",
      answer:
        "Once a campaign is fully funded and verified, EduFund processes disbursement within 3–5 business days, directly to the student’s school account. Students and donors both receive confirmation updates once the transaction is completed.",
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
          <p>
            Let's make it happen together. Whether you're a student seeking
            support or a donor ready to make an impact, your journey starts
            here.
          </p>
          <button className="cta-button">Join EduFund</button>
        </div>

        <div className="help-header">
          <h2>Frequently Asked Questions</h2>
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
