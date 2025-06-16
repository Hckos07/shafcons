import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // optional: install `lucide-react` for icons
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > window.innerHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${showNav
          ? "bg-blue-950 bg-opacity-80 backdrop-blur-md"
          : "opacity-0 pointer-events-none"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-white relative">
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Left Navigation */}
        <ul className="hidden md:flex space-x-4 text-base font-medium">
          <li><a href="#home" className="hover:text-blue-400 text-xl">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 text-xl">About</a></li>
          <li><a href="#services" className="hover:text-blue-400 text-xl">Services</a></li>
          <li><a href="#products" className="hover:text-blue-400 text-xl">Products</a></li>
        </ul>

        {/* Center Logo */}
        <div className="text-xl font-bold tracking-wide">
          <img
            src={logo}
            alt="Logo"
            className="h-10 md:h-16 lg:h-20 transition-all duration-300"
          />
        </div>

        {/* Right Navigation */}
        <ul className="hidden md:flex space-x-4 text-base font-medium">
          <li><a href="#clients" className="hover:text-blue-400 text-xl">Clients</a></li>
          <li><a href="#faq" className="hover:text-blue-400 text-xl">FAQ's</a></li>
          <li><a href="#testimonials" className="hover:text-blue-400 text-xl">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-400 text-xl">Contact</a></li>
        </ul>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden text-black space-y-4 py-4">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-lg">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg">About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg">Services</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-lg">Products</a>
            <a href="#clients" onClick={() => setMobileMenuOpen(false)} className="text-lg">Clients</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-lg">FAQ's</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="text-lg">Testimonials</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;