import { FaBagShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
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
          <a href="/gallery" className="hover:text-pink-600 transition duration-300">
          <FaSearch />
          </a>
        </li>
        <li>
          <a href="/gallery2" className="hover:text-pink-600 transition duration-300">
          <FaBagShopping />
          </a>
        </li>
        <li>
          <a href="/About" className="hover:text-pink-600 transition duration-300">
            אודות
          </a>
        </li>
        <li>
          <a href="/" className="hover:text-pink-600 transition duration-300">
            בית
          </a>
        </li>
        <li>
          <a href="/Navbar" className="hover:text-pink-600 transition duration-300">
          <CiPhone />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>


    );
  };
  
  export default Header;
