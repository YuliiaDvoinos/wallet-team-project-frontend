import { useSelector } from 'react-redux';
import { getUserBalance } from '../../../redux/auth/auth-selectors';
import './Balance.scss';

export default function Balance() {
  const userBalance = useSelector(getUserBalance);

  return (
    <div className="balance">
      <p className="balance__title">Ваш баланс</p>
      <div className="balance__value">
        <span className="balance__currency">&#8372;</span> {userBalance}
      </div>
    </div>
  );
}
