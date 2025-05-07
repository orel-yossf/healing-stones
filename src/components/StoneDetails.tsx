import React from 'react';

interface Product {
  id?: string;
  name: string;
  price: number;
  description: string;
  image: string;
  productCode?: string;
  inStock: boolean;
}

const ProductCard: React.FC<Product> = ({ name,  price,  description,  image,  productCode,  inStock}) => {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition-all">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-teal-700 font-semibold mb-1">מחיר: ₪{price}</p>
      <p className="text-sm text-gray-500 mb-4">קוד מוצר: {productCode}</p>

      {inStock ? (
        <button className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 transition">
          הוספה לעגלה
        </button>
      ) : (
        <div className="text-red-500 font-semibold">אזל מהמלאי</div>
      )}
    </div>
  );
};

export default ProductCard;
