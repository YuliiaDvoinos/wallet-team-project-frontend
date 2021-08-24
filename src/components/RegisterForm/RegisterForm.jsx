import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
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
    <div className="register">
      <h1 className="register__title">Register</h1>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>
          <span className="registerForm__title">Name</span>
          <input
            className="registerForm__input"
            required
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </label>
     
        <label>
          <span className="registerForm__title">Email</span>
          <input
            className="registerForm__input"
            required
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
       
        <label>
          <span className="registerForm__title">Password</span>
          <input
            className="registerForm__input"
            required
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <button className="registerForm__button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
