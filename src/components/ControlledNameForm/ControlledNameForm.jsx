import { useState } from "react";

const ControlledNameForm = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Введено значение: ${name}`);
    setName("");
  };

  return (
    <div>
      <h2>Управляемое текстовое поле с предпросмотр введённого имени</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Наберите текст здесь"
        />
        <button type="submit">Отправить</button>
      </form>
      {name && <p>Введено значение: {name}</p>}
      {!name && <p>Здесь будет выведено значение</p>}
    </div>
  );
};

export default ControlledNameForm;
