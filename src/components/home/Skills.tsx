import React from 'react';
import { motion } from 'framer-motion';

import iconResearch from '../../assets/icon-research.png';
import iconSpecialties from '../../assets/icon-specialties.png';
import iconTools from '../../assets/icon-tools.png';
import iconMethodologies from '../../assets/icon-methodologies.png';

// Skills with their specific colors from Figma
const skills = [
    { name: 'UX Design', color: '#FF6F61' },
    { name: 'User Research', color: '#FF6F61' },
    { name: 'User Testing', color: '#FF6F61' },
    { name: 'Wireframing', color: '#FF9E80' },
    { name: 'Prototyping', color: '#FF9E80' },
    { name: 'Design Systems', color: '#FF9E80' },
    { name: 'HTML/CSS', color: '#D9CAB3' },
    { name: 'Java Script', color: '#D9CAB3' },
    { name: 'Data Analysis', color: '#D9CAB3' },
    { name: 'Python', color: '#D9CAB3' }
];

const skillCards = [
    {
        icon: iconResearch,
        alt: "Search",
        title: "Research Methods",
        description: "User Interviews, Usability Testing, Analytic Research, Competitive Audits"
    },
    {
        icon: iconSpecialties,
        alt: "Star",
        title: "Specialties",
        description: "Web Applications, Mobile Applications, Video Game Design, VR Design"
    },
    {
        icon: iconTools,
        alt: "Tools",
        title: "Design Tools",
        description: "Figma, Framer, HTML/CSS, Java, Python, Bootstrap"
    },
    {
        icon: iconMethodologies,
        alt: "Course Assign",
        title: "Methodologies",
        description: "Design Thinking, Agile Development, Lean UX, Human-Centered Design"
    }
];

const Skills: React.FC = () => {
    return (
        <section className="max-w-[1440px] mx-auto px-4 py-16">
            {/* Top Section - Two Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Left Column - Title, Description, Button */}
                <div className="flex flex-col">
                    <h2 className="font-['SF_Pro_Display',sans-serif] font-medium text-[40px] text-black mb-4">
                        Tools & Expertise
                    </h2>
                    <p className="font-['SF_Pro_Display',sans-serif] text-[24px] text-[#6f6864] mb-6 max-w-[485px] flex-grow">
                        I leverage industry-leading design tools and methodologies to create user-centered solutions that drive measurable business impact.
                    </p>
                    <motion.button
                        className="bg-gradient-to-r from-[#ff6f61] to-[#ff9e80] text-white rounded-[10px] px-8 py-4 font-['Instrument_Sans',sans-serif] font-medium text-[24px] shadow-lg hover:shadow-2xl transition-all duration-300 w-fit border-none cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(`${import.meta.env.BASE_URL}figmaAssets/Desiree Walker resume 2026.pdf`, '_blank')}
                    >
                        View My Resume
                    </motion.button>
                </div>

                {/* Right Column - Skills Tags */}
                <div className="flex flex-col">
                    <h3 className="font-['SF_Pro_Display',sans-serif] font-medium text-[30px] text-[#2e211b] tracking-[1.5px] mb-4">
                        Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={skill.name}
                                className="text-white rounded-full px-4 py-1.5 font-['Instrument_Sans',sans-serif] font-semibold text-[16px] tracking-[0.5px] cursor-default"
                                style={{ background: skill.color }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.04,
                                    type: 'spring',
                                    stiffness: 300
                                }}
                            >
                                {skill.name}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Section - 2x2 Grid of Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCards.map((card, index) => (
                    <motion.div
                        key={card.title}
                        className="bg-white border border-[#ff9e80] rounded-[10px] p-6 flex items-start gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        {/* Icon Circle */}
                        <div className="flex-shrink-0 w-[60px] h-[60px] bg-[#fff1e5] border border-[#ff9e80] rounded-full flex items-center justify-center">
                            <img src={card.icon} alt={card.alt} className="w-[40px] h-[40px] object-contain" />
                        </div>

                        {/* Text Content */}
                        <div className="flex-1">
                            <h3 className="font-['SF_Pro_Display',sans-serif] font-semibold text-[30px] text-[#6f6864] mb-1">
                                {card.title}
                            </h3>
                            <p className="font-['SF_Pro_Display',sans-serif] text-[20px] text-[#6f6864] tracking-[1px]">
                                {card.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
