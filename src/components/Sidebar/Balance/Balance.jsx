import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserBalance } from '../../../redux/auth/auth-selectors';
import { getCurrentUser } from '../../../redux/auth/auth-operations';
import { getAddedTransactions } from '../../../redux/transactions/transactions-selectors';
import './Balance.scss';

export default function Balance() {
  const addedTransaction = useSelector(getAddedTransactions);
  const userBalance = useSelector(getUserBalance);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, addedTransaction]);

  return (
    <div className="balance">
      <p className="balance__title">Ваш баланс</p>
      <div className="balance__value">
        <span className="balance__currency">&#8372;</span> {userBalance}
      </div>
    </div>
  );
}
