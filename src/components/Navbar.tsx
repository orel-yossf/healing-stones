import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Header from "./Header";
const Navbar = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:oral.yosf.h@gmail.com?subject=פנייה%20מאתר%20שירת%20האבן&body=שם:%20${formData.name}%0Aאימייל:%20${formData.email}%0Aהודעה:%20${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (<>
    <Header/>
    <br />
    <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">צור קשר</h2>
      <h3 className="text-1xl font-bold text-center text-teal-300 mb-6">      רוצים להתייעץ, להתעניין או להזמין אירוע?
אל תהססו, אני נהנית לעזור.</h3>

      {/* קישור לוואטסאפ */}
      <div className="flex flex-col items-center space-y-4 mb-6">
        <a
          href="https://wa.me/972555574680"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
        >
          <FaWhatsapp size={20} />
          <span>שלח הודעה בוואטסאפ</span>
        </a>

        <a
          href="mailto:shirat-haevn@gmail.com"
          className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          <FaEnvelope size={20} />
          <span>שלח מייל</span>
        </a>
      </div>

      {/* טופס יצירת קשר */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">שם מלא</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">אימייל</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">הודעה</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none h-24"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition"
        >
          שלח הודעה
        </button>
      </form>
    </div>
    </>);
};

export default Navbar;
