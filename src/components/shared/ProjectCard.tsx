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
            style={{
                position: 'relative',
                width: '100%',
                maxWidth: '500px',
                margin: '0 auto'
            }}
        >
            {/* Animated glow border */}
            <motion.div
                style={{
                    position: 'absolute',
                    inset: -3,
                    borderRadius: '23px',
                    background: 'linear-gradient(135deg, #FF6F61, #FF9E80, #FFB69E, #FF6F61)',
                    backgroundSize: '300% 300%',
                    opacity: isHovered ? 0.1 : 0,
                    filter: 'blur(15px)',
                    zIndex: 0
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
                style={{
                    width: '100%',
                    height: '500px',
                    backgroundImage: `url(${projectsBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: isHovered
                        ? '0 25px 50px rgba(255, 111, 97, 0.3)'
                        : '0 10px 30px rgba(0, 0, 0, 0.1)'
                }}
            >
                <motion.img
                    src={project.image}
                    alt={project.title}
                    style={{
                        width: '90%',
                        height: 'auto',
                        objectFit: 'contain',
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
                style={{
                    width: '100%',
                    minHeight: '220px',
                    background: '#FFFFFF',
                    boxShadow: isHovered
                        ? '0px 20px 40px rgba(0, 0, 0, 0.15), inset 0px 4px 4px rgba(0, 0, 0, 0.05)'
                        : '0px 4px 4px rgba(0, 0, 0, 0.2), inset 0px 4px 4px rgba(0, 0, 0, 0.1)',
                    borderRadius: '5px',
                    marginTop: '-10px',
                    position: 'relative',
                    zIndex: 2,
                    boxSizing: 'border-box',
                    padding: '24px 30px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                        <motion.h2
                            style={{
                                fontSize: '28px',
                                fontWeight: 700,
                                margin: '0 0 4px 0',
                                color: '#000',
                                fontFamily: '"SF Pro Display", "Inter", sans-serif'
                            }}
                            animate={{ color: isHovered ? '#FF6F61' : '#000' }}
                            transition={{ duration: 0.3 }}
                        >
                            {project.title}
                        </motion.h2>
                        <p style={{
                            fontSize: '16px',
                            color: '#666',
                            fontWeight: 400,
                            margin: 0,
                            fontFamily: '"SF Pro Display", "Inter", sans-serif'
                        }}>{project.category}</p>
                    </div>
                    {project.link ? (
                        <Link to={project.link}>
                            <motion.button
                                className="btn"
                                style={{
                                    background: 'linear-gradient(90deg, #FF6F61 0%, #FF9E80 100%)',
                                    color: 'white',
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    fontSize: '14px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontFamily: '"SF Pro Display", "Inter", sans-serif',
                                    whiteSpace: 'nowrap',
                                    boxShadow: '0 4px 0 #cc6a58, 0 6px 15px rgba(255, 111, 97, 0.3)',
                                    position: 'relative',
                                    top: 0
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
                            className="btn"
                            style={{
                                background: 'linear-gradient(90deg, #FF6F61 0%, #FF9E80 100%)',
                                color: 'white',
                                padding: '12px 24px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '14px',
                                border: 'none',
                                cursor: 'pointer',
                                fontFamily: '"SF Pro Display", "Inter", sans-serif',
                                whiteSpace: 'nowrap',
                                boxShadow: '0 4px 0 #cc6a58, 0 6px 15px rgba(255, 111, 97, 0.3)',
                                position: 'relative',
                                top: 0
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

                <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                    {project.tags.map((tag, tagIndex) => (
                        <motion.span
                            key={tag}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#D6D6D6',
                                color: '#444',
                                padding: '6px 14px',
                                borderRadius: '20px',
                                fontSize: '13px',
                                fontWeight: 500,
                                fontFamily: '"SF Pro Display", "Inter", sans-serif',
                                lineHeight: '1'
                            }}
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

                <p style={{
                    fontSize: '16px',
                    color: '#555',
                    lineHeight: 1.5,
                    marginTop: '12px',
                    maxWidth: '100%',
                    fontFamily: '"SF Pro Display", "Inter", sans-serif'
                }}>{project.description}</p>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
