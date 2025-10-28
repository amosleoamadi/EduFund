import React, { useState } from "react";
import { TestimonialsStyle } from "./TestimonialsStyle";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import student1 from "../../../assets/Chioma Adebayo image.jpg";
import student2 from "../../../assets/Ibrahhim Yusuf image.jpg";
import student3 from "../../../assets/Container.png";

const testimonials = [
  {
    image: student1,
    quote:
      "I was about to drop out of university when I found EduFund. The platform's transparency gave donors confidence in my story, and I completed my degree.",
    name: "Chioma Adebayo",
    details: "Computer Science, University of Lagos",
    funded: "₦80,000",
  },
  {
    image: student2,
    quote:
      "EduFund didn't just helped me paid my fees it restored my faith in humanity. The verificatoon process made me feel save and valued.",
    name: "Ibrahim Yusuf",
    details: "Engineering, Ahmadu Bello University",
    funded: "₦120,000",
  },
  {
    image: student3,
    quote:
      "Thanks to EduFund and the generous donors, I am now in my final year studying medicine. This platform truly changes lives.",
    name: "Ada Nwankwo",
    details: "Medicine, University of Nigeria",
    funded: "₦150,000",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => setCurrentIndex((currentIndex + 1) % length);
  const prevSlide = () => setCurrentIndex((currentIndex - 1 + length) % length);

  const current = testimonials[currentIndex];

  return (
    <TestimonialsStyle>
      <h2>Real Students, Real Impact</h2>
      <p className="subtitle">
        Hear from students whose lives were transformed through our community
      </p>

      <div className="testimonial-card">
        <div className="left">
          <div className="image-wrapper">
            <img src={current.image} alt={current.name} />
            <span className="funded">Funded: {current.funded}</span>
          </div>
        </div>

        <div className="right">
          <FaQuoteRight className="quote-icon" />
          <p className="quote">"{current.quote}"</p>
          <p className="name">{current.name}</p>
          <p className="details">{current.details}</p>

          <div className="controls">
            <button onClick={prevSlide}>
              <FaChevronLeft />
            </button>
            <div className="dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                />
              ))}
            </div>
            <button onClick={nextSlide}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </TestimonialsStyle>
  );
};

export default Testimonials;
