import React, { useState } from 'react';
import { motion } from 'framer-motion';

import iconResearch from '../assets/icon-research.png';
import iconSpecialties from '../assets/icon-specialties.png';
import iconTools from '../assets/icon-tools.png';
import iconMethodologies from '../assets/icon-methodologies.png';

// Skills with their specific colors from Figma - all in one flowing line
const skills = [
    { name: 'UX Design', color: '#FF6F61' },
    { name: 'User Research', color: '#FF6F61' },
    { name: 'User Testing', color: '#FF6F61' },
    { name: 'UI Design', color: '#FF9E80' },
    { name: 'Prototyping', color: '#FF9E80' },
    { name: 'Design Systems', color: '#FF9E80' },
    { name: 'HTML/CSS', color: '#D9CAB3' },
    { name: 'Java Script', color: '#D9CAB3' },
    { name: 'Data Analysis', color: '#D9CAB3' },
    { name: 'Python', color: '#D9CAB3' }
];

interface SkillCardProps {
    icon: string;
    title: string;
    description: string;
    delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, delay }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            style={{
                background: '#FFF9F7',
                border: isHovered ? '1px solid #FFD4CC' : '1px solid #FFE8E3',
                padding: '1.5rem',
                borderRadius: '16px',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                boxShadow: isHovered
                    ? '0 8px 25px rgba(255, 111, 97, 0.12)'
                    : '0 2px 8px rgba(0, 0, 0, 0.03)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -4 }}
        >
            <motion.img
                src={icon}
                alt=""
                style={{
                    width: '50px',
                    height: '50px',
                    objectFit: 'contain',
                    flexShrink: 0
                }}
                animate={{
                    scale: isHovered ? 1.08 : 1
                }}
                transition={{ duration: 0.3 }}
            />
            <div>
                <motion.h4
                    style={{
                        fontWeight: 600,
                        marginBottom: '6px',
                        fontSize: '1.1rem',
                        color: '#333'
                    }}
                >
                    {title}
                </motion.h4>
                <p style={{
                    fontSize: '0.85rem',
                    color: '#888',
                    margin: 0,
                    lineHeight: 1.5
                }}>
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

const Skills: React.FC = () => {
    return (
        <section style={{ padding: 'var(--spacing-xl) 0', background: '#FAFAFA' }}>
            <div className="container">
                {/* Top Section - Two Columns */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '3rem' }}>
                    {/* Left Column - Title, Description, Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2
                            style={{
                                fontSize: '2rem',
                                marginBottom: '1rem',
                                fontWeight: 600,
                                color: '#222'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Tools & Expertise
                        </motion.h2>
                        <motion.p
                            style={{
                                color: '#666',
                                marginBottom: '2rem',
                                lineHeight: 1.7,
                                fontSize: '1rem',
                                maxWidth: '380px'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            I leverage industry-leading design tools and methodologies to create user-centered solutions that drive measurable business impact.
                        </motion.p>
                        <motion.button
                            style={{
                                background: '#FF8C69',
                                color: 'white',
                                padding: '14px 32px',
                                borderRadius: '8px',
                                border: 'none',
                                fontSize: '1rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                boxShadow: '0 4px 0 #cc6a58, 0 6px 15px rgba(255, 140, 105, 0.25)'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{
                                y: -3,
                                boxShadow: '0 7px 0 #cc6a58, 0 10px 25px rgba(255, 140, 105, 0.4)'
                            }}
                            whileTap={{
                                y: 2,
                                boxShadow: '0 2px 0 #cc6a58, 0 3px 10px rgba(255, 140, 105, 0.25)'
                            }}
                        >
                            View My Resume
                        </motion.button>
                    </motion.div>

                    {/* Right Column - Skills Tags */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h3
                            style={{
                                fontSize: '30px',
                                marginBottom: '1.25rem',
                                fontWeight: 500,
                                color: '#2E211B',
                                fontFamily: '"SF Pro Display", "Inter", sans-serif',
                                letterSpacing: '0.05em'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Skills
                        </motion.h3>

                        {/* Skills Tags - All in one flowing line */}
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill.name}
                                    style={{
                                        background: skill.color,
                                        color: '#FFFFFF',
                                        padding: '8px 18px',
                                        borderRadius: '30px',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        fontFamily: '"Instrument Sans", sans-serif',
                                        letterSpacing: '0.05em',
                                        cursor: 'pointer',
                                        display: 'inline-block',
                                        lineHeight: '20px',
                                        whiteSpace: 'nowrap'
                                    }}
                                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.04,
                                        type: 'spring',
                                        stiffness: 300
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -2,
                                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)'
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {skill.name}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Section - 2x2 Grid of Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1.5rem'
                }}>
                    <SkillCard
                        icon={iconResearch}
                        title="Research Methods"
                        description="User Interviews, Usability Testing, Analytic Research, Competitive Audits"
                        delay={0.1}
                    />
                    <SkillCard
                        icon={iconSpecialties}
                        title="Specialties"
                        description="Web Applications, Mobile Applications, Video Game Design, VR Design"
                        delay={0.15}
                    />
                    <SkillCard
                        icon={iconTools}
                        title="Design Tools"
                        description="Figma, Framer, HTML/CSS, Java, Python, Bootstrap"
                        delay={0.2}
                    />
                    <SkillCard
                        icon={iconMethodologies}
                        title="Methodologies"
                        description="Web Applications, Mobile Applications, Video Game Design, VR Design"
                        delay={0.25}
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
