import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Header from '../../components/head/Header';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/');
    } else {
      alert('Ошибка входа');
    }
  };

  return (
    <div className="login-page">
      <Header />
      <div className="auth-container">
        <div className="auth-card">
          <h2>Вход в аккаунт</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-btn">Войти</button>
          </form>
          <p className="auth-link">
            Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
          </p>
          <div className="demo-hint">
            <p>👤 Демо-режим</p>
            <p>Введите любой email и пароль</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;