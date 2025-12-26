import { useState } from "react";
import Modal from "../Modal/Modal";
import Card from "../Card/Card";

const ModalPage = () => {
  const [activeModal, setActiveModal] = useState(null);

  const toggleModal = (modalNumber) => {
    if (activeModal === modalNumber) {
      setActiveModal(null);
    } else {
      setActiveModal(modalNumber);
    }
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  let footerCard = null;

  switch (activeModal) {
    case 1:
      footerCard = "Открыто окно №1";
      break;
    case 2:
      footerCard = "Открыто окно №2";
      break;
    case 3:
      footerCard = "Открыто окно №3";
      break;

    default:
      footerCard = "Сейчас открытых модалок нет";
  }

  return (
    <div>
      <Card title="Управление модалками" footer={footerCard}>
        <div className="buttonsPanel">
          <button onClick={() => toggleModal(1)} className="openButton">
            Окно 1
          </button>
          <button onClick={() => toggleModal(2)} className="openButton">
            Окно 2
          </button>
          <button onClick={() => toggleModal(3)} className="openButton">
            Окно 3
          </button>
        </div>
      </Card>
      {activeModal === 1 && (
        <Modal onClose={closeModal}>
          <Card
            title="Окно №1 — Информация"
            footer="Закрытие: × или клик по фону"
          >
            <p>
              Это демонстрация композиции через children. Данный блок является
              содержимым модального окна №1 и передаётся внутрь компонента Modal
              как дочерний JSX-контент.
            </p>
          </Card>
        </Modal>
      )}
      {activeModal === 2 && (
        <Modal onClose={closeModal}>
          <Card
            title="Окно №2 — Подтверждение"
            footer="Закрытие: × или клик по фону"
          >
            <p>
              Вы открыли модальное окно №2. Его содержимое отличается от окна
              №1, но каркас (оверлей, окно, кнопка закрытия) остаётся тем же —
              за счёт переиспользуемого компонента Modal.
            </p>
          </Card>
        </Modal>
      )}
      {activeModal === 3 && (
        <Modal onClose={closeModal}>
          <Card
            title="Окно №3 — Уведомление"
            footer="Закрытие: × или клик по фону"
          >
            <p>
              Это модальное окно №3. Оно показывает третий вариант содержимого,
              переданного через children. Каркас модалки остаётся тем же
              (оверлей, окно, кнопка закрытия), меняется только внутренний
              контент.
            </p>
          </Card>
        </Modal>
      )}
    </div>
  );
};

export default ModalPage;
