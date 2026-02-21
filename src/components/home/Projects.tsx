

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
        description: <>Led the design of a social media application focused on <strong>reducing loneliness</strong> and <strong>fostering meaningful connection</strong> within the veteran community.</>,
        image: projectFreshOut,
        link: "/projects/fresh-out"
    },
    {
        id: 2,
        title: "Bonder",
        category: "Mobile Application | Social App",
        tags: ["Lead UX Designer"],
        description: <>Led the design of a social media application for Bonder, crafting <strong>a branded interface</strong> to support their collaboration with <strong>Life Time Fitness</strong>.</>,
        image: projectBonder,
        link: "/projects/bonder"
    },
    {
        id: 3,
        title: "1331 Recordz",
        category: "Website | Music Studio",
        tags: ["Lead UX Designer"],
        description: <>Led UX design for 1331 Recordz, creating <strong>a unified website interface</strong> that interloops the studio and record label into <strong>a single cohesive platform</strong>.</>,
        image: projectRecordz,
        link: "/projects/1331-recordz"
    },
    {
        id: 4,
        title: "Baby Thrift",
        category: "Mobile Application | Thrifting App",
        tags: ["Lead UX Designer"],
        description: <>Led the design of <strong>a community-driven mobile application</strong> for baby thrift shopping, connecting parents through <strong>sustainable resale</strong> and <strong>shared resources</strong>.</>,
        image: projectBabyThrift,
        link: "/projects/baby-thrift"
    }
];

import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
    return (
        <section
            id="projects"
            className="bg-white max-w-[1440px] mx-auto px-4 pt-12 pb-8"
        >
            {/* Section Title */}
            <h2 className="font-['SF_Pro_Display',sans-serif] font-semibold text-[40px] text-[#ff6f61] text-center mb-4">
                Featured Projects
            </h2>

            {/* Subtitle */}
            <p className="font-['SF_Pro_Display',sans-serif] text-[24px] text-[#6f6864] text-left max-w-[960px] mx-auto mb-16 leading-normal tracking-[1.2px]">
                A showcase of recent work spanning from mobile apps, web applications,<br />
                and comprehensive UX research projects.
            </p>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>

            {/* View All Projects Link */}
            <div className="text-right">
                <Link
                    to="/projects"
                    className="font-['SF_Pro_Display',sans-serif] font-semibold text-[24px] text-[#6f6864] underline hover:text-[#ff6f61] transition-colors"
                >
                    [ View All Projects → ]
                </Link>
            </div>
        </section>
    );
};

export default Projects;
