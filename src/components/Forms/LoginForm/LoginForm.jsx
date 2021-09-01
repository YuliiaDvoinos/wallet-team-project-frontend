import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/auth/auth-operations';
import { Link } from 'react-router-dom';
import Icons from '../../Icons';
import routes from '../../../routes';
import Logo from '../../Logo';
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
          <Icons id="email-icon" />
          <input
            className="loginForm__input"
            required
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="E-mail"
            autoComplete="true"
          />
        </label>

        <label className="loginForm__label">
          <Icons id="pass-icon" />
          <input
            className="loginForm__input"
            required
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Пароль"
            autoComplete="true"
          />
        </label>

        <button className="loginForm__button" type="submit">
          Вход
        </button>
        <Link to={routes.register} className="link">
          <button
            className="loginForm__button loginForm__button--secondary"
            type="button"
          >
            Регистрация
          </button>
        </Link>
      </form>
    </div>
  );
}
