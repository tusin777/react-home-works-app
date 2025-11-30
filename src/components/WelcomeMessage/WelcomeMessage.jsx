import "./WelcomeMessage.css";

// Именованный экспорт
export function WelcomeMessage() {
  return (
    <section className="welcome-message">
      <h2>Добро пожаловать!</h2>
      <p>Этот компонент создан в рамках урока 1.3.</p>
    </section>
  );
}
