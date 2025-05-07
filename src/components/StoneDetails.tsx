import React from 'react';
import { Product } from '../interfaces/product';
import { useCart } from '../context/CartContext';

const ProductCard: React.FC<Product> = ({ id, name, price, description, image, productCode, inStock }: Product) => {
  const { addToCart } = useCart(); // ✅ נכון: הקריאה ל-hook בתוך הקומפוננטה

  return (
    <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition-all">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-teal-700 font-semibold mb-1">מחיר: ₪{price}</p>
      <p className="text-sm text-gray-500 mb-4">קוד מוצר: {productCode}</p>

      {inStock ? (
        <button
          className="w-full bg-gradient-to-r from-teal-400 to-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:from-teal-500 hover:to-teal-700 transition-all shadow-md"
          onClick={() =>
            addToCart({
              id,
              name,
              price,
              description,
              image,
              productCode,
              inStock, quantity: 1,
            })
          }
          
        >
          הוספה לעגלה 🛒
        </button>
      ) : (
        <div className="text-red-500 font-semibold text-center">אזל מהמלאי</div>
      )}
    </div>
  );
};

export default ProductCard;
