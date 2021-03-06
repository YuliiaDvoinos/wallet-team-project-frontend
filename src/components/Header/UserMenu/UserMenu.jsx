import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsername } from '../../../redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';
import Icons from '../../Icons';
import './UserMenu.scss';

export default function UserMenu() {
  const username = useSelector(getUsername);

  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className="userMenu">
      <span className="userMenu__name">{username}</span>
      <button
        type="button"
        className="userMenu__button"
        aria-label="кнопка выхода"
        onClick={onLogout}
      >
        <Icons id="exit-icon" aria-label="векторная иконка двери" />
        <span className="userMenu__button-text">Выйти</span>
      </button>
    </div>
  );
}
