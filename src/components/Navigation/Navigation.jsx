import { NavLink } from 'react-router-dom';
import Icons from '../Icons';
import routes from '../../routes';
import './Navigation.scss';

export default function Navigation() {
  return (
    <div className="container">
      <ul className="nav list">
        <li className="nav__item">
          <NavLink
            to={routes.home}
            className="nav__link link"
            activeClassName="nav__link--active"
          >
            <span className="nav__icon">
              <Icons id="home" className="nav__icon--svg" />
            </span>
            <p className="nav__link--text">Главная</p>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={routes.diagram}
            className="nav__link link"
            activeClassName="nav__link--active"
          >
            <span className="nav__icon">
              <Icons id="diagram" className="nav__icon--svg" />
            </span>
            <p className="nav__link--text">Статистика</p>
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/currency"
            className="nav__link--mobile-btn"
            activeClassName="nav__link--active"
          >
            <span className="nav__icon">
              <Icons id="currency" className="nav__icon--svg" />
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
