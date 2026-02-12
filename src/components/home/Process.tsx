import React, { useState } from 'react';
import { motion } from 'framer-motion';

import smilingSun from '../../assets/smiling sun.png';
import curvArrow from '../../assets/curv arro.png';

const steps = [
    { id: 1, title: "Research & Discovery", desc: "I start by understanding user needs, pain points, and goals through interviews, surveys, and competitive analysis." },
    { id: 2, title: "Strategy & Planning", desc: "Based on research insights, I develop information architecture, user flows, and wireframes to define the product strategy." },
    { id: 3, title: "Design & Iteration", desc: "I create high-fidelity designs and prototypes, testing them with users and iterating based on usability testing results." },
    { id: 4, title: "Build & Launch", desc: "I collaborate with developers to ensure the design is implemented correctly and the product is launched successfully." }
];

// Animated Step Card Component
const StepCard: React.FC<{ step: typeof steps[0]; index: number }> = ({ step, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                delay: index * 0.15,
                duration: 0.6,
                type: 'spring',
                stiffness: 100
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative overflow-hidden cursor-pointer p-6 md:p-8 rounded-2xl text-center"
            style={{
                background: isHovered
                    ? 'linear-gradient(135deg, #FFFFFF 0%, #FFF5F2 100%)'
                    : 'white',
                border: isHovered ? '2px solid #FF6F61' : '1px solid #eee',
                boxShadow: isHovered
                    ? '0 20px 40px rgba(255, 111, 97, 0.15)'
                    : '0 4px 20px rgba(0, 0, 0, 0.05)',
            }}
        >
            {/* Background decoration on hover */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(255, 111, 97, 0.1) 0%, transparent 50%)',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            {/* Animated Step Number */}
            <motion.div
                className="relative z-[1] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center text-lg md:text-xl font-bold text-white mx-auto mb-4 md:mb-6"
                style={{
                    background: isHovered
                        ? 'linear-gradient(135deg, #FF6F61 0%, #FF9E80 100%)'
                        : 'var(--color-primary)',
                }}
                animate={{
                    scale: isHovered ? [1, 1.1, 1] : 1,
                    boxShadow: isHovered
                        ? '0 8px 25px rgba(255, 111, 97, 0.4)'
                        : '0 4px 15px rgba(255, 111, 97, 0.2)'
                }}
                transition={{
                    scale: { duration: 0.4, repeat: isHovered ? Infinity : 0, repeatDelay: 0.5 }
                }}
            >
                {/* Pulse ring effect */}
                <motion.div
                    className="absolute -inset-1 rounded-full border-2 border-[#FF6F61] opacity-0"
                    animate={{
                        scale: isHovered ? [1, 1.5] : 1,
                        opacity: isHovered ? [0.6, 0] : 0
                    }}
                    transition={{
                        duration: 1,
                        repeat: isHovered ? Infinity : 0,
                        ease: 'easeOut'
                    }}
                />
                {step.id}
            </motion.div>

            <motion.h4
                className="relative z-[1] text-base md:text-lg mb-3 md:mb-4 text-[var(--color-primary)]"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                {step.title}
            </motion.h4>

            <motion.p
                className="relative z-[1] text-sm md:text-base text-[var(--color-text-light)] leading-relaxed"
                animate={{ opacity: isHovered ? 1 : 0.8 }}
            >
                {step.desc}
            </motion.p>

            {/* Progress indicator */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[3px]"
                style={{
                    background: 'linear-gradient(90deg, #FF6F61, #FF9E80)',
                    transformOrigin: 'left'
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
            />
        </motion.div>
    );
};

const Process: React.FC = () => {
    return (
        <section className="py-16 md:py-24 relative" style={{ background: '#FFF5F2' }}>
            <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
                <motion.h2
                    className="section-title font-['SF_Pro_Display',_sans-serif] font-semibold text-3xl md:text-[40px] leading-tight text-[#FF6F61] text-center mb-8 md:mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Design Process
                </motion.h2>

                <div className="text-center mb-8 md:mb-12 relative max-w-[800px] mx-auto">
                    {/* Animated Left Sun - Hidden on mobile */}
                    <motion.img
                        src={smilingSun}
                        alt=""
                        className="absolute -left-2 -top-[70px] w-[120px] md:w-[200px] h-auto hidden md:block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        animate={{ rotate: 360 }}
                        transition={{
                            rotate: {
                                duration: 8,
                                repeat: Infinity,
                                ease: 'linear'
                            },
                            opacity: { duration: 0.8 },
                            scale: { duration: 0.8, type: 'spring' }
                        }}
                        whileHover={{ scale: 1.1 }}
                    />

                    {/* Animated Right Sun - Hidden on mobile */}
                    <motion.img
                        src={smilingSun}
                        alt=""
                        className="absolute -right-2 -top-[70px] w-[120px] md:w-[200px] h-auto hidden md:block"
                        style={{ transform: 'scaleX(-1)' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        animate={{ rotate: 360 }}
                        transition={{
                            rotate: {
                                duration: 8,
                                repeat: Infinity,
                                ease: 'linear'
                            },
                            opacity: { duration: 0.8, delay: 0.2 },
                            scale: { duration: 0.8, type: 'spring', delay: 0.2 }
                        }}
                        whileHover={{ scale: 1.1 }}
                    />

                    <motion.h3
                        className="text-2xl md:text-[2.5rem] mb-4 font-['SF_Pro_Display',_sans-serif] font-semibold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        How I make it happen
                    </motion.h3>

                    <motion.p
                        className="text-[var(--color-text-light)] text-sm md:text-base mb-6 md:mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        My design process transforms complex ideas into intuitive, human-centered experiences.
                    </motion.p>

                    {/* Animated Arrow */}
                    <motion.img
                        src={curvArrow}
                        alt=""
                        className="block mx-auto w-[60px] md:w-[90px] h-auto -mt-2 md:-mt-4"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        animate={{ y: [0, 10, 0] }}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {steps.map((step, index) => (
                        <StepCard key={step.id} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
