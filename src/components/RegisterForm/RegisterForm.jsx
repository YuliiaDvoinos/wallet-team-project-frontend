import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Logo from '../Logo';
import './RegisterForm.scss';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = useCallback(({ currentTarget: { name, value } }) => {
    setUser(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      dispatch(register(user));
    },
    [dispatch, user],
  );

  return (
    <div className="registerForm">
      <h2 className="visually-hidden">Регистрация</h2>
      <Logo />
      <form className="registerForm__form" onSubmit={handleSubmit}>
        <label className="registerForm__label">
          <input
            className="registerForm__input"
            required
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="E-mail"
          />
        </label>

        <label className="registerForm__label">
          <input
            className="registerForm__input"
            required
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Пароль"
          />
        </label>

        <label className="registerForm__label">
          <input
            className="registerForm__input"
            required
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Подтвердите пароль"
          />
        </label>

        <label className="registerForm__label">
          <input
            className="registerForm__input"
            required
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
