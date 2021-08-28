import { createPortal } from 'react-dom';
import { useCallback, useEffect } from 'react';
import './Modal.scss';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ children, closeModal }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = useCallback(
    e => {
      if (e.currentTarget === e.target) {
        closeModal();
      }
    },
    [closeModal],
  );

  return createPortal(
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">{children}</div>
    </div>,
    modalRoot,
  );
}
