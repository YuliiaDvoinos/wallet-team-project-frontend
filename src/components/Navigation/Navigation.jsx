import { NavLink } from 'react-router-dom';
import { SvgGenerator } from '../SvgGenerator/SvgGenerator';
import routes from '../../routes';
import './Navigation.scss';

export default function Navigation() {
  return (
    <ul className="nav-list list">
      <li className="nav-item">
        <NavLink
          to={routes.dashboard}
          className="nav-link"
          activeClassName="active-link link"
        >
          <span className="nav-icon">
            <SvgGenerator id="home" />
          </span>
          <p>Главная</p>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to={routes.statistics}
          className="nav-link"
          activeClassName="active-link"
        >
          <span className="nav-icon">
            <SvgGenerator id="diagram" />
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
            <SvgGenerator id="currency" />
          </span>
        </NavLink>
      </li>
    </ul>
  );
}
