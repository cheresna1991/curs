import React, { useState } from 'react';
import Modal from '../mod/Modal';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './AdCard.css';

const AdCard = ({ ad }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, addToCart } = useAuth();
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) stars += '★';
      else if (i === fullStars && hasHalfStar) stars += '⯨';
      else stars += '☆';
    }
    return stars;
  };

  const handleAddToCart = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    addToCart(ad);
    setIsModalOpen(false);
    alert('Товар добавлен в корзину');
  };

  const handleContact = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    alert(`Уведомление отправлено продавцу ${ad.seller.name}`);
  };

  return (
    <>
      <div className="ad-card" onClick={() => setIsModalOpen(true)}>
        <div className="ad-image-wrapper">
          <img src={ad.image} alt={ad.title} className="ad-image" />
        </div>
        <div className="ad-content">
          <h3 className="ad-price">{formatPrice(ad.price)}</h3>
          <p className="ad-title">{ad.title}</p>
          <div className="ad-rating">
            <span className="stars">{renderStars(ad.rating)}</span>
            <span className="rating-value">{ad.rating.toFixed(1)}</span>
          </div>
          <p className="ad-address">{ad.address}</p>
          <p className="ad-category">{ad.category}</p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="modal-grid">
          <div className="modal-image-wrapper">
            <img src={ad.image} alt={ad.title} className="modal-image" />
          </div>
          <div className="modal-info">
            <h2 className="modal-title">{ad.title}</h2>
            <div className="modal-price">{formatPrice(ad.price)}</div>
            
            <div className="seller-info">
              <span className="seller-avatar">{ad.seller.avatar}</span>
              <div className="seller-details">
                <p className="seller-name">{ad.seller.name}</p>
                <p className="seller-rating">★ {ad.seller.rating.toFixed(1)}</p>
              </div>
            </div>

            <div className="modal-description">
              <h4>Описание</h4>
              <p>{ad.description}</p>
            </div>
            
            <div className="modal-meta">
              <p><span className="meta-label">📍</span> {ad.address}</p>
              <p><span className="meta-label">📁</span> {ad.category}</p>
            </div>

            <div className="modal-actions">
              <button className="btn-primary" onClick={handleAddToCart}>
                🛒 В корзину
              </button>
              <button className="btn-secondary" onClick={handleContact}>
                💬 Написать
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AdCard;