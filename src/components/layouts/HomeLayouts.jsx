import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../static";
import Headers from "../static/Headers";

const HomeLayouts = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayouts;
