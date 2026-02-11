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
            style={{
                background: isHovered
                    ? 'linear-gradient(135deg, #FFFFFF 0%, #FFF5F2 100%)'
                    : 'white',
                padding: '2rem',
                borderRadius: '16px',
                border: isHovered ? '2px solid #FF6F61' : '1px solid #eee',
                textAlign: 'center',
                boxShadow: isHovered
                    ? '0 20px 40px rgba(255, 111, 97, 0.15)'
                    : '0 4px 20px rgba(0, 0, 0, 0.05)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
            }}
        >
            {/* Background decoration on hover */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 50% 0%, rgba(255, 111, 97, 0.1) 0%, transparent 50%)',
                    pointerEvents: 'none'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            {/* Animated Step Number */}
            <motion.div
                style={{
                    width: '60px',
                    height: '60px',
                    background: isHovered
                        ? 'linear-gradient(135deg, #FF6F61 0%, #FF9E80 100%)'
                        : 'var(--color-primary)',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    margin: '0 auto 1.5rem',
                    position: 'relative',
                    zIndex: 1
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
                    style={{
                        position: 'absolute',
                        inset: -4,
                        borderRadius: '50%',
                        border: '2px solid #FF6F61',
                        opacity: 0
                    }}
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
                style={{
                    fontSize: '1.2rem',
                    marginBottom: '1rem',
                    color: 'var(--color-primary)',
                    position: 'relative',
                    zIndex: 1
                }}
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                {step.title}
            </motion.h4>

            <motion.p
                style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-text-light)',
                    position: 'relative',
                    zIndex: 1,
                    lineHeight: 1.6
                }}
                animate={{ opacity: isHovered ? 1 : 0.8 }}
            >
                {step.desc}
            </motion.p>

            {/* Progress indicator */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
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
        <section style={{ padding: 'var(--spacing-xl) 0', background: '#FFF5F2', position: 'relative' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    style={{
                        fontFamily: '"SF Pro Display", sans-serif',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '40px',
                        lineHeight: '48px',
                        color: '#FF6F61',
                        textAlign: 'center',
                        marginBottom: '3rem',
                        position: 'absolute',
                        top: '-65px',
                        left: 0,
                        width: '100%',
                        zIndex: 10
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Design Process
                </motion.h2>

                <div style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative', maxWidth: '800px', margin: '0 auto 2rem' }}>
                    {/* Animated Left Sun - Continuous Rotation */}
                    <motion.img
                        src={smilingSun}
                        alt=""
                        style={{
                            position: 'absolute',
                            left: '-10px',
                            top: '-70px',
                            width: '200px',
                            height: 'auto'
                        }}
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

                    {/* Animated Right Sun - Continuous Rotation (clockwise) */}
                    <motion.img
                        src={smilingSun}
                        alt=""
                        style={{
                            position: 'absolute',
                            right: '-10px',
                            top: '-70px',
                            width: '200px',
                            height: 'auto',
                            transform: 'scaleX(-1)'
                        }}
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
                        style={{
                            fontSize: '2.5rem',
                            marginBottom: '1rem',
                            fontFamily: '"SF Pro Display", sans-serif',
                            fontWeight: 600
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        How I make it happen
                    </motion.h3>

                    <motion.p
                        style={{
                            color: 'var(--color-text-light)',
                            fontSize: '1rem',
                            marginBottom: '2rem'
                        }}
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
                        style={{
                            display: 'block',
                            margin: '0 auto',
                            width: '90px',
                            height: 'auto',
                            marginTop: '-1rem'
                        }}
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        animate={{ y: [0, 10, 0] }}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 2fr))', gap: '2rem', marginTop: '-1.5rem' }}>
                    {steps.map((step, index) => (
                        <StepCard key={step.id} step={step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
