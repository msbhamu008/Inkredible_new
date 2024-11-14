import React, { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0A0118]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-purple-500 animate-float" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Inkredible
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="hover:text-purple-400 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="hover:text-purple-400 transition-colors"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="hover:text-purple-400 transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('partners')}
              className="hover:text-purple-400 transition-colors"
            >
              Partners
            </button>
          </div>

          <button className="hidden md:block bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-purple-400" />
            ) : (
              <Menu className="w-6 h-6 text-purple-400" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0A0118]/95 backdrop-blur-md border-t border-purple-900/50 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-4 py-2 hover:bg-purple-500/10 rounded-lg transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="block w-full text-left px-4 py-2 hover:bg-purple-500/10 rounded-lg transition-colors"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-4 py-2 hover:bg-purple-500/10 rounded-lg transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('partners')}
                className="block w-full text-left px-4 py-2 hover:bg-purple-500/10 rounded-lg transition-colors"
              >
                Partners
              </button>
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-6 py-2 rounded-xl font-medium transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}