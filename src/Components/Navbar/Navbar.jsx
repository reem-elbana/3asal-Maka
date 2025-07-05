import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-3 px-4">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between relative">
        
        {/* Logo + Menu icon (mobile) */}
        <div className="flex items-center justify-between w-full md:justify-end md:w-auto md:order-2">
          {/* Logo on the right */}
          <img src={logo} alt="logo" className="w-14 sm:w-16" />
          
          {/* Menu button on the left (mobile only) */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Links (Desktop) */}
        <ul className="hidden md:flex justify-center gap-10 font-semibold text-black md:order-1 w-full text-center">
          <li><a href="#" className="hover:text-yellow-600">الرئيسية</a></li>
          <li><a href="#AboutUs" className="hover:text-yellow-600">من نحن</a></li>
          <li><a href="#Products" className="hover:text-yellow-600">منتاجتنا</a></li>
          <li><a href="#ContactUs" className="hover:text-yellow-600">تواصل معنا</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 py-4" : "max-h-0"
        }`}
      >
        <div className="w-full pr-6 text-right text-black font-semibold flex flex-col gap-3">
          <a href="#" className="hover:text-yellow-600" onClick={() => setIsOpen(false)}>الرئيسية</a>
          <a href="#AboutUs" className="hover:text-yellow-600" onClick={() => setIsOpen(false)}>من نحن</a>
          <a href="#Products" className="hover:text-yellow-600" onClick={() => setIsOpen(false)}>منتاجتنا</a>
          <a href="#ContactUs" className="hover:text-yellow-600" onClick={() => setIsOpen(false)}>تواصل معنا</a>
        </div>
      </div>
    </nav>
  );
}
