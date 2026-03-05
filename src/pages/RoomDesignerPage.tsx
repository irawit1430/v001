
import { HeroSection } from "../components/case-studies/new-template/layout/HeroSection";
import { ContentSection } from "../components/case-studies/new-template/layout/ContentSection";
import { TwoColumnSection } from "../components/case-studies/new-template/layout/TwoColumnSection";
import { SectionHeading } from "../components/case-studies/new-template/layout/SectionHeading";
import RoomDesignerCompetitiveAuditSection from "../components/case-studies/room-designer/RoomDesignerCompetitiveAuditSection";
import { useDesktopViewport } from "../hooks/useDesktopViewport";

import GetInTouchSection from "../components/sections/GetInTouchSection";
import { ProjectDetailGrid } from "../components/case-studies/new-template/cards/ProjectDetailGrid";
import { StepCard } from "../components/case-studies/new-template/cards/StepCard";
import { ImageGallery } from "../components/case-studies/new-template/cards/ImageGallery";
import ResearchOverview from "../components/case-studies/shared/ResearchOverview";
import KeyInsights from "../components/case-studies/shared/KeyInsights";
import { ImageLightbox } from "../components/ui/ImageLightbox";

// Import images

import discoveryImage1 from '../assets/discovery-1.png';
import discoveryImage2 from '../assets/discovery-2.png';
import discoveryImage3 from '../assets/discovery-3.png';
import iaImage from '../assets/information-architecture.png';
import userFlowImage from '../assets/user-flow.png';
import purchasingFlowImage from '../assets/purchasing-flow.png';

// LoFi Images
import hifiScreen1 from '../assets/hifi-screen-1.png';
import hifiScreen2 from '../assets/hifi-screen-2.png';
import hifiScreen3 from '../assets/hifi-screen-3.png';
import hifiScreen4 from '../assets/hifi-screen-4.png';


import welcomeScreen from '../assets/lofi-welcome.png';
import newArrivalScreen from '../assets/lofi-new-arrival.png';
import donateScreen from '../assets/lofi-donate.png';
import itemDetailsScreen from '../assets/lofi-item-details.png';

// Icons

import iconUserGroups from '../assets/new-icon-user-groups.png';
import iconRestart from '../assets/new-icon-restart.png';
import iconLineChart from '../assets/new-icon-line-chart.png';
import iconFeatures from '../assets/new-icon-features-list.png';

const projectDetails = [
    { label: "ROLE", value: "Lead UX Designer" },
    { label: "DURATION", value: "6 weeks | 2024" },
    { label: "PROTOTYPE", value: "Figma prototype link" },
    { label: "RESPONSIBILITIES", value: "Ideation, Design, Research, Prototyping" },
    { label: "TEAM SIZE", value: "Solo Project" },
    { label: "CATEGORY", value: "Interior Design app" },
];

const keyInsights = [
    { title: 'Personalization', description: 'Users expect design tools that adapt to their style preferences and room dimensions', icon: `${import.meta.env.BASE_URL}figmaAssets/image copy 38.png` },
    { title: 'Visualization Clarity', description: 'Unclear renders and limited 3D views hinder confident design decisions', icon: `${import.meta.env.BASE_URL}figmaAssets/image copy 39.png` },
    { title: 'Navigation Simplicity', description: 'Complex interfaces and overwhelming toolsets deter casual users from completing designs', icon: `${import.meta.env.BASE_URL}figmaAssets/image copy 40.png` },
    { title: 'Design Community', description: 'Existing platforms lack community features for sharing inspiration and gathering feedback', icon: `${import.meta.env.BASE_URL}figmaAssets/image copy 41.png` },
];

const researchLabels = [
    { icon: `${import.meta.env.BASE_URL}figmaAssets/speech-bubble-removebg-preview-1.svg`, label: "Discovery" },
    { icon: `${import.meta.env.BASE_URL}figmaAssets/twocellphones-removebg-preview--1--1.svg`, label: "Competitive Audit" },
    { icon: `${import.meta.env.BASE_URL}figmaAssets/chart-removebg-preview-2.svg`, label: "User Testing" },
    { icon: `${import.meta.env.BASE_URL}figmaAssets/lightbuldddd-removebg-preview-1.svg`, label: "Insight" },
];

