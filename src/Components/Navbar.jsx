import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const logo = "/logo.png";

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
      <div className="max-w-7xl mx-auto px-4 py-6.5 flex items-center justify-between text-white relative">
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Left Nav */}
        <ul className="hidden md:flex space-x-4 text-base font-medium">
          <li><a href="#home" className="hover:text-blue-400 text-xl">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400 text-xl">About</a></li>
          <li><a href="#services" className="hover:text-blue-400 text-xl">Services</a></li>
          <li><a href="#products" className="hover:text-blue-400 text-xl">Products</a></li>
        </ul>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src={logo}
            alt="Logo"
            className="h-10 md:h-16 lg:h-20 transition-all duration-300"
          />
        </div>

        {/* Desktop Right Nav */}
        <ul className="hidden md:flex space-x-4 text-base font-medium">
          <li><a href="#clients" className="hover:text-blue-400 text-xl">Clients</a></li>
          <li><a href="#faq" className="hover:text-blue-400 text-xl">FAQ's</a></li>
          <li><a href="#testimonials" className="hover:text-blue-400 text-xl">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-400 text-xl">Contact</a></li>
        </ul>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden text-black z-40">
            {[
              "home", "about", "services", "products",
              "clients", "faq", "testimonials", "contact"
            ].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 text-[18px] font-medium hover:bg-blue-100 transition-all"
              >
                {section === "faq" ? "FAQ's" : section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;