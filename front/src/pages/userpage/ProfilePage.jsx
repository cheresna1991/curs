import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Header from '../../components/head/Header';
import AdCard from '../../components/card/AdCard';
import { mockAds } from '../../data/mockData';
import './ProfilePage.css';

const ProfilePage = () => {
  const { user, cart, removeFromCart } = useAuth();
  
  const userAds = mockAds.filter(ad => ad.seller.name === user?.name);

  return (
    <div className="profile-page">
      <Header />
      <div className="container">
        <div className="profile-header">
          <div className="profile-info">
            <div className="profile-avatar">{user?.name[0]}</div>
            <div className="profile-details">
              <h1>{user?.name}</h1>
              <p className="profile-email">{user?.login}</p>
            </div>
          </div>
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-value">{user?.rating}</span>
              <span className="stat-label">Рейтинг</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{userAds.length}</span>
              <span className="stat-label">Объявлений</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{user?.reviewsCount}</span>
              <span className="stat-label">Отзывов</span>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2>Мои объявления</h2>
          {userAds.length > 0 ? (
            <div className="ads-grid">
              {userAds.map(ad => (
                <AdCard key={ad.id} ad={ad} />
              ))}
            </div>
          ) : (
            <p className="empty-message">У вас пока нет объявлений</p>
          )}
        </div>

        <div className="profile-section">
          <h2>Корзина</h2>
          {cart.length > 0 ? (
            <>
              <div className="cart-items">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} className="cart-item-image" />
                    <div className="cart-item-info">
                      <h3>{item.title}</h3>
                      <p className="cart-item-price">{item.price.toLocaleString()} ₽</p>
                      <p className="cart-item-seller">Продавец: {item.seller.name}</p>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Удалить
                    </button>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <div className="cart-total">
                  <span>Итого:</span>
                  <strong>
                    {cart.reduce((sum, item) => sum + item.price, 0).toLocaleString()} ₽
                  </strong>
                </div>
                <button className="checkout-btn">Оформить заказ</button>
              </div>
            </>
          ) : (
            <p className="empty-message">🛒 Корзина пуста</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;