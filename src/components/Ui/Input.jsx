import React from "react";

const Input = ({
  placeholder,
  type,
  className,
  name,
  value,
  onChange,
  inputMode,
  pattern,
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={className}
      name={name}
      value={value}
      onChange={onChange}
      inputMode={inputMode}
      pattern={pattern}
    />
  );
};

export default Input;
