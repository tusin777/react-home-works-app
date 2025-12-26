import { useState } from "react";
import Modal from "../Modal/Modal";

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

  return (
    <div>
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
      {activeModal === 1 && (
        <Modal onClose={closeModal}>
          <h2>Окно №1 — Информация</h2>
          <p>
            Это демонстрация композиции через children. Данный блок является
            содержимым модального окна №1 и передаётся внутрь компонента Modal
            как дочерний JSX-контент.
          </p>
        </Modal>
      )}
      {activeModal === 2 && (
        <Modal onClose={closeModal}>
          <h2>Окно №2 — Подтверждение</h2>
          <p>
            Вы открыли модальное окно №2. Его содержимое отличается от окна №1,
            но каркас (оверлей, окно, кнопка закрытия) остаётся тем же — за счёт
            переиспользуемого компонента Modal.
          </p>
        </Modal>
      )}
      {activeModal === 3 && (
        <Modal onClose={closeModal}>
          <h2>Окно №3 — Уведомление</h2>
          <p>
            Это модальное окно №3. Оно показывает третий вариант содержимого,
            переданного через children. Каркас модалки остаётся тем же (оверлей,
            окно, кнопка закрытия), меняется только внутренний контент.
          </p>
        </Modal>
      )}
    </div>
  );
};

export default ModalPage;
