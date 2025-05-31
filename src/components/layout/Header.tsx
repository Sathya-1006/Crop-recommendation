import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sprout } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Sprout className="h-8 w-8 text-green-600" />
          <span className="text-xl font-bold text-gray-800">CropAdvisor</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" label="Home" currentPath={location.pathname} onClick={closeMenu} />
          <NavLink to="/about" label="About" currentPath={location.pathname} onClick={closeMenu} />
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink to="/" label="Home" currentPath={location.pathname} onClick={closeMenu} />
            <NavLink to="/about" label="About" currentPath={location.pathname} onClick={closeMenu} />
          </div>
        </div>
      )}
    </header>
  );
};

type NavLinkProps = {
  to: string;
  label: string;
  currentPath: string;
  onClick: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ to, label, currentPath, onClick }) => {
  const isActive = currentPath === to;
  
  return (
    <Link
      to={to}
      className={`text-base font-medium transition-colors duration-200 relative pb-1 ${
        isActive 
          ? 'text-green-600' 
          : 'text-gray-700 hover:text-green-600'
      }`}
      onClick={onClick}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 rounded-full" />
      )}
    </Link>
  );
};

export default Header;