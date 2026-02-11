import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';

const navItems = [
  { label: 'About', href: '/about', isRoute: true },
  { label: 'Projects', href: '/projects', isRoute: true },
  { label: 'Contact', href: '#contact', isRoute: false },
  { label: 'Resume', href: '#resume', isRoute: false }
];

interface NavLinkProps {
  item: typeof navItems[0];
  index: number;
}

const NavLink: React.FC<NavLinkProps> = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isActive = item.isRoute && location.pathname === item.href;

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    position: 'relative' as const,
    display: 'inline-block',
    padding: '4px 0'
  };

  const underlineStyle = {
    position: 'absolute' as const,
    bottom: 0,
    left: 0,
    height: '2px',
    background: 'white',
    borderRadius: '2px'
  };

  const tooltipStyle = {
    position: 'absolute' as const,
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '8px',
    padding: '8px 12px',
    background: 'rgba(0, 0, 0, 0.85)',
    color: 'white',
    fontSize: '14px',
    fontWeight: 400,
    borderRadius: '6px',
    whiteSpace: 'nowrap' as const,
    zIndex: 1000,
    pointerEvents: 'none' as const
  };

  if (item.isRoute) {
    return (
      <motion.li
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
        style={{ position: 'relative' }}
      >
        <motion.div
          style={{ display: 'inline-block' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <Link to={item.href} style={linkStyle}>
            {item.label}
            <motion.span
              style={underlineStyle}
              initial={{ width: 0 }}
              animate={{ width: isHovered || isActive ? '100%' : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </Link>
        </motion.div>
        {/* Tooltip */}
        <motion.div
          style={tooltipStyle}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -5 }}
          transition={{ duration: 0.2 }}
        >
          work in progress ✨
        </motion.div>
      </motion.li>
    );
  }

  return (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
      style={{ position: 'relative' }}
    >
      <motion.span
        style={{ ...linkStyle, cursor: 'pointer' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {item.label}
        <motion.span
          style={underlineStyle}
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </motion.span>
      {/* Tooltip */}
      <motion.div
        style={tooltipStyle}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -5 }}
        transition={{ duration: 0.2 }}
      >
        still working on it ✨
      </motion.div>
    </motion.li>
  );
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 3rem',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '70px',
        zIndex: 100,
        color: 'white',
        background: scrolled
          ? 'linear-gradient(90deg, rgba(255, 218, 185, 0.95) 0%, rgba(255, 111, 97, 0.95) 50%, rgba(255, 158, 128, 0.95) 100%)'
          : 'linear-gradient(90deg, rgba(255, 218, 185, 0.7) 0%, rgba(255, 111, 97, 0.7) 50%, rgba(255, 158, 128, 0.7) 100%)',
        boxShadow: scrolled ? '0px 4px 20px rgba(0, 0, 0, 0.3)' : '0px 4px 4px rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease'
      }}
    >
      <Link to="/">
        <motion.div
          className="logo"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '10px',
            gap: '10px',
            position: 'absolute',
            width: '79px',
            height: '72px',
            left: '22px',
            top: '-1px'
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img src={logo} alt="Logo" style={{ width: '100%', height: 'auto' }} />
        </motion.div>
      </Link>
      <ul style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0px',
        gap: '30px',
        listStyle: 'none',
        fontSize: '28px',
        fontWeight: 400,
        fontFamily: '"SF Pro Display", sans-serif',
        position: 'absolute',
        width: '486px',
        height: '34px',
        right: '60px',
        top: '18px'
      }}>
        {navItems.map((item, index) => (
          <NavLink key={item.label} item={item} index={index} />
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
