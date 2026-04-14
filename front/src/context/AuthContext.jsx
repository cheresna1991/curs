import React, { createContext, useState, useContext, useEffect } from 'react';
import { mockUser } from '../data/mockData';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedCart = localStorage.getItem('cart');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    if (email && password) {
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const register = (email, password, name) => {
    if (email && password) {
      const newUser = { ...mockUser, login: email, name };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setCart([]);
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
  };

  const addToCart = (ad) => {
    if (!cart.find(item => item.id === ad.id)) {
      const newCart = [...cart, ad];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  };

  const removeFromCart = (adId) => {
    const newCart = cart.filter(item => item.id !== adId);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const value = {
    user,
    cart,
    loading,
    login,
    register,
    logout,
    addToCart,
    removeFromCart
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};