import React from 'react';

interface CategoryListProps {
  setCategoryFilter: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ setCategoryFilter }) => {
  const categories = ['Vehicles', 'Electronics', 'Furniture', 'Real Estate'];

  return (
    <div className="category-list">
      {categories.map(category => (
        <button key={category} onClick={() => setCategoryFilter(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;
