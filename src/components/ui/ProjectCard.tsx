import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface ProjectData {
    id: number;
    title: string;
    category: string;
    tags: string[];
    description: string | React.ReactNode;
    image: string;
    link?: string;
}

interface ProjectCardProps {
    project: ProjectData;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="bg-white rounded-[20px] overflow-hidden border border-[#d9d9d9] flex flex-col h-full"
            style={{
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.2)',
            }}
        >
            {/* Image Section — gradient background from Figma */}
            <div
                className="p-4 md:p-6"
                style={{
                    background: 'linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 22%, rgb(255, 241, 229) 61%, rgb(255, 255, 255) 87%, rgb(255, 255, 255) 100%)',
                }}
            >
                <motion.img
                    src={project.image}
                    alt={`${project.title} screens`}
                    className="w-full h-auto object-cover rounded-md cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {/* Content Section */}
            <div className="p-5 md:p-6 flex flex-col flex-1">
                {/* Header row: title + category + button */}
                <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                        <h3 className="font-['SF_Pro_Display',sans-serif] font-semibold text-xl md:text-[24px] text-black mb-1">
                            {project.title}
                        </h3>
                        <p className="font-['SF_Pro_Display',sans-serif] text-sm md:text-[16px] text-[#6f6864] mb-3">
                            {project.category}
                        </p>
                        {/* Tags shown as coral text */}
                        {project.tags.map((tag) => (
                            <p
                                key={tag}
                                className="font-['SF_Pro_Display',sans-serif] text-xs md:text-[14px] text-[#ff6f61] font-medium"
                            >
                                {tag}
                            </p>
                        ))}
                    </div>

                    {/* View Case Study button */}
                    {project.link ? (
                        <Link to={project.link} className="flex-shrink-0">
                            <motion.button
                                className="bg-gradient-to-r from-[#ff6f61] to-[#ff9e80] text-white rounded-[5px] px-3 md:px-4 py-2 font-['SF_Pro_Display',sans-serif] font-medium text-xs md:text-[14px] whitespace-nowrap border-none cursor-pointer"
                                whileHover={{ boxShadow: '0 4px 12px rgba(255, 111, 97, 0.4)' }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2 }}
                            >
                                View Case Study
                            </motion.button>
                        </Link>
                    ) : (
                        <motion.button
                            className="bg-gradient-to-r from-[#ff6f61] to-[#ff9e80] text-white rounded-[5px] px-3 md:px-4 py-2 font-['SF_Pro_Display',sans-serif] font-medium text-xs md:text-[14px] whitespace-nowrap border-none cursor-pointer flex-shrink-0"
                            whileHover={{ boxShadow: '0 4px 12px rgba(255, 111, 97, 0.4)' }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                        >
                            View Case Study
                        </motion.button>
                    )}
                </div>

                {/* Description */}
                <div className="font-['SF_Pro_Display',sans-serif] text-sm md:text-[16px] text-[#6f6864] leading-relaxed mt-4">
                    {project.description}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
