import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
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

  const motionProps = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.3 + index * 0.1, duration: 0.5 },
    style: { position: 'relative' as const }
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
        <motion.div style={{ display: 'inline-block' }} {...hoverProps}>
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
      </motion.li>
    );
  }

  return (
    <motion.li {...motionProps}>
      <motion.a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...linkStyle, cursor: 'pointer' }}
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
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine nav items based on route
  const navItems = isHomePage
    ? baseNavItems
    : [{ label: 'Home', href: '/', isRoute: true }, ...baseNavItems];

  // Determine background style
  // On home page: transparent/translucent initially, opaque when scrolled
  // On other pages: always opaque (like SecondaryNavbar)
  const isOpaque = !isHomePage || scrolled;

  const backgroundStyle = isOpaque
    ? 'linear-gradient(90deg, rgba(255, 218, 185, 0.95) 0%, rgba(255, 111, 97, 0.95) 50%, rgba(255, 158, 128, 0.95) 100%)'
    : 'linear-gradient(90deg, rgba(255, 218, 185, 0.7) 0%, rgba(255, 111, 97, 0.7) 50%, rgba(255, 158, 128, 0.7) 100%)';

  const boxShadowStyle = isOpaque
    ? '0px 4px 20px rgba(0, 0, 0, 0.3)'
    : '0px 4px 4px rgba(0, 0, 0, 0.2)';

  // Determine logo
  const currentLogo = isHomePage ? defaultLogo : logoPink;

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
        background: backgroundStyle,
        boxShadow: boxShadowStyle,
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
          <img src={currentLogo} alt="Logo" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
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
        width: 'auto',
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

