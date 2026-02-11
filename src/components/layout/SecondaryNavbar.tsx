import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Hardcoded new navbar assets/links
const logoSrc = `${import.meta.env.BASE_URL}figmaAssets/seashell-pink-removebg-preview-1.png`;
const logoAlt = "Logo";

const navItems = [
    { label: 'Home', href: '/', isRoute: true },
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



    // Common Motion setup used in original Navbar
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
        transition: { type: 'spring', stiffness: 400, damping: 17 }
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
            <motion.span
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
            </motion.span>

        </motion.li>
    );
};

export default function SecondaryNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    // Using the same styles as original Navbar
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
                padding: '0 3rem', // Match original padding
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
                height: '70px',
                zIndex: 100,
                color: 'white',
                // Fixed gradient background as requested
                background: 'linear-gradient(90deg, rgba(255, 218, 185, 0.95) 0%, rgba(255, 111, 97, 0.95) 50%, rgba(255, 158, 128, 0.95) 100%)',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
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
                        // Original logo dimensions/position
                        width: '79px',
                        height: '72px',
                        left: '22px',
                        top: '-1px'
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <img
                        src={logoSrc}
                        alt={logoAlt}
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                </motion.div>
            </Link>

            {/* Desktop Menu - utilizing same styles as Navbar */}
            <ul style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0px',
                gap: '30px',
                listStyle: 'none',
                fontSize: '28px', // Match original font size
                fontWeight: 400,
                fontFamily: '"SF Pro Display", sans-serif',
                position: 'absolute',
                width: 'auto',
                right: '60px',
                top: '18px'
            }}>
                {navItems.map((item, index) => (
                    <NavLink key={item.label} item={item} index={index} />
                ))}
            </ul>

            {/* Mobile Menu Toggle (kept from new template but hidden on desktop) */}
            {/* Note: Original Navbar didn't seem to have a mobile menu visible in the code snippet provided earlier, 
                but we'll keep the button just in case, though the list above is hardcoded position:absolute 
                which suggests the original design was desktop-first. 
                For now, I'll comment out the mobile toggle to strictly match the "Old Navbar" look 
                since the user asked to match the look. 
            */}
        </motion.nav>
    );
}
