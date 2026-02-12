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
            className="py-16 md:py-24 bg-[var(--color-light)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
                <motion.h2
                    className="section-title font-['SF_Pro_Display',_sans-serif] font-semibold text-2xl md:text-[34px] leading-tight text-[#FF6F61] text-center mb-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    Featured Projects
                </motion.h2>

                <motion.p
                    className="text-left max-w-[885px] mx-auto mb-16 font-['SF_Pro_Display',_sans-serif] font-normal text-base md:text-xl leading-relaxed tracking-wide text-[#6F6864]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                >
                    A showcase of recent work spanning from mobile apps, web applications, and comprehensive UX research projects.
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
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
                    className="text-right mt-8 pr-0 md:pr-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                >
                    <Link to="/projects" className="no-underline">
                        <motion.span
                            className="font-['SF_Pro_Display',_sans-serif] font-semibold text-lg md:text-2xl no-underline text-[#6F6864] inline-block relative"
                            whileHover={{ x: 8, color: '#FF6F61' }}
                            transition={{ type: 'spring', stiffness: 400 }}
                        >
                            [ View All Projects → ]
                            <motion.span
                                className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#FF6F61]"
                                style={{ transformOrigin: 'left' }}
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
