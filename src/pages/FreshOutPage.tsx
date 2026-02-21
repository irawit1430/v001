

import { HeroSection } from "../components/case-studies/new-template/layout/HeroSection";
import { ContentSection } from "../components/case-studies/new-template/layout/ContentSection";
import { TwoColumnSection } from "../components/case-studies/new-template/layout/TwoColumnSection";
import { SectionHeading } from "../components/case-studies/new-template/layout/SectionHeading";
import FreshOutCompetitiveAuditSection from "../components/case-studies/fresh-out/FreshOutCompetitiveAuditSection";
import FreshOutInformationArchitectureSection from "../components/case-studies/fresh-out/FreshOutInformationArchitectureSection";

import GetInTouchSection from "../components/sections/GetInTouchSection";
import { ProjectDetailGrid } from "../components/case-studies/new-template/cards/ProjectDetailGrid";
import { StepCard } from "../components/case-studies/new-template/cards/StepCard";
import { ImageGallery } from "../components/case-studies/new-template/cards/ImageGallery";
import ResearchOverview from "../components/case-studies/shared/ResearchOverview";
import KeyInsights from "../components/case-studies/shared/KeyInsights";
import FreshOutUserFlow from "../components/case-studies/fresh-out/FreshOutUserFlow";
import FreshOutEventFlow from "../components/case-studies/fresh-out/FreshOutEventFlow";


const projectDetails = [
    { label: "ROLE", value: "Lead UX Designer" },
    { label: "DURATION", value: "5 months | 2023" },
    { label: "PROTOTYPE", value: "Figma prototype link" },
    { label: "RESPONSIBILITIES", value: "Design, Research, Prototyping" },
    { label: "TEAM SIZE", value: "Solo Project" },
    { label: "CATEGORY", value: "Social app" },
];



const researchLabels = [
    { icon: `${import.meta.env.BASE_URL}figmaAssets/speech-bubble-removebg-preview-1.svg`, label: "Discovery" },
    { icon: `${import.meta.env.BASE_URL}figmaAssets/twocellphones-removebg-preview--1--1.svg`, label: "Competitive Audit" },
    { icon: `${import.meta.env.BASE_URL}figmaAssets/chart-removebg-preview-2.svg`, label: "User Testing" },
    { icon: `${import.meta.env.BASE_URL}figmaAssets/lightbuldddd-removebg-preview-1.svg`, label: "Insight" },
];

const keyInsights = [
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/group-77.png`,
        title: "Community Focus",
        description: "Users prioritize finding genuine connections over quantity of matches",
    },
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/group-78.png`,
        title: "Location Matters",
        description: "Proximity-based discovery increases likelihood of in person meet up",
    },
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/group-79.png`,
        topIcon: `${import.meta.env.BASE_URL}figmaAssets/calendar-icon.png`,
        title: "Event-Driven",
        description: "Shared activities reduce social anxiety & create natural conversation starters",
    },
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/group-80.png`,
        title: "Authentic Profiles",
        description: "Users want to real interest and personality, not curated perfection.",
    },
];

const nextSteps = [
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/user-groups.png`,
        title: "User Testing",
        description: "Conduct usability testing with target users to validate design decisions and identify pain points.",
    },
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/restart.png`,
        title: "Iterate & Refine",
        description: "Incorporate feedback to improve the user experience and address any discovered issues.",
    },
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/line-chart.png`,
        title: "Analytics Integration",
        description: "Implement tracking to measure key metrics like user engagement and retention rates.",
    },
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/features-list.png`,
        title: "Future Features",
        description: "Explore premium features like event creation, business partnerships, and community moderation tools.",
    },
];