const discoveryImages = [
    { src: discoveryImage1, alt: "Discovery Process 1", label: "Discovery Process" },
    { src: discoveryImage2, alt: "Discovery Process 2", label: "Ideation" },
    { src: discoveryImage3, alt: "Discovery Process 3", label: "Sketches" },
];

const lofiImages = [
    { src: welcomeScreen, alt: "Welcome Screen Wireframe", label: "Welcome Screen", sublabel: "Login or sign up" },
    { src: newArrivalScreen, alt: "Browse Rooms Screen Wireframe", label: "Browse Rooms Screen", sublabel: "Explore curated room designs" },
    { src: donateScreen, alt: "Create Design Screen Wireframe", label: "Create Design Screen", sublabel: "Start a new room project" },
    { src: itemDetailsScreen, alt: "Room Details Screen Wireframe", label: "Room Details Screen", sublabel: "Main home screen" },
];

const hifiImages = [
    { src: hifiScreen1, alt: "Hi-Fi Screen 1", label: "Home Screen" },
    { src: hifiScreen2, alt: "Hi-Fi Screen 2", label: "Room Gallery" },
    { src: hifiScreen3, alt: "Hi-Fi Screen 3", label: "Design Studio" },
    { src: hifiScreen4, alt: "Hi-Fi Screen 4", label: "Profile" },
];

const nextSteps = [
    {
        icon: iconFeatures,
        title: "User Testing",
        description: "Conduct usability testing with target users to validate design decisions and identify pain points.",
    },
    {
        icon: iconLineChart,
        title: "Iterate & Refine",
        description: "Incorporate feedback to improve the user experience and address any discovered issues.",
    },
    {
        icon: iconRestart,
        title: "Analytics Integration",
        description: "Implement tracking to measure key metrics like user engagement and retention rates.",
    },
    {
        icon: iconUserGroups,
        title: "Future Features",
        description: "Explore premium features like AR room preview, AI design suggestions, and collaborative design sessions.",
    },
];


