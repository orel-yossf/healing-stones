import { CiPhone } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
const Header = () => {
    return (
    //   <header className="bg-blue-600 text-white p-4">
    //     <h1 className="text-2xl font-bold">אבני החושן - חנות האנרגיה</h1>
    //   </header>
<header className="bg-pink-200 text-gray-700 py-4 shadow-md">
  <div className="container mx-auto flex justify-between items-center px-6">
    <h1 className="text-3xl font-light tracking-wide text-pink-700">
      שירת האבן
    </h1>
    <nav>
      <ul className="flex space-x-6 text-lg">
        <li>
          <Link to="/Cart" className="hover:text-pink-600 transition duration-300">
          <GiShoppingCart />
          </Link>
        </li>
        <li>
          <Link to="/About" className="hover:text-pink-600 transition duration-300">
            אודות
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-pink-600 transition duration-300">
          <FaHome />
          </Link>
        </li>
        <li>
          <Link to="/Navbar" className="hover:text-pink-600 transition duration-300">
          <CiPhone />
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</header>


    );
  };
  
  export default Header;
