import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login/Login'
import Register from './components/Registration/Register'
import './App.css'
import AuthProvider, { AuthContext } from './components/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <h1 className='heading'>Inventory App</h1>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext)
  return auth ? children : <Navigate to="/login" />
}

export default App
