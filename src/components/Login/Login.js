import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      console.log('Login successful:', storedUser);
      navigate('/dashboard');
    } else {
      console.log('Invalid email or password');
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