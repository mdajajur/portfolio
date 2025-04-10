// src/components/Navbar.jsx
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (id) => {
    document.getElementById(id.toLowerCase()).scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-4 z-50 w-full flex justify-center">
      {/* Large Screen Nav */}
      <ul className="hidden md:flex backdrop-blur-lg bg-white/10 rounded-full px-8 py-3 gap-6 text-gray-100 text-sm font-medium shadow-md">
        {links.map((link) => (
          <li
            key={link}
            className="cursor-pointer hover:text-teal-400 transition"
            onClick={() => handleScroll(link)}
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Mobile Nav */}
      <div className="md:hidden fixed top-4 right-4">
        <button
          className="text-gray-100 text-2xl z-50 focus:outline-none"
          onClick={handleToggle}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {menuOpen && (
          <ul className="absolute top-12 right-0 bg-gray-900 text-gray-100 rounded-lg shadow-lg w-40 py-4 px-2 space-y-3">
            {links.map((link) => (
              <li
                key={link}
                className="cursor-pointer hover:text-teal-400 transition px-3"
                onClick={() => handleScroll(link)}
              >
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
