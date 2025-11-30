export function ProductList() {
  const products = ["Хлеб", "Молоко", "Сыр", "Яблоки"];

  return (
    <ul style={{ color: "darkred", fontSize: 24 }}>
      {products.map((product, index) => (
        <li
          key={product}
          style={
            index === products.length - 1 ? { backgroundColor: "yellow" } : {}
          }
        >
          {product}{" "}
        </li>
      ))}
    </ul>
  );
}
