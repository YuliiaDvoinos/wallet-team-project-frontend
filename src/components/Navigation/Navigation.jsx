import { NavLink } from 'react-router-dom';
import Icons from '../Icons';
import Media from 'react-media';
import routes from '../../routes';
import './Navigation.scss';

export default function Navigation() {
  return (
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
          to={routes.statistics}
          className="nav__link link"
          activeClassName="nav__link--active"
        >
          <span className="nav__icon">
            <Icons id="diagram" className="nav__icon--svg" />
          </span>
          <p className="nav__link--text">Статистика</p>
        </NavLink>
      </li>

      <Media
        queries={{
          small: '(min-width: 320px) and (max-width: 767px)',
        }}
      >
        {m => (
          <>
            {m.small && (
              <li className="nav__item">
                <NavLink
                  to="/currency"
                  className="nav__link"
                  activeClassName="nav__link--active"
                >
                  <span className="nav__icon">
                    <Icons id="currency" className="nav__icon--svg" />
                  </span>
                </NavLink>
              </li>
            )}
          </>
        )}
      </Media>
    </ul>
  );
}
