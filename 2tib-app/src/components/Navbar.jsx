import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone, FiSearch, FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const toggleLanguage = () => setLanguageOpen(!languageOpen);
  const chooseLanguage = (lang) => {
    setLanguage(lang);
    setLanguageOpen(false);
  };

  return (
    <header className="w-full font-sans text-gray-700 z-50">
      {/* Top Bar */}
      <div className="bg-gray-100 px-6 py-2 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <MdEmail className="text-green-600" />
            <span>info@Sedap.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiPhone className="text-green-600" />
            <span>92 666 888 0000</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white px-6 py-4 shadow flex justify-between items-center sticky top-0 z-50">
        {/* Logo */}
        <div className="text-3xl font-bold text-green-700">Sedap</div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 font-medium">
          <li><a href="/" className="hover:text-green-600">Home</a></li>
          <li><a href="#about" className="hover:text-green-600">About</a></li>
          <li><a href="#produk" className="hover:text-green-600">Top Produk</a></li>
          <li><a href="#testimoni" className="hover:text-green-600">Testimoni</a></li>
          <li><a href="/contact" className="hover:text-green-600">Contact</a></li>
        </ul>

        {/* Right Section */}
        <div className="relative flex items-center space-x-4">
          <a href="/login" className="flex items-center space-x-1 hover:text-green-600">
            <FaUser />
            <span className="text-sm">Login / Register</span>
          </a>

          <button className="text-lg hover:text-green-600">
            <FiSearch />
          </button>

          <button className="text-lg hover:text-green-600">
            <FiShoppingCart />
          </button>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 border-l pl-4 hover:text-green-600"
            >
              <span role="img" aria-label="flag">🌐</span>
              <span className="text-sm">{language}</span>
              <IoIosArrowDown />
            </button>
            {languageOpen && (
              <ul className="absolute right-0 mt-2 bg-white border shadow rounded w-32 text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => chooseLanguage("English")}>English</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => chooseLanguage("Indonesian")}>Indonesian</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => chooseLanguage("French")}>French</li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
