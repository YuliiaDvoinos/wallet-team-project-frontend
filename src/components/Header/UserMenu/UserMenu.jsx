import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsername } from '../../../redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';
import './UserMenu.scss';

export default function UserMenu() {
  const username = useSelector(getUsername);

  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className="userMenu">
      <span className="userMenu__item userMenu__username">{username}</span>

      <button
        type="button"
        className="userMenu__item userMenu__button"
        onClick={onLogout}
      >
        Выйти
      </button>
    </div>
  );
}
