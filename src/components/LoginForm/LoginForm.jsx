import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
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
    <div className="login">
      <h1 className="login__title">Login</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>
          <span className="loginForm__title">Email</span>
          <input
            className="loginForm__input"
            required
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>

        <label>
          <span className="loginForm__title">Password</span>
          <input
            className="loginForm__input"
            required
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <button className="loginForm__button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}