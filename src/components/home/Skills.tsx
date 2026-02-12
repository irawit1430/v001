import React, { useState } from 'react';
import { motion } from 'framer-motion';

import iconResearch from '../../assets/icon-research.png';
import iconSpecialties from '../../assets/icon-specialties.png';
import iconTools from '../../assets/icon-tools.png';
import iconMethodologies from '../../assets/icon-methodologies.png';

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
            className="flex gap-4 items-start p-5 md:p-6 rounded-2xl cursor-pointer"
            style={{
                background: '#FFF9F7',
                border: isHovered ? '1px solid #FFD4CC' : '1px solid #FFE8E3',
                boxShadow: isHovered
                    ? '0 8px 25px rgba(255, 111, 97, 0.12)'
                    : '0 2px 8px rgba(0, 0, 0, 0.03)',
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
                className="w-10 h-10 md:w-[50px] md:h-[50px] object-contain flex-shrink-0"
                animate={{
                    scale: isHovered ? 1.08 : 1
                }}
                transition={{ duration: 0.3 }}
            />
            <div>
                <motion.h4 className="font-semibold mb-1 text-base md:text-lg text-[#333]">
                    {title}
                </motion.h4>
                <p className="text-xs md:text-sm text-[#888] m-0 leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

const Skills: React.FC = () => {
    return (
        <section className="py-16 md:py-24" style={{ background: '#FAFAFA' }}>
            <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
                {/* Top Section - Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-12">
                    {/* Left Column - Title, Description, Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2
                            className="text-2xl md:text-[2rem] mb-3 md:mb-4 font-semibold text-[#222]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Tools & Expertise
                        </motion.h2>
                        <motion.p
                            className="text-[#666] mb-6 md:mb-8 leading-relaxed text-sm md:text-base max-w-[380px]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            I leverage industry-leading design tools and methodologies to create user-centered solutions that drive measurable business impact.
                        </motion.p>
                        <motion.button
                            className="text-white font-semibold text-sm md:text-base rounded-lg border-none cursor-pointer px-6 md:px-8 py-3 md:py-[14px]"
                            style={{
                                background: '#FF8C69',
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
                            className="text-xl md:text-[30px] mb-4 md:mb-5 font-medium text-[#2E211B] font-['SF_Pro_Display',_sans-serif] tracking-wide"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            Skills
                        </motion.h3>

                        {/* Skills Tags - All in one flowing line */}
                        <div className="flex gap-2 flex-wrap">
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill.name}
                                    className="inline-block text-white font-semibold rounded-full cursor-pointer whitespace-nowrap px-3 md:px-[18px] py-[6px] md:py-2 text-sm md:text-base font-['SF_Pro_Display',_sans-serif] tracking-wide leading-5"
                                    style={{ background: skill.color }}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
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
