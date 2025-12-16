import { useState } from "react";

export function withCounter(WrappedComponent, styles) {
  function WithCounterComponent(props) {
    const [count, setCount] = useState(props.initialCount ?? 0);
    const increment = () => {
      setCount((prev) => prev + 1);
    };
    return (
      <WrappedComponent
        {...props}
        styles={styles}
        count={count}
        increment={increment}
      />
    );
  }
  return WithCounterComponent;
}
