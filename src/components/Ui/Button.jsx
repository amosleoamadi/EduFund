import React from "react";

const Button = ({ type, className, onClick, text }) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {text}
    </button>
  );
};

export default Button;
