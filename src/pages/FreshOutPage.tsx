import { Navbar } from "../components/case-studies/new-template/layout/Navbar";

import { HeroSection } from "../components/case-studies/new-template/layout/HeroSection";
import { ContentSection } from "../components/case-studies/new-template/layout/ContentSection";
import { TwoColumnSection } from "../components/case-studies/new-template/layout/TwoColumnSection";
import { SectionHeading } from "../components/case-studies/new-template/layout/SectionHeading";
import { CTASection } from "../components/case-studies/new-template/layout/CTASection";
import { ProjectDetailGrid } from "../components/case-studies/new-template/cards/ProjectDetailGrid";
import { StepCard } from "../components/case-studies/new-template/cards/StepCard";
import { ImageGallery } from "../components/case-studies/new-template/cards/ImageGallery";
import ResearchOverview from "../components/case-studies/shared/ResearchOverview";
import KeyInsights from "../components/case-studies/shared/KeyInsights";

const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "#resume" },
];

const projectDetails = [
    { label: "ROLE", value: "Lead UX Designer" },
    { label: "DURATION", value: "5 months | 2023" },
    { label: "PROTOTYPE", value: "Figma prototype link" },
    { label: "RESPONSIBILITIES", value: "Design, Research, Prototyping" },
    { label: "TEAM SIZE", value: "Solo Project" },
    { label: "CATEGORY", value: "Social app" },
];



const researchLabels = [
    { icon: "/figmaAssets/speech-bubble-removebg-preview-1.svg", label: "Discovery" },
    { icon: "/figmaAssets/twocellphones-removebg-preview--1--1.svg", label: "Competitive Audit" },
    { icon: "/figmaAssets/chart-removebg-preview-2.svg", label: "User Testing" },
    { icon: "/figmaAssets/lightbuldddd-removebg-preview-1.svg", label: "Insight" },
];

const keyInsights = [
    {
        icon: "/figmaAssets/group-77.png",
        title: "Community Focus",
        description: "Users prioritize finding genuine connections over quantity of matches",
    },
    {
        icon: "/figmaAssets/group-78.png",
        title: "Location Matters",
        description: "Proximity-based discovery increases likelihood of in person meet up",
    },
    {
        icon: "/figmaAssets/group-79.png",
        topIcon: "/figmaAssets/calendar-icon.png",
        title: "Event-Driven",
        description: "Shared activities reduce social anxiety & create natural conversation starters",
    },
    {
        icon: "/figmaAssets/group-80.png",
        title: "Authentic Profiles",
        description: "Users want to real interest and personality, not curated perfection.",
    },
];

const nextSteps = [
    {
        icon: "/figmaAssets/user-groups.png",
        title: "User Testing",
        description: "Conduct usability testing with target users to validate design decisions and identify pain points.",
    },
    {
        icon: "/figmaAssets/restart.png",
        title: "Iterate & Refine",
        description: "Incorporate feedback to improve the user experience and address any discovered issues.",
    },
    {
        icon: "/figmaAssets/line-chart.png",
        title: "Analytics Integration",
        description: "Implement tracking to measure key metrics like user engagement and retention rates.",
    },
    {
        icon: "/figmaAssets/features-list.png",
        title: "Future Features",
        description: "Explore premium features like event creation, business partnerships, and community moderation tools.",
    },
];

const loFiScreens = [
    { src: "/figmaAssets/group-70.png", alt: "Connect Screen", label: "Connect Screen", sublabel: "Meet new veterans" },
    { src: "/figmaAssets/housing-3.png", alt: "Housing Screen", label: "Housing Screen", sublabel: "Find safe housing" },
    { src: "/figmaAssets/housing-3.png", alt: "Housing Screen", label: "Housing Screen", sublabel: "Find safe housing" },
    { src: "/figmaAssets/housing-3.png", alt: "Housing Screen", label: "Housing Screen", sublabel: "Find safe housing" },
];



