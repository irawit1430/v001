import { Navbar } from "../components/case-studies/new-template/layout/Navbar";

import { HeroSection } from "../components/case-studies/new-template/layout/HeroSection";
import { ContentSection } from "../components/case-studies/new-template/layout/ContentSection";
import { TwoColumnSection } from "../components/case-studies/new-template/layout/TwoColumnSection";
import { SectionHeading } from "../components/case-studies/new-template/layout/SectionHeading";
import { CTASection } from "../components/case-studies/new-template/layout/CTASection";
import { ProjectDetailGrid } from "../components/case-studies/new-template/cards/ProjectDetailGrid";
import { InsightCard } from "../components/case-studies/new-template/cards/InsightCard";
import { StepCard } from "../components/case-studies/new-template/cards/StepCard";
import { ImageGallery } from "../components/case-studies/new-template/cards/ImageGallery";
import ResearchOverview from "../components/case-studies/shared/ResearchOverview";
import KeyInsights from "../components/case-studies/shared/KeyInsights";

// Import images
import heroImage from '../assets/1331-recordz-hero.png';
import iconShield from '../assets/icon-shield.png';
import iconBadge from '../assets/icon-badge.png';
import iconBooks from '../assets/icon-books.png';
import iconCommunity from '../assets/icon-community.png';
import iconUserTesting from '../assets/icon-user-testing.png';
import iconIterate from '../assets/icon-iterate.png';
import iconAnalytics from '../assets/icon-analytics.png';
import iconFeatures from '../assets/icon-features.png';

import challengeLaptop from '../assets/challenge-laptop.png';
import challengeCircle from '../assets/challenge-circle.png';
import challengeCompass from '../assets/challenge-compass.png';
import challengeShield from '../assets/challenge-shield.png';

import interiorImage from '../assets/recordz-interior.png';
import studioImage from '../assets/recordz-studio.png';
import visionBoardImage from '../assets/recordz-vision-board.png';

import studioHmw from '../assets/hmw-studio.png';
import meetingHmw from '../assets/hmw-meeting.png';
import wireframeHmw from '../assets/hmw-wireframe.png';
import djHmw from '../assets/hmw-dj.png';

import iaDiagram from '../assets/ia-diagram.png';
import userFlowDiagram from '../assets/user-flow-diagram.png';

import wireframeWelcome from '../assets/wireframe-welcome.png';
import wireframeLanding from '../assets/wireframe-studio-landing.png';
import wireframeAbout from '../assets/wireframe-studio-about.png';

import hifiStudioLanding from '../assets/hifi-studio-landing.png';
import hifiStudioAbout from '../assets/hifi-studio-about.png';
import hifiWelcome from '../assets/hifi-welcome.png';
import hifiLabelAbout from '../assets/hifi-label-about.png';

const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "#resume" },
];

const projectDetails = [
    { label: "ROLE", value: "Lead UX Designer" },
    { label: "DURATION", value: "12 weeks | 2025" },
    { label: "PROTOTYPE", value: "Figma prototype link" },
    { label: "RESPONSIBILITIES", value: "Ideation, Design, Research, Prototyping" },
    { label: "TEAM SIZE", value: "Solo Freelance Project" },
    { label: "CATEGORY", value: "Website" },
];

const keyInsights = [
    { title: 'Trust & Safety', description: 'Clear product conditions and trusted sellers build confidence', icon: iconShield },
    { title: 'Platform Clarity', description: 'Inconsistent descriptions and images hinder product evaluation', icon: iconBadge },
    { title: 'Navigation Simplicity', description: 'Cluttered layouts and categories hinder mobile product discovery', icon: iconBooks },
    { title: 'Artist Community', description: 'Existing platforms lack parent-focused community and trust features', icon: iconCommunity },
];

const researchLabels = [
    { icon: `${import.meta.env.BASE_URL}figmaAssets/speech-bubble-removebg-preview-1.svg`, label: "Discovery" },
    { icon: `${import.meta.env.BASE_URL}figmaAssets/twocellphones-removebg-preview--1--1.svg`, label: "Competitive Audit" },
    { icon: `${import.meta.env.BASE_URL}figmaAssets/chart-removebg-preview-2.svg`, label: "User Testing" },
    { icon: `${import.meta.env.BASE_URL}figmaAssets/lightbuldddd-removebg-preview-1.svg`, label: "Insight" },
];

const challenges = [
    { title: 'Unified Dual Experience', description: 'Designing a unified experience for two distinct offerings within one site', icon: challengeLaptop },
    { title: 'Clear Distinction by Color', description: 'Separating studio services and label content through color and visual cues', icon: challengeCircle },
    { title: 'Intuitive User Navigation', description: 'Designing a unified experience for two distinct offerings within one site', icon: challengeCompass },
    { title: 'Strong Professional Identity', description: 'Maintaining a strong, professional brand identity across both areas', icon: challengeShield },
];

