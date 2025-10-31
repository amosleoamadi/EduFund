import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../static";
import Headers from "../static/Headers";
import ScrollToTop from "./ScrollToTop";

const HomeLayouts = () => {
  return (
    <>
      <ScrollToTop />
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayouts;
