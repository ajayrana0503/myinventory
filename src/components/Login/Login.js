import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice';
import classes from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      dispatch(login('dummyAuthToken')); // Use a dummy token for simplicity
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className={classes.formContainer}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Email</label>
          <input
            type="email"
            className={classes.formInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Password</label>
          <input
            type="password"
            className={classes.formInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={classes.submitButton}>Login</button>
      </form>
      <Link to="/register" className={classes.registerLink}>Not registered? Register here</Link>
    </div>
  );
};

export default Login;