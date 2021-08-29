import { useSelector } from 'react-redux';
import { getUserBalance } from '../../redux/auth/auth-selectors';
import './Balance.scss';

function Balance() {
  const userBalance = useSelector(getUserBalance);

  return (
    <div className="balance__container">
      <p className="balance__title">Ваш баланс</p>
      <p className="balance__value">
        <span className="balance__value_currency">₴</span> {userBalance}
      </p>
    </div>
  );
}

export default Balance;
