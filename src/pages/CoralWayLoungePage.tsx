
import { HeroSection } from "../components/case-studies/new-template/layout/HeroSection";
import { ContentSection } from "../components/case-studies/new-template/layout/ContentSection";
import { TwoColumnSection } from "../components/case-studies/new-template/layout/TwoColumnSection";
import { SectionHeading } from "../components/case-studies/new-template/layout/SectionHeading";

import GetInTouchSection from "../components/sections/GetInTouchSection";
import { ProjectDetailGrid } from "../components/case-studies/new-template/cards/ProjectDetailGrid";
import { StepCard } from "../components/case-studies/new-template/cards/StepCard";

import ResearchOverview from "../components/case-studies/shared/ResearchOverview";
import { useDesktopViewport } from "../hooks/useDesktopViewport";



const projectDetails = [
    { label: "ROLE", value: "Lead UX Designer" },
    { label: "DURATION", value: "12 weeks | 2025" },
    { label: "PROTOTYPE", value: "Figma prototype link" },
    { label: "RESPONSIBILITIES", value: "Leading Design, Research, and Dev" },
    { label: "TEAM SIZE", value: "4 Person Project" },
    { label: "CATEGORY", value: "Virtual Reality" },
];


const researchLabels = [
    { icon: `${import.meta.env.BASE_URL}figmaAssets/speech-bubble-removebg-preview-1.svg`, label: "Discovery" },
    { icon: `${import.meta.env.BASE_URL}figmaAssets/chart-removebg-preview-2.svg`, label: "User Testing" },
    { icon: `${import.meta.env.BASE_URL}figmaAssets/twocellphones-removebg-preview--1--1.svg`, label: "Competitive Audit" },
    { icon: `${import.meta.env.BASE_URL}figmaAssets/lightbuldddd-removebg-preview-1.svg`, label: "Insight" },
];



const nextSteps = [
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/user-groups.png`,
        title: "User Walkthrough Testing",
        description: "Conduct usability testing with target users to validate design decisions and identify pain points.",
    },
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/restart.png`,
        title: "Atmosphere & Sensory Refinement",
        description: "Incorporate feedback to improve the user experience and address any discovered issues.",
    },
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/line-chart.png`,
        title: "Interaction & Flow Optimization",
        description: "Implement tracking to measure key metrics like user engagement and retention rates.",
    },
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/features-list.png`,
        title: "Expanded Experiences",
        description: "Explore premium features like event creation, business partnerships, and community moderation tools.",
    },
];





