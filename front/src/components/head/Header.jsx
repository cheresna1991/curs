import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Header.css';

const Header = () => {
  const { user, logout, cart } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-container">
        <img src="../public/icon.png"  className="image" />
        <Link to="/" className="logo">
          <span className="logo-text">SUPER SHOP</span>
          
        </Link>

        <div className="header-actions">
          <Link to="/" className="nav-link">Объявления</Link>

          {user ? (
            <div className="user-menu">
              <Link to="/profile" className="user-name">
                <span className="user-avatar">{user.name[0]}</span>
                {user.name}
              </Link>
              <Link to="/profile" className="cart-link">
                🛒 Корзина
                {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
              </Link>
              <button onClick={handleLogout} className="logout-btn">Выйти</button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="btn-login">Войти</Link>
              <Link to="/register" className="btn-register">Регистрация</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;