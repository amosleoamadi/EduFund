import React from "react";

const Input = ({ placeholder, type, className, name, value, onChange }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={className}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
