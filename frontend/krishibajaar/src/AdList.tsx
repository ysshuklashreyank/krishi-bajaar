import React from 'react';

interface Ad {
  id: number;
  title: string;
  price: string;
  category: string;
}

interface AdListProps {
  ads: Ad[];
}

const AdList: React.FC<AdListProps> = ({ ads }) => {
  return (
    <div className="ad-list">
      {ads.map(ad => (
        <div key={ad.id} className="ad-card">
          <h3>{ad.title}</h3>
          <p>{ad.price}</p>
          <small>{ad.category}</small>
        </div>
      ))}
    </div>
  );
}

export default AdList;
