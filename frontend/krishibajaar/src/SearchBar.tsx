import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <input 
      type="text" 
      placeholder="Search for ads..."
      className="search-bar"
    />
  );
}

export default SearchBar;
