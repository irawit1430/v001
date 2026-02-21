
import { HeroSection } from "../components/case-studies/new-template/layout/HeroSection";
import { ContentSection } from "../components/case-studies/new-template/layout/ContentSection";
import { TwoColumnSection } from "../components/case-studies/new-template/layout/TwoColumnSection";
import { SectionHeading } from "../components/case-studies/new-template/layout/SectionHeading";
import GetInTouchSection from "../components/sections/GetInTouchSection";
import { ProjectDetailGrid } from "../components/case-studies/new-template/cards/ProjectDetailGrid";
import { InsightCard } from "../components/case-studies/new-template/cards/InsightCard";
import { StepCard } from "../components/case-studies/new-template/cards/StepCard";
import { ImageGallery } from "../components/case-studies/new-template/cards/ImageGallery";
import ResearchOverview from "../components/case-studies/shared/ResearchOverview";
import KeyInsights from "../components/case-studies/shared/KeyInsights";
import RecordzCompetitiveAuditSection from "../components/recordz/RecordzCompetitiveAuditSection";
import RecordzUserFlowSection from "../components/recordz/RecordzUserFlowSection";

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
import eventRef from '../assets/event-overlay.png';

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

// import iaDiagram from '../assets/ia-diagram.png';
// import userFlowDiagram from '../assets/user-flow-diagram.png';

import wireframeWelcome from '../assets/wireframe-welcome.png';
import wireframeLanding from '../assets/wireframe-studio-landing.png';
import wireframeAbout from '../assets/wireframe-studio-about.png';

import hifiStudioLanding from '../assets/hifi-studio-landing.png';
import hifiStudioAbout from '../assets/hifi-studio-about.png';
import hifiWelcome from '../assets/hifi-welcome.png';
import hifiLabelAbout from '../assets/hifi-label-about.png';



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
    { src: hifiWelcome, alt: "Initial Welcome Screen", label: "1331 Recordz Initial Welcome Screen" },
    { src: hifiStudioLanding, alt: "Studio Landing Screen", label: "1331 Recordz Studio Landing Screen" },
    { src: hifiStudioAbout, alt: "Studio About Screen", label: "1331 Recordz Studio About Screen" },
    { src: hifiLabelAbout, alt: "Label About Screen", label: "1331 Recordz Label About Screen" },
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
        overlayIcon: eventRef,
    },
];


