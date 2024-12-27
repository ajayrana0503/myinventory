import Dashboard from './components/Dashboard';
import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Registration/Register';


function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const handleLoginSuccess = () => {
    setCurrentPage('dashboard');
  };

  const handleRegisterClick = () => {
    setCurrentPage('register');
  };

  const handleRegisterSuccess = () => {
    setCurrentPage('login');
  };

  const handleLogout = () => {
    setCurrentPage('login');
  };

  return (
    <div>
      {currentPage === 'login' && (
        <>
        <h1 className='heading'>Inventory App</h1>
        <Login onLoginSuccess={handleLoginSuccess} onRegisterClick={handleRegisterClick} />
        </>
      )}
      {currentPage === 'register' && (
        <>
        <h1 className='heading'>Inventory App</h1>
        <Register onRegisterSuccess={handleRegisterSuccess} />
        </>
      )}
      {currentPage === 'dashboard' && (
        <Dashboard onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
