import UserMenu from './UserMenu';
import Logo from '../Logo';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo/>
        <UserMenu />
      </div>
    </header>
  );
}
