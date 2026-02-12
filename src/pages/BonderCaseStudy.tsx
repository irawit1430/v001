
import { UserJourneyMap } from "../components/case-studies/new-template/cards/UserJourneyMap";

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

// Import assets
import iconCommunity from "../assets/icon-community.png";
import iconLocation from "../assets/icon-location.png";
import iconBadge from "../assets/icon-badge.png";
import iconShield from "../assets/icon-shield.png";
import iconUserTesting from "../assets/icon-user-testing.png";
import iconIterate from "../assets/icon-iterate.png";
import iconAnalytics from "../assets/icon-analytics.png";
import iconFeatures from "../assets/icon-features.png";



const projectDetails = [
    { label: "ROLE", value: "Lead UX Designer" },
    { label: "DURATION", value: "3 weeks | 2025" },
    { label: "PROTOTYPE", value: "Figma prototype link" },
    { label: "RESPONSIBILITIES", value: "Design, Research, Prototyping" },
    { label: "TEAM SIZE", value: "Solo Project" },
    { label: "CATEGORY", value: "Social app" },
];

const keyInsights = [
    {
        icon: iconCommunity,
        title: "Community Focus",
        description: "Strong community focus builds trust and long-term retention",
    },
    {
        icon: iconLocation,
        title: "Location Matters",
        description: "Key value driver for in-person attendance",
    },
    {
        icon: iconShield,
        topIcon: `${import.meta.env.BASE_URL}figmaAssets/calendar-icon.png`,
        title: "Event-Driven",
        description: "Events are the primary catalyst for connection",
    },
    {
        icon: iconBadge,
        title: "Authentic Profiles",
        description: "Trust is built through verified and detailed member profiles",
    },
];

const researchLabels = [
    { icon: `${import.meta.env.BASE_URL}figmaAssets/speech-bubble-removebg-preview-1.svg`, label: "Discovery" },
    { icon: `${import.meta.env.BASE_URL}figmaAssets/twocellphones-removebg-preview--1--1.svg`, label: "Competitive Audit" },
    { icon: `${import.meta.env.BASE_URL}figmaAssets/chart-removebg-preview-2.svg`, label: "User Testing" },
    { icon: `${import.meta.env.BASE_URL}figmaAssets/lightbuldddd-removebg-preview-1.svg`, label: "Insight" },
];

const nextSteps = [
    {
        icon: iconUserTesting,
        title: "User Testing",
        description: "Conduct usability testing with target users to validate design decisions and identify pain points.",
    },
    {
        icon: iconIterate,
        title: "Iterate & Refine",
        description: "Incorporate feedback to improve the user experience and address any discovered issues.",
    },
    {
        icon: iconAnalytics,
        title: "Analytics Integration",
        description: "Implement tracking to measure key metrics like user engagement and retention rates.",
    },
    {
        icon: iconFeatures,
        title: "Future Features",
        description: "Explore premium features like event creation, business partnerships, and community moderation tools.",
    },
];

const loFiScreens = [
    { src: `${import.meta.env.BASE_URL}figmaAssets/bonder-lofi-1.png`, alt: "Bonder Circle Screen", label: "Bonder Circle Screen", sublabel: "Join different circles" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/bonder-lofi-2.png`, alt: "Lifetime Event Screen", label: "Lifetime Event Screen", sublabel: "Explore curated events" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/bonder-lofi-3.png`, alt: "Lifetime Advisor Screen", label: "Lifetime Advisor Screen", sublabel: "Advisor view of request" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/bonder-lofi-4.png`, alt: "Lifetime Home Screen", label: "Lifetime Home Screen", sublabel: "Main home screen" },
];

const hiFiScreens = [
    { src: `${import.meta.env.BASE_URL}figmaAssets/bonder-hifi-1.png`, alt: "Lifetime Circle Screen", label: "Lifetime Circle Screen", sublabel: "Featured circles & clubs" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/bonder-hifi-2.png`, alt: "Verification Screen", label: "Verification Screen", sublabel: "Secure account verification" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/bonder-hifi-3.png`, alt: "Lifetime Home Screen", label: "Lifetime Home Screen", sublabel: "Services & amenities hub" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/bonder-hifi-4.png`, alt: "Events Screen", label: "Events Screen", sublabel: "Browse & join events" },
];


