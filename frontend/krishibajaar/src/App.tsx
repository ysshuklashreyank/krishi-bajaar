import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar.tsx';
import CategoryList from './CategoryList.tsx';
import AdList from './AdList.tsx';

const App: React.FC = () => {
// eslint-disable-next-line
  const [ads, setAds] = useState<Array<{ id: number; title: string; price: string; category: string }>>([
    { id: 1, title: 'Wheat', price: '₹500', category: 'Grains' },
    { id: 2, title: 'Bhindi', price: '₹40', category: 'Vegetables' },
    // Add more ads here
  ]);

  const [categoryFilter, setCategoryFilter] = useState<string>('');

  const filteredAds = ads.filter(ad => ad.category.includes(categoryFilter));

  return (
    <div >
      <SearchBar />
      <CategoryList setCategoryFilter={setCategoryFilter} />
      <AdList ads={filteredAds} />
    </div>
  );
}

export default App;
