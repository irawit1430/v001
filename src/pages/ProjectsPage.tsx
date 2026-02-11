import React, { useState } from 'react';
import { motion } from 'framer-motion';

import ProjectCard from '../components/ui/ProjectCard';

import projectFreshOut from '../assets/project-fresh-out.png';
import projectBonder from '../assets/Bonder.png';
import projectRecordz from '../assets/1331 Recordz.png';
import projectBabyThrift from '../assets/Baby Thrift.png';
import projectCoralWay from '../assets/Coral Way Lounge.png';
import projectRoomDesigner from '../assets/Room Designer.png';

// Define project types
type Category = 'APPLICATIONS' | 'UI' | 'EXTRAS';

interface Project {
    id: number;
    title: string;
    category: string;
    type: Category;
    role: string;
    description: string;
    image: string;
    link?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Fresh Out",
        category: "Mobile Application | Social App",
        type: 'APPLICATIONS',
        role: "Lead UX Designer",
        description: "Led the design of a social media application focused on reducing loneliness and fostering meaningful connection within the veteran community.",
        image: projectFreshOut,
        link: "/projects/fresh-out"
    },
    {
        id: 2,
        title: "Bonder",
        category: "Mobile Application | Social App",
        type: 'APPLICATIONS',
        role: "Lead UX Designer",
        description: "Led the design of a social media application for Bonder, crafting a branded interface to support their collaboration with Life Time Fitness.",
        image: projectBonder,
        link: "/projects/bonder"
    },
    {
        id: 3,
        title: "Baby Thrift",
        category: "Mobile Application | Social App",
        type: 'APPLICATIONS',
        role: "Lead UX Designer",
        description: "Led the design of a community-driven mobile application for baby thrift shopping, connecting parents through sustainable resale and shared resources.",
        image: projectBabyThrift,
        link: "/projects/baby-thrift"
    },
    {
        id: 4,
        title: "1331 Recordz",
        category: "Website | Music Studio",
        type: 'UI',
        role: "Lead UX Designer",
        description: "Led UX design for 1331 Recordz and created a unified website interface that interloops the studio and record label into a single cohesive platform.",
        image: projectRecordz,
        link: "/projects/1331-recordz"
    },
    {
        id: 5,
        title: "Coral Way Lounge",
        category: "Virtual Reality | Social Game",
        type: 'EXTRAS',
        role: "Lead UX Designer",
        description: "Conducted comprehensive UX research and designed complete user experience for a second hand baby products marketplace, improving navigations and check-out flow.",
        image: projectCoralWay
    },
    {
        id: 6,
        title: "Room Designer",
        category: "Mobile Application | Social App",
        type: 'APPLICATIONS',
        role: "Lead UX Designer",
        description: "Conducted comprehensive UX research and designed complete user experience for a second hand baby products marketplace, improving navigations and check-out flow.",
        image: projectRoomDesigner
    }
];



const ProjectsPage: React.FC = () => {
    const [filter, setFilter] = useState<'ALL' | Category>('ALL');

    const filteredProjects = filter === 'ALL'
        ? projects
        : projects.filter(p => p.type === filter);

    return (
        <div className="w-full min-h-screen bg-white font-['SF_Pro_Display',_sans-serif]">


            <div className="pt-[150px] pb-[100px] md:pt-[120px]">
                {/* Header Section */}
                <div className="text-center mb-[60px] px-5">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[40px] font-normal text-black mb-6 md:text-[48px]"
                    >
                        Projects
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[20px] leading-[32px] text-[#6F6864] max-w-[800px] mx-auto text-left"
                    >
                        <p>
                            A collection of design work that reflects how I approach storytelling, problem-solving, and creating experiences that connect with people.
                        </p>
                    </motion.div>
                </div>

                {/* Filter Section */}
                <div className="flex justify-center items-center gap-4 mb-[60px] flex-wrap px-5">
                    <span className="text-[20px] text-[#6F6864] font-medium mr-2">
                        FILTER: Showing All
                    </span>

                    <div className="flex gap-3 flex-wrap justify-center">
                        {(['ALL', 'APPLICATIONS', 'UI', 'EXTRAS'] as const).map((item) => (
                            <motion.button
                                key={item}
                                onClick={() => setFilter(item)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`py-2 px-6 rounded-full border-none text-[16px] font-medium cursor-pointer transition-all duration-200 ${filter === item ? 'bg-[#FF6F61] text-white' : 'bg-[#FFF1E5] text-[#FF6F61]'
                                    }`}
                            >
                                {item}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] max-w-[1440px] mx-auto px-5 md:px-[60px] lg:px-[120px]">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={{
                                ...project,
                                tags: [project.role]
                            }}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