const loFiScreens = [
    { src: `${import.meta.env.BASE_URL}figmaAssets/group-70.png`, alt: "Connect Screen", label: "Connect Screen", sublabel: "Meet new veterans" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/housing-3.png`, alt: "Housing Screen", label: "Housing Screen", sublabel: "Find safe housing" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/housing-3.png`, alt: "Housing Screen", label: "Housing Screen", sublabel: "Find safe housing" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/housing-3.png`, alt: "Housing Screen", label: "Housing Screen", sublabel: "Find safe housing" },
];



const FreshOutPage = () => {
    return (
        <div className="min-h-screen bg-[#FFFFFF] overflow-hidden w-full">


            <HeroSection
                title="Fresh Out"
                subtitle="Veteran Social Application"
                imageSrc={`${import.meta.env.BASE_URL}figmaAssets/freshout-hero-image.png`}
                imageAlt="Fresh Out hero image"
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
                        <p className="text-[#6F6864] leading-relaxed">
                            <span className="text-lg md:text-[34px] md:leading-[41px] font-medium">
                                Upon transitioning out of the military, veterans frequently encounter
                                profound feelings of isolation.{" "}
                            </span>
                            <span className="text-lg md:text-[30px] md:leading-[36px]">
                                This period can be exceptionally challenging for them as they are
                                compelled to embark on a fresh journey, encompassing their
                                professional pursuits, place of residence, and social circles.
                            </span>
                        </p>
                        <p className="text-[#6F6864] leading-relaxed">
                            <span className="text-lg md:text-[30px] md:leading-[36px]">
                                💡
                            </span>
                            <span className="text-lg md:text-[34px] md:leading-[41px] font-medium">
                                In Response to this problem
                            </span>
                            <span className="text-lg md:text-[30px] md:leading-[36px] font-medium">
                                ,{" "}
                            </span>
                            <span className="text-lg md:text-[30px] md:leading-[36px]">
                                veterans are actively pursuing avenues to establish connections with
                                fellow veterans, thereby facilitating networking opportunities and
                                fostering meaningful interpersonal bonds.
                            </span>
                        </p>
                    </div>
                }
            />

            {/* Research Overview */}
            <ResearchOverview
                backgroundColor="bg-[#212873]"
                description="A combination of discovery research, competitive analysis, and early user exploration helped reveal the challenges veterans face during transition."
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
                        <div className="text-[#6F6864] text-lg md:text-[30px] md:leading-[36px]">
                            <p>
                                <span className="font-medium">Transitioning out of the military is a major life shift that impacts every dimension of a veteran's life</span>
                                <span> — community, identity, support systems, and daily structure. While researching this challenge</span>
                                <span className="font-medium">, my goal was to understand the emotional, social, and logistical hurdles veterans face</span>
                                <span> when trying to build new connections in civilian life.</span>
                            </p>
                            <p className="mt-5">
                                <span>Through early </span>
                                <span className="font-medium">exploration,</span>
                                <span> I </span>
                                <span className="font-medium">uncovered a recurring theme:</span>
                                <br />
                                <span>veterans</span>
                                <span className="font-medium"> often feel disconnected</span>
                                <span>, unseen, and unsupported during the transition period, </span>
                                <span className="font-medium">especially when they relocate,</span>
                                <span> enroll in school, or pursue new careers. </span>
                                <span className="font-medium">Traditional social platforms fail to recreate the sense of camaraderie </span>
                                <span>and trust veterans are accustomed to.</span>
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
                        src={`${import.meta.env.BASE_URL}figmaAssets/freshout-discovery-1.jpg`}
                    />
                    <img
                        className="w-full h-auto object-cover rounded-xl"
                        alt="Discovery research 2"
                        src={`${import.meta.env.BASE_URL}figmaAssets/freshout-discovery-2.png`}
                    />
                    <img
                        className="w-full h-auto object-cover rounded-xl"
                        alt="Discovery research 3"
                        src={`${import.meta.env.BASE_URL}figmaAssets/freshout-discovery-3.jpg`}
                    />
                </div>
            </ContentSection>

            {/* Competitive Audit */}
            <FreshOutCompetitiveAuditSection />

            {/* Key Insights */}
            <KeyInsights
                backgroundColor="bg-[#212873]"
                description="These insights summarize the most important patterns uncovered during research and discovery, highlighting the core challenges veterans face when trying to build meaningful connections after service."
                insights={keyInsights}
            />

            {/* How Might We */}
            <TwoColumnSection
                left={<SectionHeading title="How Might We?" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] leading-tight">
                            Turning insights into opportunity through the right questions.
                        </p>
                        <ul className="space-y-4 text-[#6F6864] text-lg md:text-[30px] md:leading-[36px]">
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we reduce digital overwhelm during transition?</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we build purposeful, meaningful interactions?</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we help veterans feel safe and in control?</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we surface shared military experiences?</span>
                            </li>
                        </ul>
                    </div>
                }
            />

            <ContentSection className="!py-0">
                <img
                    className="w-full max-w-[1100px] mx-auto h-auto rounded-2xl"
                    alt="How might we"
                    src={`${import.meta.env.BASE_URL}figmaAssets/how-might-we-image-group.png`}
                />
            </ContentSection>

            {/* Solution Overview */}
            <TwoColumnSection
                left={<SectionHeading title="Solution Overview:" />}
                right={
                    <div className="flex flex-col">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] leading-tight mb-8">
                            Turning insights into opportunity with the right questions.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            Fresh Out is a veteran-centered social experience built around safety,
                            connection, and purpose. It reduces the overwhelm of traditional social
                            platforms by offering a focused, meaningful space where veterans can
                            build community at any stage of life.
                        </p>
                        <div className="mt-12 text-[#6F6864] leading-relaxed">
                            <p className="font-medium text-xl md:text-[34px] md:leading-[41px] mb-6">
                                The solution is shaped by four core goals:
                            </p>
                            <ol className="list-decimal pl-5 space-y-6 md:space-y-8 text-lg md:text-[34px] md:leading-[41px] font-normal">
                                <li className="pl-2">Enable veterans to connect through shared service experience</li>
                                <li className="pl-2">Create a safe and trusted environment for communication</li>
                                <li className="pl-2">Reduce the noise of traditional social feeds</li>
                                <li className="pl-2">Support identity-building through community and purpose</li>
                            </ol>
                        </div>
                    </div>
                }
            />

            {/* Information Architecture */}
            <TwoColumnSection
                left={<SectionHeading title="Information Architecture:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] leading-relaxed">
                            To translate strategic insights into a clear product structure, I
                            mapped Fresh Out's core navigation system.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            The information architecture shows how veterans move through key areas
                            of the app, forming the basis for its user flows and interface design.
                        </p>
                    </div>
                }
            />

            <ContentSection className="!py-4 !px-0 sm:!px-4 md:!px-8 w-full max-w-full overflow-hidden">
                <FreshOutInformationArchitectureSection />
            </ContentSection>

            {/* User Flows */}
            <TwoColumnSection
                left={<SectionHeading title="User Flows:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px]">
                            These user flows outline the key steps veterans take inside the app.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            Mapping them early allowed me to validate the logic of each path and
                            confirm that the experience remains seamless from onboarding to event
                            participation.
                        </p>
                    </div>
                }
            />

            <ContentSection className="!px-0 sm:!px-4 md:!px-8 w-full max-w-full">
                <div className="space-y-12 w-full">
                    <div className="w-full overflow-hidden">
                        <p className="font-normal text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] mb-4 pl-4 md:pl-0">Sign up</p>
                        <FreshOutUserFlow />
                    </div>
                    <div className="px-4 md:px-0 overflow-hidden">
                        <p className="font-normal text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] mb-4 pl-4 md:pl-0">Events</p>
                        <FreshOutEventFlow />
                    </div>
                </div>
            </ContentSection>

            {/* Survey */}
            <TwoColumnSection
                left={<SectionHeading title="Survey:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px]">
                            Survey responses revealed common pain points and opportunities.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            Veterans reported feeling isolated after service and expressed a need
                            for simpler ways to connect with others who share their background.
                        </p>
                    </div>
                }
            />

            <ContentSection>
                <img className="w-full max-w-[1100px] mx-auto h-auto rounded-2xl" alt="Survey infograph" src={`${import.meta.env.BASE_URL}figmaAssets/survey-infograph.png`} />
                <p className="mt-10 text-[#6F6864] text-base md:text-[28px] md:leading-[33px] leading-relaxed text-left max-w-[1146px] mx-auto">
                    <span> Because the survey</span>
                    <span className="font-medium"> included 7 participants</span>
                    <span>, these results should be interpreted directionally. They highlight clear trends but are not statistically generalizable. The findings were used to guide early design decisions and will be validated further with additional testing.</span>
                </p>
            </ContentSection>

            {/* Lo-Fi Wireframes */}
            <TwoColumnSection
                left={<SectionHeading title="Lo-Fi Wireframes:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px]">
                            Early wireframes helped shape the core structure of the app.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            Creating low-fidelity wireframes allowed me to quickly translate
                            research insights into tangible layouts and test the overall flow of the
                            experience. This stage focused on defining navigation, organizing key
                            features, and validating that veterans could easily discover events,
                            connect with others, and access relevant resources.
                        </p>
                    </div>
                }
            />

            <ContentSection bgColor="bg-[#212873]">
                <ImageGallery images={loFiScreens} columns={4} centerLabels />
            </ContentSection>

            {/* Hi-Fi Wireframes */}
            <TwoColumnSection
                left={<SectionHeading title="Hi-Fi Wireframes:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px]">
                            The Hi-Fi designs brought the app's visual identity to life.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            Moving onto high-fidelity screens helped refine the visual system, unify
                            the design language, and ensure the interface felt intuitive and
                            welcoming. Typography, color, and layout choices came together to create
                            a polished experience centered on connection and community.
                        </p>
                    </div>
                }
            />

            <ContentSection className="!py-0">
                <img className="w-full max-w-[1100px] mx-auto h-auto rounded-2xl" alt="Hi-Fi wireframes" src={`${import.meta.env.BASE_URL}figmaAssets/hifi.png`} />
            </ContentSection>

            {/* Key Features */}
            <TwoColumnSection
                left={
                    <div>
                        <SectionHeading title="Key Features:" />
                        <img className="w-full max-w-md h-auto mt-8" alt="Key feature" src={`${import.meta.env.BASE_URL}figmaAssets/key-feature.png`} />
                    </div>
                }
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-normal text-[#6F6864] text-lg md:text-[34px] md:leading-[41px] leading-relaxed">
                            The key features below highlight the core
                            functionality of the product, each designed to support veterans in staying informed,
                            connected, and in control of their transition journey.
                        </p>
                        <ul className="space-y-3 text-[#6F6864] font-normal text-lg md:text-[30px] md:leading-[36px]">
                            <li>Housing Finder</li>
                            <li>Roommate Search</li>
                            <li>Localized Events</li>
                            <li>Mentor Finder</li>
                            <li>Community Finder</li>
                            <li>Veteran Affairs Updates</li>
                        </ul>
                    </div>
                }
            />

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
                <p className="mt-12 text-center text-[#6F6864] text-base md:text-[28px] md:leading-[33px] max-w-5xl mx-auto">
                    Thank you for reviewing this case study. I'm always open to feedback and would love to discuss how these design solutions could be applied to your projects.
                </p>
            </ContentSection>

            {/* Contact CTA */}
            {/* Contact CTA */}
            <GetInTouchSection theme="dark" bgColor="bg-[#2E3278]" buttonBgColor="#0954E2" buttonTextColor="white" />

        </div>
    );
};

export default FreshOutPage;
