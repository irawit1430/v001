import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '../../assets/hero-bg-final.jpg';
import heroGradient from '../../assets/hero-gradient.png';
import heroText from '../../assets/hero-text.png';

// Floating particles component
const FloatingParticles: React.FC = () => {
    const particles = useMemo(() =>
        Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 8 + 4,
            duration: Math.random() * 10 + 15,
            delay: Math.random() * 5
        })), []
    );

    return (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    style={{
                        position: 'absolute',
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.3)',
                        filter: 'blur(1px)'
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 15, -15, 0],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />
            ))}
        </div>
    );
};

// Animated button
const GlowButton: React.FC<{ href: string; children: React.ReactNode; delay: number }> = ({ href, children, delay }) => (
    <motion.a
        href={href}
        className="btn"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay, type: 'spring', stiffness: 400, damping: 15 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
            background: 'linear-gradient(90deg, #FF6F61 0%, #FF9E80 100%)',
            color: '#F5F5F5',
            width: '184px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            fontSize: '24px',
            fontWeight: 500,
            fontFamily: '"SF Pro Display", sans-serif',
            lineHeight: '29px',
            textDecoration: 'none',
            cursor: 'pointer'
        }}
    >
        {children}
    </motion.a>
);

const Hero: React.FC = () => {
    // Scroll-based fade out animation
    const { scrollY } = useScroll();
    const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const textY = useTransform(scrollY, [0, 300], [0, -50]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    return (
        <motion.section
            className="hero"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
                height: '100vh',
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                overflow: 'hidden'
            }}
        >
            {/* Background Image with subtle zoom animation */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -2
                }}
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: 'easeOut' }}
            />

            {/* Gradient Overlay with fade in */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${heroGradient})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -1
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
            />

            {/* Floating particles */}
            <FloatingParticles />

            <div className="hero-content" style={{
                maxWidth: '100%',
                padding: '0 20px',
                zIndex: 1,
                marginTop: '-50px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{
                        marginBottom: '2rem',
                        opacity: textOpacity,
                        y: textY
                    }}
                >
                    <motion.img
                        src={heroText}
                        alt="Hi, I'm Desiree, UX Designer turning complex problems into elegant, user-centered solutions. Based in Miami, FL"
                        style={{
                            maxWidth: '100%',
                            width: '921px',
                            height: 'auto',
                            display: 'block',
                            filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))'
                        }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    />
                </motion.div>

                <motion.div
                    className="cta-buttons"
                    style={{
                        display: 'flex',
                        gap: '1.5rem',
                        justifyContent: 'center',
                        marginTop: '1rem',
                        width: '384px',
                        height: '60px',
                        margin: '1rem auto 0'
                    }}
                >
                    <GlowButton href="#projects" delay={0.2}>Projects</GlowButton>
                    <GlowButton href="#resume" delay={0.3}>Resume</GlowButton>
                </motion.div>
            </div>

            {/* Enhanced scroll indicator with pulse effect */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}
            >
                <motion.div
                    animate={{
                        y: [0, 12, 0],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px'
                    }}
                >
                    <motion.span
                        style={{
                            fontSize: '12px',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            opacity: 0.8
                        }}
                    >
                        Scroll
                    </motion.span>
                    <motion.div
                        style={{
                            width: '24px',
                            height: '40px',
                            border: '2px solid rgba(255,255,255,0.5)',
                            borderRadius: '12px',
                            display: 'flex',
                            justifyContent: 'center',
                            paddingTop: '8px'
                        }}
                    >
                        <motion.div
                            style={{
                                width: '4px',
                                height: '8px',
                                background: 'white',
                                borderRadius: '2px'
                            }}
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
