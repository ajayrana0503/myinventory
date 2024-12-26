import React, { useState } from 'react';
import classes from './Register.module.css';

const Registration = ({ onRegisterSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const userData = {
      name,
      email,
      password
    };
    localStorage.setItem('user', JSON.stringify(userData));
    console.log(userData);
    onRegisterSuccess();
  };

  return (
    <div className={classes.formContainer}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Name</label>
          <input
            type="text"
            className={classes.formInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <div className={classes.formGroup}>
          <label className={classes.formLabel}>Confirm Password</label>
          <input
            type="password"
            className={classes.formInput}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={classes.submitButton}>Register</button>
      </form>
    </div>
  );
};

export default Registration;