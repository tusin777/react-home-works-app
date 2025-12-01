import React from "react";

const Footer = ({ setText, text }) => {
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <footer>
      <input type="text" value={text} onChange={handleChange} />
    </footer>
  );
};

export default Footer;