const FreshOutPage = () => {
    return (
        <div className="bg-white overflow-hidden w-full">
            <Navbar
                logoSrc="/figmaAssets/seashell-pink-removebg-preview-1.png"
                logoAlt="Seashell pink logo"
                links={navigationLinks}
            />

            <HeroSection
                title="Fresh Out"
                subtitle="Veteran Social Application"
                imageSrc="/figmaAssets/freshout-hero-image.png"
                imageAlt="Fresh Out hero image"
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
                            <span className="font-semibold">
                                Upon transitioning out of the military, veterans frequently encounter
                                profound feelings of isolation.{" "}
                            </span>
                            This period can be exceptionally challenging for them as they are
                            compelled to embark on a fresh journey, encompassing their
                            professional pursuits, place of residence, and social circles.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-2xl leading-relaxed">
                            <span className="font-semibold text-xl md:text-2xl">
                                💡In Response to this problem,
                            </span>{" "}
                            veterans are actively pursuing avenues to establish connections with
                            fellow veterans, thereby facilitating networking opportunities and
                            fostering meaningful interpersonal bonds.
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
                    <div className="flex flex-col gap-4 md:pt-16">
                        <h3 className="font-semibold text-[#6e6764] text-xl md:text-2xl">
                            Understanding the Problem Space:
                        </h3>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            <span className="font-medium">
                                Transitioning out of the military is a major life shift that impacts
                                every dimension of a veteran's life
                            </span>{" "}
                            — community, identity, support systems, and daily structure. While
                            researching this challenge,{" "}
                            <span className="font-medium">
                                my goal was to understand the emotional, social, and logistical
                                hurdles veterans face
                            </span>{" "}
                            when trying to build new connections in civilian life.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            Through early <span className="font-medium">exploration,</span> I{" "}
                            <span className="font-medium">uncovered a recurring theme:</span>{" "}
                            veterans <span className="font-medium">often feel disconnected</span>,
                            unseen, and unsupported during the transition period,{" "}
                            <span className="font-medium">especially when they relocate,</span>{" "}
                            enroll in school, or pursue new careers.{" "}
                            <span className="font-medium">
                                Traditional social platforms fail to recreate the sense of camaraderie
                            </span>{" "}
                            and trust veterans are accustomed to.
                        </p>
                    </div>
                }
            />

            {/* Discovery Image */}
            <ContentSection className="!py-0">
                <img
                    className="w-full h-auto object-contain"
                    alt="Discovery research"
                    src="/figmaAssets/discovery-image-group.png"
                />
            </ContentSection>

            {/* Competitive Audit */}
            <TwoColumnSection
                left={<SectionHeading title="Competitive Audit:" />}
                right={
                    <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed md:pt-16">
                        <span className="font-medium">
                            The competitive audit evaluates key platforms
                        </span>{" "}
                        that support veterans in building community, accessing resources, and
                        navigating post-service life. By comparing core features, strengths,
                        and weaknesses across competitors, this analysis reveals clear
                        opportunities to differentiate the product and address unmet needs
                        within the veteran support landscape.
                    </p>
                }
            />

            <ContentSection className="!pt-0 !pb-16">
                <img
                    className="w-full h-auto object-cover"
                    alt="Competitive audit"
                    src="/figmaAssets/conpersensive-audit-image.png"
                />
            </ContentSection>

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
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl leading-tight">
                            Turning insights into opportunity through the right questions.
                        </p>
                        <ul className="space-y-4 text-[#6e6764] text-lg md:text-xl">
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
                    className="w-full h-auto object-contain"
                    alt="How might we"
                    src="/figmaAssets/how-might-we-image-group.png"
                />
            </ContentSection>

            {/* Solution Overview */}
            <TwoColumnSection
                left={<SectionHeading title="Solution Overview:" />}
                right={
                    <div className="flex flex-col md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl leading-tight mb-8">
                            Turning insights into opportunity with the right questions.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            Fresh Out is a veteran-centered social experience built around safety,
                            connection, and purpose. It reduces the overwhelm of traditional social
                            platforms by offering a focused, meaningful space where veterans can
                            build community at any stage of life.
                        </p>
                        <div className="mt-12 text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            <p className="font-medium text-xl md:text-2xl mb-6">
                                The solution is shaped by four core goals:
                            </p>
                            <ol className="list-decimal pl-5 space-y-6 md:space-y-8">
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
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl leading-relaxed">
                            To translate strategic insights into a clear product structure, I
                            mapped Fresh Out's core navigation system.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            The information architecture shows how veterans move through key areas
                            of the app, forming the basis for its user flows and interface design.
                        </p>
                    </div>
                }
            />

            <ContentSection className="!py-4">
                <img
                    className="w-full h-auto"
                    alt="Information Architecture"
                    src="/figmaAssets/freshout-info-architecture.png"
                />
            </ContentSection>

            {/* User Flows */}
            <TwoColumnSection
                left={<SectionHeading title="User Flows:" />}
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl">
                            These user flows outline the key steps veterans take inside the app.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            Mapping them early allowed me to validate the logic of each path and
                            confirm that the experience remains seamless from onboarding to event
                            participation.
                        </p>
                    </div>
                }
            />

            <ContentSection>
                <div className="space-y-12">
                    <div>
                        <p className="text-[#6e6764] text-xl md:text-2xl mb-4">Sign up</p>
                        <img className="w-full h-auto object-cover" alt="Sign up flow" src="/figmaAssets/sign-up.svg" />
                    </div>
                    <div>
                        <p className="text-[#6e6764] text-xl md:text-2xl mb-4">Events</p>
                        <img className="w-full h-auto object-cover" alt="Events flow" src="/figmaAssets/event.png" />
                    </div>
                </div>
            </ContentSection>

            {/* Survey */}
            <TwoColumnSection
                left={<SectionHeading title="Survey:" />}
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl">
                            Survey responses revealed common pain points and opportunities.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            Veterans reported feeling isolated after service and expressed a need
                            for simpler ways to connect with others who share their background.
                        </p>
                    </div>
                }
            />

            <ContentSection>
                <img className="w-full h-auto object-cover" alt="Survey infograph" src="/figmaAssets/survey-infograph.png" />
                <p className="mt-8 text-[#6e6764] text-base md:text-lg leading-relaxed text-left max-w-4xl mx-auto">
                    Because the survey <span className="font-medium">included 7 participants</span>,
                    these results should be interpreted directionally. They highlight clear trends but
                    are not statistically generalizable. The findings were used to guide early design
                    decisions and will be validated further with additional testing.
                </p>
            </ContentSection>

            {/* Lo-Fi Wireframes */}
            <TwoColumnSection
                left={<SectionHeading title="Lo-Fi Wireframes:" />}
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl">
                            Early wireframes helped shape the core structure of the app.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
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
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl">
                            The Hi-Fi designs brought the app's visual identity to life.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            Moving onto high-fidelity screens helped refine the visual system, unify
                            the design language, and ensure the interface felt intuitive and
                            welcoming. Typography, color, and layout choices came together to create
                            a polished experience centered on connection and community.
                        </p>
                    </div>
                }
            />

            <ContentSection className="!py-0">
                <img className="w-full h-auto object-cover" alt="Hi-Fi wireframes" src="/figmaAssets/hifi.png" />
            </ContentSection>

            {/* Key Features */}
            <TwoColumnSection
                left={
                    <div>
                        <SectionHeading title="Key Features:" />
                        <img className="w-full max-w-md h-auto mt-8" alt="Key feature" src="/figmaAssets/key-feature.png" />
                    </div>
                }
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            <span className="font-medium">The key features below highlight the core </span>
                            functionality of the product, each designed to support veterans in staying informed,
                            connected, and in control of their transition journey.
                        </p>
                        <ul className="space-y-3 text-[#6e6764] font-medium text-lg md:text-xl">
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
                <p className="mt-12 text-left text-[#6e6764] text-base md:text-lg max-w-3xl mx-auto">
                    Thank you for reviewing this case study. I'm always open to
                    feedback and would love to discuss how these design solutions could be
                    applied to your projects.
                </p>
            </ContentSection>

            {/* Contact CTA */}
            <CTASection
                title="Get in Touch!"
                description="If you'd like to connect or learn more about this project, feel free to reach out."
                buttons={[{ label: "Email" }, { label: "Linkedin" }]}
            />

        </div>
    );
};

export default FreshOutPage;
