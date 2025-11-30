import React from "react";

const Button = () => {
  const userName = "Ruslan";

  function handleClick() {
    alert(`Кнопка была нажата, пользователь- ${userName}`);
  }

  return <button onClick={handleClick}>Нажми меня</button>;
};

export default Button;
