import './Modal.scss';

const ModalCloseButton = ({ onClose }) => {
  return (
    <button className="modal__close" type="button" onClick={onClose}>
      Закрыть
    </button>
  );
};

export default ModalCloseButton;
