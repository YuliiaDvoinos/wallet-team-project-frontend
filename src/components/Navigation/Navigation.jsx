import { NavLink } from 'react-router-dom';
import Icons from '../Icons';
import routes from '../../routes';
import './Navigation.scss';

export default function Navigation() {
  return (
    <div className="container">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            to={routes.home}
            className="nav-link"
            activeClassName="active-link"
          >
            <span className="nav-icon">
              <Icons id="home" className="nav-icon-svg" />
            </span>
            <p>Главная</p>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={routes.diagram}
            className="nav-link"
            activeClassName="active-link"
          >
            <span className="nav-icon">
              <Icons id="diagram" className="nav-icon-svg" />
            </span>
            <p>Статистика</p>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/currency"
            className="mobile-btn"
            activeClassName="active-link"
          >
            <span className="nav-icon">
              <Icons id="currency" className="nav-icon-svg" />
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
