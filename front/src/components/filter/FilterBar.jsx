import React from 'react';
import { categories } from '../../data/mockData';
import './FilterBar.css';

const FilterBar = ({ search, setSearch, category, setCategory, minRating, setMinRating }) => {
  return (
    <div className="filter-bar">
      <div className="search-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Поиск по объявлениям..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="search-icon">🔍</span>
      </div>

      <select 
        className="filter-select"
        value={category} 
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">Все категории</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.name}>{cat.name}</option>
        ))}
      </select>

      <select 
        className="filter-select"
        value={minRating} 
        onChange={(e) => setMinRating(e.target.value)}
      >
        <option value="0">Любой рейтинг</option>
        <option value="3">3+ ★</option>
        <option value="4">4+ ★</option>
        <option value="5">5 ★</option>
      </select>
    </div>
  );
};

export default FilterBar;