import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import defaultLogo from '../../assets/logo.png';

const logoPink = `${import.meta.env.BASE_URL}figmaAssets/seashell-pink-removebg-preview-1.png`;

const baseNavItems = [
  { label: 'About', href: '/about', isRoute: true },
  { label: 'Projects', href: '/projects', isRoute: true },
  { label: 'Contact', href: '/contact', isRoute: true },
  { label: 'Resume', href: `${import.meta.env.BASE_URL}figmaAssets/Desiree Walker resume 2026.pdf`, isRoute: false }
];

interface NavLinkProps {
  item: { label: string; href: string; isRoute: boolean };
  index: number;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ item, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isActive = item.isRoute && location.pathname === item.href;

  const underlineStyle = {
    position: 'absolute' as const,
    bottom: 0,
    left: 0,
    height: '2px',
    background: 'white',
    borderRadius: '2px'
  };

  const motionProps = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.3 + index * 0.1, duration: 0.5 },
  };

  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    whileHover: { scale: 1.05 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 }
  };

  if (item.isRoute) {
    return (
      <motion.li {...motionProps}>
        <motion.div className="inline-block" {...hoverProps}>
          <Link
            to={item.href}
            onClick={onClick}
            className="relative inline-block py-1 text-white no-underline"
          >
            {item.label}
            <motion.span
              style={underlineStyle}
              initial={{ width: 0 }}
              animate={{ width: isHovered || isActive ? '100%' : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </Link>
        </motion.div>
      </motion.li>
    );
  }

  return (
    <motion.li {...motionProps}>
      <motion.a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block py-1 text-white no-underline cursor-pointer"
        {...hoverProps}
      >
        {item.label}
        <motion.span
          style={underlineStyle}
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </motion.a>
    </motion.li>
  );
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navItems = isHomePage
    ? baseNavItems
    : [{ label: 'Home', href: '/', isRoute: true }, ...baseNavItems];

  const isOpaque = !isHomePage || scrolled;

  const backgroundStyle = isOpaque
    ? 'linear-gradient(90deg, rgba(255, 218, 185, 0.95) 0%, rgba(255, 111, 97, 0.95) 50%, rgba(255, 158, 128, 0.95) 100%)'
    : 'linear-gradient(90deg, rgba(255, 218, 185, 0.7) 0%, rgba(255, 111, 97, 0.7) 50%, rgba(255, 158, 128, 0.7) 100%)';

  const boxShadowStyle = isOpaque
    ? '0px 4px 20px rgba(0, 0, 0, 0.3)'
    : '0px 4px 4px rgba(0, 0, 0, 0.2)';

  const currentLogo = isHomePage ? defaultLogo : logoPink;

  return (
    <>
      <motion.nav
        className="navbar fixed top-0 left-0 right-0 w-full h-[70px] z-[100] flex items-center justify-between px-4 md:px-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          color: 'white',
          background: backgroundStyle,
          boxShadow: boxShadowStyle,
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <motion.div
            className="logo flex items-center w-[60px] h-[55px] md:w-[79px] md:h-[72px]"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={currentLogo} alt="Logo" className="w-full h-auto object-contain" />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-[30px] list-none text-[28px] font-normal font-['SF_Pro_Display',_sans-serif]">
          {navItems.map((item, index) => (
            <NavLink key={item.label} item={item} index={index} />
          ))}
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] z-[110]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <motion.span
            className="block w-7 h-[3px] bg-white rounded-full"
            animate={mobileOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-7 h-[3px] bg-white rounded-full"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-7 h-[3px] bg-white rounded-full"
            animate={mobileOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center md:hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 111, 97, 0.98) 0%, rgba(255, 158, 128, 0.98) 100%)',
              backdropFilter: 'blur(20px)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center gap-8 list-none text-[32px] font-normal font-['SF_Pro_Display',_sans-serif]">
              {navItems.map((item, index) => (
                <NavLink key={item.label} item={item} index={index} onClick={() => setMobileOpen(false)} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
