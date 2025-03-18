import React from 'react';
import { motion } from 'framer-motion';
import LogoSmall from '@/assets/logoalbiruni.webp';

interface NavigationProps {
  isNavScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

const Navigation = ({ isNavScrolled, isMobileMenuOpen, setIsMobileMenuOpen }: NavigationProps) => {
  const menuItems = ['Beranda', 'Program', 'Galeri', 'Testimonial', 'Kontak'];

  return (
    <>
      <motion.nav 
        className={`space-nav ${isNavScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="nav-container">
          <motion.a 
            href="#" 
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={LogoSmall} alt="Al Biruni" />
          </motion.a>
          
          <div className="nav-links">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 8px rgba(255,255,255,0.8)"
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div 
        className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
        initial={false}
        animate={isMobileMenuOpen ? { x: 0 } : { x: '-100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="mobile-menu-items">
          {menuItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ scale: 1.1, x: 10 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navigation; 