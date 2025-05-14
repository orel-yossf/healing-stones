import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "../interfaces/product";
import products from "../../public/products/prod.json"; 
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import toast from "react-hot-toast";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  useEffect(() => {
    // כאן טוענים מוצר לפי ID
    const foundProduct = products.find((p) => p.id === id);
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) {
    return <div>המוצר לא נמצא</div>;
  }

  return (
    <>
      <Header />
      <br />
      <div className="min-h-screen bg-gradient-to-b from-white via-purple-100 to-teal-100 p-4 sm:p-6">
        <div className="max-w-2xl mx-auto bg-white bg-opacity-70 backdrop-blur-md shadow-xl rounded-2xl p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-xl mb-6 shadow-md border-4 border-purple-200"
          />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-800 mb-3 text-center">{product.name}</h1>
          <p className="text-gray-800 mb-3 text-base sm:text-lg text-center">{product.description}</p>
{product.longDescription && (
  <div className="mb-6">
    <h2 className="text-lg font-semibold text-purple-700 mb-2">מידע נוסף על המוצר:</h2>
    <p className="text-gray-800 leading-relaxed text-sm sm:text-base bg-white bg-opacity-40 p-4 rounded-xl shadow-2xl">
      {product.longDescription}
    </p>
  </div>
)}

          <p className="text-xl font-semibold text-green-600 mb-2 text-center">₪{product.price}</p>
  
          {product.inStock ? (
            <div className="flex justify-center">
              <button
                className="bg-gradient-to-r from-pink-400 via-purple-400 to-teal-400 hover:from-purple-500 hover:to-teal-500 transition text-white font-bold py-2 px-6 rounded-full shadow-md"
                onClick={() => {addToCart({ ...product, quantity: 1 });
                toast.success("נוסף לעגלה!");}}
              >
                הוסף לעגלה
              </button>
            </div>
          ) : (
            <p className="text-red-500 font-bold text-center">אזל מהמלאי</p>
          )}
        </div>
      </div>
    </>
  );
  
  
};

export default ProductPage;
