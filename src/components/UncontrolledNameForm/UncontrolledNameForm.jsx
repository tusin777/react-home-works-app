import React from "react";

const UncontrolledNameForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    let value = e.target.text.value;

    alert(`Введено значение: ${value}`);
    e.target.text.value = "";
  };

  return (
    <div>
      <h2>
        Неуправляемое поле ввода: чтение значения только при отправке формы
      </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default UncontrolledNameForm;
