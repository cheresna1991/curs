import React, { useState, useMemo } from 'react';
import Header from '../../components/head/Header';
import FilterBar from '../../components/filter/FilterBar';
import AdCard from '../../components/card/AdCard';
import { mockAds } from '../../data/mockData';
import './HomePage.css';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [minRating, setMinRating] = useState('0');

  const filteredAds = useMemo(() => {
    return mockAds.filter(ad => {
      if (search && !ad.title.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
      if (category !== 'all' && ad.category !== category) {
        return false;
      }
      if (ad.rating < parseFloat(minRating)) {
        return false;
      }
      return true;
    });
  }, [search, category, minRating]);

  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <div className="container">
          <FilterBar
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            minRating={minRating}
            setMinRating={setMinRating}
          />
          
          <div className="ads-header">
            <h1>Объявления</h1>
            <span className="ads-count">{filteredAds.length} объявлений</span>
          </div>

          {filteredAds.length > 0 ? (
            <div className="ads-grid">
              {filteredAds.map(ad => (
                <AdCard key={ad.id} ad={ad} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>😕 По вашему запросу ничего не найдено</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;