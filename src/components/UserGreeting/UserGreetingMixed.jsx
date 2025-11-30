import "./UserGreeting.css";

/* -------------------------------
   ИМЕНОВАННЫЙ ЭКСПОРТ
-------------------------------- */
export function UserGreeting3() {
  return (
    <h2 className="user-greeting">
      Версия №3 — именованный экспорт (named export)
    </h2>
  );
}

/* -------------------------------
   ЭКСПОРТ ПО УМОЛЧАНИЮ (default)
-------------------------------- */
function UserGreeting3Default() {
  return (
    <h2 className="user-greeting">
      Версия №3 — default export (экспорт по умолчанию)
    </h2>
  );
}

export default UserGreeting3Default;
