export function ElementExample() {
  // Это JSX-элемент (НЕ компонент)
  const element = (
    <p style={{ color: "purple" }}>Это JSX-элемент, сохранённый в переменную</p>
  );

  const element2 = (
    <div style={{ background: "#eee", padding: "8px" }}>
      <strong>Второй JSX-элемент</strong>
    </div>
  );

  return (
    <div>
      <h2>Демонстрация разницы между Element и Component</h2>

      {/* Вывод JSX-элемента */}
      {element}
      {element2}

      {/* Дополнительный элемент для визуального различия */}
      <p>А это уже JSX, который вернул сам компонент.</p>
    </div>
  );
}