const CoralWayLoungePage = () => {
    useDesktopViewport();

    return (
        <div className="bg-white overflow-hidden w-full">


            <HeroSection
                title="Coral Way Lounge"
                subtitle="Virtual Reality Experience & Game"
                imageSrc={`${import.meta.env.BASE_URL}figmaAssets/image copy 21.png`}
                imageAlt="Coral Way Lounge hero image"
                imageClassName="w-full max-w-[1000px] h-auto object-contain"
                imageContainerClassName="relative z-0 w-full flex justify-center -mt-14 md:-mt-28"
            />

            {/* Project Details */}
            <ContentSection bgColor="bg-[#F9FAFB]">
                <ProjectDetailGrid details={projectDetails} />
            </ContentSection>

            {/* Problem Statement */}
            <TwoColumnSection
                left={
                    <SectionHeading title="Problem Statement:" />
                }
                right={
                    <div className="flex flex-col gap-6">
                        <p className="text-[#6F6864] leading-relaxed text-center md:text-left">
                            <span className="text-lg md:text-[34px] md:leading-[41px] font-medium">
                                Many VR environments prioritize visual spectacle over emotional comfort, which can leave users feeling detached or overwhelmed.{" "}
                            </span>
                            <span className="text-lg md:text-[30px] md:leading-[36px]">
                                When virtual spaces lack warmth, natural cues, and meaningful interactivity, it becomes difficult for users to feel grounded or present within the experience.
                            </span>
                        </p>
                        <p className="text-[#6F6864] leading-relaxed text-center md:text-left">
                            <span className="text-lg md:text-[30px] md:leading-[36px]">
                                💡
                            </span>
                            <span className="text-lg md:text-[34px] md:leading-[41px] font-medium">
                                In response to this problem
                            </span>
                            <span className="text-lg md:text-[30px] md:leading-[36px] font-medium">
                                ,{" "}
                            </span>
                            <span className="text-lg md:text-[30px] md:leading-[36px]">
                                users seek immersive VR environments that foster comfort, emotional connection, and intuitive interaction by emphasizing spatial clarity, environmental warmth, and purposeful engagement.
                            </span>
                        </p>
                    </div>
                }
            />

            {/* Research Overview */}
            <ResearchOverview
                backgroundColor="bg-[#6F6864]"
                description="A combination of exploratory research, environmental observation, and competitive analysis informed the design of Coral Way Lounge. Research focused on understanding how users emotionally experience virtual spaces, particularly in relation to comfort, presence, and relaxation within VR environments."
                cards={researchLabels}
            />

            {/* Discovery */}
            <TwoColumnSection
                left={<SectionHeading title="Discovery:" />}
                right={
                    <div className="flex flex-col gap-5">
                        <p className="font-semibold text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] text-center">
                            Understanding the Problem Space:
                        </p>
                        <div className="text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] text-center md:text-left">
                            <p>
                                <span className="font-medium">Exploratory research revealed that while many VR environments support social interaction, they often lack the emotional safety and atmosphere needed for meaningful connection.</span>
                                <span> Users can feel hesitant to engage with others when virtual spaces feel overwhelming, impersonal, or overly game-driven.</span>
                            </p>
                            <p className="mt-5">
                                <span>Discovery efforts highlighted a gap for VR experiences that </span>
                                <span className="font-medium">encourage socialization in a low-pressure, welcoming environment,</span>
                                <span> one where users can comfortably start conversations, share activities, and gradually build connections. </span>
                                <span className="font-medium">Observations showed that familiar social cues, shared activities, and casual interaction spaces</span>
                                <span> help users feel more at ease and open to engagement.</span>
                            </p>
                        </div>
                    </div>
                }
            />

            {/* Discovery Images */}
            <ContentSection className="!py-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1100px] mx-auto">
                    <img
                        className="w-full h-auto object-cover rounded-xl"
                        alt="Discovery research 1"
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-discovery-1.jpg`}
                    />
                    <img
                        className="w-full h-auto object-cover rounded-xl"
                        alt="Discovery research 2"
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-discovery-2.png`}
                    />
                    <img
                        className="w-full h-auto object-cover rounded-xl"
                        alt="Discovery research 3"
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-discovery-3.jpg`}
                    />
                </div>
            </ContentSection>

            {/* User Survey Research */}
            <ContentSection className="!py-16 md:!py-24" bgColor="bg-white">
                <SectionHeading title="User Survey Research:" className="mb-6" />

                {/* Horizontal Divider */}
                <div className="w-full h-[1px] bg-gray-200 mb-12"></div>

                {/* Overview Block */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 items-start">
                    <div className="shrink-0 pt-1">
                        <div className="inline-flex items-center justify-center bg-[#6F6864] rounded-[6px] px-6 py-2.5">
                            <span className="text-white font-medium text-[18px] md:text-[20px]">Overview</span>
                        </div>
                    </div>
                    <div className="max-w-[800px]">
                        <p className="text-[#6F6864] text-[18px] md:text-[22px] leading-relaxed font-normal text-center md:text-left">
                            To inform the early design direction of Coral Way Lounge, we <span className="font-semibold">conducted concept-stage usability interviews</span> with college students to understand how they socialize, relax, and seek connection, both digitally and in physical spaces.
                        </p>
                    </div>
                </div>

                {/* Goal Text */}
                <div className="mb-16 md:mb-24">
                    <p className="text-[#6F6864] text-[20px] md:text-[24px] leading-snug md:leading-[36px] font-medium max-w-[1000px] ml-0 md:ml-2 text-center md:text-left">
                        The goal of this research was to validate whether a virtual lounge concept aligned with students' social habits and emotional needs before moving into full production.
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
                                <div className="inline-flex items-center justify-center bg-[#6F6864] rounded-[6px] px-6 py-2.5">
                                    <span className="text-white font-medium text-[18px] md:text-[20px]">Participants</span>
                                </div>
                                <div className="bg-[#EEF0F8] rounded-[6px] flex items-center gap-2.5 px-3 py-2">
                                    <div className="flex items-center justify-center bg-transparent">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#6F6864" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="5" r="3" /><path d="M9.5 10c0-1.7-1.3-3-3-3h-1c-1.7 0-3 1.3-3 3v6h2v6h4v-6h2v-6z" /><path d="M11 11.5l3.5-4 4.5 4z" /><path d="M11 12.5v3h11v-3z" /><circle cx="14" cy="18" r="2" /><circle cx="19" cy="18" r="2" /></svg>
                                    </div>
                                    <span className="text-[#6F6864] font-medium text-[16px] md:text-[18px]">12 College Students</span>
                                </div>
                                <div className="bg-[#EEF0F8] rounded-[6px] flex items-center gap-2.5 px-3 py-2">
                                    <div className="flex items-center justify-center bg-transparent">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#6F6864" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M7 2v4M17 2v4" stroke="#6F6864" strokeWidth="2" strokeLinecap="round" /><rect x="6" y="9" width="3" height="3" fill="white" /><rect x="10.5" y="9" width="3" height="3" fill="white" /><rect x="15" y="9" width="3" height="3" fill="white" /><rect x="6" y="13.5" width="3" height="3" fill="white" /><rect x="10.5" y="13.5" width="3" height="3" fill="white" /><rect x="15" y="13.5" width="3" height="3" fill="white" /><rect x="6" y="18" width="3" height="3" fill="white" /><rect x="10.5" y="18" width="3" height="3" fill="white" /><rect x="15" y="18" width="3" height="3" fill="white" /></svg>
                                    </div>
                                    <span className="text-[#6F6864] font-medium text-[16px] md:text-[18px]">Ages 20-24</span>
                                </div>
                                <div className="bg-[#EEF0F8] rounded-[6px] flex items-center gap-2.5 px-3 py-2 mt-1 lg:mt-0">
                                    <div className="flex items-center justify-center bg-transparent">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#6F6864" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="3" /><path d="M16 13c0-2-2-3-4-3s-4 1-4 3v3h8v-3z" /><circle cx="6" cy="8" r="2.5" /><path d="M10 16v-2c0-.52-.16-1.02-.45-1.45A3.95 3.95 0 0 0 6 11c-1.66 0-3 1-3 2.5V16h7z" /><circle cx="18" cy="8" r="2.5" /><path d="M21 16v-2.5c0-1.5-1.34-2.5-3-2.5a3.95 3.95 0 0 0-3.55 1.55c.29.43.45.93.45 1.45v2h6z" /><circle cx="12" cy="17" r="2.5" /><path d="M16 23v-1.5c0-1.5-1.5-2.5-4-2.5s-4 1-4 2.5V23h8z" /></svg>
                                    </div>
                                    <span className="text-[#6F6864] font-medium text-[16px] md:text-[18px]">Zoom Session</span>
                                </div>
                                <div className="bg-[#EEF0F8] rounded-[6px] flex items-center gap-2.5 px-3 py-2 mt-1 lg:mt-0">
                                    <div className="flex items-center justify-center bg-transparent">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#6F6864" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="14" height="20" rx="3" /><circle cx="9" cy="6" r="1.5" fill="white" /><circle cx="9" cy="11" r="1.5" fill="white" /><circle cx="12" cy="8.5" r="1" fill="white" /></svg>
                                    </div>
                                    <span className="text-[#6F6864] font-medium text-[16px] md:text-[18px]">1-on-1</span>
                                </div>
                            </div>

                            <ul className="list-disc pl-5 space-y-2 text-[#6F6864] font-normal text-[18px] md:text-[22px] md:leading-[32px] ml-2">
                                <li>Mix of <span className="font-medium">undergraduate</span> and <span className="font-medium">graduate students</span></li>
                                <li>All participants socialize regularly both <span className="font-medium">online and in person</span></li>
                                <li>Majority use <span className="font-medium">social media, Discord, FaceTime, or gaming platforms</span></li>
                                <li>Many reported feeling <span className="font-medium">socially burnt out</span> or overwhelmed by large group settings</li>
                                <li>Participants represented varying comfort levels with <span className="font-medium">VR and gaming environments</span></li>
                            </ul>
                        </div>

                        {/* Methodology */}
                        <div>
                            <div className="inline-flex items-center justify-center bg-[#6F6864] rounded-[6px] px-6 py-2.5 mb-6">
                                <span className="text-white font-medium text-[16px] md:text-[20px]">Methodology</span>
                            </div>
                            <p className="text-[#6F6864] font-medium text-[18px] md:text-[22px] md:leading-[32px] ml-1 text-center md:text-left">
                                This study used one-on-one Zoom interviews during early ideation. Each session was a 20–30 minute semi-structured interview focused on participants' social habits, comfort levels, and preferences for digital spaces. No prototype was shown, allowing for unbiased, concept-level feedback.
                            </p>
                        </div>

                        {/* Sample Questions */}
                        <div>
                            <div className="inline-flex items-center justify-center bg-[#6F6864] rounded-[6px] px-6 py-2.5 mb-6">
                                <span className="text-white font-medium text-[16px] md:text-[20px]">Sample Questions</span>
                            </div>
                            <ul className="list-disc pl-5 space-y-2 text-[#6F6864] font-medium text-[18px] md:text-[22px] md:leading-[32px] ml-1">
                                <li>How do you usually spend time with friends during the week?</li>
                                <li>Do you prefer <span className="font-semibold">small gatherings</span> or <span className="font-semibold">large social settings</span>? Why?</li>
                                <li>Have you ever used <span className="font-semibold">digital spaces</span> (games, Discord, VR, etc.) to socialize?</li>
                            </ul>
                        </div>
                    </div>

                    {/* Vertical Line Divider */}
                    <div className="hidden lg:block w-[1px] bg-[#D9D9D9] self-stretch mx-2"></div>

                    {/* Right Column */}
                    <div className="flex-1 lg:max-w-[48%] flex flex-col pt-2 lg:pt-0">
                        {/* Key Findings header */}
                        <div className="inline-flex items-center justify-center bg-[#6F6864] rounded-[6px] px-6 py-2.5 mb-8 self-start">
                            <span className="text-white font-medium text-[16px] md:text-[20px]">Key Findings</span>
                        </div>

                        {/* Ellipses key findings */}
                        <div className="flex flex-col gap-10">
                            {/* Key finding 1 */}
                            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] shrink-0">
                                    <img src={`${import.meta.env.BASE_URL}figmaAssets/Group 179.png`} alt="Low-pressure socializing icon" className="w-full h-full object-contain" />
                                </div>
                                <p className="text-[#6F6864] text-[18px] md:text-[22px] leading-snug md:leading-[30px] font-normal">
                                    <span className="font-semibold">Low-pressure socializing is preferred</span> – Students want spaces where interaction is optional
                                </p>
                            </div>

                            {/* Key finding 2 */}
                            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] shrink-0">
                                    <img src={`${import.meta.env.BASE_URL}figmaAssets/Group 179 (1).png`} alt="Ambient presence icon" className="w-full h-full object-contain" />
                                </div>
                                <p className="text-[#6F6864] text-[18px] md:text-[22px] leading-snug md:leading-[30px] font-medium">
                                    <span className="font-semibold">Ambient presence is valued</span> – Many students enjoy "being around people" without active conversation
                                </p>
                            </div>

                            {/* Key finding 3 */}
                            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] shrink-0">
                                    <img src={`${import.meta.env.BASE_URL}figmaAssets/Group 179 (2).png`} alt="Comfort icon" className="w-full h-full object-contain" />
                                </div>
                                <p className="text-[#6F6864] text-[18px] md:text-[22px] leading-snug md:leading-[30px] font-medium">
                                    <span className="font-semibold">Comfort &gt; excitement</span> – Calm, cozy environments feel more appealing than high-energy ones
                                </p>
                            </div>

                            {/* Key finding 4 */}
                            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] shrink-0">
                                    <img src={`${import.meta.env.BASE_URL}figmaAssets/Group 179 (3).png`} alt="Light interaction icon" className="w-full h-full object-contain" />
                                </div>
                                <p className="text-[#6F6864] text-[18px] md:text-[22px] leading-snug md:leading-[30px] font-medium">
                                    <span className="font-semibold">Light interaction helps break the ice</span> – Games are useful when optional, not competitive
                                </p>
                            </div>
                        </div>

                        {/* Quote Box */}
                        <div className="bg-[#EEF0F8] rounded-[10px] flex items-center p-8 mt-12 mb-12 relative w-full lg:max-w-[576px] lg:h-[178px]">
                            <span className="absolute top-6 left-6 text-[50px] md:text-[60px] text-[#6F6864] font-serif leading-none">"</span>
                            <div className="ml-12 md:ml-10 mt-4 text-center md:text-left">
                                <p className="text-[#6F6864] font-medium text-[16px] md:text-[24px] leading-snug italic relative z-10 pt-2">
                                    Sometimes I don't want to talk — I just want to exist in the same space as other people.
                                </p>
                                <p className="text-[#6F6864] text-[14px] md:text-[22px] mt-2 md:mt-4 font-normal">
                                    — Interview Participant
                                </p>
                            </div>
                        </div>

                        {/* Impact on Design */}
                        <div>
                            <div className="inline-flex items-center justify-center bg-[#6F6864] rounded-[6px] px-6 py-2.5 mb-6 self-start">
                                <span className="text-white font-medium text-[16px] md:text-[20px]">Impact on Design</span>
                            </div>
                            <ul className="list-disc pl-5 space-y-3 text-[#6F6864] font-medium text-[18px] md:text-[22px] md:leading-[32px] ml-1">
                                <li>Design the lounge as a non-linear experience with multiple paths</li>
                                <li>Allow users to choose their level of interaction</li>
                                <li>Include passive activities (balcony, theater) alongside playful ones</li>
                                <li>Focus on atmosphere, sound, and lighting as primary design elements</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* Competitive Audit */}
            <TwoColumnSection
                left={<SectionHeading title="Competitive Audit:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            <span className="font-medium">
                                Analyzing existing social and wellness-focused VR platforms revealed that while many support either social interaction or relaxation, few successfully combine both.
                            </span>{" "}
                            Social VR spaces often lack emotional comfort, while relaxation experiences limit meaningful interaction.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            This gap highlighted an opportunity for Coral Way Lounge to design a socially driven VR lounge that encourages connection, shared activities, and emotional ease within a welcoming virtual environment.
                        </p>
                    </div>
                }
            />

            <ContentSection className="!pt-0 !pb-16">
                <img
                    className="w-full max-w-[1100px] mx-auto h-auto rounded-xl shadow-sm"
                    alt="Competitive audit table"
                    src={`${import.meta.env.BASE_URL}figmaAssets/coral-competitive-audit.png`}
                />
            </ContentSection>

            {/* Key Insights Section (Custom for Coral Way Lounge) */}
            <section className="bg-[#6F6864] w-full py-20 px-4 md:px-8 mt-10">
                <div className="max-w-[1244px] mx-auto flex flex-col gap-16">
                    {/* Header Text */}
                    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20">
                        <h2 className="text-white text-[28px] md:text-[40px] font-medium font-['SF Pro Display'] leading-tight md:leading-[48px] whitespace-normal md:whitespace-nowrap">
                            Key Insights:
                        </h2>
                        <p className="text-white text-[24px] md:text-[30px] font-medium font-['SF Pro Display'] leading-[36px] max-w-[725px] text-center md:text-left">
                            These insights summarize the most important patterns uncovered during research and discovery, highlighting the core challenges users face when trying to feel comfortable, socially open, and emotionally present in VR environments
                        </p>
                    </div>

                    {/* Insights Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] gap-y-[30px]">
                        {/* Card 1 */}
                        <div className="bg-[#F9FAFB] border border-[#6F6864] rounded-[10px] p-6 flex items-start gap-4 shadow-sm w-full md:max-w-[552px] md:h-[145px]">
                            <div className="w-[60px] h-[60px] shrink-0 flex items-center justify-center">
                                <img src={`${import.meta.env.BASE_URL}figmaAssets/image.png`} alt="Emotional Comfort" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col gap-1 overflow-hidden">
                                <h3 className="text-black text-xl md:text-2xl font-medium font-['SF Pro Display'] leading-[29px] truncate">
                                    Emotional Comfort Enables Socialization
                                </h3>
                                <p className="text-[#6F6864] text-base md:text-xl font-normal font-['SF Pro Display'] leading-snug line-clamp-2 md:line-clamp-none">
                                    Emotional comfort plays a key role in users’ willingness to engage socially in VR environments.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#F9FAFB] border border-[#6F6864] rounded-[10px] p-6 flex items-start gap-4 shadow-sm w-full md:max-w-[552px] md:h-[145px]">
                            <div className="w-[60px] h-[60px] shrink-0 flex items-center justify-center">
                                <img src={`${import.meta.env.BASE_URL}figmaAssets/image copy.png`} alt="Simple Navigation" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col gap-1 overflow-hidden">
                                <h3 className="text-black text-xl md:text-2xl font-medium font-['SF Pro Display'] leading-[29px] truncate">
                                    Simple Navigation Reduces Social Friction
                                </h3>
                                <p className="text-[#6F6864] text-base md:text-xl font-normal font-['SF Pro Display'] leading-snug line-clamp-2 md:line-clamp-none">
                                    Simple navigation and gentle onboarding help users feel confident engaging in shared spaces.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#F9FAFB] border border-[#6F6864] rounded-[10px] p-6 flex items-start gap-4 shadow-sm w-full md:max-w-[552px] md:h-[145px]">
                            <div className="w-[60px] h-[60px] shrink-0 flex items-center justify-center">
                                <img src={`${import.meta.env.BASE_URL}figmaAssets/image copy 2.png`} alt="Shared Activities" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col gap-1 overflow-hidden">
                                <h3 className="text-black text-xl md:text-2xl font-medium font-['SF Pro Display'] leading-[29px] truncate">
                                    Shared Activities Spark Connection
                                </h3>
                                <p className="text-[#6F6864] text-base md:text-xl font-normal font-['SF Pro Display'] leading-snug line-clamp-2 md:line-clamp-none">
                                    Casual, low-stakes activities make it easier for users to connect without social pressure.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-[#F9FAFB] border border-[#6F6864] rounded-[10px] p-6 flex items-start gap-4 shadow-sm w-full md:max-w-[552px] md:h-[145px]">
                            <div className="w-[60px] h-[60px] shrink-0 flex items-center justify-center">
                                <img src={`${import.meta.env.BASE_URL}figmaAssets/image copy 3.png`} alt="Sensory Design" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col gap-1 overflow-hidden">
                                <h3 className="text-black text-xl md:text-2xl font-medium font-['SF Pro Display'] leading-[29px] truncate">
                                    Sensory Design Strengthens Presence
                                </h3>
                                <p className="text-[#6F6864] text-base md:text-xl font-normal font-['SF Pro Display'] leading-snug line-clamp-2 md:line-clamp-none">
                                    Multi-sensory cues enhance presence and creates a more immersive experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How Might We (Already Updated) */}
            <TwoColumnSection
                left={<SectionHeading title="How Might We?" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] leading-tight text-center md:text-left">
                            Turning insights into opportunity through the right questions.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] text-center md:text-left">
                            We aimed to create a brand that honors the lounge's speakeasy roots
                            while positioning it as a modern destination for high-end cocktails
                            and social connection.
                        </p>
                    </div>
                }
            />

            <ContentSection className="!py-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1100px] mx-auto">
                    <img
                        className="w-full h-auto rounded-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300"
                        alt="How might we help guests feel welcomed..."
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-hmw-blue.png`}
                    />
                    <img
                        className="w-full h-auto rounded-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                        alt="How might we ensure the menu is accessible..."
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-hmw-yellow.png`}
                    />
                    <img
                        className="w-full h-auto rounded-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300"
                        alt="How might we create a sense of exclusivity..."
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-hmw-green.png`}
                    />
                    <img
                        className="w-full h-auto rounded-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                        alt="How might we encourage social interaction..."
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-hmw-pink.png`}
                    />
                </div>
            </ContentSection>

            {/* Solution Overview */}
            <TwoColumnSection
                left={<SectionHeading title="Solution Overview:" />}
                right={
                    <div className="flex flex-col">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] leading-tight mb-8 text-center md:text-left">
                            Turning insights into opportunity with the right solution.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            This solution is visualized through a storyboard that captures the Coral Way Lounge guest journey in real time. By mapping moments of entry, ordering, seating, and social interaction, the storyboard illustrates how intentional design decisions can reduce friction, enhance comfort, and support meaningful connection throughout the space.
                        </p>
                    </div>
                }
            />

            <div className="w-full py-8">
                <img
                    className="w-full h-auto"
                    alt="Solution storyboard"
                    src={`${import.meta.env.BASE_URL}figmaAssets/image copy 22.png`}
                />
            </div>



            {/* Final Screens */}
            <div className="max-w-[1244px] mx-auto px-4 md:px-8 pt-16 pb-8 flex flex-col lg:flex-row justify-between relative">
                <div className="lg:w-1/3 mt-3">
                    <SectionHeading title="Final Screens:" className="text-black text-3xl md:text-[40px] md:leading-[48px] font-medium font-['SF_Pro_Display'] pt-1" />
                </div>
                <div className="max-w-[743px] lg:w-2/3 flex flex-col relative mt-8 lg:mt-12">
                    <div className="flex flex-col md:flex-row gap-4 items-center md:items-start mb-6 text-center md:text-left">
                        <img src={`${import.meta.env.BASE_URL}figmaAssets/Apple Vision Pro.png`} alt="Apple Vision Pro" className="w-[60px] h-[60px] object-contain shrink-0 mt-0 md:mt-[-8px]" />
                        <h3 className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] font-['SF_Pro_Display']">
                            The following screens represent the final visual and experiential direction for Coral Way Lounge.
                        </h3>
                    </div>
                    <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] font-['SF_Pro_Display'] text-center md:text-left">
                        Informed by research insights, narrative framing, and spatial exploration, these designs illustrate how atmosphere, flow, and interaction come together to support comfort, clarity, and social ease within the lounge experience.
                    </p>
                </div>
            </div>

            <div className="w-full max-w-[1440px] mx-auto py-16 flex flex-col gap-y-[150px] items-center">
                {/* Lobby & Arrival */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-between w-full px-4 lg:px-20 max-w-[1400px]">
                    <div className="flex-1 max-w-[800px]">
                        <img
                            className="w-full h-auto drop-shadow-2xl"
                            alt="Lobby & Arrival"
                            src={`${import.meta.env.BASE_URL}figmaAssets/image copy 4.png`}
                        />
                    </div>
                    <div className="flex flex-col gap-4 max-w-[400px]">
                        <h3 className="text-2xl md:text-[34px] md:leading-[41px] font-medium font-['SF_Pro_Display'] text-[#6F6864] text-center lg:text-left">Lobby & Arrival</h3>
                        <p className="text-[#6F6864] font-normal text-lg md:text-[24px] md:leading-[36px] font-['SF_Pro_Display'] text-center lg:text-left">
                            The lobby is the main entry point where users exit the elevator and orient themselves within the experience. This space provides a calm pause before transitioning into the lounge.
                        </p>
                    </div>
                </div>

                {/* Welcome Portal */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-between w-full px-4 lg:px-20 max-w-[1400px]">
                    <div className="flex-1 max-w-[800px]">
                        <img
                            className="w-full h-auto drop-shadow-2xl"
                            alt="Welcome Portal"
                            src={`${import.meta.env.BASE_URL}figmaAssets/image copy 5.png`}
                        />
                    </div>
                    <div className="flex flex-col gap-4 max-w-[400px]">
                        <h3 className="text-2xl md:text-[34px] md:leading-[41px] font-medium font-['SF_Pro_Display'] text-[#6F6864] text-center lg:text-left">Welcome Portal</h3>
                        <p className="text-[#6F6864] font-normal text-lg md:text-[24px] md:leading-[36px] font-['SF_Pro_Display'] text-center lg:text-left">
                            The welcome sign acts as a visual and interactive threshold into the lounge. Passing through it seamlessly transports users into the main social space.
                        </p>
                    </div>
                </div>

                {/* Main Lounge */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-between w-full px-4 lg:px-20 max-w-[1400px]">
                    <div className="flex-1 max-w-[800px]">
                        <img
                            className="w-full h-auto drop-shadow-2xl"
                            alt="Main Lounge"
                            src={`${import.meta.env.BASE_URL}figmaAssets/image copy 6.png`}
                        />
                    </div>
                    <div className="flex flex-col gap-4 max-w-[400px]">
                        <h3 className="text-2xl md:text-[34px] md:leading-[41px] font-medium font-['SF_Pro_Display'] text-[#6F6864] text-center lg:text-left">Main Lounge</h3>
                        <p className="text-[#6F6864] font-normal text-lg md:text-[24px] md:leading-[36px] font-['SF_Pro_Display'] text-center lg:text-left">
                            The lounge serves as the central gathering area, designed for relaxed exploration and low-pressure interaction. Open sightlines and ambient lighting support comfort and ease.
                        </p>
                    </div>
                </div>

                {/* Theater Room */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-between w-full px-4 lg:px-20 max-w-[1400px]">
                    <div className="flex-1 max-w-[800px]">
                        <img
                            className="w-full h-auto drop-shadow-2xl"
                            alt="Theater Room"
                            src={`${import.meta.env.BASE_URL}figmaAssets/image copy 7.png`}
                        />
                    </div>
                    <div className="flex flex-col gap-4 max-w-[400px]">
                        <h3 className="text-2xl md:text-[34px] md:leading-[41px] font-medium font-['SF_Pro_Display'] text-[#6F6864] text-center lg:text-left">Theater Room</h3>
                        <p className="text-[#6F6864] font-normal text-lg md:text-[24px] md:leading-[36px] font-['SF_Pro_Display'] text-center lg:text-left">
                            The theater offers a more focused shared experience within the lounge environment. Its separation helps maintain immersion without disrupting nearby spaces.
                        </p>
                    </div>
                </div>

                {/* Lounge Immersion */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-between w-full px-4 lg:px-20 max-w-[1400px]">
                    <div className="flex-1 max-w-[800px]">
                        <img
                            className="w-full h-auto drop-shadow-2xl"
                            alt="Lounge Immersion"
                            src={`${import.meta.env.BASE_URL}figmaAssets/image copy 8.png`}
                        />
                    </div>
                    <div className="flex flex-col gap-4 max-w-[400px]">
                        <h3 className="text-2xl md:text-[34px] md:leading-[41px] font-medium font-['SF_Pro_Display'] text-[#6F6864] text-center lg:text-left">Lounge Immersion</h3>
                        <p className="text-[#6F6864] font-normal text-lg md:text-[24px] md:leading-[36px] font-['SF_Pro_Display'] text-center lg:text-left">
                            This view removes visible controllers to prioritize presence and immersion. Reducing interface elements allows users to engage more naturally with the environment.
                        </p>
                    </div>
                </div>
            </div>



            {/* Next Steps */}
            < ContentSection >
                <SectionHeading
                    title="Next Steps:"
                    description="Road map for future development and continuous improvement"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                    {nextSteps.map((step, index) => (
                        <StepCard key={index} {...step} />
                    ))}
                </div>
                <p className="mt-12 text-center text-[#6F6864] text-base md:text-[28px] md:leading-[33px] max-w-5xl mx-auto">
                    Thank you for reviewing this case study. I’m always open to feedback and interested in exploring how spatial and experiential design can shape meaningful social environments.
                </p>
            </ContentSection >

            {/* Contact CTA */}
            <GetInTouchSection theme="dark" bgColor="bg-[#6F6864]" buttonBgColor="#D9D9D9" buttonTextColor="black" />

        </div >
    );
};

export default CoralWayLoungePage;
