import React from "react";
import "../Style/Input.css";

const Input = ({ type = "text", placeholder, handleChange, name }) => {
  return (
    <>
      <div className="inputContainer">
        <input
          name={name}
          onChange={handleChange}
          placeholder={placeholder && placeholder}
          type={type}
          required
          autoComplete="off"
        />
      </div>
    </>
  );
};

export default Input;
