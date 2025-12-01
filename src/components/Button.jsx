import React from "react";

const Button = ({ label, onClick, btnStyles, btnStyles2 }) => {
  return label ? (
    <button onClick={onClick} style={btnStyles ? btnStyles : btnStyles2}>
      {label}
    </button>
  ) : (
    console.warn("Пропс не передан")
  );
};

export default Button;
