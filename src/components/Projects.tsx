import React, { useState } from 'react';
import { motion } from 'framer-motion';

import projectFreshOut from '../assets/project-fresh-out.png';
import projectBonder from '../assets/Bonder.png';
import projectRecordz from '../assets/1331 Recordz.png';
import projectBabyThrift from '../assets/Baby Thrift.png';
import projectsBg from '../assets/images bg image.png';

const projects = [
    {
        id: 1,
        title: "Fresh Out",
        category: "Mobile Application | Social App",
        tags: ["Lead UX Designer"],
        description: "Led the design of a social media application focused on reducing loneliness and fostering meaningful connection within the veteran community.",
        image: projectFreshOut
    },
    {
        id: 2,
        title: "Bonder",
        category: "Mobile Application | Social App",
        tags: ["Lead UX Designer"],
        description: "Led the design of a social media application for Bonder, crafting a branded interface to support their collaboration with Life Time Fitness.",
        image: projectBonder
    },
    {
        id: 3,
        title: "1331 Recordz",
        category: "Website | Music Studio",
        tags: ["Lead UX Designer"],
        description: "Led UX design for 1331 Recordz, creating a unified website interface that interloops the studio and record label into a single cohesive platform.",
        image: projectRecordz
    },
    {
        id: 4,
        title: "Baby Thrift",
        category: "Mobile Application | Thrifting App",
        tags: ["Lead UX Designer"],
        description: "Led the design of a community-driven mobile application for baby thrift shopping, connecting parents through sustainable resale and shared resources.",
        image: projectBabyThrift
    }
];

// Simple Project Card Component (no 3D tilt)
const ProjectCard: React.FC<{ project: typeof projects[0]; index: number }> = ({ project, index }) => {
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

const Projects: React.FC = () => {
    return (
        <motion.section
            id="projects"
            style={{ padding: 'var(--spacing-lg) 0', background: 'var(--color-light)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <motion.h2
                    className="section-title"
                    style={{
                        fontFamily: '"SF Pro Display", "Inter", sans-serif',
                        fontWeight: 600,
                        fontSize: '34px',
                        lineHeight: '41px',
                        color: '#FF6F61',
                        textAlign: 'center',
                        marginBottom: '1rem'
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    Featured Projects
                </motion.h2>

                <motion.p
                    style={{
                        textAlign: 'left',
                        maxWidth: '885px',
                        margin: '0 auto 4rem',
                        fontFamily: '"SF Pro Display", "Inter", sans-serif',
                        fontWeight: 400,
                        fontSize: '20px',
                        lineHeight: '29px',
                        letterSpacing: '0.05em',
                        color: '#6F6864'
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                >
                    A showcase of recent work spanning from mobile apps, web applications, and comprehensive UX research projects.
                </motion.p>

                <motion.div
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '3rem' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </motion.div>

                <motion.div
                    style={{
                        textAlign: 'right',
                        marginTop: '2rem',
                        paddingRight: '20px'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                >
                    <motion.a
                        href="#"
                        style={{
                            fontFamily: '"SF Pro Display", "Inter", sans-serif',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '24px',
                            lineHeight: '29px',
                            textDecoration: 'none',
                            color: '#6F6864',
                            display: 'inline-block',
                            position: 'relative',
                            marginTop: '0rem',
                            marginBottom: '0rem'
                        }}
                        whileHover={{ x: 8, color: '#FF6F61' }}
                        transition={{ type: 'spring', stiffness: 400 }}
                    >
                        [ View All Projects → ]
                        <motion.span
                            style={{
                                position: 'absolute',
                                bottom: -4,
                                left: 0,
                                width: '100%',
                                height: '2px',
                                background: '#FF6F61',
                                transformOrigin: 'left'
                            }}
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Projects;