const discoveryImages = [
    { src: interiorImage, alt: "1331 Recordz Interior", label: "1331 Recordz Interior" },
    { src: studioImage, alt: "1331 Recordz Studio", label: "1331 Recordz Studio" },
    { src: visionBoardImage, alt: "1331 Recordz Vision Board", label: "1331 Recordz Vision Board" },
];

const hmwImages = [
    { src: studioHmw, alt: "Recording Studio" },
    { src: meetingHmw, alt: "Team Meeting" },
    { src: wireframeHmw, alt: "Wireframe Design" },
    { src: djHmw, alt: "DJ Equipment" },
];

const wireframeImages = [
    { src: wireframeWelcome, alt: "Initial Welcome Screen", label: "Initial Welcome Screen", sublabel: "Label or Studio entrance" },
    { src: wireframeLanding, alt: "Studio Landing Screen", label: "Studio Landing Screen", sublabel: "Studio main page" },
    { src: wireframeAbout, alt: "Studio About Screen", label: "Studio About Screen", sublabel: "Login or sign up" },
];

const hifiScreens = [
    { src: hifiWelcome, alt: "Initial Welcome Screen", label: "Initial Welcome Screen" },
    { src: hifiLabelAbout, alt: "Label About Screen", label: "Label About Screen" },
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


const RecordzPage = () => {
    return (
        <div className="bg-white overflow-hidden w-full">
            <Navbar
                logoSrc={`${import.meta.env.BASE_URL}figmaAssets/seashell-pink-removebg-preview-1.png`}
                logoAlt="Seashell pink logo"
                links={navigationLinks}
            />

            <HeroSection
                title="1331 Recordz"
                subtitle="Music Studio & Label Website"
                imageSrc={heroImage}
                imageAlt="1331 Recordz Website Mockup"
            />

            {/* Project Details */}
            <ContentSection bgColor="bg-gray-50">
                <ProjectDetailGrid details={projectDetails} />
            </ContentSection>

            {/* Problem Statement */}
            <TwoColumnSection
                left={<SectionHeading title="Problem Statement:" />}
                right={
                    <p className="text-[#6e6764] text-lg md:text-2xl leading-relaxed md:pt-16">
                        <strong>1331 Recordz needed a cohesive website that clearly represented both sides of their business:</strong> a professional recording studio and an independent music label. The challenge was to merge these two identities into a single experience while keeping each distinct.
                    </p>
                }
            />

            {/* Key Challenges */}
            <ContentSection bgColor="bg-[#FAFAFA]">
                <SectionHeading title="Key Challenges:" className="mb-10" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {challenges.map((challenge, index) => (
                        <InsightCard key={index} {...challenge} />
                    ))}
                </div>
            </ContentSection>

            {/* Research Overview */}
            <ResearchOverview
                backgroundColor="bg-taupe"
                description="A combination of discovery research, competitive analysis, and early user exploration helped reveal the challenges studios and labels face when building a cohesive digital presence."
                cards={researchLabels}
            />

            {/* Discovery */}
            <TwoColumnSection
                left={<SectionHeading title="Discovery:" />}
                right={
                    <div className="flex flex-col gap-4 md:pt-16">
                        <h3 className="text-xl md:text-2xl font-semibold text-[#333] leading-tight">Understanding the Creative Landscape:</h3>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            1331 Recordz was created to support independent artists navigating an industry that often values output over identity. Many emerging musicians struggle with visibility, creative ownership, and access to trusted collaborators.
                        </p>
                    </div>
                }
            />
            <ContentSection>
                <ImageGallery images={discoveryImages} columns={3} />
            </ContentSection>

            {/* Key Insights */}
            <KeyInsights
                backgroundColor="bg-[#D1D1D1]"
                description="These insights summarize the most important patterns uncovered during research and discovery."
                insights={keyInsights}
                textColor="text-black"
            />

            {/* Competitive Audit Table */}
            <ContentSection>
                <SectionHeading title="Competitive Audit:" description="Analyzing competing Miami based recording studios and labels." className="mb-12" />

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr>
                                <th className="p-4 border-b-2 border-gray-200"></th>
                                <th className="p-4 border-b-2 border-gray-200 font-bold bg-gray-50">Criteria Recording Studios</th>
                                <th className="p-4 border-b-2 border-gray-200 font-bold">Circle House Studios</th>
                                <th className="p-4 border-b-2 border-gray-200 font-bold bg-gray-50">Hit Factory Criteria</th>
                                <th className="p-4 border-b-2 border-gray-200 font-bold">Art House Studios</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#6e6764] text-base">
                            <tr>
                                <td className="p-4 border-b border-gray-100 font-semibold bg-gray-50">Product Summary</td>
                                <td className="p-4 border-b border-gray-100 bg-gray-50">Legendary Miami based recording studio.</td>
                                <td className="p-4 border-b border-gray-100">Known for hip hop and culture.</td>
                                <td className="p-4 border-b border-gray-100 bg-gray-50">High end production services.</td>
                                <td className="p-4 border-b border-gray-100">Boutique studio for independent artists.</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-gray-100 font-semibold bg-gray-50">Target Users</td>
                                <td className="p-4 border-b border-gray-100 bg-gray-50">Established artists, top tier.</td>
                                <td className="p-4 border-b border-gray-100">Independent and established.</td>
                                <td className="p-4 border-b border-gray-100 bg-gray-50">Professional musicians, commercial.</td>
                                <td className="p-4 border-b border-gray-100">Independent musicians, creatives.</td>
                            </tr>
                            {/* Simplified table for brevity, but captures structure */}
                        </tbody>
                    </table>
                </div>
            </ContentSection>

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
                                <span>How might we build trust and credibility for independent artists using 1331 Recordz?</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we simplify service discovery so artists quickly understand their options?</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we reduce friction and uncertainty in the booking process?</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we design a platform that feels supportive, professional, and artist-centered?</span>
                            </li>
                        </ul>
                    </div>
                }
            />
            <ContentSection>
                <ImageGallery images={hmwImages} columns={4} />
            </ContentSection>

            {/* Solution Overview */}
            <TwoColumnSection
                left={<SectionHeading title="Solution Overview:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            1331 Recordz is a Miami, FL–based independent record label and music studio that empowers artists through creative freedom, transparent practices, and hands-on production support.
                        </p>
                        <div className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            <p className="font-medium text-xl md:text-2xl mb-6">
                                The solution is shaped by four core goals:
                            </p>
                            <ul className="space-y-4 md:space-y-8">
                                <li className="flex gap-3 items-start">
                                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                    <span>Empower Artists</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                    <span>Establish Trust</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                    <span>Reduce Barriers</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                    <span>Build a Creative Community</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
            />

            {/* Architecture */}
            <TwoColumnSection
                left={<SectionHeading title="Information Architecture:" />}
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            The information architecture shows how users navigate key sections of the site, separating the record label and studio identities while maintaining a cohesive brand experience.
                        </p>
                    </div>
                }
            />
            <ContentSection className="!pt-0 !pb-16">
                <img src={iaDiagram} alt="IA Diagram" className="w-full h-auto object-cover rounded-2xl" />
            </ContentSection>

            <TwoColumnSection
                left={<SectionHeading title="User Flows:" />}
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            The site architecture clearly separates 1331 Recordz's record label and studio offerings. The studio booking flow was intentionally kept simple and inquiry-based.
                        </p>
                    </div>
                }
            />
            <ContentSection className="!pt-0 !pb-16">
                <img src={userFlowDiagram} alt="User Flow Diagram" className="w-full h-auto object-cover rounded-2xl" />
            </ContentSection>

            {/* Lo-Fi Wireframes */}
            <TwoColumnSection
                left={<SectionHeading title="Lo-Fi Wireframes:" />}
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            Low-fidelity wireframes were created to establish a clear and intuitive layout. This phase emphasized information hierarchy and wayfinding.
                        </p>
                    </div>
                }
            />
            <ContentSection bgColor="bg-[#6F6864]"> {/* Using dark background as in original */}
                <ImageGallery images={wireframeImages} columns={3} />
            </ContentSection>

            {/* Hi-Fi Wireframes */}
            <TwoColumnSection
                left={<SectionHeading title="Hi-Fi Wireframes:" />}
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            The Hi-Fi designs brought the app's visual identity to life. Typography, color, and layout choices came together to create a polished experience centered on connection.
                        </p>
                    </div>
                }
            />
            <ContentSection>
                <div className="flex flex-col gap-12 mb-12">
                    <img src={hifiStudioLanding} alt="Studio Landing" className="w-full rounded-2xl shadow-lg" />
                    <img src={hifiStudioAbout} alt="Studio About" className="w-full rounded-2xl shadow-lg" />
                </div>
                <ImageGallery images={hifiScreens} columns={2} />
            </ContentSection>

            {/* Next Steps */}
            <ContentSection>
                <SectionHeading
                    title="Next Steps:"
                    description="Road map for future development"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                    {nextSteps.map((step, index) => (
                        <StepCard key={index} {...step} />
                    ))}
                </div>
            </ContentSection>

            {/* CTA */}
            <CTASection
                title="Get in Touch!"
                description="If you'd like to connect or learn more about this project, feel free to reach out."
                buttons={[{ label: "Email" }, { label: "Linkedin" }]}
            />

        </div>
    );
};

export default RecordzPage;
