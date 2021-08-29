import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { closeModalTransaction } from '../../redux/transactions/transactions-actions';
import AddTransaction from './AddTransaction';
import Modal from '../Modal';
import Icons from '../Icons';
import 'react-datetime/css/react-datetime.css';
import 'moment/locale/ru';
import './ModalAddTransaction.scss';

export default function ModalAddTransaction() {
  const dispatch = useDispatch();
  const closeTransaction = useCallback(() => {
    return dispatch(closeModalTransaction());
  }, [dispatch]);

  return (
    <Modal closeTransaction={closeTransaction}>
      <button
        type="button"
        className="close-modal__button"
        onClick={closeTransaction}
      >
        <Icons className="close-modal__icon" id="closeTransactionModal" />
      </button>
      <AddTransaction />
    </Modal>
  );
}
