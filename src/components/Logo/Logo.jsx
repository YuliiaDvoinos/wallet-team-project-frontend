import { Link } from 'react-router-dom';
import routes from '../../routes';
import { ReactComponent as WalletLogo } from '../Logo/wallet-logo.svg';
import './Logo.scss';

export default function Logo() {
  return (
    <>
      <Link to={routes.dashboard} className="link logo">
        <WalletLogo className="logo__icon" width="40" height="40" />
        <span className="logo__text">Wallet</span>
      </Link>
    </>
  );
}
