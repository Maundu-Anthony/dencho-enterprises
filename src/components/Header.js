import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-dencho-dark/95 backdrop-blur-md text-white fixed w-full top-0 z-50 shadow-2xl border-b border-dencho-purple/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold group cursor-pointer">
            <span className="bg-gradient-to-r from-dencho-cyan to-dencho-light bg-clip-text text-transparent group-hover:from-dencho-light group-hover:to-dencho-cyan transition-all duration-300">Dencho</span>
            <span className="text-white"> Enterprise</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            <button onClick={() => scrollToSection('home')} className="px-4 py-2 rounded-lg hover:bg-dencho-cyan/10 hover:text-dencho-cyan transition-all duration-300 relative group">
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-dencho-cyan scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </button>
            <button onClick={() => scrollToSection('about')} className="px-4 py-2 rounded-lg hover:bg-dencho-cyan/10 hover:text-dencho-cyan transition-all duration-300 relative group">
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-dencho-cyan scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </button>
            <button onClick={() => scrollToSection('services')} className="px-4 py-2 rounded-lg hover:bg-dencho-cyan/10 hover:text-dencho-cyan transition-all duration-300 relative group">
              <span>Services</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-dencho-cyan scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </button>
            <button onClick={() => scrollToSection('products')} className="px-4 py-2 rounded-lg hover:bg-dencho-cyan/10 hover:text-dencho-cyan transition-all duration-300 relative group">
              <span>Products</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-dencho-cyan scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="ml-2 px-6 py-2 bg-gradient-to-r from-dencho-cyan to-dencho-light text-dencho-dark rounded-full font-semibold hover:shadow-lg hover:shadow-dencho-cyan/50 transition-all duration-300 transform hover:scale-105">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dencho-cyan"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <button onClick={() => scrollToSection('home')} className="block py-2 hover:text-dencho-cyan transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="block py-2 hover:text-dencho-cyan transition">About</button>
            <button onClick={() => scrollToSection('services')} className="block py-2 hover:text-dencho-cyan transition">Services</button>
            <button onClick={() => scrollToSection('products')} className="block py-2 hover:text-dencho-cyan transition">Products</button>
            <button onClick={() => scrollToSection('contact')} className="block py-2 hover:text-dencho-cyan transition">Contact</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
