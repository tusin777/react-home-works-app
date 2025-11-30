export function Email() {
  const email1 = "user@example.com"; // корректный
  const email2 = "wrong-email"; // некорректный

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const check1 = emailRegex.test(email1);
  const check2 = emailRegex.test(email2);

  return (
    <>
      <p>Первый email: {check1 ? "валиден" : "НЕ валиден"}</p>
      <p>Второй email: {check2 ? "валиден" : "НЕ валиден"}</p>
    </>
  );
}
