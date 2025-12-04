export default function AdminPanel({ isAdmin }) {
  if (!isAdmin) {
    return <h2>Доступ запрещён. Недостаточно прав.</h2>;
  }

  return (
    <div>
      <h2>Панель администратора</h2>
      <ul>
        <li>Список заказов</li>
        <li>Управление товарами</li>
        <li>Статистика продаж</li>
      </ul>
    </div>
  );
}
