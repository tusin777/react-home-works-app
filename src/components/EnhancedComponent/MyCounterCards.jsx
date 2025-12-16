import { withCounter } from "./withCounter";

const stylesA = {
  backgroundColor: "#ffe5e5",
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid #ffb3b3",
  marginBottom: "12px",
};

const stylesB = {
  backgroundColor: "#e5f0ff",
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid #a7c7ff",
  marginBottom: "12px",
};

export function MyComponentA({ count, increment, styles }) {
  return (
    <div style={styles}>
      <p>Это компонент А со значением:{count} </p>
      <button onClick={increment}>Увеличить значение +1</button>
    </div>
  );
}

export function MyComponentB({ count, increment, styles }) {
  return (
    <div style={styles}>
      <p>Это компонент B со значением:{count} </p>
      <button onClick={increment}>Увеличить значение +1</button>
    </div>
  );
}

export const EnhancedA = withCounter(MyComponentA, stylesA);
export const EnhancedB = withCounter(MyComponentB, stylesB);
