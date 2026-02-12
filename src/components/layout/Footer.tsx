import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface AnimatedLinkProps {
    href: string;
    children: React.ReactNode;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isExternal = href.startsWith('http') || href.startsWith('mailto');

    const underline = (
        <motion.span
            className="absolute -bottom-[2px] left-0 h-[1px] bg-white"
            style={{ transformOrigin: 'left' }}
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : 0 }}
            transition={{ duration: 0.3 }}
        />
    );

    if (isExternal) {
        return (
            <motion.a
                href={href}
                className="relative inline-block text-white no-underline"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
                {underline}
            </motion.a>
        );
    }

    return (
        <Link
            to={href}
            className="relative inline-block text-white no-underline"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="inline-block"
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                {children}
            </motion.div>
            {underline}
        </Link>
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
        <footer className="relative overflow-hidden text-white" style={{ background: 'var(--color-primary)' }}>
            {/* Animated gradient top border */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
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
                className="absolute top-1/2 -right-[100px] w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{ background: 'rgba(255, 255, 255, 0.05)' }}
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

            <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-16">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Left Side - Main Info */}
                    <motion.div variants={itemVariants} className="text-center md:text-left">
                        <motion.h3
                            className="text-2xl font-semibold mb-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            Desiree J. Walker
                        </motion.h3>
                        <motion.p
                            className="max-w-[300px] mx-auto md:mx-0 opacity-90 leading-relaxed text-base"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.9 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            UX Designer creating meaningful digital experiences.
                        </motion.p>
                    </motion.div>

                    {/* Navigation Column */}
                    <motion.div variants={itemVariants} className="text-center md:text-left">
                        <h4 className="font-semibold mb-3 text-lg">Navigation</h4>
                        <ul className="grid gap-2 opacity-90">
                            <li><AnimatedLink href="/about">About</AnimatedLink></li>
                            <li><AnimatedLink href="/projects">Projects</AnimatedLink></li>
                            <li><AnimatedLink href="/contact">Contact</AnimatedLink></li>
                        </ul>
                    </motion.div>

                    {/* Social Column */}
                    <motion.div variants={itemVariants} className="text-center md:text-left">
                        <h4 className="font-semibold mb-3 text-lg">Social</h4>
                        <ul className="grid gap-2 opacity-90">
                            <li><AnimatedLink href="https://www.linkedin.com/in/desiree-walker/">Linkedin</AnimatedLink></li>
                        </ul>
                    </motion.div>

                    {/* Contact Column */}
                    <motion.div variants={itemVariants} className="text-center md:text-left">
                        <h4 className="font-semibold mb-3 text-lg">Contact</h4>
                        <ul className="grid gap-2 opacity-90">
                            <li><AnimatedLink href="mailto:desireewalkerux@yahoo.com">Email</AnimatedLink></li>
                            <li><AnimatedLink href={`${import.meta.env.BASE_URL}figmaAssets/Desiree Walker resume 2026.pdf`}>Resume</AnimatedLink></li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
