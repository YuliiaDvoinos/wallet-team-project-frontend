import Icons from '../Icons/';
import './Logo.scss';

export default function Logo() {
  return (
    <div className="logo">
      <Icons id="logo-icon" className="logo__icon" />
      <span className="logo__text">Wallet</span>
    </div>
  );
}
