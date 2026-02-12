
import { HeroSection } from "../components/case-studies/new-template/layout/HeroSection";
import { ContentSection } from "../components/case-studies/new-template/layout/ContentSection";
import { TwoColumnSection } from "../components/case-studies/new-template/layout/TwoColumnSection";
import { SectionHeading } from "../components/case-studies/new-template/layout/SectionHeading";

import GetInTouchSection from "../components/sections/GetInTouchSection";
import { ProjectDetailGrid } from "../components/case-studies/new-template/cards/ProjectDetailGrid";
import { StepCard } from "../components/case-studies/new-template/cards/StepCard";
import { ImageGallery } from "../components/case-studies/new-template/cards/ImageGallery";
import ResearchOverview from "../components/case-studies/shared/ResearchOverview";
import KeyInsights from "../components/case-studies/shared/KeyInsights";


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

const keyInsights = [
    {
        emoji: "🛌",
        title: "Emotional Comfort Enables Socialization",
        description: "Emotional comfort plays a key role in users' willingness to engage socially in VR environments.",
    },
    {
        emoji: "🧭",
        title: "Simple Navigation Reduces Social Friction",
        description: "Simple navigation and gentle onboarding help users feel confident engaging in shared spaces.",
    },
    {
        emoji: "👯",
        title: "Shared Activities Spark Connection",
        description: "Casual, low-stakes activities make it easier for users to connect without social pressure.",
    },
    {
        emoji: "🎧",
        title: "Sensory Design Strengthens Presence",
        description: "Multi-sensory cues enhance presence and creates a more immersive experience.",
    },
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

const loFiScreens = [
    { src: `${import.meta.env.BASE_URL}figmaAssets/group-70.png`, alt: "Connect Screen", label: "Connect Screen", sublabel: "Meet new veterans" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/housing-3.png`, alt: "Housing Screen", label: "Housing Screen", sublabel: "Find safe housing" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/housing-3.png`, alt: "Housing Screen", label: "Housing Screen", sublabel: "Find safe housing" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/housing-3.png`, alt: "Housing Screen", label: "Housing Screen", sublabel: "Find safe housing" },
];



const CoralWayLoungePage = () => {
    return (
        <div className="bg-white overflow-hidden w-full">


            <HeroSection
                title="Coral Way Lounge"
                subtitle="Virtual Reality Experience & Game"
                imageSrc={`${import.meta.env.BASE_URL}figmaAssets/coral-way-hero.png`}
                imageAlt="Coral Way Lounge hero image"
            />

            {/* Project Details */}
            <ContentSection bgColor="bg-gray-50">
                <ProjectDetailGrid details={projectDetails} />
            </ContentSection>

            {/* Problem Statement */}
            <TwoColumnSection
                left={
                    <SectionHeading title="Problem Statement:" />
                }
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="font-medium text-[#6e6764] text-lg md:text-2xl leading-relaxed">
                            Many VR environments prioritize visual spectacle over emotional comfort, which can leave users feeling detached or overwhelmed.{" "}
                            <span className="font-normal">
                                When virtual spaces lack warmth, natural cues, and meaningful interactivity, it becomes difficult for users to feel grounded or present within the experience.
                            </span>
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-2xl leading-relaxed">
                            <span className="font-semibold text-xl md:text-2xl">
                                💡In response to this problem,
                            </span>{" "}
                            users seek immersive VR environments that foster comfort, emotional connection, and intuitive interaction by emphasizing spatial clarity, environmental warmth, and purposeful engagement.
                        </p>
                    </div>
                }
            />

            {/* Research Overview */}
            <ResearchOverview
                backgroundColor="bg-[#212873]"
                description="A combination of exploratory research, environmental observation, and competitive analysis informed the design of Coral Way Lounge. Research focused on understanding how users emotionally experience virtual spaces, particularly in relation to comfort, presence, and relaxation within VR environments."
                cards={researchLabels}
            />

            {/* Discovery */}
            <TwoColumnSection
                left={<SectionHeading title="Discovery:" />}
                right={
                    <div className="flex flex-col gap-4 md:pt-16">
                        <h3 className="font-semibold text-[#6e6764] text-xl md:text-2xl">
                            Understanding the Problem Space:
                        </h3>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            <span className="font-medium">
                                Exploratory research revealed that while many VR environments support social interaction, they often lack the emotional safety and atmosphere needed for meaningful connection.
                            </span>{" "}
                            Users can feel hesitant to engage with others when virtual spaces feel overwhelming, impersonal, or overly game-driven.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            Discovery efforts highlighted a gap for VR experiences that encourage socialization in a low-pressure, welcoming environment, one where users can comfortably start conversations, share activities, and gradually build connections. Observations showed that familiar social cues, shared activities, and casual interaction spaces help users feel more at ease and open to engagement.
                        </p>
                    </div>
                }
            />

            {/* Discovery Images */}
            <ContentSection className="!py-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <img
                        className="w-full h-auto object-cover"
                        alt="Discovery research 1"
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-discovery-1.jpg`}
                    />
                    <img
                        className="w-full h-auto object-cover"
                        alt="Discovery research 2"
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-discovery-2.png`}
                    />
                    <img
                        className="w-full h-auto object-cover"
                        alt="Discovery research 3"
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-discovery-3.jpg`}
                    />
                </div>
            </ContentSection>

            {/* User Survey Research */}
            <ContentSection className="!py-16">
                <div className="max-w-6xl mx-auto">
                    <SectionHeading title="User Survey Research:" className="mb-8" />

                    {/* Overview */}
                    <div className="flex flex-col md:flex-row gap-6 mb-16">
                        <div className="shrink-0">
                            <span className="bg-[#6e6764] text-white px-4 py-1.5 rounded text-sm font-medium uppercase tracking-wider">
                                Overview
                            </span>
                        </div>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            To inform the early design direction of Coral Way Lounge, we conducted concept-stage usability interviews with college students to understand how they socialize, relax, and seek connection, both digitally and in physical spaces.
                            <br /><br />
                            This early research focused on behaviors, needs, and expectations. The goal was to validate whether a virtual lounge concept aligned with students' social habits and emotional needs before moving into full production.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Left Column */}
                        <div className="flex flex-col gap-12">
                            {/* Participants */}
                            <div>
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className="bg-[#6e6764] text-white px-4 py-1.5 rounded text-sm font-medium uppercase tracking-wider">
                                        Participants
                                    </span>
                                    <span className="bg-gray-100 text-[#6e6764] px-3 py-1.5 rounded flex items-center gap-2 text-sm font-medium">
                                        👥 12 College Students
                                    </span>
                                    <span className="bg-gray-100 text-[#6e6764] px-3 py-1.5 rounded flex items-center gap-2 text-sm font-medium">
                                        📅 Ages 20–24
                                    </span>
                                    <span className="bg-gray-100 text-[#6e6764] px-3 py-1.5 rounded flex items-center gap-2 text-sm font-medium">
                                        📹 Zoom Session
                                    </span>
                                    <span className="bg-gray-100 text-[#6e6764] px-3 py-1.5 rounded flex items-center gap-2 text-sm font-medium">
                                        👤 1-on-1
                                    </span>
                                </div>
                                <ul className="space-y-2 text-[#6e6764] text-base md:text-lg leading-relaxed list-disc pl-5">
                                    <li>Mix of undergraduate and graduate students</li>
                                    <li>All participants socialize regularly both online and in person</li>
                                    <li>Majority use social media, Discord, FaceTime, or gaming platforms</li>
                                    <li>Many reported feeling socially burnt out or overwhelmed by large group settings</li>
                                    <li>Participants represented varying comfort levels with VR and gaming environments</li>
                                </ul>
                            </div>

                            {/* Methodology */}
                            <div>
                                <div className="mb-6">
                                    <span className="bg-[#6e6764] text-white px-4 py-1.5 rounded text-sm font-medium uppercase tracking-wider">
                                        Methodology
                                    </span>
                                </div>
                                <p className="text-[#6e6764] text-base md:text-lg leading-relaxed mb-4">
                                    This study used one-on-one Zoom interviews, conducted during early ideation.
                                </p>
                                <p className="text-[#6e6764] text-base md:text-lg leading-relaxed">
                                    Each session was a 20–30 minute semi-structured Zoom interview focused on participants' social habits, comfort levels, and preferences for digital social spaces. No prototype was shown, allowing for unbiased, concept-level feedback.
                                </p>
                            </div>

                            {/* Sample Questions */}
                            <div>
                                <div className="mb-6">
                                    <span className="bg-[#6e6764] text-white px-4 py-1.5 rounded text-sm font-medium uppercase tracking-wider">
                                        Sample Questions
                                    </span>
                                </div>
                                <ol className="space-y-2 text-[#6e6764] text-base md:text-lg leading-relaxed list-decimal pl-5">
                                    <li>How do you usually spend time with friends during the week?</li>
                                    <li>Do you prefer small gatherings or large social settings? Why?</li>
                                    <li>Have you ever used digital spaces (games, Discord, VR, etc.) to socialize?</li>
                                </ol>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-12">
                            {/* Key Findings */}
                            <div>
                                <div className="mb-6">
                                    <span className="bg-[#6e6764] text-white px-4 py-1.5 rounded text-sm font-medium uppercase tracking-wider">
                                        Key Findings
                                    </span>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-2xl">
                                            🧘
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#6e6764] text-lg">Low-pressure socializing is preferred –</h4>
                                            <p className="text-[#6e6764] text-base leading-relaxed">Students want spaces where interaction is optional</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-2xl">
                                            🛋️
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#6e6764] text-lg">Ambient presence is valued –</h4>
                                            <p className="text-[#6e6764] text-base leading-relaxed">Many students enjoy "being around people" without active conversation</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-2xl">
                                            🛌
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#6e6764] text-lg">Comfort &gt; excitement –</h4>
                                            <p className="text-[#6e6764] text-base leading-relaxed">Calm, cozy environments feel more appealing than high-energy ones</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-2xl">
                                            🕹️
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#6e6764] text-lg">Light interaction helps break the ice –</h4>
                                            <p className="text-[#6e6764] text-base leading-relaxed">Games are useful when optional, not competitive</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="border border-gray-200 rounded-lg p-8 relative">
                                <span className="text-6xl text-gray-300 absolute top-4 left-4 font-serif">“</span>
                                <p className="text-[#6e6764] text-xl md:text-2xl font-medium leading-relaxed italic relative z-10 pt-4">
                                    Sometimes I don't want to talk — I just want to exist in the same space as other people.
                                </p>
                                <p className="text-[#6e6764] text-right mt-4 font-medium">— Interview Participant</p>
                            </div>

                            {/* Impact on Design */}
                            <div>
                                <div className="mb-6">
                                    <span className="bg-[#6e6764] text-white px-4 py-1.5 rounded text-sm font-medium uppercase tracking-wider">
                                        Impact on Design
                                    </span>
                                </div>
                                <ul className="space-y-2 text-[#6e6764] text-base md:text-lg leading-relaxed list-disc pl-5">
                                    <li>Design the lounge as a non-linear experience with multiple paths</li>
                                    <li>Allow users to choose their level of interaction</li>
                                    <li>Include passive activities (balcony, theater) alongside playful ones</li>
                                    <li>Focus on atmosphere, sound, and lighting as primary design elements</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* Competitive Audit */}
            <TwoColumnSection
                left={<SectionHeading title="Competitive Audit:" />}
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            <span className="font-medium">
                                Analyzing existing social and wellness-focused VR platforms revealed that while many support either social interaction or relaxation, few successfully combine both.
                            </span>{" "}
                            Social VR spaces often lack emotional comfort, while relaxation experiences limit meaningful interaction.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            This gap highlighted an opportunity for Coral Way Lounge to design a socially driven VR lounge that encourages connection, shared activities, and emotional ease within a welcoming virtual environment.
                        </p>
                    </div>
                }
            />

            <ContentSection className="!pt-0 !pb-16">
                <img
                    className="w-full h-auto object-cover"
                    alt="Competitive audit table"
                    src={`${import.meta.env.BASE_URL}figmaAssets/coral-competitive-audit.png`}
                />
            </ContentSection>

            {/* Key Insights */}
            <KeyInsights
                backgroundColor="bg-[#6e6764]"
                description="These insights summarize the most important patterns uncovered during research and discovery, highlighting the core challenges users face when trying to feel comfortable, socially open, and emotionally present in VR environments"
                insights={keyInsights}
            />

            {/* How Might We */}
            <TwoColumnSection
                left={<SectionHeading title="How Might We?" />}
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl leading-tight">
                            Turning insights into opportunity through the right questions.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            These questions guided the exploration of how Coral Way Lounge's physical space, flow, and atmosphere could better support comfort, clarity, and meaningful social connection.
                        </p>
                    </div>
                }
            />

            <ContentSection className="!py-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <img
                        className="w-full h-auto object-cover transform rotate-1 hover:rotate-0 transition-transform duration-300"
                        alt="How might we help guests feel welcomed..."
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-hmw-blue.png`}
                    />
                    <img
                        className="w-full h-auto object-cover transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                        alt="How might we make the theater room feel approachable..."
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-hmw-green.png`}
                    />
                    <img
                        className="w-full h-auto object-cover transform rotate-1 hover:rotate-0 transition-transform duration-300"
                        alt="How might we design the space to feel calm..."
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-hmw-pink.png`}
                    />
                    <img
                        className="w-full h-auto object-cover transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                        alt="How might we support social interaction..."
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-hmw-yellow.png`}
                    />
                </div>
            </ContentSection>

            {/* Solution Overview */}
            <TwoColumnSection
                left={<SectionHeading title="Solution Overview:" />}
                right={
                    <div className="flex flex-col md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl leading-tight mb-8">
                            Turning insights into opportunity with the right solution.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            This solution is visualized through a storyboard that captures the Coral Way Lounge guest journey in real time. By mapping moments of entry, ordering, seating, and social interaction, the storyboard illustrates how intentional design decisions can reduce friction, enhance comfort, and support meaningful connection throughout the space.
                        </p>
                    </div>
                }
            />

            <ContentSection className="!py-4">
                <img
                    className="w-full h-auto object-cover"
                    alt="Solution storyboard"
                    src={`${import.meta.env.BASE_URL}figmaAssets/coral-solution-storyboard.png`}
                />
            </ContentSection>



            {/* Final Screens */}
            <TwoColumnSection
                left={<SectionHeading title="Final Screens:" />}
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <div className="flex gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-2xl">
                                🥽
                            </div>
                            <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                                The following screens represent the final visual and experiential direction for Coral Way Lounge. Informed by research insights, narrative framing, and spatial exploration, these designs illustrate how atmosphere, flow, and interaction come together to support comfort, clarity, and social ease within the lounge experience.
                            </p>
                        </div>
                    </div>
                }
            />

            <ContentSection className="!py-16 space-y-24">
                {/* Lobby & Arrival */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <img
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                        alt="Lobby & Arrival"
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-final-1.png`}
                    />
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-medium text-[#6e6764]">Lobby & Arrival</h3>
                        <p className="text-[#6e6764] text-lg leading-relaxed">
                            The lobby is the main entry point where users exit the elevator and orient themselves within the experience. This space provides a calm pause before transitioning into the lounge.
                        </p>
                    </div>
                </div>

                {/* Welcome Portal */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <img
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                        alt="Welcome Portal"
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-final-2.png`}
                    />
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-medium text-[#6e6764]">Welcome Portal</h3>
                        <p className="text-[#6e6764] text-lg leading-relaxed">
                            The welcome sign acts as a visual and interactive threshold into the lounge. Passing through it seamlessly transports users into the main social space.
                        </p>
                    </div>
                </div>

                {/* Main Lounge */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <img
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                        alt="Main Lounge"
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-final-3.png`}
                    />
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-medium text-[#6e6764]">Main Lounge</h3>
                        <p className="text-[#6e6764] text-lg leading-relaxed">
                            The lounge serves as the central gathering area, designed for relaxed exploration and low-pressure interaction. Open sightlines and ambient lighting support comfort and ease.
                        </p>
                    </div>
                </div>

                {/* Theater Room */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <img
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                        alt="Theater Room"
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-final-4.png`}
                    />
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-medium text-[#6e6764]">Theater Room</h3>
                        <p className="text-[#6e6764] text-lg leading-relaxed">
                            The theater offers a more focused shared experience within the lounge environment. Its separation helps maintain immersion without disrupting nearby spaces.
                        </p>
                    </div>
                </div>

                {/* Lounge Immersion */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <img
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                        alt="Lounge Immersion"
                        src={`${import.meta.env.BASE_URL}figmaAssets/coral-final-5.png`}
                    />
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-medium text-[#6e6764]">Lounge Immersion</h3>
                        <p className="text-[#6e6764] text-lg leading-relaxed">
                            This view removes visible controllers to emphasize presence and immersion. Reducing interface elements allows users to engage more naturally with the environment.
                        </p>
                    </div>
                </div>
            </ContentSection>



            {/* Next Steps */}
            <ContentSection>
                <SectionHeading
                    title="Next Steps:"
                    description="Road map for future development and continuous improvement"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                    {nextSteps.map((step, index) => (
                        <StepCard key={index} {...step} />
                    ))}
                </div>
                <p className="mt-12 text-left text-[#6e6764] text-base md:text-lg max-w-3xl mx-auto">
                    Thank you for reviewing this case study. I’m always open to feedback and interested in
                    exploring how spatial and experiential design can shape meaningful social environments.
                </p>
            </ContentSection>

            {/* Contact CTA */}
            {/* Contact CTA */}
            <GetInTouchSection theme="dark" />

        </div>
    );
};

export default CoralWayLoungePage;
