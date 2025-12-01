import { HomePage } from "../../pages/HomePage";
import Button from "../Button";
import "./App.css";

function App() {
  const sayHello = () => {
    alert("Привет из App!");
  };

  const sayBye = () => {
    alert("Пока!");
  };

  const showMessage = (text) => {
    alert(text);
  };

  const handleRootClick = () => {
    alert("Сработало через проп-дриллинг!");
  };

  const success = () => alert("Успех!");
  const warning = () => alert("Предупреждение!");
  const danger = () => alert("Ошибка!");

  return (
    <div className="app-container">
      <h1>React Homework Template</h1>
      <p>Здесь будет домашнее задание к соответствующему уроку.</p>
      <Button label="Первый пропс" />
      <Button />
      <Button label="Нажми меня" onClick={sayHello} />
      <Button label="Попрощаться" onClick={sayBye} />
      <Button
        label="Сообщение"
        onClick={() => showMessage("Ты нажал на кнопку!")}
      />
      <HomePage click={handleRootClick} />
      <Button
        label="Красная кнопка"
        btnStyles={{ background: "red", padding: "10px", color: "white" }}
      />
      <Button
        label="Зеленая кнопка"
        btnStyles2={{ background: "green", padding: "10px", color: "white" }}
      />

      <Button
        label="OK"
        onClick={success}
        btnStyles={{ background: "green", color: "white", padding: 10 }}
      />

      <Button
        label="Warning"
        onClick={warning}
        btnStyles={{ background: "orange", color: "white", padding: 10 }}
      />

      <Button
        label="Error"
        onClick={danger}
        btnStyles={{ background: "red", color: "white", padding: 10 }}
      />
    </div>
  );
}

export default App;
