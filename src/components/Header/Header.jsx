import { Link } from 'react-router-dom';
import routes from '../../routes';
import UserMenu from './UserMenu';
import Logo from '../Logo';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to={routes.dashboard} className="link">
          <Logo />
        </Link>

        <UserMenu />
      </div>
    </header>
  );
}
