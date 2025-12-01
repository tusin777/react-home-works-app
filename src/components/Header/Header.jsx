import React from "react";

const Header = ({ clicks, text }) => {
  return (
    <header>
      <h1>Заголовок</h1>
      <p>Кликов: {clicks}</p>
      <p>{text}</p>
      <p>Длина текста: {text.length}</p>
    </header>
  );
};

export default Header;
