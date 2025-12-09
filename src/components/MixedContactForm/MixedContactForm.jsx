import { useRef, useState } from "react";

const MixedContactForm = () => {
  const [name, setName] = useState("");

  const emailRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valueEmail = emailRef.current.value;
    alert(
      `Поле Имя из состояния name: ${name}, поле Email через ref emailRef: ${valueEmail}`
    );
    emailRef.current.value = "";
    setName("");
  };

  return (
    <div>
      <h2>
        Смешанная форма: управляемое имя и неуправляемый email с использованием
        useRef
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Имя:
            <input
              type="text"
              placeholder="Введите имя"
              value={name}
              onChange={handleChange}
            />
          </label>
          {!name && <p>Поле остается пустим вы ничего не вводили</p>}
          {name && <p>Вы ввели:{name}</p>}
        </div>
        <br />
        <div>
          <label>
            Email:
            <input type="email" placeholder="Введите email" ref={emailRef} />
          </label>
        </div>
        <br />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default MixedContactForm;
