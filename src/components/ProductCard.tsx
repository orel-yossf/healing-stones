import React, { useState } from 'react';
import data from '../../public/products/prod.json';
import ProductCard from './StoneDetails';

const StoneCard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // אם אין חיפוש – הצג את כל הנתונים
  const filteredData =
    searchTerm.trim() === '' ? data  : data.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  // בדיקה אם אין תוצאות אבל המשתמש כן חיפש משהו
  const noResults = searchTerm.trim() !== '' && filteredData.length === 0;

  return (
    <>
      <div className="p-4">
        <input
          type="text"
          placeholder="חפש לפי שם אבן..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {noResults && (
        <div className="text-center text-red-500 text-lg mt-4">
          לא מצאנו את מה שחיפשת 🙁 מציגים את כל האבנים:
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {filteredData.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default StoneCard;
