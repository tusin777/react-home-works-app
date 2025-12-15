import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./FeedbackForm.css";

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);

  const [isLoad, setIsLoad] = useState(false);

  // eslint-disable-next-line react-hooks/incompatible-library
  const name = watch("name", "");
  const email = watch("email", "");
  const topic = watch("topic", "");
  const message = watch("message", "");

  const messageLength = message.length;
  const messageLimit = 500;

  const onSubmit = (data) => {
    setIsLoad(true); // 1. включили индикатор отправки
    setIsSuccess(false); // 2. скрыли старое сообщение об успехе

    setTimeout(() => {
      console.log(data);

      reset(); // очистили форму
      setIsLoad(false); // отправка закончилась
      setIsSuccess(true); // показали новое сообщение об успехе
    }, 1000);
  };

  return (
    <div className="feedback-form-container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="feedback-form"
        onFocus={() => setIsSuccess(false)}
      >
        <label className="feedback-form__field">
          <span className="feedback-form__label">name:</span>
          <input
            className="feedback-form__input"
            {...register("name", {
              required: "Обязательное поле",
              minLength: {
                value: 3,
                message: "Минимальная длина имени 3 символа",
              },
            })}
          />
        </label>
        <div className="feedback-form__error-wrapper">
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        <label className="feedback-form__field">
          <span className="feedback-form__label">email:</span>
          <input
            className="feedback-form__input"
            type="email"
            {...register("email", {
              required: "Обязательное поле",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:
                  'Неверный формат возможные ошибки -  отсутствие "@", точки, некорректные символы.',
              },
            })}
          />
        </label>
        <div className="feedback-form__error-wrapper">
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>
        <label className="feedback-form__field">
          <span className="feedback-form__label">Тема сообщения:</span>
          <input
            className="feedback-form__input"
            {...register("topic", {
              required: "Обязательное поле",
              minLength: {
                value: 5,
                message: "Минимальная длина темы: 5 символов.",
              },
            })}
          />
        </label>
        <div className="feedback-form__error-wrapper">
          {errors.topic && (
            <span className="error">{errors.topic.message}</span>
          )}
        </div>
        <label className="feedback-form__field">
          <span className="feedback-form__label">Сообщение:</span>
          <textarea
            className="feedback-form__input"
            {...register("message", {
              required: "Обязательное поле",
              minLength: {
                value: 20,
                message: "Минимальная длина: 20 символов.",
              },
              maxLength: {
                value: 500,
                message: "Максимальная длина: 500 символов.",
              },
            })}
          />
        </label>
        <div className="feedback-form__error-wrapper">
          {errors.message && (
            <span className="error">{errors.message.message}</span>
          )}
        </div>
        <label className="feedback-form__field feedback-form__checkbox">
          <input
            type="checkbox"
            {...register("agree", {
              required:
                "Пользователь обязан поставить галочку для отправки сообщения",
            })}
          />
          <span>Согласен на обработку персональных данных</span>
        </label>
        <div className="feedback-form__error-wrapper">
          {errors.agree && (
            <span className="error">{errors.agree.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="feedback-form__submit"
          disabled={isLoad}
        >
          {isLoad ? "Отправка…" : "Отправить"}
        </button>
      </form>
      <div className="feedback-preview">
        <h2 className="feedback-preview__title">Предпросмотр сообщения</h2>
        <div className="feedback-preview__rows">
          <div className="feedback-preview__row">
            <span className="feedback-preview__label">Имя:</span>
            <span className="feedback-preview__value">{name || "—"}</span>
          </div>
          <div className="feedback-preview__row">
            <span className="feedback-preview__label">Email:</span>
            <span className="feedback-preview__value">{email || "—"}</span>
          </div>
          <div className="feedback-preview__row">
            <span className="feedback-preview__label">Тема:</span>
            <span className="feedback-preview__value">{topic || "—"}</span>
          </div>
          <div className="feedback-preview__row">
            <span className="feedback-preview__label">Сообщение:</span>
            <span className="feedback-preview__value">{message || "—"}</span>
          </div>
        </div>

        <div className="feedback-preview__counter">
          Символов: {messageLength} / {messageLimit}
        </div>
      </div>
      {isSuccess && (
        <div className="feedback-success">Сообщение успешно отправлено</div>
      )}
    </div>
  );
};

export default FeedbackForm;
