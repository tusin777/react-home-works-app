// src/components/RegForm/validators.js

// Проверка пароля по правилам:
// - минимум 8 символов
// - минимум одна латинская буква
// - минимум одна цифра
// - только латинские буквы и цифры
export function validatePassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
}

// Проверка совпадения паролей
export function checkPasswordMatch(password, confirmPassword) {
  return password === confirmPassword;
}

// Проверка, что все обязательные поля заполнены (не пустые после trim)
export function checkRequiredFields(fields) {
  return fields.every((value) => value.trim() !== "");
}
