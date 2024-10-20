import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar.tsx';
import CategoryList from './CategoryList.tsx';
import AdList from './AdList.tsx';

const App: React.FC = () => {
  const [ads, setAds] = useState<Array<{ id: number; title: string; price: string; category: string }>>([
    { id: 1, title: 'Used Car', price: '₹500,000', category: 'Vehicles' },
    { id: 2, title: 'Laptop', price: '₹40,000', category: 'Electronics' },
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
