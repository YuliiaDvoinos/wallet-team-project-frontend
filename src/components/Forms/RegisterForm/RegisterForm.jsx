import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/auth-operations';
import { Link } from 'react-router-dom';
import Icons from '../../Icons';
import routes from '../../../routes';
import Logo from '../../Logo';
import './RegisterForm.scss';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    comparedPassword: '',
  });

  const handleChange = useCallback(({ currentTarget: { name, value } }) => {
    const normalizedValue = value.toLowerCase();
    setUser(prev => ({ ...prev, [name]: normalizedValue }));
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      user.password === user.comparedPassword
        ? dispatch(register(user))
        : alert('Пароли не совпадают!');
    },
    [dispatch, user],
  );

  return (
    <div className="registerForm">
      <h2 className="visually-hidden">Регистрация</h2>

      <Logo />
      <form className="registerForm__form" onSubmit={handleSubmit}>
        <label className="registerForm__label">
          <Icons id="email-icon" />
          <input
            required
            className="registerForm__input"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="E-mail"
            autoComplete="username"
            pattern="/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,"
          />
        </label>

        <label className="registerForm__label">
          <Icons id="pass-icon" />
          <input
            required
            className="registerForm__input"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Пароль"
            autoComplete="new-password"
            pattern="/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/"
          />
        </label>

        <label className="registerForm__label">
          <Icons id="pass-icon" />
          <input
            required
            className="registerForm__input"
            type="password"
            name="comparedPassword"
            value={user.comparedPassword}
            onChange={handleChange}
            placeholder="Подтвердите пароль"
            autoComplete="false"
          />
        </label>

        <label className="registerForm__label">
          <Icons id="name-icon" />
          <input
            required
            className="registerForm__input"
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Ваше имя"
          />
        </label>

        <button className="registerForm__button" type="submit">
          Регистрация
        </button>
        <Link to={routes.login} className="link">
          <button
            className="registerForm__button registerForm__button--secondary"
            type="button"
          >
            Вход
          </button>
        </Link>
      </form>
    </div>
  );
}
