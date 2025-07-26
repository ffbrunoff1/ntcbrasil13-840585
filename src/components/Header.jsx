import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753500943550_0.png';

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Nossa Abordagem', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex-shrink-0">
            <img className="h-12 w-auto" src={logoUrl} alt="NTC Brasil Logo" />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-dark-gray font-medium hover:text-secondary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="btn btn-primary">
              Solicitar Orçamento
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-dark-gray hover:text-secondary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
          >
            <motion.div
              variants={menuVariants}
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
            >
              {navLinks.map(link => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  variants={menuItemVariants}
                  className="block px-3 py-2 rounded-md text-base font-medium text-dark-gray hover:text-white hover:bg-secondary"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                variants={menuItemVariants}
                className="pt-4 pb-2 px-3"
              >
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center btn btn-primary"
                >
                  Solicitar Orçamento
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
