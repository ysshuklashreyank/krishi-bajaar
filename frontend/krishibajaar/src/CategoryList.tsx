import React from 'react';

interface CategoryListProps {
  setCategoryFilter: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ setCategoryFilter }) => {
  const categories = ['Grains', 'Vegetables', 'Milk'];

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
