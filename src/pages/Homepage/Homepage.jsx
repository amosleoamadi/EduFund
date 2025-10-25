import React from "react";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Impact from "./components/Impact";

const Homepage = () => {
  return (
    <>
      <HowItWorks />
      <WhyChooseUs />
      <Impact />
      <Hero />
    </>
  );
};

export default Homepage;
