import React from "react";

const Button = ({ type, className, onClick, text, icon, disabled }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={className}
      disabled={disabled}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
