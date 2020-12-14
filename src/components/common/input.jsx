import React from "react";

const Input = ({ name, label, value, onChange, autoFocus, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        autoFocus={autoFocus}
        name={name}
        type={type}
        className="form-control"
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
