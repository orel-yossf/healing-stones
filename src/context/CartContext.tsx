import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Product } from "../interfaces/product";

// טיפוס חדש שמרחיב את Product עם quantity
export interface CartItem extends Product {
  quantity: number;
}

// מה הקונטקסט יספק
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

// יצירת הקונטקסט עצמו
const CartContext = createContext<CartContextType | undefined>(undefined);

// ספק הקונטקסט – עוטף את כל האפליקציה
export const CartProvider = ({ children }: { children: ReactNode }) => {
  // ✅ טעינת העגלה מ-localStorage כבר בשלב האתחול
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ✅ שמור ל-localStorage בכל שינוי בעגלה
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: CartItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// הוק לשימוש נוח בקונטקסט
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
