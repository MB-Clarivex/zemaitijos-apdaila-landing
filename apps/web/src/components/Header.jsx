
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const serviceCategories = [
    { name: 'Vidaus apdaila', path: '/paslaugos#vidaus' },
    { name: 'Išorinė apdaila', path: '/paslaugos#isorine' },
    { name: 'Remontai', path: '/paslaugos#remontai' },
    { name: 'Specialūs darbai', path: '/paslaugos#specialus' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col justify-center">
            <span className="text-2xl font-bold text-foreground tracking-tight">
              UAB „Žemaitijos apdaila“
            </span>
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Statybos ir apdailos profesionalai
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-semibold transition-colors ${
                isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Pradžia
            </Link>
            <Link
              to="/apie-mus"
              className={`text-sm font-semibold transition-colors ${
                isActive('/apie-mus') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Apie mus
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                to="/paslaugos"
                className={`flex items-center gap-1 text-sm font-semibold transition-colors py-2 ${
                  isActive('/paslaugos') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Paslaugos
                <ChevronDown className="w-4 h-4" />
              </Link>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-56 bg-card border border-border rounded-lg shadow-xl py-2"
                  >
                    {serviceCategories.map((category, idx) => (
                      <Link
                        key={idx}
                        to={category.path}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/projektai"
              className={`text-sm font-semibold transition-colors ${
                isActive('/projektai') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Projektai
            </Link>
            <Link
              to="/kontaktai"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Kontaktai
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Meniu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background overflow-hidden"
          >
            <nav className="container-padding py-4 flex flex-col space-y-1">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium ${
                  isActive('/') ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
                }`}
              >
                Pradžia
              </Link>
              <Link
                to="/apie-mus"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium ${
                  isActive('/apie-mus') ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
                }`}
              >
                Apie mus
              </Link>
              
              <div className="px-4 py-2">
                <Link 
                  to="/paslaugos"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium block mb-2 ${
                    isActive('/paslaugos') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  Paslaugos
                </Link>
                <div className="pl-4 border-l-2 border-border space-y-2 mt-2">
                  {serviceCategories.map((category, idx) => (
                    <Link
                      key={idx}
                      to={category.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/projektai"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium ${
                  isActive('/projektai') ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
                }`}
              >
                Projektai
              </Link>
              <Link
                to="/kontaktai"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 mt-4 rounded-lg text-base font-medium bg-primary text-primary-foreground text-center"
              >
                Kontaktai
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
