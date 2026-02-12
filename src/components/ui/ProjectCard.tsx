import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projectsBg from '../../assets/images bg image.png';

export interface ProjectData {
    id: number;
    title: string;
    category: string;
    tags: string[];
    description: string;
    image: string;
    link?: string;
}

interface ProjectCardProps {
    project: ProjectData;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full h-full flex flex-col"
        >
            {/* Animated glow border */}
            <motion.div
                className="absolute -inset-[3px] rounded-[23px] z-0"
                style={{
                    background: 'linear-gradient(135deg, #FF6F61, #FF9E80, #FFB69E, #FF6F61)',
                    backgroundSize: '300% 300%',
                    opacity: isHovered ? 0.1 : 0,
                    filter: 'blur(15px)',
                }}
                animate={{
                    backgroundPosition: isHovered ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%'
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear'
                }}
            />

            {/* Image Section */}
            <motion.div
                className="w-full aspect-[4/3] md:aspect-auto md:h-[580px] rounded-[20px] flex justify-center items-start overflow-hidden relative z-[1] py-6 pb-12"
                style={{
                    backgroundImage: `url(${projectsBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: isHovered
                        ? '0 25px 50px rgba(255, 111, 97, 0.3)'
                        : '0 10px 30px rgba(0, 0, 0, 0.1)'
                }}
            >
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-[95%] h-full object-cover"
                    style={{
                        filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.15))'
                    }}
                    animate={{
                        scale: isHovered ? 1.05 : 1,
                        y: isHovered ? -10 : 0
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
            </motion.div>

            {/* Content Section */}
            <motion.div
                className="w-full min-h-[200px] md:min-h-[220px] flex-1 bg-white rounded-xl -mt-5 relative z-[2] p-5 md:p-6 flex flex-col justify-between"
                style={{
                    boxShadow: isHovered
                        ? '0px 20px 40px rgba(0, 0, 0, 0.15), inset 0px 4px 4px rgba(0, 0, 0, 0.05)'
                        : '0px 4px 4px rgba(0, 0, 0, 0.2), inset 0px 4px 4px rgba(0, 0, 0, 0.1)',
                }}
            >
                <div className="flex justify-between items-start flex-wrap gap-3">
                    <div>
                        <motion.h2
                            className="text-xl md:text-[28px] font-bold m-0 mb-1 text-black font-['SF_Pro_Display',_sans-serif]"
                            animate={{ color: isHovered ? '#FF6F61' : '#000' }}
                            transition={{ duration: 0.3 }}
                        >
                            {project.title}
                        </motion.h2>
                        <p className="text-sm md:text-base text-[#666] font-bold m-0 font-['SF_Pro_Display',_sans-serif]">
                            {project.category}
                        </p>
                    </div>
                    {project.link ? (
                        <Link to={project.link}>
                            <motion.button
                                className="text-white font-semibold text-xs md:text-sm rounded-lg border-none cursor-pointer whitespace-nowrap font-['SF_Pro_Display',_sans-serif] px-4 md:px-6 py-2.5 md:py-3"
                                style={{
                                    background: 'linear-gradient(90deg, #FF6F61 0%, #FF9E80 100%)',
                                    boxShadow: '0 4px 0 #cc6a58, 0 6px 15px rgba(255, 111, 97, 0.3)',
                                }}
                                whileHover={{
                                    y: -3,
                                    boxShadow: '0 7px 0 #cc6a58, 0 10px 25px rgba(255, 111, 97, 0.5)'
                                }}
                                whileTap={{
                                    y: 2,
                                    boxShadow: '0 2px 0 #cc6a58, 0 3px 10px rgba(255, 111, 97, 0.3)'
                                }}
                                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                            >
                                View Case Study
                            </motion.button>
                        </Link>
                    ) : (
                        <motion.button
                            className="text-white font-semibold text-xs md:text-sm rounded-lg border-none cursor-pointer whitespace-nowrap font-['SF_Pro_Display',_sans-serif] px-4 md:px-6 py-2.5 md:py-3"
                            style={{
                                background: 'linear-gradient(90deg, #FF6F61 0%, #FF9E80 100%)',
                                boxShadow: '0 4px 0 #cc6a58, 0 6px 15px rgba(255, 111, 97, 0.3)',
                            }}
                            whileHover={{
                                y: -3,
                                boxShadow: '0 7px 0 #cc6a58, 0 10px 25px rgba(255, 111, 97, 0.5)'
                            }}
                            whileTap={{
                                y: 2,
                                boxShadow: '0 2px 0 #cc6a58, 0 3px 10px rgba(255, 111, 97, 0.3)'
                            }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        >
                            View Case Study
                        </motion.button>
                    )}
                </div>

                <div className="mt-3 flex flex-wrap gap-2 items-center">
                    {project.tags.map((tag, tagIndex) => (
                        <motion.span
                            key={tag}
                            className="inline-flex items-center justify-center bg-[#D6D6D6] text-[#444] px-3 md:px-[14px] py-1 md:py-[6px] rounded-full text-xs md:text-[13px] font-medium font-['SF_Pro_Display',_sans-serif] leading-none"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + tagIndex * 0.1 }}
                            whileHover={{
                                backgroundColor: '#FF856F',
                                color: 'white',
                                scale: 1.05
                            }}
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>

                <p className="text-sm md:text-base text-[#555] leading-relaxed mt-3 w-full font-['SF_Pro_Display',_sans-serif]">
                    {project.description}
                </p>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
