import React from "react";

const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      style={{
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
        height: 200,
      }}
    >
      <button onClick={toggleTheme}>Переключить тему</button>
    </div>
  );
};

export default ThemeToggle;
