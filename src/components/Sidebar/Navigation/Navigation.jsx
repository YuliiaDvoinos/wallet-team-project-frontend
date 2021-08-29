import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import Icons from '../../Icons';
import routes from '../../../routes';
import './Navigation.scss';

export default function Navigation() {
  return (
    <ul className="nav list">
      <li className="nav__item">
        <NavLink
          exact
          to={routes.home}
          className="nav__link link"
          activeClassName="nav__link--active"
        >
          <div className="nav__icon-wrapper">
            <Icons id="home-icon" className="nav__icon" />
          </div>
          <p className="nav__text">Главная</p>
        </NavLink>
      </li>

      <li className="nav__item">
        <NavLink
          to={routes.statistics}
          className="nav__link link"
          activeClassName="nav__link--active"
        >
          <div className="nav__icon-wrapper">
            <Icons id="diagram-icon" className="nav__icon" />
          </div>
          <p className="nav__text">Статистика</p>
        </NavLink>
      </li>

      <Media
        queries={{
          small: '(max-width: 767px)',
        }}
      >
        {matches => (
          <>
            {matches.small && (
              <li className="nav__item">
                <NavLink
                  to="/currency"
                  className="nav__link"
                  activeClassName="nav__link--active"
                >
                  <div className="nav__icon-wrapper">
                    <Icons id="currency-icon" className="nav__icon" />
                  </div>
                  <p className="nav__text visually-hidden">Валюта</p>
                </NavLink>
              </li>
            )}
          </>
        )}
      </Media>
    </ul>
  );
}
