import { useState } from "react";

import Button from "../Button/Button";
import Card from "../Card/Card";
import Alert from "../Alert/Alert";
import "./App.css";

function App() {
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(true);
  const [isDangerAlertOpen, setIsDangerAlertOpen] = useState(true);

  const closeSuccessAlert = () => setIsSuccessAlertOpen(false);
  const openSuccessAlert = () => setIsSuccessAlertOpen(true);

  const closeDangerAlert = () => setIsDangerAlertOpen(false);
  const openDangerAlert = () => setIsDangerAlertOpen(true);

  return (
    <div className="app-container">
      <h1>React Homework Template</h1>
      <p>Здесь будет домашнее задание к соответствующему уроку.</p>

      <Button variant="primary">кнопка primary</Button>
      <Button variant="secondary">кнопка secondary</Button>
      <Button>кнопка по умолчанию</Button>

      <Card title="Подсказка по оформлению заказа" size="sm" tone="info">
        Проверьте адрес доставки и контакты получателя. После подтверждения
        заказ попадёт в обработку и статус изменится автоматически.
      </Card>

      <Card size="md" tone="neutral">
        Это нейтральный блок для произвольной информации: например, краткая
        сводка по корзине или пояснение к текущему экрану.
      </Card>

      <Card title="Ошибка оплаты" size="lg" tone="danger">
        Платёж не прошёл. Проверьте данные карты или выберите другой способ
        оплаты и повторите попытку.
      </Card>

      <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
        <button type="button" onClick={openSuccessAlert}>
          Показать success alert
        </button>
        <button type="button" onClick={openDangerAlert}>
          Показать danger alert
        </button>
      </div>

      <Alert
        tone="success"
        title="Заказ оформлен"
        isOpen={isSuccessAlertOpen}
        onClose={closeSuccessAlert}
      >
        Мы получили ваш заказ и передали его в обработку. Статус обновится
        автоматически после подтверждения оплаты.
      </Alert>

      <Alert
        tone="danger"
        isOpen={isDangerAlertOpen}
        onClose={closeDangerAlert}
      >
        Не удалось выполнить действие. Проверьте подключение к интернету и
        повторите попытку.
      </Alert>
    </div>
  );
}

export default App;
