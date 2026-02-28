
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
                imageClassName="w-full max-w-[1000px] h-auto object-contain"
                imageContainerClassName="relative z-0 w-full flex justify-center -mt-4 md:-mt-10"
                gradientOverlay="linear-gradient(180deg, #FFFFFF 21.15%, #CCCCCC 50%, #B3B3B3 75%, #999999 100%)"
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
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] leading-tight">
                            1331 Recordz needed a cohesive website that clearly represented both sides of their business:
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            a professional recording studio and an independent music label. The challenge was to merge these two identities into a single experience while keeping each distinct, <span className="font-medium">using color and visual hierarchy to differentiate studio services from label content</span> without confusing users.
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

            {/* Competitive Audit Table */}
            <ContentSection className="!p-0">
                <RecordzCompetitiveAuditSection />
            </ContentSection>

            {/* Key Insights */}
            <KeyInsights
                backgroundColor="bg-[#D1D1D1]"
                description="These insights summarize the most important patterns uncovered during research and discovery."
                insights={keyInsights}
                textColor="text-black"
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
                <div className="max-w-[1100px] mx-auto">
                    <ImageGallery images={hmwImages} columns={2} />
                </div>
            </ContentSection>

            {/* Solution Overview */}
            <TwoColumnSection
                left={<SectionHeading title="Solution Overview:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] leading-tight">
                            Turning creative vision into cultural impact with the right platform.
                        </p>
                        <p className="text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            1331 Recordz is a Miami, FL–based independent record label and music studio that empowers artists through <span className="font-medium">creative freedom</span>, transparent practices, and hands-on production support. Prioritizing artist ownership and authentic, culturally driven sound, <span className="font-medium">1331 Recordz combines professional studio access with modern distribution to support artists in South Florida and beyond.</span>
                        </p>
                    </div>
                }
            />

            {/* Solution Core Goals */}
            <ContentSection>
                <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] mb-10">
                    The solution is shaped by four core goals:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-[#6F6864] rounded-2xl p-8 md:p-10 bg-white flex items-start gap-5 md:gap-6">
                        <img src={`${import.meta.env.BASE_URL}figmaAssets/image copy 17.png`} alt="1" className="w-[60px] h-[60px] shrink-0" />
                        <div>
                            <h3 className="font-medium text-xl md:text-2xl mb-6 text-[#6F6864]">Empower Artists</h3>
                            <p className="text-lg md:text-xl leading-relaxed text-[#6F6864]">Provide artists with the tools, studio access, amd resources needed to maintain control over their music and creative direction</p>
                        </div>
                    </div>
                    <div className="border border-[#6F6864] rounded-2xl p-8 md:p-10 bg-white flex items-start gap-5 md:gap-6">
                        <img src={`${import.meta.env.BASE_URL}figmaAssets/image copy 18.png`} alt="2" className="w-[60px] h-[60px] shrink-0" />
                        <div>
                            <h3 className="font-medium text-xl md:text-2xl mb-6 text-[#6F6864]">Establish Trust</h3>
                            <p className="text-lg md:text-xl leading-relaxed text-[#6F6864]">Establish clear communication, fair agreements, and ethical practices that foster long-term artist-label relationships</p>
                        </div>
                    </div>
                    <div className="border border-[#6F6864] rounded-2xl p-8 md:p-10 bg-white flex items-start gap-5 md:gap-6">
                        <img src={`${import.meta.env.BASE_URL}figmaAssets/image copy 19.png`} alt="3" className="w-[60px] h-[60px] shrink-0" />
                        <div>
                            <h3 className="font-medium text-xl md:text-2xl mb-6 text-[#6F6864]">Reduce Barriers</h3>
                            <p className="text-lg md:text-xl leading-relaxed text-[#6F6864]">Simplify access to professional recording, production, and distribution for independent artists.</p>
                        </div>
                    </div>
                    <div className="border border-[#6F6864] rounded-2xl p-8 md:p-10 bg-white flex items-start gap-5 md:gap-6">
                        <img src={`${import.meta.env.BASE_URL}figmaAssets/image copy 20.png`} alt="4" className="w-[60px] h-[60px] shrink-0" />
                        <div>
                            <h3 className="font-medium text-xl md:text-2xl mb-6 text-[#6F6864]">Build a Creative Community</h3>
                            <p className="text-lg md:text-xl leading-relaxed text-[#6F6864]">Support collaboration, mentorship, and cultural expression rooted in Miami's diverse music scene.</p>
                        </div>
                    </div>
                </div>
            </ContentSection>

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

            <section className="w-full py-8 px-4 md:px-8">
                <div className="w-full max-w-[1400px] mx-auto">
                    <div style={{ width: '100%', overflowX: 'auto', padding: '10px 0 40px' }}>
                        <div style={{ minWidth: '1100px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'inherit' }}>
                            {/* Level 0: 1331 Recordz */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ background: '#2D1F1A', color: '#fff', fontSize: '24px', fontWeight: 500, padding: '16px 48px', borderRadius: '8px', letterSpacing: '0.5px' }}>
                                    1331 Recordz
                                </div>
                                <div style={{ width: '1px', height: '40px', background: '#8a8a8a' }} />
                            </div>

                            {/* Horizontal connector between branches */}
                            <div style={{ width: '100%', display: 'flex', position: 'relative' }}>
                                {/* The horizontal line spans exactly from the center of the left branch to the center of the right branch */}
                                <div style={{ position: 'absolute', top: 0, left: '25%', right: '25%', height: '1px', background: '#8a8a8a' }} />

                                {/* Branch 1: The Label */}
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                    <div style={{ width: '1px', height: '40px', background: '#8a8a8a' }} />
                                    <div style={{ background: '#22AD0A', color: '#fff', fontSize: '20px', fontWeight: 500, padding: '14px 44px', borderRadius: '8px' }}>
                                        The Label
                                    </div>
                                    <div style={{ width: '1px', height: '40px', background: '#8a8a8a' }} />

                                    {/* Label children */}
                                    <div style={{ display: 'flex', width: '100%', position: 'relative' }}>
                                        {/* Horizontal line connecting children */}
                                        <div style={{ position: 'absolute', top: 0, left: '12.5%', right: '12.5%', height: '1px', background: '#8a8a8a' }} />

                                        {['Label Home', 'About', 'Artist', 'Contact'].map((name, i) => (
                                            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', padding: '0 8px' }}>
                                                <div style={{ width: '1px', height: '40px', background: '#8a8a8a' }} />
                                                <div style={{ background: '#716864', color: '#fff', fontSize: '17px', padding: '14px 10px', borderRadius: '8px', whiteSpace: 'nowrap', textAlign: 'center', width: '100%', maxWidth: '180px' }}>
                                                    {name}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Branch 2: The Studio */}
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                                    <div style={{ width: '1px', height: '40px', background: '#8a8a8a' }} />
                                    <div style={{ background: '#22AD0A', color: '#fff', fontSize: '20px', fontWeight: 500, padding: '14px 44px', borderRadius: '8px' }}>
                                        The Studio
                                    </div>
                                    <div style={{ width: '1px', height: '40px', background: '#8a8a8a' }} />

                                    {/* Studio children */}
                                    <div style={{ display: 'flex', width: '100%', position: 'relative' }}>
                                        {/* Horizontal line connecting children */}
                                        <div style={{ position: 'absolute', top: 0, left: '12.5%', right: '12.5%', height: '1px', background: '#8a8a8a' }} />

                                        {['Studio Home', 'About', 'Services', 'Contact'].map((name, i) => (
                                            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', padding: '0 8px' }}>
                                                <div style={{ width: '1px', height: '40px', background: '#8a8a8a' }} />
                                                <div style={{ background: '#716864', color: '#fff', fontSize: '17px', padding: '14px 10px', borderRadius: '8px', whiteSpace: 'nowrap', textAlign: 'center', width: '100%', maxWidth: '180px' }}>
                                                    {name}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

            <section className="w-full mt-6 md:mt-10">
                <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
                    <RecordzUserFlowSection />
                </div>
            </section>

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
                <div className="flex flex-col gap-12 md:gap-[80px] mb-16 max-w-[1301px] mx-auto w-full px-4 xl:px-0">
                    <div className="flex flex-col gap-4 md:gap-6 w-full">
                        <img src={`${import.meta.env.BASE_URL}figmaAssets/1331 Recordz Music Studio Landing (2).png`} alt="Studio Landing" className="w-full rounded-2xl" />
                        <p className="font-medium text-[24px] md:text-[34px] leading-tight md:leading-[41px] text-[#6F6864] text-center md:text-left md:ml-12">1331 Recordz Music Studio Landing</p>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6 w-full">
                        <img src={`${import.meta.env.BASE_URL}figmaAssets/1331 Recordz Music Studio About.png`} alt="Studio About" className="w-full rounded-2xl" />
                        <p className="font-medium text-[24px] md:text-[34px] leading-tight md:leading-[41px] text-[#6F6864] text-center md:text-left md:ml-12">1331 Recordz Music Studio About</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-12 md:gap-y-[80px] max-w-[1590px] mx-auto w-full px-4 xl:px-0 pb-16">
                    {hifiScreens.map((screen, index) => (
                        <div key={index} className="flex flex-col gap-4 md:gap-6 w-full">
                            <img src={screen.src} alt={screen.alt} className="w-full rounded-2xl" />
                            <p className="font-medium text-[24px] md:text-[34px] leading-tight md:leading-[41px] text-[#6F6864] text-center md:text-left md:ml-8">{screen.label}</p>
                        </div>
                    ))}
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
