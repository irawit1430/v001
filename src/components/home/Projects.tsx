import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import projectFreshOut from '../../assets/project-fresh-out.png';
import projectBonder from '../../assets/Bonder.png';
import projectRecordz from '../../assets/1331 Recordz.png';
import projectBabyThrift from '../../assets/Baby Thrift.png';

const projects = [
    {
        id: 1,
        title: "Fresh Out",
        category: "Mobile Application | Social App",
        tags: ["Lead UX Designer"],
        description: "Led the design of a social media application focused on reducing loneliness and fostering meaningful connection within the veteran community.",
        image: projectFreshOut,
        link: "/projects/fresh-out"
    },
    {
        id: 2,
        title: "Bonder",
        category: "Mobile Application | Social App",
        tags: ["Lead UX Designer"],
        description: "Led the design of a social media application for Bonder, crafting a branded interface to support their collaboration with Life Time Fitness.",
        image: projectBonder,
        link: "/projects/bonder"
    },
    {
        id: 3,
        title: "1331 Recordz",
        category: "Website | Music Studio",
        tags: ["Lead UX Designer"],
        description: "Led UX design for 1331 Recordz, creating a unified website interface that interloops the studio and record label into a single cohesive platform.",
        image: projectRecordz,
        link: "/projects/1331-recordz"
    },
    {
        id: 4,
        title: "Baby Thrift",
        category: "Mobile Application | Thrifting App",
        tags: ["Lead UX Designer"],
        description: "Led the design of a community-driven mobile application for baby thrift shopping, connecting parents through sustainable resale and shared resources.",
        image: projectBabyThrift,
        link: "/projects/baby-thrift"
    }
];

import ProjectCard from '../ui/ProjectCard';

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
                        fontFamily: '"SF Pro Display", sans-serif',
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
                        fontFamily: '"SF Pro Display", sans-serif',
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
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}
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
                    <Link to="/projects" style={{ textDecoration: 'none' }}>
                        <motion.span
                            style={{
                                fontFamily: '"SF Pro Display", sans-serif',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                fontSize: '24px',
                                lineHeight: '29px',
                                textDecoration: 'none',
                                color: '#6F6864',
                                display: 'inline-block',
                                position: 'relative',
                                marginTop: '-2rem',
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
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Projects;