const RoomDesignerPage = () => {
    useDesktopViewport();

    return (
        <div className="min-h-screen bg-[#FFFFFF] overflow-hidden w-full">


            <HeroSection
                title="Room Designer"
                subtitle="Interior Design Application"
                imageSrc={`${import.meta.env.BASE_URL}figmaAssets/baby thrive hero image.jpeg`}
                imageAlt="Room Designer App Screens"
                imageClassName="w-full max-w-[1000px] h-auto object-contain"
                imageContainerClassName="relative z-0 w-full flex justify-center -mt-14 md:-mt-28"
            />

            {/* Project Details */}
            <ContentSection bgColor="bg-[#F9FAFB]">
                <ProjectDetailGrid details={projectDetails} />
            </ContentSection>

            {/* Problem Statement */}
            <TwoColumnSection
                left={<SectionHeading title="Problem Statement:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="text-[#6F6864] leading-relaxed text-center md:text-left">
                            <span className="text-lg md:text-[34px] md:leading-[41px] font-medium">
                                Many homeowners and renters struggle to visualize how furniture and décor will look in their spaces,{" "}
                            </span>
                            <span className="text-lg md:text-[30px] md:leading-[36px]">
                                leading to costly mistakes, cluttered rooms, and frustration. This challenge is amplified by the lack of accessible, intuitive tools that help everyday users design rooms that reflect their personal style.
                            </span>
                        </p>
                        <p className="text-[#6F6864] leading-relaxed text-center md:text-left">
                            <span className="text-lg md:text-[30px] md:leading-[36px]">
                                💡
                            </span>
                            <span className="text-lg md:text-[34px] md:leading-[41px] font-medium">
                                {" "}In response to this problem
                            </span>
                            <span className="text-lg md:text-[30px] md:leading-[36px] font-medium">
                                ,{" "}
                            </span>
                            <span className="text-lg md:text-[30px] md:leading-[36px]">
                                users seek a reliable and intuitive room design experience that supports confident decision-making by emphasizing visualization, personalization, and a streamlined path from inspiration to final layout.
                            </span>
                        </p>
                    </div>
                }
            />

            {/* Research Overview */}
            <ResearchOverview
                backgroundColor="bg-[#5C3D2E]"
                description="A combination of discovery research, competitive analysis, and early user exploration helped reveal the challenges users face when trying to design and visualize their ideal living spaces."
                cards={researchLabels}
            />

            {/* Discovery */}
            <TwoColumnSection
                left={<SectionHeading title="Discovery:" />}
                right={
                    <div className="flex flex-col gap-5">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] text-center">Understanding the Problem Space:</p>
                        <div className="text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] text-center md:text-left">
                            <p>
                                <span className="font-medium">Users designing their living spaces must balance aesthetics with functionality and budget.</span>
                                <span> Research focused on how users evaluate room layouts, choose furniture placement, and make design decisions using digital tools.</span>
                            </p>
                            <p className="mt-5">
                                <span>Through early exploration, </span>
                                <span className="font-medium">several recurring themes emerged.</span>
                                <span> Users expressed frustration with complex interfaces, unrealistic renderings, and limited customization options. </span>
                                <span className="font-medium">These issues often led to abandonment, decision fatigue, and dissatisfaction</span>
                                <span> with existing room design tools.</span>
                            </p>
                        </div>
                    </div>
                }
            />
            <ContentSection className="!py-0">
                <ImageGallery images={discoveryImages} columns={3} />
            </ContentSection>

            {/* User Survey Research */}
            <ContentSection className="!py-16 md:!py-24" bgColor="bg-white">
                <SectionHeading title="User Survey Research:" className="mb-6" />

                {/* Horizontal Divider */}
                <div className="w-full h-[1px] bg-gray-200 mb-12"></div>

                {/* Overview Block */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 items-start">
                    <div className="shrink-0 pt-1">
                        <div className="inline-flex items-center justify-center bg-[#492300] rounded-[6px] px-6 py-2.5">
                            <span className="text-white font-medium text-[18px] md:text-[20px]">Overview</span>
                        </div>
                    </div>
                    <div className="max-w-[800px]">
                        <p className="text-[#6F6864] text-[18px] md:text-[22px] leading-relaxed font-normal text-center md:text-left">
                            To better understand users' experiences with room design, furniture shopping, and spatial planning, I <span className="font-medium">conducted a Zoom-based survey</span> with homeowners and renters ages 22-45.
                        </p>
                    </div>
                </div>

                {/* Goal Text */}
                <div className="mb-16 md:mb-24">
                    <p className="text-[#6F6864] text-[20px] md:text-[24px] leading-snug md:leading-[36px] font-medium max-w-[1000px] ml-0 md:ml-2 text-center md:text-left">
                        The goal of this research was to identify behaviors, pain points, and opportunities related to room design tools, visualization needs, and how users seek inspiration and support.
                    </p>
                </div>

                {/* Two-Column Layout */}
                <div className="flex flex-col lg:flex-row relative gap-16 lg:gap-8 justify-between">
                    {/* Left Column */}
                    <div className="flex-1 lg:max-w-[48%] flex flex-col gap-12">
                        {/* Participants Section */}
                        <div>
                            {/* Pill Grid */}
                            <div className="flex flex-wrap items-center gap-3 mb-8">
                                <div className="inline-flex items-center justify-center bg-[#492300] rounded-[6px] px-6 py-2.5">
                                    <span className="text-white font-medium text-[18px] md:text-[20px]">Participants</span>
                                </div>
                                <div className="bg-[#F4EFE2] rounded-[6px] flex items-center gap-2.5 px-3 py-2">
                                    <div className="flex items-center justify-center bg-transparent">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#492300" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="5" r="3" /><path d="M9.5 10c0-1.7-1.3-3-3-3h-1c-1.7 0-3 1.3-3 3v6h2v6h4v-6h2v-6z" /><path d="M11 11.5l3.5-4 4.5 4z" /><path d="M11 12.5v3h11v-3z" /><circle cx="14" cy="18" r="2" /><circle cx="19" cy="18" r="2" /></svg>
                                    </div>
                                    <span className="text-[#492300] font-medium text-[16px] md:text-[18px]">12 Participants</span>
                                </div>
                                <div className="bg-[#F4EFE2] rounded-[6px] flex items-center gap-2.5 px-3 py-2">
                                    <div className="flex items-center justify-center bg-transparent">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#492300" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M7 2v4M17 2v4" stroke="#492300" strokeWidth="2" strokeLinecap="round" /><rect x="6" y="9" width="3" height="3" fill="white" /><rect x="10.5" y="9" width="3" height="3" fill="white" /><rect x="15" y="9" width="3" height="3" fill="white" /><rect x="6" y="13.5" width="3" height="3" fill="white" /><rect x="10.5" y="13.5" width="3" height="3" fill="white" /><rect x="15" y="13.5" width="3" height="3" fill="white" /><rect x="6" y="18" width="3" height="3" fill="white" /><rect x="10.5" y="18" width="3" height="3" fill="white" /><rect x="15" y="18" width="3" height="3" fill="white" /></svg>
                                    </div>
                                    <span className="text-[#492300] font-medium text-[16px] md:text-[18px]">Ages 22-45</span>
                                </div>
                                <div className="bg-[#F4EFE2] rounded-[6px] flex items-center gap-2.5 px-3 py-2 mt-1 lg:mt-0">
                                    <div className="flex items-center justify-center bg-transparent">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#492300" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="3" /><path d="M16 13c0-2-2-3-4-3s-4 1-4 3v3h8v-3z" /><circle cx="6" cy="8" r="2.5" /><path d="M10 16v-2c0-.52-.16-1.02-.45-1.45A3.95 3.95 0 0 0 6 11c-1.66 0-3 1-3 2.5V16h7z" /><circle cx="18" cy="8" r="2.5" /><path d="M21 16v-2.5c0-1.5-1.34-2.5-3-2.5a3.95 3.95 0 0 0-3.55 1.55c.29.43.45.93.45 1.45v2h6z" /><circle cx="12" cy="17" r="2.5" /><path d="M16 23v-1.5c0-1.5-1.5-2.5-4-2.5s-4 1-4 2.5V23h8z" /></svg>
                                    </div>
                                    <span className="text-[#492300] font-medium text-[16px] md:text-[18px]">8 Homeowners, 4 Renters</span>
                                </div>
                                <div className="bg-[#F4EFE2] rounded-[6px] flex items-center gap-2.5 px-3 py-2 mt-1 lg:mt-0">
                                    <div className="flex items-center justify-center bg-transparent">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#492300" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="14" height="20" rx="3" /><circle cx="9" cy="6" r="1.5" fill="white" /><circle cx="9" cy="11" r="1.5" fill="white" /><circle cx="12" cy="8.5" r="1" fill="white" /></svg>
                                    </div>
                                    <span className="text-[#492300] font-medium text-[16px] md:text-[18px]">Mobile-First</span>
                                </div>
                            </div>

                            <ul className="list-disc pl-5 space-y-2 text-[#6F6864] font-normal text-[18px] md:text-[22px] md:leading-[32px] ml-2">
                                <li>Rooms ranging from <span className="font-medium">bedrooms to living spaces</span></li>
                                <li>Mix of <span className="font-medium">first-time decorators</span> and <span className="font-medium">design enthusiasts</span></li>
                                <li>All participants regularly <span className="font-medium">shop</span> for home furniture and décor</li>
                                <li>Majority reported using <span className="font-medium">mobile devices</span> for browsing inspiration and planning</li>
                            </ul>
                        </div>

                        {/* Methodology */}
                        <div>
                            <div className="inline-flex items-center justify-center bg-[#492300] rounded-[6px] px-6 py-2.5 mb-6">
                                <span className="text-white font-medium text-[16px] md:text-[20px]">Methodology</span>
                            </div>
                            <p className="text-[#6F6864] font-medium text-[18px] md:text-[22px] md:leading-[32px] ml-1 text-center md:text-left">
                                The survey was conducted through one-on-one Zoom sessions using a semi-structured format. Each session followed a set of 8 open ended questions designed to encourage participants to share their experiences and challenges in their own words.
                            </p>
                        </div>

                        {/* Sample Questions */}
                        <div>
                            <div className="inline-flex items-center justify-center bg-[#492300] rounded-[6px] px-6 py-2.5 mb-6">
                                <span className="text-white font-medium text-[16px] md:text-[20px]">Sample Questions</span>
                            </div>
                            <ul className="list-disc pl-5 space-y-2 text-[#6F6864] font-medium text-[18px] md:text-[22px] md:leading-[32px] ml-1">
                                <li>How do you <span className="font-medium">plan and design</span> your living spaces?</li>
                                <li>What <span className="font-medium">challenges do you face</span> when trying to visualize room layouts?</li>
                                <li>What factors help you <span className="font-medium">feel confident</span> about a design decision?</li>
                            </ul>
                        </div>
                    </div>

                    {/* Vertical Line Divider */}
                    <div className="hidden lg:block w-[1px] bg-[#D9D9D9] self-stretch mx-2"></div>

                    {/* Right Column */}
                    <div className="flex-1 lg:max-w-[48%] flex flex-col pt-2 lg:pt-0">
                        {/* Key Findings header */}
                        <div className="inline-flex items-center justify-center bg-[#492300] rounded-[6px] px-6 py-2.5 mb-8 self-start">
                            <span className="text-white font-medium text-[16px] md:text-[20px]">Key Findings</span>
                        </div>

                        {/* Ellipses key findings */}
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full bg-[#F4EFE2] flex items-center justify-center shrink-0">
                                    <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-piggy.png`} alt="" className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] object-contain" />
                                </div>
                                <p className="text-[#6F6864] text-[18px] md:text-[22px] leading-snug md:leading-[30px] font-normal">
                                    Users value <span className="font-medium">style and aesthetics but prioritize functionality and space efficiency</span> when designing rooms
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full bg-[#F4EFE2] flex items-center justify-center shrink-0">
                                    <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-phones.png`} alt="" className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] object-contain" />
                                </div>
                                <p className="text-[#6F6864] text-[18px] md:text-[22px] leading-snug md:leading-[30px] font-normal">
                                    Many users try <span className="font-medium">design tools</span> but feel overwhelmed by <span className="font-medium">complex interfaces and unrealistic previews.</span>
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full bg-[#F4EFE2] flex items-center justify-center shrink-0">
                                    <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-camera.png`} alt="" className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] object-contain" />
                                </div>
                                <p className="text-[#6F6864] text-[18px] md:text-[22px] leading-snug md:leading-[30px] font-normal">
                                    <span className="font-medium">Realistic 3D views and accurate measurements</span> play a major role in <span className="font-medium">design confidence</span>
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full bg-[#F4EFE2] flex items-center justify-center shrink-0">
                                    <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-chat.png`} alt="" className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] object-contain" />
                                </div>
                                <p className="text-[#6F6864] text-[18px] md:text-[22px] leading-snug md:leading-[30px] font-normal">
                                    Users often rely on <span className="font-medium">social media platforms</span> such as Pinterest, Instagram, or design blogs for room inspiration and advice.
                                </p>
                            </div>
                        </div>

                        {/* Quote Box */}
                        <div className="bg-[#F4EFE2] rounded-[10px] flex items-center p-8 mt-12 mb-12 relative w-full lg:max-w-[576px] lg:h-[178px]">
                            <span className="absolute top-6 left-6 text-[50px] md:text-[60px] text-[#492300] font-serif leading-none">"</span>
                            <div className="ml-12 md:ml-10 mt-4 text-center md:text-left">
                                <p className="text-[#492300] font-medium text-[16px] md:text-[24px] leading-snug italic relative z-10 pt-2">
                                    I wish I could see exactly how furniture would look in my room before buying it
                                </p>
                                <p className="text-[#492300] text-[14px] md:text-[22px] mt-2 md:mt-4 font-normal">
                                    Survey Participant
                                </p>
                            </div>
                        </div>

                        {/* Impact on Design */}
                        <div>
                            <div className="inline-flex items-center justify-center bg-[#492300] rounded-[6px] px-6 py-2.5 mb-6 self-start">
                                <span className="text-white font-medium text-[16px] md:text-[20px]">Impact on Design</span>
                            </div>
                            <ul className="list-disc pl-5 space-y-3 text-[#6F6864] font-medium text-[18px] md:text-[22px] md:leading-[32px] ml-1">
                                <li>Emphasize realistic 3D visualization and accurate measurements</li>
                                <li>Use intuitive drag-and-drop interfaces for furniture placement</li>
                                <li>Design mobile-first for on-the-go inspiration and planning</li>
                                <li>Leverage community galleries and social sharing for inspiration</li>
                                <li>Balance customization depth with ease of use</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* Competitive Audit */}
            <RoomDesignerCompetitiveAuditSection />

            {/* Key Insights */}
            <KeyInsights
                backgroundColor="bg-[#5C3D2E]"
                description="These insights summarize the most important patterns uncovered during research and discovery, highlighting the core challenges users face when trying to find accessible, intuitive room design solutions."
                insights={keyInsights}
                textColor="text-white"
            />

            {/* How Might We */}
            <TwoColumnSection
                left={<SectionHeading title="How Might We?" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] leading-tight text-center md:text-left">
                            Turning insights into opportunity through the right questions.
                        </p>
                        <ul className="space-y-4 text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] text-center md:text-left">
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we help users confidently visualize room layouts before making purchases?</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we improve clarity around spatial dimensions and furniture scale?</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we simplify the design process for casual users on mobile?</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we create a design community that fosters inspiration and shared feedback?</span>
                            </li>
                        </ul>
                    </div>
                }
            />

            <ContentSection className="!py-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1100px] mx-auto">
                    <ImageLightbox src={`${import.meta.env.BASE_URL}figmaAssets/image copy 35.png`} alt="How might we process 1">
                        <img
                            className="w-full h-auto object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                            alt="How might we process 1"
                            src={`${import.meta.env.BASE_URL}figmaAssets/image copy 35.png`}
                        />
                    </ImageLightbox>
                    <ImageLightbox src={`${import.meta.env.BASE_URL}figmaAssets/image copy 36.png`} alt="How might we process 2">
                        <img
                            className="w-full h-auto object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                            alt="How might we process 2"
                            src={`${import.meta.env.BASE_URL}figmaAssets/image copy 36.png`}
                        />
                    </ImageLightbox>
                    <ImageLightbox src={`${import.meta.env.BASE_URL}figmaAssets/image copy 37.png`} alt="How might we process 3">
                        <img
                            className="w-full h-auto object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                            alt="How might we process 3"
                            src={`${import.meta.env.BASE_URL}figmaAssets/image copy 37.png`}
                        />
                    </ImageLightbox>
                </div>
            </ContentSection>

            {/* Solution Overview */}
            <TwoColumnSection
                left={<SectionHeading title="Solution Overview:" />}
                right={
                    <div className="flex flex-col">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] leading-tight mb-8 text-center md:text-left">
                            Turning insights into an intuitive, user-centered room design tool.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            Room Designer is a user-focused interior design application designed to make planning, visualizing, and furnishing rooms simple, inspiring, and efficient.
                        </p>
                        <div className="mt-12 text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            <p className="font-medium text-xl md:text-[34px] md:leading-[41px] mb-6">
                                The solution is shaped by four core goals:
                            </p>
                            <ol className="list-decimal pl-5 space-y-6 md:space-y-8">
                                <li className="pl-2">Enable users to visualize their ideal rooms with realistic 3D previews</li>
                                <li className="pl-2">Create an intuitive design environment accessible to beginners and enthusiasts alike</li>
                                <li className="pl-2">Reduce the complexity of professional tools to focus on everyday room planning</li>
                                <li className="pl-2">Support community-building through shared inspiration and design galleries</li>
                            </ol>
                        </div>
                    </div>
                }
            />

            {/* Architecture */}
            <TwoColumnSection
                left={<SectionHeading title="Information Architecture:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] leading-relaxed text-center md:text-left">
                            To translate research insights into a clear product structure, I mapped Room Designer's core navigation system.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            The information architecture outlines how users move through key areas of the application, from browsing inspiration and selecting room templates to customizing layouts and sharing designs with the community.
                        </p>
                    </div>
                }
            />
            <ContentSection bgColor="bg-[#F9F9F9]" className="!py-4 rounded-2xl">
                <img src={iaImage} alt="IA Diagram" className="w-full max-w-[800px] mx-auto h-auto rounded-xl" />
            </ContentSection>

            {/* User Flows */}
            <TwoColumnSection
                className="!pb-5"
                left={<SectionHeading title="User Flows:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] text-center md:text-left">
                            These user flows outline the key steps users take inside the app.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            Mapping them early allowed me to validate the logic of each path and confirm that the experience remains seamless from onboarding to final design export.
                        </p>
                    </div>
                }
            />
            <ContentSection className="!px-6 md:!px-16 lg:!px-24 w-full max-w-full">
                <div className="space-y-16 w-full max-w-[1200px] mx-auto">
                    {/* Account Creation - 2 column layout */}
                    <div className="w-full overflow-hidden">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] mb-8 lg:mb-12 text-center md:text-left">Account Creation</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                            <img src={userFlowImage} alt="Account Creation Flow" className="w-full max-w-[450px] lg:max-w-none h-auto rounded-xl mx-auto lg:mx-0 object-contain" />
                            <div className="flex flex-col gap-6 lg:gap-8 pt-0 lg:pt-16">
                                <h3 className="text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] font-medium text-center md:text-left">
                                    These user flows map the key decision points users encounter while using Room Designer.
                                </h3>
                                <p className="text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] font-normal text-center md:text-left">
                                    The account creation flow is presented vertically to emphasize onboarding logic and authentication states, while the design flow is presented horizontally to reflect a linear, end-to-end room design journey. Mapping these flows early helped validate system logic, reduce friction, and ensure a seamless experience from launch to design export.
                                </p>

                                <div className="mt-4 md:mt-8">
                                    <h4 className="text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] font-medium mb-4 lg:mb-6 text-center md:text-left">This:</h4>
                                    <ul className="list-disc pl-8 space-y-2 text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] font-normal">
                                        <li className="pl-2">Explains why the layouts differ</li>
                                        <li className="pl-2">Frames it as intentional UX reasoning</li>
                                        <li className="pl-2">Sounds confident and professional</li>
                                        <li className="pl-2">Keeps things concise</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Design Flow */}
                    <div className="overflow-hidden pt-8">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] mb-8 lg:mb-12 text-center md:text-left">Design Flow</p>
                        <img src={purchasingFlowImage} alt="Design Flow" className="w-full h-auto rounded-xl" />
                    </div>
                </div>
            </ContentSection>

            {/* Lo-Fi Wireframes */}
            <TwoColumnSection
                left={<SectionHeading title="Lo-Fi Wireframes:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            To support the Room Designer application, <span className="font-semibold">I created Lo-Fi wireframes that outline key user journeys and essential functionality.</span> This step prioritized usability, clarity, and intuitive layout flow to ensure a smooth and accessible experience before refining visual design.
                        </p>
                    </div>
                }
            />
            <ContentSection bgColor="bg-[#6F6864]">
                <ImageGallery images={lofiImages} columns={4} centerLabels />
            </ContentSection>

            {/* Hi-Fi Wireframes */}
            <TwoColumnSection
                left={<SectionHeading title="Hi-Fi Wireframes:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] text-center md:text-left">
                            The Hi-Fi designs brought the app's visual identity to life.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            Moving into high-fidelity screens allowed the design to refine visualization tools, improve clarity around spatial layouts, and create a warm, inviting interface. Thoughtful color, typography, and layout choices work together to support confident room design and community inspiration.
                        </p>
                    </div>
                }
            />
            <ContentSection className="!py-0">
                <ImageGallery images={hifiImages} columns={4} />
                <div className="mt-16 md:mt-24 max-w-[1100px] mx-auto">
                    <p className="text-[#6F6864] text-base md:text-[28px] md:leading-[33px] leading-relaxed text-center md:text-left max-w-[1146px] mx-auto mb-10 md:mb-16">
                        A collection of key screens from the mobile design experience, designed with a focus on consistency, clarity, and visual cohesion. Each screen reflects a unified design system and supports an intuitive, easy-to-navigate interface.
                    </p>
                </div>
            </ContentSection>

            <div className="w-full">
                <img className="w-full h-auto" alt="HiFi Collection" src={`${import.meta.env.BASE_URL}figmaAssets/image copy 16.png`} />
            </div>

            {/* Key Features */}
            <TwoColumnSection
                left={<SectionHeading title="Key Features:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] text-center md:text-left">
                            Designing for Visualization, Simplicity, and Inspiration
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            <span className="font-medium">Users designing their living spaces must balance aesthetics with functionality and budget.</span> Research focused on how users evaluate room layouts, choose furniture placement, and make design decisions using digital tools.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            <span className="font-medium">Through early exploration, several recurring themes emerged.</span> Users expressed frustration with complex interfaces, unrealistic renderings, and limited customization options. <span className="font-medium">These issues often led to abandonment, decision fatigue, and dissatisfaction with existing room design tools.</span>
                        </p>
                    </div>
                }
            />
            <ContentSection bgColor="bg-[#3E2613]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-start gap-[10px] text-center w-full max-w-[261px] mx-auto h-[251px]">
                        <img src={`${import.meta.env.BASE_URL}figmaAssets/image copy 42.png`} alt="Style Guidance" className="w-14 h-14 object-contain mx-auto" />
                        <h4 className="text-lg font-semibold text-[#3E2613] m-0">Style Guidance</h4>
                        <p className="text-sm text-[#6F6864] leading-relaxed m-0">Access curated style guides, mood boards, and design tips to help users make confident room design choices.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-start gap-[10px] text-center w-full max-w-[261px] mx-auto h-[251px]">
                        <img src={`${import.meta.env.BASE_URL}figmaAssets/image copy 43.png`} alt="3D Visualization" className="w-14 h-14 object-contain mx-auto" />
                        <h4 className="text-lg font-semibold text-[#3E2613] m-0">3D Visualization</h4>
                        <p className="text-sm text-[#6F6864] leading-relaxed m-0">View realistic 3D renders of your room with accurate dimensions, lighting, and material previews.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-start gap-[10px] text-center w-full max-w-[261px] mx-auto h-[251px]">
                        <img src={`${import.meta.env.BASE_URL}figmaAssets/image copy 44.png`} alt="Design Community" className="w-14 h-14 object-contain mx-auto" />
                        <h4 className="text-lg font-semibold text-[#3E2613] m-0">Design Community</h4>
                        <p className="text-sm text-[#6F6864] leading-relaxed m-0">Share your designs, browse community galleries, and get feedback from fellow design enthusiasts.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-start gap-[10px] text-center w-full max-w-[261px] mx-auto h-[251px]">
                        <img src={`${import.meta.env.BASE_URL}figmaAssets/image copy 45.png`} alt="Smart Templates" className="w-14 h-14 object-contain mx-auto" />
                        <h4 className="text-lg font-semibold text-[#3E2613] m-0">Smart Templates</h4>
                        <p className="text-sm text-[#6F6864] leading-relaxed m-0">Start with professionally curated room templates and customize them to match your personal style and space.</p>
                    </div>
                </div>
            </ContentSection>

            {/* Next Steps */}
            < ContentSection >
                <SectionHeading
                    title="Next Steps:"
                    description="Road map for future development and continuous improvement"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                    {nextSteps.map((step, index) => (
                        <StepCard key={index} {...step} iconClassName="w-14 h-14" iconContainerClassName="w-14 h-14 bg-transparent" />
                    ))}
                </div>
                <p className="mt-12 text-center text-[#6F6864] text-base md:text-[28px] md:leading-[33px] max-w-5xl mx-auto">
                    Thank you for reviewing this case study. I'm always open to feedback and would love to discuss how these design solutions could be applied to your projects.
                </p>
            </ContentSection >

            {/* Contact CTA */}
            < GetInTouchSection theme="dark" bgColor="bg-[#492300]" buttonBgColor="#B6936E" buttonTextColor="white" />

        </div >
    );
};

export default RoomDesignerPage;
