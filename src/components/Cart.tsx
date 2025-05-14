
import { useCart } from "../context/CartContext";
import Header from "./Header";
import { FaWhatsapp } from "react-icons/fa6";
const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const buildWhatsAppMessage = () => {
    const lines = cart.map(item => `• ${item.name} - כמות: ${item.quantity}`);
    lines.push(`\nסה"כ לתשלום: ₪${totalPrice}`);
    const message = `שלום, אני מעוניין להזמין את המוצרים הבאים:\n\n${lines.join('\n')}`;
    return encodeURIComponent(message);
  };
  

  return (
    <>
    <Header/>
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">עגלת הקניות שלך</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">העגלה ריקה כרגע.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border p-4 rounded-lg shadow bg-white/70 backdrop-blur-sm hover:backdrop-blur-md transition duration-300"
              >
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-blue-400">כמות: {item.quantity}</p>
                  <p className="text-sm text-blue-400">מחיר ליחידה: ₪{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 font-bold hover:underline"
                >
                  הסר  
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <p className="text-lg font-semibold mb-2 backdrop-blur-sm">סה"כ לתשלום: ₪{totalPrice}</p>

          </div>
          <a
  href={`https://wa.me/972555574680?text=${buildWhatsAppMessage()}`}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
>
  <FaWhatsapp size={20} />
  <span>שלח הודעה בוואטסאפ</span>
</a>

        </>
      )}
    </div>
  </>);
};

export default Cart;
