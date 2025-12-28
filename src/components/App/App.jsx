import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../../global.styled.js";
import { darkTheme, lightTheme } from "../../theme.js";
import { AnimatedBadge, Button } from "./Button/Button.styled.js";

function App() {
  const [themeMode, setThemeMode] = useState(() => {
    const saved = localStorage.getItem("themeMode");
    return saved === "dark" ? "dark" : "light";
  });

  const theme = themeMode === "dark" ? darkTheme : lightTheme;

  const toggleTheme = () => {
    const next = themeMode === "dark" ? "light" : "dark";
    setThemeMode(next);
    localStorage.setItem("themeMode", next);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div style={{ padding: 24, display: "grid", gap: 14, maxWidth: 520 }}>
        <h1>Lesson 1.21 — Styled Components</h1>

        <AnimatedBadge>
          Тема: <b>{themeMode}</b>
        </AnimatedBadge>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Button $variant="primary" onClick={toggleTheme}>
            Переключить тему
          </Button>

          <Button $variant="ghost">Ghost</Button>

          <Button $variant="primary" $disabled>
            Disabled
          </Button>

          <Button as="a" href="#" $variant="ghost">
            Ссылка (as="a")
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
