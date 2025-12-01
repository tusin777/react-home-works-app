import React from "react";

const ChildComponent = ({ count, onIncrement, decrement, label }) => {
  return (
    <div>
      <p>
        Еще счетчик: <i>#{label}</i> {count}
      </p>
      <button onClick={onIncrement}>Прибавить 1</button>
      <button onClick={decrement}>Убавить 1</button>
    </div>
  );
};

export default ChildComponent;
