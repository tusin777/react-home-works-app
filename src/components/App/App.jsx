import { useState } from "react";
import "./App.css";
import CartIcon from "../CartIcon/CartIcon";
import AdminPanel from "../AdminPanel/AdminPanel";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const isLoggedIn = true; // временно "авторизован"

  const isAuthZ = true;

  const isAdmin = false; // или false для проверки

  return (
    <div className="app-container">
      <h1>React Homework Template</h1>
      <p>Здесь будет домашнее задание к соответствующему уроку.</p>
      <WelcomeBlock isLoggedIn={isLoggedIn} userName="Руслан" />
      <GuestPromo isAuthZ={isAuthZ} />
      <button onClick={() => setIsCartOpen(!isCartOpen)}>
        {isCartOpen ? "Скрыть корзину" : "Показать корзину"}
      </button>
      {isCartOpen ? (
        <div className="cart">
          <h2>Корзина</h2>
          <p>Здесь будут товары пользователя.</p>
        </div>
      ) : (
        <p>Корзина скрыта.</p>
      )}
      <button onClick={() => setCartCount(cartCount + 1)}>
        Добавить в корзину
      </button>
      <button onClick={() => setCartCount(0)}>Очистить корзину</button>
      <CartIcon count={cartCount} />
      <AdminPanel isAdmin={isAdmin} />
    </div>
  );
}

export default App;

function WelcomeBlock({ isLoggedIn, userName }) {
  if (!isLoggedIn) {
    return <p>Пожалуйста, войдите в систему.</p>;
  }

  return <h2>Добро пожаловать, {userName}!</h2>;
}

function GuestPromo({ isAuthZ }) {
  return !isAuthZ && <p>Зарегистрируйтесь чбо-бы получить бонус</p>;
}
