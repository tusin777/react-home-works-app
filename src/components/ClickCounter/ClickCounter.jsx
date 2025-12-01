const ClickCounter = ({ clicks, setClicks }) => {
  const handlePlusOne = () => {
    setClicks(clicks + 1);
  };

  const handlePlusThree = () => {
    setClicks((prev) => prev + 1);
    setClicks((prev) => prev + 1);
    setClicks((prev) => prev + 1);
  };

  const handleReset = () => {
    setClicks(0);
  };

  const warning = clicks >= 10 ? "Вы много кликнули!" : "Кликов пока немного.";

  return (
    <div>
      <h2>Счётчик кликов</h2>

      <p>Счётчик: {clicks}</p>
      <button onClick={handlePlusOne}>+1 обычным обновлением</button>

      <button onClick={handlePlusThree}>+3 через три вызова</button>
      <button onClick={handleReset}>Сбросить счётчик</button>
      <p>{warning}</p>
    </div>
  );
};

export default ClickCounter;
