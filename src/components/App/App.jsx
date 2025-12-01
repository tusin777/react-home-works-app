import { useState } from "react";
import "./App.css";
import ClickCounter from "../ClickCounter/ClickCounter";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function App() {
  const [clicks, setClicks] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [text, setText] = useState("Какой-то текст");

  // const handleClick = () => {
  //   setClicks(clicks + 1);
  // };

  return (
    <div className={`app ${isDarkMode ? "app app--dark" : "app app--light"}`}>
      <Header clicks={clicks} text={text} />
      <ClickCounter clicks={clicks} setClicks={setClicks} />
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Footer text={text} setText={setText} />
    </div>
  );
}

export default App;
