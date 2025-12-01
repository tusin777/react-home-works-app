import "./App.css";
import InfoBlock from "../InfoBlock";
import StepsList from "../StepsList";
import InputMirror from "../InputMirror";
import TaskList from "../TaskList";

function App() {
  return (
    <div className="app-container">
      <h1>React Homework Template</h1>
      <p>Здесь будет домашнее задание к соответствующему уроку.</p>
      <InfoBlock />
      <StepsList />
      <InputMirror />
      <TaskList />
    </div>
  );
}

export default App;
