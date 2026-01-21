import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedLinkProps {
    href: string;
    children: React.ReactNode;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href={href}
            style={{
                position: 'relative',
                display: 'inline-block',
                color: 'white',
                textDecoration: 'none'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ x: 8 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            {children}
            <motion.span
                style={{
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    height: '1px',
                    background: 'white',
                    transformOrigin: 'left'
                }}
                initial={{ width: 0 }}
                animate={{ width: isHovered ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.a>
    );
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring' as const, stiffness: 100 }
    }
};

const Footer: React.FC = () => {
    return (
        <footer style={{
            background: 'var(--color-primary)',
            color: 'white',
            padding: '4rem 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated gradient top border */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #FF9E80, #FFFFFF, #FF9E80, #FFFFFF, #FF9E80)',
                    backgroundSize: '200% 100%'
                }}
                animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear'
                }}
            />

            {/* Background decoration */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-100px',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    pointerEvents: 'none'
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />

            <div className="container">
                <motion.div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: '3rem'
                    }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Left Side - Main Info */}
                    <motion.div variants={itemVariants} style={{ minWidth: '250px' }}>
                        <motion.h3
                            style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            Desiree J. Walker
                        </motion.h3>
                        <motion.p
                            style={{ maxWidth: '300px', opacity: 0.9, lineHeight: 1.6, fontSize: '1rem' }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.9 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            UX Designer creating meaningful digital experiences.
                        </motion.p>
                    </motion.div>

                    {/* Right Side - Three Columns Grouped Together */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            display: 'flex',
                            gap: '6rem',
                            flexWrap: 'wrap'
                        }}
                    >
                        {/* Navigation Column */}
                        <div style={{ textAlign: 'center' }}>
                            <h4 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Navigation</h4>
                            <ul style={{ display: 'grid', gap: '0.5rem', opacity: 0.9 }}>
                                <li><AnimatedLink href="#about">About</AnimatedLink></li>
                                <li><AnimatedLink href="#projects">Projects</AnimatedLink></li>
                                <li><AnimatedLink href="#contact">Contact</AnimatedLink></li>
                            </ul>
                        </div>

                        {/* Social Column */}
                        <div style={{ textAlign: 'center' }}>
                            <h4 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Social</h4>
                            <ul style={{ display: 'grid', gap: '0.5rem', opacity: 0.9 }}>
                                <li><AnimatedLink href="#">Linkedin</AnimatedLink></li>
                                <li><AnimatedLink href="#">Instagram</AnimatedLink></li>
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div style={{ textAlign: 'center' }}>
                            <h4 style={{ fontWeight: 600, marginBottom: '0.75rem', fontSize: '1.1rem' }}>Contact</h4>
                            <ul style={{ display: 'grid', gap: '0.5rem', opacity: 0.9 }}>
                                <li><AnimatedLink href="mailto:email@example.com">Email</AnimatedLink></li>
                                <li><AnimatedLink href="#">Resume</AnimatedLink></li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
