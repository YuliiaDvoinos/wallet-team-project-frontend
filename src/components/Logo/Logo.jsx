import { ReactComponent as WalletLogo } from '../Logo/wallet-logo.svg';
import './Logo.scss';

export default function Logo() {
  return (
    <div className="logo">
      <WalletLogo className="logo__icon" width="40" height="40" />
      <span className="logo__text">Wallet</span>
    </div>
  );
}
