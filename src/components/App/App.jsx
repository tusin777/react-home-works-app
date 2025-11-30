import "./App.css";
import { WelcomeMessage } from "../components/WelcomeMessage/WelcomeMessage.jsx";

function App() {
  return (
    <div className="app-container">
      <h1>React Homework Template</h1>
      <p>Здесь будет домашнее задание к соответствующему уроку.</p>
      <WelcomeMessage />
    </div>
  );
}

export default App;
