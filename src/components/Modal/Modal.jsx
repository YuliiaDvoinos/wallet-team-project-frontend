import { createPortal } from 'react-dom';
import { useCallback, useEffect } from 'react';
import './Modal.scss';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ children, closeTransaction }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeTransaction();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeTransaction]);

  const handleBackdropClick = useCallback(
    e => {
      if (e.currentTarget === e.target) {
        closeTransaction();
      }
    },
    [closeTransaction],
  );

  return createPortal(
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">{children}</div>
    </div>,
    modalRoot,
  );
}
