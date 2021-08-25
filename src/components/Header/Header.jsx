import UserMenu from './UserMenu';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';
import routes from '../../routes';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <NavLink exact to={routes.dashboard} className="logo">
          <Logo />
        </NavLink>

        <UserMenu />
      </div>
    </header>
  );
}
