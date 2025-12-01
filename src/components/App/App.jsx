import ParentComponent from "../ParentComponent/ParentComponent";
import UserProfile from "../UserProfile/UserProfile";
import "./App.css";
import Counter from "./Counter/Counter";

function App() {
  return (
    <div className="app-container">
      <h1>React Homework Template</h1>
      <p>Здесь будет домашнее задание к соответствующему уроку.</p>
      <Counter />
      <UserProfile />
      <ParentComponent />
    </div>
  );
}

export default App;
