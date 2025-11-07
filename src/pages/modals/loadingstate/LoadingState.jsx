import React from "react";
import "./LoadingStyle.css";
import logo from "../../../assets/vite.svg";

const LoadingState = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="loading-logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoadingState;
