import React, { useRef, useState } from "react";

const ValidatedMixedForm = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);

  const emailRef = useRef(null);

  const validateName = (value) => {
    if (value.length === 0) {
      return {
        valid: false,
        error: "Имя не может быть пустым",
      };
    }

    if (value.length < 3) {
      return {
        valid: false,
        error: "Имя должно содержать минимум 3 символа",
      };
    }

    const lettersOnly = /^[A-Za-zА-Яа-я]+$/;
    if (!lettersOnly.test(value)) {
      return {
        valid: false,
        error: "Имя может содержать только буквы",
      };
    }

    return {
      valid: true,
      error: "",
    };
  };

  const handleNameChange = (e) => {
    const newName = e.target.value.trim();

    setName(newName);

    const result = validateName(newName);
    setNameError(result.error);
    setIsNameValid(result.valid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNameValid) {
      return;
    }
    const email = emailRef.current.value;

    alert(`Имя: ${name}\nEmail: ${email}`);

    // сброс формы (необязательно)
    setName("");
    setNameError("");
    setIsNameValid(false);
    emailRef.current.value = "";
  };

  return (
    <div>
      <h2>
        Смешанная форма с валидацией имени: управляемое имя + неуправляемый
        email
      </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Введите имя"
          />
        </label>
        {nameError && <p style={{ color: "red", margin: 0 }}>{nameError}</p>}
        {isNameValid && (
          <p style={{ color: "green", margin: 0 }}>Имя валидно</p>
        )}

        <label>
          Email:
          <input type="email" ref={emailRef} placeholder="Введите email" />
        </label>
        <button type="submit" disabled={!isNameValid}>
          Отправить
        </button>
      </form>
    </div>
  );
};

export default ValidatedMixedForm;
