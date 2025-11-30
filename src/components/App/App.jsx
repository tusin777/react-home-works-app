import { Email } from "../Email/Email.jsx";
import { ProductList } from "../ProductList/ProductList.jsx";
import TestHtml from "../TestHtml/TestHtml.jsx";

import "./App.css";

function App() {
  const city = "Острада";
  const year = 2025;
  const fullInfo = `Город: ${city}, год: ${year}`;

  const discount = 14;

  const isAdmin = true;
  const purchases = 0;

  const serverHtml =
    "<p style='color:red'>Сообщение от сервера: акция <strong>-20%</strong></p>";

  return (
    <div className="app-container">
      <h1>React Homework Template</h1>
      <p>Здесь будет домашнее задание к соответствующему уроку.</p>
      <p>{city}</p>
      <p>{year}</p>
      <p>{fullInfo}</p>
      <p>Результат выражения 15 * 4 = {15 * 4}</p>
      <p>Размер скидки: {discount}%</p>
      <Email />
      {isAdmin && (
        <>
          <h2>Список продуктов</h2>
          <ProductList />
        </>
      )}
      {isAdmin && <h2>Админский доступ открыт</h2>}
      {purchases === 0 && <p>У вас пока нет покупок</p>}
      <div dangerouslySetInnerHTML={{ __html: serverHtml }}></div>
      <h2>Проверка HTML → JSX</h2>
      <TestHtml />
    </div>
  );
}

export default App;
