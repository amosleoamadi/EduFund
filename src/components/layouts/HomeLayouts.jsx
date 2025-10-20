import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../static";

const HomeLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayouts;
