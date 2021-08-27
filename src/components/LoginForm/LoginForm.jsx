import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import Logo from '../Logo';
import './LoginForm.scss';

export default function LoginForm() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleChange = useCallback(({ currentTarget: { name, value } }) => {
    setUser(prev => ({ ...prev, [name]: value }));
  }, []);

  const dispatch = useDispatch();
  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      dispatch(login(user));
    },
    [dispatch, user],
  );

  return (
    <div className="loginForm">
      <h2 className="visually-hidden">Авторизация</h2>
      <Logo />
      <form className="loginForm__form" onSubmit={handleSubmit}>
        <label className="loginForm__label">
          <input
            className="loginForm__input"
            required
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="E-mail"
          />
        </label>

        <label className="loginForm__label">
          <input
            className="loginForm__input"
            required
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Пароль"
          />
        </label>

        <button className="loginForm__button" type="submit">
          Вход
        </button>
        <button
          className="loginForm__button loginForm__button--secondary"
          type="button"
        >
          Регистрация
        </button>
      </form>
    </div>
  );
}
