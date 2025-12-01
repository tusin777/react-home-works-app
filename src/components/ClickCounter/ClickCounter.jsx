import React, { useState } from "react";

const ClickCounter = ({ title }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handlePlusOne = () => {
    setClicks(clicks + 1);
  };

  //   const handlePlusThreeWrong = () => {
  //     setClicks(clicks + 1);
  //     setClicks(clicks + 1);
  //     setClicks(clicks + 1);
  //   };

  const handlePlusThree = () => {
    setClicks((prev) => prev + 1);
    setClicks((prev) => prev + 1);
    setClicks((prev) => prev + 1);
  };

  const handleReset = () => {
    setClicks(0);
  };

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={handleClick}>Нажми меня</button>
      <p>Счётчик: {clicks}</p>
      <button onClick={handlePlusOne}>+1 обычным обновлением</button>
      {/* <button onClick={handlePlusThreeWrong}>+3 через три вызова</button> */}
      <button onClick={handlePlusThree}>+3 через три вызова</button>
      <button onClick={handleReset}>Сбросить счётчик</button>
    </div>
  );
};

export default ClickCounter;
