import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, type HTMLMotionProps } from 'framer-motion';
import heroBg from '../../assets/hero-bg-final.jpg';

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
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
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
interface GlowButtonProps extends HTMLMotionProps<"a"> {
    href: string;
    children: React.ReactNode;
    delay: number;
}

const GlowButton: React.FC<GlowButtonProps> = ({ href, children, delay, ...props }) => (
    <motion.a
        href={href}
        {...props}
        className="bg-gradient-to-r from-[#ff6f61] to-[#ff9e80] text-white rounded-[10px] px-8 py-4 min-w-[184px] h-[60px] font-['SF_Pro_Display',sans-serif] font-medium text-[30px] hover:shadow-lg transition-shadow flex items-center justify-center no-underline cursor-pointer"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay, type: 'spring', stiffness: 400, damping: 15 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
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
            className="hero relative flex items-center justify-center text-white text-center overflow-hidden w-full h-screen"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Background Image with subtle zoom animation */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center -z-20"
                style={{ backgroundImage: `url(${heroBg})` }}
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: 'easeOut' }}
            />

            {/* Gradient Overlay with fade in — matches Figma spec */}
            <motion.div
                className="absolute inset-0 -z-10"
                style={{
                    background: 'linear-gradient(0deg, rgba(255, 111, 97, 0.24) 0%, rgba(234, 224, 199, 0.15) 100%)'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
            />

            {/* Floating particles */}
            <FloatingParticles />

            <div className="hero-content w-full max-w-full px-5 z-[1] -mt-12 flex flex-col items-center">
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
                        className="w-full max-w-[921px] h-auto block"
                        style={{
                            filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))'
                        }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    />
                </motion.div>

                <motion.div
                    className="cta-buttons flex flex-col sm:flex-row gap-4 sm:gap-8 mt-[40px] items-center justify-center"
                >
                    <GlowButton href="#projects" delay={0.2}>Projects</GlowButton>
                    <GlowButton
                        href={`${import.meta.env.BASE_URL}figmaAssets/Desiree Walker resume 2026.pdf`}
                        delay={0.3}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </GlowButton>
                </motion.div>
            </div>

            {/* Enhanced scroll indicator with pulse effect */}
            <motion.div
                className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <motion.div
                    className="flex flex-col items-center gap-2"
                    animate={{
                        y: [0, 12, 0],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                >
                    <motion.span className="text-xs tracking-[2px] uppercase opacity-80">
                        Scroll
                    </motion.span>
                    <motion.div className="w-6 h-10 border-2 border-white/50 rounded-xl flex justify-center pt-2">
                        <motion.div
                            className="w-1 h-2 bg-white rounded-sm"
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
