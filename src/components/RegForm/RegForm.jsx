import { useState } from "react"; // Импортируем хук useState для работы с локальным состоянием в функциональном компоненте

import {
  // Импортируем из локального модуля функции-валидаторы
  validatePassword, // Функция для проверки сложности пароля по регулярному выражению
  checkPasswordMatch, // Функция для проверки совпадения пароля и его подтверждения
  checkRequiredFields, // Функция для проверки, что все обязательные поля формы заполнены
} from "./validators"; // Путь до файла с валидаторами в той же папке, что и компонент

import "./RegForm.css"; // Подключаем CSS-стили для оформления формы регистрации

const RegForm = () => {
  // Объявляем функциональный компонент RegForm как стрелочную функцию

  const [name, setName] = useState(""); // Состояние для имени пользователя и функция его обновления
  const [email, setEmail] = useState(""); // Состояние для email и функция его обновления
  const [password, setPassword] = useState(""); // Состояние для основного пароля
  const [confirmPassword, setConfirmPassword] = useState(""); // Состояние для поля подтверждения пароля
  const [selectedYear, setSelectedYear] = useState(""); // Состояние для выбранного года окончания учебного заведения

  const [isPasswordValid, setIsPasswordValid] = useState(true); // Флаг: валиден ли пароль по правилам сложности
  const [passwordMatch, setPasswordMatch] = useState(true); // Флаг: совпадают ли пароль и подтверждение
  const [requiredFieldsError, setRequiredFieldsError] = useState(false); // Флаг: есть ли ошибка по незаполненным полям
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Флаг: показывать ли сообщение об успешной отправке

  const handleNameChange = (e) => {
    // Обработчик изменения поля имени, принимает объект события
    const newName = e.target.value; // Достаём введённое пользователем значение из e.target.value
    setName(newName); // Обновляем состояние name новым значением
  }; // Завершаем определение функции handleNameChange

  const handleEmailChange = (e) => {
    // Обработчик изменения поля email
    const newEmail = e.target.value; // Получаем новое значение email из события
    setEmail(newEmail); // Записываем новое значение в состояние email
  }; // Завершаем определение функции handleEmailChange

  const handlePasswordChange = (e) => {
    // Обработчик изменения поля основного пароля
    const newPassword = e.target.value; // Получаем введённый пользователем пароль
    setPassword(newPassword); // Сохраняем новый пароль в состоянии password

    const validatePasswordValue = validatePassword(newPassword); // Вызываем валидатор сложности пароля
    const checkPasswordMatchValue = checkPasswordMatch(
      // Проверяем, совпадает ли новый пароль с confirmPassword
      newPassword, // Передаём новый пароль как первый аргумент
      confirmPassword // Текущее значение поля подтверждения как второй аргумент
    ); // Завершаем вызов checkPasswordMatch

    setIsPasswordValid(validatePasswordValue); // Обновляем флаг валидности пароля по результату проверки
    setPasswordMatch(checkPasswordMatchValue); // Обновляем флаг совпадения паролей
  }; // Завершаем определение функции handlePasswordChange

  const handleConfirmPasswordChange = (e) => {
    // Обработчик изменения поля подтверждения пароля
    const newConfirmPassword = e.target.value; // Получаем новое значение подтверждения пароля
    setConfirmPassword(newConfirmPassword); // Сохраняем его в состояние confirmPassword

    const checkPasswordMatchValue = checkPasswordMatch(
      // Снова проверяем совпадение пароля и подтверждения
      password, // Берём текущее значение основного пароля
      newConfirmPassword // И новое значение подтверждения
    ); // Завершаем вызов checkPasswordMatch

    setPasswordMatch(checkPasswordMatchValue); // Обновляем флаг совпадения паролей
  }; // Завершаем определение функции handleConfirmPasswordChange

  const handleYearChange = (e) => {
    // Обработчик изменения значения в выпадающем списке года
    const newSelectedYear = e.target.value; // Получаем выбранный пользователем год
    setSelectedYear(newSelectedYear); // Сохраняем выбранный год в состояние selectedYear
  }; // Завершаем определение функции handleYearChange

  const years = Array.from(
    // Создаём массив years с диапазоном годов
    { length: 40 }, // Задаём длину массива — 40 элементов (40 лет назад от текущего года)
    (_, i) => new Date().getFullYear() - i // Для каждого индекса i считаем год: текущий год минус i
  ); // Завершаем вызов Array.from и формирование массива годов

  const handleSubmit = (e) => {
    // Обработчик отправки формы (событие onSubmit)
    e.preventDefault(); // Отменяем поведение по умолчанию (перезагрузку страницы при submit)

    const allFieldsFilled = checkRequiredFields([
      // Проверяем, что все поля формы заполнены
      name, // Значение поля имени
      email, // Значение поля email
      password, // Значение основного пароля
      confirmPassword, // Значение подтверждения пароля
      selectedYear, // Выбранный год окончания учебного заведения
    ]); // Завершаем формирование массива и вызов checkRequiredFields

    const isFormValid = allFieldsFilled && isPasswordValid && passwordMatch; // Общая валидность формы: все поля заполнены, пароль валиден и пароли совпадают

    if (!isFormValid) {
      // Если форма невалидна (какое-то условие не выполняется)
      setRequiredFieldsError(true); // Включаем флаг ошибки по обязательным полям / валидации
      setShowSuccessMessage(false); // На всякий случай скрываем сообщение об успехе
      return; // Прерываем дальнейшее выполнение функции, не отправляем данные
    } // Завершаем ветку if при невалидной форме

    setRequiredFieldsError(false); // Сбрасываем флаг ошибки, так как все проверки пройдены
    setShowSuccessMessage(true); // Включаем флаг показа сообщения об успешной отправке данных

    const formData = {
      // Собираем объект с данными формы для демонстрации/отправки
      name, // Имя пользователя
      email, // Email пользователя
      password, // Основной пароль (в реальных проектах так делать не стоит, здесь пример)
      confirmPassword, // Подтверждение пароля (тоже только в учебных целях)
      selectedYear, // Выбранный год окончания учебного заведения
    }; // Завершаем объявление объекта formData

    alert(JSON.stringify(formData, null, 2)); // Показываем данные формы в alert в формате JSON с отступами

    setTimeout(() => {
      // Запускаем таймер для скрытия сообщения об успехе через время
      setShowSuccessMessage(false); // Через заданный интервал выключаем флаг показа success-сообщения
    }, 3000); // Время задержки — 3000 миллисекунд (3 секунды)
  }; // Завершаем определение функции handleSubmit

  const handleReset = () => {
    // Обработчик очистки формы (нажатие на кнопку type="reset")
    setName(""); // Очищаем значение имени
    setEmail(""); // Очищаем значение email
    setPassword(""); // Очищаем основной пароль
    setConfirmPassword(""); // Очищаем поле подтверждения пароля
    setSelectedYear(""); // Сбрасываем выбранный год в пустую строку

    setIsPasswordValid(true); // Возвращаем флаг валидности пароля в исходное состояние (валиден)
    setPasswordMatch(true); // Считаем, что пароли совпадают (поля пустые)
    setRequiredFieldsError(false); // Сбрасываем флаг ошибки по обязательным полям
    setShowSuccessMessage(false); // Скрываем сообщение об успешной отправке
  }; // Завершаем определение функции handleReset

  return (
    // Возвращаем JSX-разметку компонента RegForm
    <section className="section">
      {" "}
      {/* Внешний контейнер секции формы с фоном и отступами */}
      <div className="form-container">
        {" "}
        {/* Внутренний контейнер для центрирования и ограничения ширины формы */}
        <h2 className="form-title">Форма регистрации</h2>{" "}
        {/* Заголовок формы */}
        <form className="reg-form" onSubmit={handleSubmit}>
          {" "}
          {/* Тег form, навешиваем обработчик отправки */}
          <input
            type="text" // Поле ввода имени — текстовый инпут
            placeholder="Имя" // Подсказка внутри поля до ввода текста
            value={name} // Привязка значения к состоянию name (контролируемый компонент)
            onChange={handleNameChange} // Обновляем состояние name при каждом вводе символа
          />{" "}
          // Закрываем input для имени
          <input
            type="email" // Поле ввода email — тип email (браузер может проверять формат)
            placeholder="email" // Подсказка "email" в поле
            value={email} // Привязываем значение к состоянию email
            onChange={handleEmailChange} // Обработчик для обновления email при вводе
          />{" "}
          // Закрываем input для email
          <input
            type="password" // Поле ввода основного пароля — тип password (символы скрыты)
            placeholder="Пароль" // Подсказка "Пароль"
            value={password} // Связываем значение поля с состоянием password
            onChange={handlePasswordChange} // При каждом вводе запускаем валидацию пароля и проверку совпадения
          />{" "}
          // Закрываем input для пароля
          {!isPasswordValid && ( // Условный рендеринг: если пароль невалиден, показываем сообщение об ошибке
            <div className="error-message">
              {" "}
              {/* Блок с текстом ошибки, стилизованный как сообщение об ошибке */}
              Пароль должен состоять из латинских букв и цифр, а также быть не
              менее 8 символов {/* Текст подсказки по требованиям к паролю */}
            </div>
          )}{" "}
          {/* Завершаем условный рендеринг сообщения о некорректном пароле */}
          <input
            type="password" // Поле ввода подтверждения пароля
            placeholder="Подтвердите пароль" // Подсказка о том, что нужно повторить пароль
            value={confirmPassword} // Привязка значения к состоянию confirmPassword
            onChange={handleConfirmPasswordChange} // При вводе обновляем confirmPassword и проверяем совпадение
            style={passwordMatch ? { color: "green" } : { color: "red" }} // Динамически меняем цвет текста в зависимости от совпадения паролей
          />{" "}
          // Закрываем input для подтверждения пароля
          {!passwordMatch && ( // Если пароли не совпадают, показываем дополнительное сообщение об ошибке
            <div className="error-message">Пароли пока не совпадают</div> // Текст ошибки о несовпадении паролей
          )}{" "}
          // Завершаем условный рендеринг сообщения о несовпадении паролей
          <select
            value={selectedYear} // Привязка выбранного значения года к состоянию selectedYear
            onChange={handleYearChange} // При смене значения обновляем selectedYear
          >
            {" "}
            {/* Открываем выпадающий список лет */}
            <option value="">Дата окончания учебного заведения:</option>{" "}
            {/* Значение по умолчанию — подсказка, год не выбран */}
            {years.map(
              (
                year // Перебираем массив years и для каждого года создаём option
              ) => (
                <option
                  key={year.toString()} // Уникальный ключ для React (строковое представление года)
                  value={year} // Значение option — сам год
                >
                  {year} {/* Текст, который видит пользователь в списке */}
                </option> // Закрываем отдельный пункт списка
              )
            )}{" "}
            // Завершаем вызов years.map и вставку всех option
          </select>{" "}
          {/* Закрываем выпадающий список с годами */}
          <button type="submit">Отправить</button>{" "}
          {/* Кнопка отправки формы, запускает handleSubmit */}
          <button
            type="reset" // Кнопка сброса значений формы
            onClick={handleReset} // Дополнительно вызываем наш кастомный сброс состояний
          >
            Очистить форму {/* Текст на кнопке для пользователя */}
          </button>{" "}
          {/* Закрываем кнопку очистки формы */}
          {requiredFieldsError && ( // Если установлен флаг ошибки по обязательным полям
            <div className="error-message">
              Проверьте заполнение полей формы{" "}
              {/* Текст ошибки о том, что форма заполнена не полностью или с ошибками */}
            </div>
          )}{" "}
          {/* Завершаем условный рендеринг блока с ошибкой по обязательным полям */}
          {showSuccessMessage && ( // Если установлен флаг успешной отправки формы
            <div className="success-message">
              Данные успешно отправлены{" "}
              {/* Сообщение, информирующее пользователя об успешной отправке данных */}
            </div>
          )}{" "}
          {/* Завершаем условный рендеринг сообщения об успехе */}
        </form>{" "}
        {/* Закрываем тег form и всю форму регистрации */}
      </div>{" "}
      {/* Закрываем контейнер form-container */}
    </section> // Закрываем внешнюю секцию с фоном формы
  ); // Завершаем оператор return и JSX-разметку компонента
}; // Закрываем тело стрелочного компонента RegForm

export default RegForm; // Экспортируем компонент по умолчанию, чтобы использовать его в других файлах
