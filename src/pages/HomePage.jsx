import Button from "../components/Button/Button";
import programmer from "../../src/assets/programmer.jpg";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <h2>Домашняя страница</h2>
      <p>Добро пожаловать!</p>
      <Button />
      <img src={programmer} alt="Программист" />
      <p>Используется импорт → сборщик Vite обработает файл.</p>
      <img src="/images/laptop.jpg" alt="Ноутбук" />
      <p>Путь берётся из корня, импорт не нужен</p>
    </div>
  );
};

export default HomePage;
