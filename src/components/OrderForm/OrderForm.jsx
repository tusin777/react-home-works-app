import { useState, useRef } from "react";

function OrderForm() {
  // --- Управляемые состояния ---
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryType, setDeliveryType] = useState("courier");
  const [isPriority, setIsPriority] = useState(false);

  const [fullNameError, setFullNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // --- Неуправляемые поля ---
  const noteRef = useRef(null);
  const promoRef = useRef(null);

  // ---- ВАЛИДАЦИЯ ФИО ----
  function validateFullName(value) {
    const trimmed = value.trim();

    if (trimmed.length === 0) {
      return { valid: false, error: "ФИО не может быть пустым" };
    }

    if (trimmed.length < 3) {
      return {
        valid: false,
        error: "ФИО должно содержать минимум 3 символа",
      };
    }

    // Разрешаем буквы и пробелы
    const lettersAndSpaces = /^[A-Za-zА-Яа-я\s]+$/;
    if (!lettersAndSpaces.test(trimmed)) {
      return {
        valid: false,
        error: "ФИО может содержать только буквы и пробелы",
      };
    }

    return { valid: true, error: "" };
  }

  // ---- ВАЛИДАЦИЯ ТЕЛЕФОНА ----
  function validatePhone(value) {
    const trimmed = value.trim();

    if (trimmed.length === 0) {
      return { valid: false, error: "Телефон не может быть пустым" };
    }

    // Разрешаем: + в начале и цифры
    const phonePattern = /^\+?\d+$/;
    if (!phonePattern.test(trimmed)) {
      return {
        valid: false,
        error: "Телефон должен содержать только цифры, допускается + в начале",
      };
    }

    if (trimmed.length < 7) {
      return {
        valid: false,
        error: "Телефон должен содержать минимум 7 цифр",
      };
    }

    return { valid: true, error: "" };
  }

  // ---- Обновление флага валидности формы ----
  function updateFormValidity(
    nextFullNameError,
    nextPhoneError,
    nextFullName,
    nextPhone
  ) {
    const noErrors = !nextFullNameError && !nextPhoneError;
    const hasValues =
      nextFullName.trim().length > 0 && nextPhone.trim().length > 0;

    setIsFormValid(noErrors && hasValues);
  }

  // ---- Обработчики управляемых полей ----
  function handleFullNameChange(event) {
    const value = event.target.value;
    setFullName(value);

    const result = validateFullName(value);
    setFullNameError(result.error);

    updateFormValidity(result.error, phoneError, value, phone);
  }

  function handlePhoneChange(event) {
    const value = event.target.value;
    setPhone(value);

    const result = validatePhone(value);
    setPhoneError(result.error);

    updateFormValidity(fullNameError, result.error, fullName, value);
  }

  function handleDeliveryTypeChange(event) {
    setDeliveryType(event.target.value);
  }

  function handlePriorityChange(event) {
    setIsPriority(event.target.checked);
  }

  // ---- Отправка формы ----
  function handleSubmit(event) {
    event.preventDefault();

    if (!isFormValid) {
      // Если форма невалидна, просто не отправляем
      alert("Проверьте корректность ФИО и телефона.");
      return;
    }

    const note = noteRef.current ? noteRef.current.value : "";
    const promo = promoRef.current ? promoRef.current.value : "";

    const orderData = {
      fullName,
      phone,
      deliveryType,
      isPriority,
      note,
      promo,
    };

    alert(
      "Заказ оформлен:\n" +
        `ФИО: ${orderData.fullName}\n` +
        `Телефон: ${orderData.phone}\n` +
        `Доставка: ${
          orderData.deliveryType === "courier" ? "Курьер" : "Самовывоз"
        }\n` +
        `Срочный заказ: ${orderData.isPriority ? "Да" : "Нет"}\n` +
        `Комментарий: ${orderData.note || "(нет)"}\n` +
        `Промокод: ${orderData.promo || "(нет)"}`
    );

    // Сброс формы (по желанию)
    setFullName("");
    setPhone("");
    setDeliveryType("courier");
    setIsPriority(false);
    setFullNameError("");
    setPhoneError("");
    setIsFormValid(false);

    if (noteRef.current) noteRef.current.value = "";
    if (promoRef.current) promoRef.current.value = "";
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        maxWidth: "400px",
      }}
    >
      <h2>Оформление заказа</h2>

      {/* ФИО */}
      <label>
        ФИО:
        <input type="text" value={fullName} onChange={handleFullNameChange} />
      </label>
      {fullNameError && (
        <p style={{ color: "red", margin: 0 }}>{fullNameError}</p>
      )}

      {/* Телефон */}
      <label>
        Телефон:
        <input type="tel" value={phone} onChange={handlePhoneChange} />
      </label>
      {phoneError && <p style={{ color: "red", margin: 0 }}>{phoneError}</p>}

      {/* Тип доставки */}
      <label>
        Тип доставки:
        <select value={deliveryType} onChange={handleDeliveryTypeChange}>
          <option value="courier">Курьер</option>
          <option value="pickup">Самовывоз</option>
        </select>
      </label>

      {/* Срочный заказ */}
      <label>
        <input
          type="checkbox"
          checked={isPriority}
          onChange={handlePriorityChange}
        />
        Срочный заказ
      </label>

      {/* Неуправляемое поле: комментарий */}
      <label>
        Комментарий к заказу:
        <textarea ref={noteRef} rows={3} />
      </label>

      {/* Неуправляемое поле: промокод */}
      <label>
        Промокод:
        <input type="text" ref={promoRef} placeholder="Введите промокод" />
      </label>

      <button type="submit" disabled={!isFormValid}>
        Отправить заказ
      </button>
    </form>
  );
}

export default OrderForm;
