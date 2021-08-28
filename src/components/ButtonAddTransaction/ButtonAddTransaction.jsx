import { useDispatch } from 'react-redux';
import { openModalTransaction } from '../../redux/transactions/transactions-actions';
import Icons from '../Icons';
import './ButtonAddTransaction.scss';

export default function ButtonAddTransaction() {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="add-transaction__button"
      onClick={() => dispatch(openModalTransaction())}
    >
      <Icons className="add-transaction__icon" id="addTransaction" />
    </button>
  );
}
