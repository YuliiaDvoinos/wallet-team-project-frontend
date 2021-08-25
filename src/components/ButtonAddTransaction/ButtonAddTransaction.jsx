import { useDispatch } from 'react-redux';
import { isModalAddTransactionOpen } from '../../redux/transactions/transactions-actions';
import Icons from '../Icons';
import './ButtonAddTransaction.scss';

export default function ButtonAddTransaction() {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="button add-transaction"
      onClick={e => dispatch(isModalAddTransactionOpen())}
    >
      <Icons className="add-transaction-button" id="addTransaction" />
    </button>
  );
}