const BonderCaseStudy = () => {
    return (
        <div className="bg-white overflow-hidden w-full">


            <HeroSection
                title="Bonder"
                subtitle="Social Media Application"
                imageSrc={`${import.meta.env.BASE_URL}bonder-hero-mockups.png`}
                imageAlt="Bonder App Mockups"
            />

            {/* Project Details */}
            <ContentSection bgColor="bg-gray-50">
                <ProjectDetailGrid details={projectDetails} />
            </ContentSection>

            {/* Problem Statement */}
            <TwoColumnSection
                left={<SectionHeading title="Problem Statement:" />}
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="font-medium text-[#6e6764] text-lg md:text-2xl leading-relaxed">
                            <span className="font-semibold">Bonder's CEO recognized an opportunity to grow the platform</span> through new partnerships with Lifetime Fitness. However, because these experiences were entirely new, the app lacked the foundational user flows needed to support onboarding, event discovery, and partner engagement.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-2xl leading-relaxed">
                            💡 My role was to create net-new interaction flows that define how users navigate, access, and benefit from these partnerships. The challenge was to design intuitive pathways that feel native to Bonder while serving the unique needs of each partner.
                        </p>
                    </div>
                }
            />

            {/* Research Overview */}
            <ResearchOverview
                backgroundColor="bg-[#212873]"
                description="A combination of discovery research, competitive analysis, and early user exploration helped reveal the challenges members face."
                cards={researchLabels}
            />

            {/* Discovery */}
            <TwoColumnSection
                left={<SectionHeading title="Discovery:" />}
                right={
                    <div className="flex flex-col gap-4 md:pt-16">
                        <h3 className="text-xl md:text-2xl font-semibold text-[#6e6764] leading-tight">
                            Understanding the Problem Space:
                        </h3>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            <span className="font-semibold">Researching Lifetime's role within Bonder highlighted how scattered and inconsistent</span> wellness and membership experiences can be. My goal was to understand why users often struggle to feel connected, supported, and aware of what their venue offers, especially when navigating services, events, and community activities.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            <span className="font-semibold">Early exploration revealed a consistent issue:</span> members often feel unsure about how to access or engage with their venue's full ecosystem. They struggle to find events, understand available services, and get support. Current platforms don't offer a unified experience that creates clarity, connection, or a sense of belonging.
                        </p>
                    </div>
                }
            />

            {/* Persona */}
            <TwoColumnSection
                left={<SectionHeading title="Persona:" />}
                right={
                    <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                        I created this persona to capture the needs of a typical Lifetime member who wants to stay engaged but often feels unsure about how to navigate the venue's full range of services. Miles reflects the goals and frustrations observed in research and helped guide the design toward clearer access to events, easier communication with staff, and a more connected membership experience.
                    </p>
                }
            />

            {/* Persona Card */}
            <ContentSection className="!pt-0 !pb-16">
                <div className="w-full rounded-2xl">
                    <img src={`${import.meta.env.BASE_URL}figmaAssets/persona-miles.png`} alt="Persona Miles" className="w-full h-auto rounded-2xl shadow-sm" />
                </div>
            </ContentSection>

            {/* Competitive Audit */}
            <TwoColumnSection
                left={<SectionHeading title="Competitive Audit:" />}
                right={
                    <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                        Analyzing competitors helped reveal where current fitness and membership apps succeed and where they fall short. While they offer strong booking and discovery tools, competitors lack unified event flows, real-time support, and connected venue ecosystems. These gaps highlight clear opportunities for Bonder to improve the Lifetime member experience.
                    </p>
                }
            />

            {/* Competitive Audit Diagram */}
            <ContentSection className="!pt-0 !pb-16">
                <div className="w-full rounded-2xl">
                    <img src={`${import.meta.env.BASE_URL}figmaAssets/bonder-competitive-audit.png`} alt="Competitive Audit" className="w-full h-auto rounded-2xl shadow-sm" />
                </div>
            </ContentSection>

            {/* Key Insights */}
            <KeyInsights
                backgroundColor="bg-[#D1D1D1]"
                description="Analysis of competitors revealed that while many apps solve parts of the problem, none offer a cohesive ecosystem for a single venue."
                insights={keyInsights}
                textColor="text-black"
            />

            {/* How Might We */}
            <TwoColumnSection
                left={<SectionHeading title="How Might We?" />}
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl leading-tight">
                            Turning insights into opportunity through the right questions.
                        </p>
                        <ul className="space-y-4 text-[#6e6764] text-lg md:text-xl">
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we help members easily understand and navigate Lifetime's full ecosystem?</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we enable faster, more reliable communication between members and staff?</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we strengthen members' sense of connection and community within their venue?</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we simplify onboarding so members immediately see the value of Bonder + Lifetime?</span>
                            </li>
                        </ul>
                    </div>
                }
            />

            <ContentSection className="!pt-0 !pb-16">
                <ImageGallery
                    images={[
                        { src: `${import.meta.env.BASE_URL}figmaAssets/bonder-hmw-1.png`, alt: "How Might We Sketch 1" },
                        { src: `${import.meta.env.BASE_URL}figmaAssets/bonder-hmw-2.png`, alt: "How Might We Sketch 2" },
                        { src: `${import.meta.env.BASE_URL}figmaAssets/bonder-hmw-3.png`, alt: "How Might We Sketch 3" },
                    ]}
                    columns={3}
                />
            </ContentSection>

            {/* Solution Overview */}
            <TwoColumnSection
                left={<SectionHeading title="Solution Overview:" />}
                right={
                    <div className="flex flex-col md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl leading-tight mb-8">
                            Turning insights into a streamlined, unified member experience.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            Bonder streamlines the Lifetime member experience by unifying events, community engagement, and staff communication into one clear platform. It reduces the confusion of scattered tools and helps members stay informed, connected, and engaged with their venue.
                        </p>
                        <div className="mt-12 text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            <p className="font-medium text-xl md:text-2xl mb-6">
                                The solution is shaped by four core goals:
                            </p>
                            <ol className="list-decimal pl-5 space-y-6 md:space-y-8">
                                <li className="pl-2">Help members easily discover and join relevant events and communities.</li>
                                <li className="pl-2">Create a unified space where communication with staff and advisors feels simple and accessible.</li>
                                <li className="pl-2">Reduce friction caused by fragmented tools, calendars, and discovery channels.</li>
                                <li className="pl-2">Support long-term engagement through personalized recommendations and connected member journeys.</li>
                            </ol>
                        </div>
                    </div>
                }
            />

            {/* User Journey Map */}
            <ContentSection bgColor="bg-[#f0f0f0]">
                <div className="flex flex-col md:flex-row gap-10 mb-12">
                    <SectionHeading title="User Journey:" className="md:whitespace-nowrap" />
                    <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed max-w-2xl">
                        Mapping the emotional journey from discovery to lasting connections. This journey illustrates how a first-time Bonder user moves from initial awareness to long-term community engagement. Each stage highlights the user's goals, emotions, and key product opportunities that reduce friction and support meaningful, real-world connections.
                    </p>
                </div>

                <UserJourneyMap
                    steps={[
                        {
                            phase: "Awareness",
                            description: "Users discover the app through social media or word of mouth",
                            quote: "I want to find people with similar interest nearby",
                            emotion: { icon: "🤔", label: "Curious" },
                            opportunity: "Clear value proposition in marketing"
                        },
                        {
                            phase: "Onboarding",
                            description: "Creates profile, selects interest, sets location preferences",
                            quote: "This should be quick and easy to set up",
                            emotion: { icon: "😄", label: "Hopeful" },
                            opportunity: "Streamlines sign-up with smart defaults"
                        },
                        {
                            phase: "Discovery",
                            description: "Browses events, explores groups, views potential connections",
                            quote: "I hope I find people I can actually connect with",
                            emotion: { icon: "🤩", label: "Excited" },
                            opportunity: "Personalized recommendations based on interest"
                        },
                        {
                            phase: "Engagement",
                            description: "Joins an event, starts conversations, makes first connection",
                            quote: "This feels natural and not awkward",
                            emotion: { icon: "😌", label: "Satisfied" },
                            opportunity: "Ice-breaker prompts and shared activity context"
                        },
                        {
                            phase: "Retention",
                            description: "Attends multiple events, forms lasting friendships",
                            quote: "I found my community!",
                            emotion: { icon: "🥰", label: "Delighted" },
                            opportunity: "Community features and recurring events"
                        }
                    ]}
                />
            </ContentSection>

            {/* Information Architecture */}
            <ContentSection>
                <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                    <div className="lg:w-1/2">
                        <SectionHeading title="Information Architecture:" className="md:whitespace-nowrap" />
                    </div>
                    <div className="lg:w-1/2">
                        <div className="flex flex-col gap-6 md:pt-16">
                            <p className="font-medium text-[#6e6764] text-xl md:text-2xl leading-relaxed">
                                To translate strategic insights into a clear product structure, I mapped the core navigation system.
                            </p>
                            <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                                The information architecture shows how members move through key areas of the app, forming the basis for its user flows and interface design.
                            </p>
                        </div>
                    </div>
                </div>
            </ContentSection>
            <ContentSection className="!pt-0 !pb-16">
                <div className="w-full rounded-2xl">
                    <img src={`${import.meta.env.BASE_URL}figmaAssets/bonder-ia.png`} alt="Information Architecture Diagram" className="w-full h-auto rounded-2xl shadow-sm" />
                </div>
            </ContentSection>

            {/* User Flows */}
            <TwoColumnSection
                left={<SectionHeading title="User Flows:" />}
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl">
                            These user flows outline the event flow within the Bonder app, mapping how users discover, join, and engage with Life Time Fitness events.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            Defining this flow early helped validate system logic, reduce friction for Life Time members, and ensure a seamless experience from entry to participation.
                        </p>
                    </div>
                }
            />
            <ContentSection className="!pt-0 !pb-16">
                <div className="w-full rounded-2xl">
                    <img src={`${import.meta.env.BASE_URL}figmaAssets/bonder-user-flow.png`} alt="User Flow Diagram" className="w-full h-auto rounded-2xl shadow-sm" />
                </div>
            </ContentSection>

            {/* Lo-Fi Wireframes */}
            <TwoColumnSection
                left={<SectionHeading title="Lo-Fi Wireframes:" />}
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            To support the Lifetime partnership, I created Lo-Fi wireframes for the Bonder app that map out key user journeys and core functionality. This step prioritized usability, content organization, and flow clarity to ensure an intuitive experience before refining visual design.
                        </p>
                    </div>
                }
            />
            <ContentSection bgColor="bg-taupe">
                <ImageGallery images={loFiScreens} columns={4} centerLabels />
            </ContentSection>

            {/* Hi-Fi Wireframes */}
            <TwoColumnSection
                left={<SectionHeading title="Hi-Fi Wireframes:" />}
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl">
                            The Hi-Fi designs brought the app's visual identity to life.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            Moving onto high-fidelity screens helped refine the visual system, unify the design language, and ensure the interface felt intuitive and welcoming for Lifetime members and the broader Bonder community.
                        </p>
                    </div>
                }
            />
            <ContentSection>
                <ImageGallery images={hiFiScreens} columns={4} centerLabels />
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
                    Thank you for reviewing this case study. I'm always open to
                    feedback and would love to discuss how these design solutions could be
                    applied to your projects.
                </p>
            </ContentSection>

            {/* CTA */}
            {/* CTA */}
            <GetInTouchSection theme="dark" />

        </div>
    );
};

export default BonderCaseStudy;
