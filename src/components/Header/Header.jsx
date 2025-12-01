import React from "react";

const Header = ({ text }) => {
  return (
    <header>
      <h1>Заголовок</h1>
      <p>{text}</p>
      <p>Длина текста: {text.length}</p>
    </header>
  );
};

export default Header;