const RecordzPage = () => {
    return (
        <div className="min-h-screen bg-[#FFFFFF] overflow-hidden w-full">


            <HeroSection
                title="1331 Recordz"
                subtitle="Music Studio & Label Website"
                imageSrc={heroImage}
                imageAlt="1331 Recordz Website Mockup"
            />

            {/* Project Details */}
            <ContentSection bgColor="bg-[#F9FAFB]">
                <ProjectDetailGrid details={projectDetails} />
            </ContentSection>

            {/* Client Problem */}
            <TwoColumnSection
                left={<SectionHeading title="Client Problem:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="text-[#6F6864] leading-relaxed">
                            <span className="text-lg md:text-[34px] md:leading-[41px] font-medium">1331 Recordz needed a cohesive website that clearly represented both sides of their business:</span>
                            <span className="text-lg md:text-[30px] md:leading-[36px]">
                                {" "}<em>a professional recording studio</em> and an <em>independent music label</em>. The challenge was to merge these two identities into a single experience while keeping each distinct,{" "}
                            </span>
                            <span className="text-lg md:text-[30px] md:leading-[36px] font-medium">using color and visual hierarchy to differentiate studio services from label content</span>
                            <span className="text-lg md:text-[30px] md:leading-[36px]"> without confusing users.</span>
                        </p>
                    </div>
                }
            />

            {/* Key Challenges */}
            <ContentSection bgColor="bg-[#FAFAFA]">
                <SectionHeading title="Key Challenges:" className="mb-10" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {challenges.map((challenge, index) => (
                        <InsightCard key={index} {...challenge} layout="horizontal" />
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
                    <div className="flex flex-col gap-5">
                        <p className="font-semibold text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] text-center">Understanding the Creative Landscape:</p>
                        <div className="text-[#6F6864] text-lg md:text-[30px] md:leading-[36px]">
                            <p>
                                <span className="font-medium">1331 Recordz was created to support independent artists</span>
                                <span> navigating an industry that often values output over identity. Many emerging musicians struggle with visibility, creative ownership, and access to trusted collaborators. </span>
                                <span className="font-medium">Early exploration revealed a common need for spaces that prioritize authentic collaboration, creative freedom, and long-term growth.</span>
                                <span> This discovery phase focused on understanding how artists work and how a studio and label can function as a creative partner and not a gatekeeper.</span>
                            </p>
                        </div>
                    </div>
                }
            />
            {/* Discovery Images */}
            <ContentSection className="!py-0">
                <div className="max-w-[1100px] mx-auto rounded-2xl overflow-hidden">
                    <ImageGallery images={discoveryImages} columns={3} />
                </div>
            </ContentSection>

            {/* Key Insights */}
            <KeyInsights
                backgroundColor="bg-[#D1D1D1]"
                description="These insights summarize the most important patterns uncovered during research and discovery."
                insights={keyInsights}
                textColor="text-black"
            />

            {/* Competitive Audit Table */}
            <ContentSection className="!p-0">
                <RecordzCompetitiveAuditSection />
            </ContentSection>

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
                                <span>How might we build <span className="font-medium">trust and credibility</span> for independent artists using 1331 Recordz?</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we <span className="font-medium">simplify service discovery</span> so artists quickly understand their options?</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we <span className="font-medium">reduce friction and uncertainty</span> in the booking process?</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we design a platform that feels <span className="font-medium">supportive, professional, and artist-centered</span>?</span>
                            </li>
                        </ul>
                    </div>
                }
            />
            <ContentSection className="!py-0">
                <ImageGallery images={hmwImages} columns={2} />
            </ContentSection>

            {/* Solution Overview */}
            <TwoColumnSection
                left={<SectionHeading title="Solution Overview:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            1331 Recordz is a Miami, FL–based independent record label and music studio that empowers artists through creative freedom, transparent practices, and hands-on production support.
                        </p>
                        <div className="text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            <p className="font-medium text-xl md:text-[34px] md:leading-[41px] mb-6">
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
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] leading-relaxed">
                            Organizing the Studio Experience
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            The information architecture shows how users navigate key sections of the site, separating the record label and studio identities while maintaining a cohesive brand experience.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            To ensure the platform was easy to navigate, I created an Information Architecture (IA) map.
                            This structure organizes the studio's services, booking flow, and artist resources into clear, logical categories.
                        </p>
                    </div>
                }
            />

            <ContentSection className="!py-4">
                <img
                    className="w-full max-w-[800px] mx-auto h-auto rounded-2xl"
                    alt="Information Architecture Diagram"
                    src={`${import.meta.env.BASE_URL}figmaAssets/ia-diagram.png`}
                />
            </ContentSection>

            {/* User Flows */}
            <TwoColumnSection
                left={<SectionHeading title="User Flows:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px]">
                            Streamlining the Booking Process
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            I mapped out the primary user flow—booking a studio session.
                            This flow focuses on minimizing steps, providing clear pricing, and confirming availability upfront.
                        </p>
                    </div>
                }
            />

            <ContentSection className="!p-0 max-w-[1400px]">
                <RecordzUserFlowSection />
            </ContentSection>

            {/* Lo-Fi Wireframes */}
            <TwoColumnSection
                left={<SectionHeading title="Lo-Fi Wireframes:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px]">
                            Structuring the Layout
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            I began with low-fidelity wireframes to test layout concepts and ensure the hierarchy of information met artist needs.
                            Key focus areas included the homepage layout, service selection, and the booking calendar interface.
                        </p>
                    </div>
                }
            />
            <ContentSection bgColor="bg-[#6F6864]"> {/* Using dark background as in original */}
                <ImageGallery images={wireframeImages} columns={3} centerLabels />
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
                            Moving onto high-fidelity screens helped refine the visual system, unify the design language, and ensure the interface felt intuitive and welcoming. Typography, color, and layout choices came together to create a polished experience centered on connection and community.
                        </p>
                    </div>
                }
            />
            <ContentSection className="!py-0">
                <div className="flex flex-col gap-12 mb-12 max-w-[1100px] mx-auto">
                    <img src={hifiStudioLanding} alt="Studio Landing" className="w-full rounded-2xl" />
                    <img src={hifiStudioAbout} alt="Studio About" className="w-full rounded-2xl" />
                </div>
                <ImageGallery images={hifiScreens} columns={2} />
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
                <p className="text-center text-[#6F6864] text-base md:text-[28px] md:leading-[33px] mt-12 max-w-5xl mx-auto leading-relaxed">
                    Thank you for reviewing this case study. I’m always open to feedback and would love to discuss how these design solutions could be applied to your projects.
                </p>
            </ContentSection>

            {/* Contact CTA */}
            <GetInTouchSection theme="dark" bgColor="bg-[#6F6864]" buttonBgColor="#D9D9D9" buttonTextColor="black" />

        </div>
    );
};

export default RecordzPage;
