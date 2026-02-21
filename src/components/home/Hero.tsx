import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '../../assets/hero-bg-final.jpg';



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
            className="hero relative flex items-center justify-center text-white text-center overflow-hidden w-full min-h-screen mt-[70px]"
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

            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        opacity: textOpacity,
                        y: textY
                    }}
                    className="font-['SF_Pro_Display',sans-serif] font-semibold text-[32px] md:text-[40px] lg:text-[50px] text-white mb-6 mt-[100px] max-w-[900px] leading-[1.3]"
                >
                    Hi, I'm Desiree,<br />
                    UX Designer turning complex problems into elegant, user-centered solutions. Based in <span className="bg-clip-text bg-gradient-to-r from-[#ffdab9] to-[#ff6f61] text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>Miami, FL</span>
                </motion.h1>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-[40px] items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.button
                        className="bg-gradient-to-r from-[#ff6f61] to-[#ff9e80] text-white rounded-[10px] px-8 py-4 min-w-[184px] h-[60px] font-['SF_Pro_Display',sans-serif] font-medium text-[30px] shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Projects
                    </motion.button>
                    <motion.button
                        className="bg-gradient-to-r from-[#ff6f61] to-[#ff9e80] text-white rounded-[10px] px-8 py-4 min-w-[184px] h-[60px] font-['SF_Pro_Display',sans-serif] font-medium text-[30px] shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(`${import.meta.env.BASE_URL}figmaAssets/Desiree Walker resume 2026.pdf`, '_blank')}
                    >
                        Resume
                    </motion.button>
                </motion.div>
            </div>

            {/* Enhanced scroll indicator with arrow */}
            <motion.div
                className="mt-[225px] cursor-pointer absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <motion.div
                    animate={{
                        y: [0, 12, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                >
                    <svg className="w-[50px] h-[50px] hover:opacity-80 transition-opacity" fill="none" viewBox="0 0 50 50">
                        <path d="M43.1641 12.5H39.502C39.2529 12.5 39.0186 12.6221 38.8721 12.8223L25 31.9434L11.1279 12.8223C10.9814 12.6221 10.7471 12.5 10.498 12.5H6.83594C6.51855 12.5 6.33301 12.8613 6.51855 13.1201L23.7354 36.8555C24.3604 37.7148 25.6396 37.7148 26.2598 36.8555L43.4766 13.1201C43.667 12.8613 43.4814 12.5 43.1641 12.5Z" fill="white" />
                    </svg>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Hero;
