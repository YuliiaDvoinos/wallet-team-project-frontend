import { NavLink } from 'react-router-dom';
import { SvgGenerator } from '../SvgGenerator/SvgGenerator';
import routes from '../../routes';
import './Navigation.scss';

export default function Navigation() {
  return (
    <>
      <ul>
        <li>
          <NavLink to={routes.home}>
            <span>
              <SvgGenerator id="home" />
            </span>
            <p>Главная</p>
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.diagram}>
            <span>
              <SvgGenerator id="diagram" />
            </span>
            <p>Статистика</p>
          </NavLink>
        </li>
        <li>
          <NavLink to={routes}>
            <span>
              <SvgGenerator id="currency" />
            </span>
          </NavLink>
        </li>
      </ul>
    </>
  );
}
