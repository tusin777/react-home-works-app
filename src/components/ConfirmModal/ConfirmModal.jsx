import Modal from "../Modal/Modal";
import Card from "../Card/Card";
import "./ConfirmModal.css";

const ConfirmModal = ({ title, children, confirmText, onClose, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  const footer = (
    <div className="confirmModal__actions">
      <button type="button" className="confirmModal__btn" onClick={onClose}>
        Отмена
      </button>

      <button
        type="button"
        className="confirmModal__btn confirmModal__btn--primary"
        onClick={handleConfirm}
      >
        {confirmText}
      </button>
    </div>
  );

  return (
    <Modal onClose={onClose}>
      <Card title={title} footer={footer}>
        {children}
      </Card>
    </Modal>
  );
};

export default ConfirmModal;
