
import { HeroSection } from "../components/case-studies/new-template/layout/HeroSection";
import { ContentSection } from "../components/case-studies/new-template/layout/ContentSection";
import { TwoColumnSection } from "../components/case-studies/new-template/layout/TwoColumnSection";
import { SectionHeading } from "../components/case-studies/new-template/layout/SectionHeading";
import BabyThriftCompetitiveAuditSection from "../components/case-studies/baby-thrift/BabyThriftCompetitiveAuditSection";

import GetInTouchSection from "../components/sections/GetInTouchSection";
import { ProjectDetailGrid } from "../components/case-studies/new-template/cards/ProjectDetailGrid";
import { StepCard } from "../components/case-studies/new-template/cards/StepCard";
import { ImageGallery } from "../components/case-studies/new-template/cards/ImageGallery";
import ResearchOverview from "../components/case-studies/shared/ResearchOverview";
import KeyInsights from "../components/case-studies/shared/KeyInsights";

// Import images
import heroImage from '../assets/baby-thrift-hero.png';
import discoveryImage1 from '../assets/discovery-1.png';
import discoveryImage2 from '../assets/discovery-2.png';
import discoveryImage3 from '../assets/discovery-3.png';
import auditTableImage from '../assets/competitive-audit-table.png';
import iaImage from '../assets/information-architecture.png';
import userFlowImage from '../assets/user-flow.png';
import purchasingFlowImage from '../assets/purchasing-flow.png';

// LoFi Images
import hifiScreen1 from '../assets/hifi-screen-1.png';
import hifiScreen2 from '../assets/hifi-screen-2.png';
import hifiScreen3 from '../assets/hifi-screen-3.png';
import hifiScreen4 from '../assets/hifi-screen-4.png';
import hifiCollectionImage from '../assets/hifi-collection.png';

import welcomeScreen from '../assets/lofi-welcome.png';
import newArrivalScreen from '../assets/lofi-new-arrival.png';
import donateScreen from '../assets/lofi-donate.png';
import itemDetailsScreen from '../assets/lofi-item-details.png';

// Icons
import iconShield from '../assets/icon-shield.png';
import iconBadge from '../assets/icon-badge.png';
import iconBooks from '../assets/icon-books.png';
import iconCommunity from '../assets/icon-community.png';

import iconUserTesting from '../assets/icon-user-testing.png';
import iconIterate from '../assets/icon-iterate.png';
import iconAnalytics from '../assets/icon-analytics.png';
import iconFeatures from '../assets/icon-features.png';



const projectDetails = [
    { label: "ROLE", value: "Lead UX Designer" },
    { label: "DURATION", value: "6 weeks | 2024" },
    { label: "PROTOTYPE", value: "Figma prototype link" },
    { label: "RESPONSIBILITIES", value: "Ideation, Design, Research, Prototyping" },
    { label: "TEAM SIZE", value: "Solo Project" },
    { label: "CATEGORY", value: "Social app" },
];

const keyInsights = [
    { title: 'Trust & Safety', description: 'Clear product conditions and trusted sellers build confidence', icon: iconShield },
    { title: 'Product Clarity', description: 'Inconsistent descriptions and images hinder product evaluation', icon: iconBadge },
    { title: 'Navigation Simplicity', description: 'Cluttered layouts and categories hinder mobile product discovery', icon: iconBooks },
    { title: 'Parent Community', description: 'Existing platforms lack parent-focused community and trust features', icon: iconCommunity },
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
    { src: newArrivalScreen, alt: "New Arrival Screen Wireframe", label: "New Arrival Screen", sublabel: "Explore curated new items" },
    { src: donateScreen, alt: "Donate Screen Wireframe", label: "Donate Screen", sublabel: "Donate children's items" },
    { src: itemDetailsScreen, alt: "Item Details Screen Wireframe", label: "Item Details Screen", sublabel: "Main home screen" },
];

const hifiImages = [
    { src: hifiScreen1, alt: "Hi-Fi Screen 1", label: "Home Screen" },
    { src: hifiScreen2, alt: "Hi-Fi Screen 2", label: "Product Listing" },
    { src: hifiScreen3, alt: "Hi-Fi Screen 3", label: "Community" },
    { src: hifiScreen4, alt: "Hi-Fi Screen 4", label: "Profile" },
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


const BabyThriftPage = () => {
    return (
        <div className="min-h-screen bg-[#FFFFFF] overflow-hidden w-full">


            <HeroSection
                title="Baby Thrift"
                subtitle="Thrifting Application"
                imageSrc={heroImage}
                imageAlt="Baby Thrift App Screens"
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
                        <p className="text-[#6F6864] leading-relaxed">
                            <span className="text-lg md:text-[34px] md:leading-[41px] font-medium">
                                Many parents face frustration as their children quickly outgrow clothing,{" "}
                            </span>
                            <span className="text-lg md:text-[30px] md:leading-[36px]">
                                leading to wasted items and unnecessary spending. This challenge also contributes to environmental waste, prompting parents to seek more resourceful ways to de-clutter and reuse their children's wardrobes.
                            </span>
                        </p>
                        <p className="text-[#6F6864] leading-relaxed">
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
                                parents seek a reliable and intuitive marketplace experience that supports confident decision-making by emphasizing transparency, usability, and a streamlined path from discovery to checkout.
                            </span>
                        </p>
                    </div>
                }
            />

            {/* Research Overview */}
            <ResearchOverview
                backgroundColor="bg-[#5C3D2E]"
                description="A combination of discovery research, competitive analysis, and early user exploration helped reveal the challenges parents face when shopping secondhand."
                cards={researchLabels}
            />

            {/* Discovery */}
            <TwoColumnSection
                left={<SectionHeading title="Discovery:" />}
                right={
                    <div className="flex flex-col gap-5">
                        <p className="font-semibold text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] text-center">Understanding the Problem Space:</p>
                        <div className="text-[#6F6864] text-lg md:text-[30px] md:leading-[36px]">
                            <p>
                                <span className="font-medium">Parents shopping for secondhand baby products must balance affordability with trust and safety.</span>
                                <span> Research focused on how parents evaluate product quality, navigate resale marketplaces, and make purchasing decisions on mobile.</span>
                            </p>
                            <p className="mt-5">
                                <span>Through early exploration, </span>
                                <span className="font-medium">several recurring themes emerged.</span>
                                <span> Parents expressed concerns around unclear product conditions, inconsistent seller information, and overwhelming navigation. </span>
                                <span className="font-medium">These issues often led to hesitation, reduced trust, and abandoned purchase attempts</span>
                                <span> within existing secondhand marketplaces.</span>
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
                        <p className="text-[#6F6864] text-[18px] md:text-[22px] leading-relaxed font-normal">
                            To better understand parents experiences with parenting, resale habits, and community connection, I <span className="font-semibold">conducted a Zoom-based survey</span> with parents of children ages 0-12.
                        </p>
                    </div>
                </div>

                {/* Goal Text */}
                <div className="mb-16 md:mb-24">
                    <p className="text-[#6F6864] text-[20px] md:text-[24px] leading-snug md:leading-[36px] font-medium max-w-[1000px] ml-0 md:ml-2">
                        The goal of this research was to identify behaviors, pain points, and opportunities related to secondhand shopping, trust, and how parents seek advice and support.
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
                                    <span className="text-[#492300] font-medium text-[16px] md:text-[18px]">10 Parents</span>
                                </div>
                                <div className="bg-[#F4EFE2] rounded-[6px] flex items-center gap-2.5 px-3 py-2">
                                    <div className="flex items-center justify-center bg-transparent">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#492300" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M7 2v4M17 2v4" stroke="#492300" strokeWidth="2" strokeLinecap="round" /><rect x="6" y="9" width="3" height="3" fill="white" /><rect x="10.5" y="9" width="3" height="3" fill="white" /><rect x="15" y="9" width="3" height="3" fill="white" /><rect x="6" y="13.5" width="3" height="3" fill="white" /><rect x="10.5" y="13.5" width="3" height="3" fill="white" /><rect x="15" y="13.5" width="3" height="3" fill="white" /><rect x="6" y="18" width="3" height="3" fill="white" /><rect x="10.5" y="18" width="3" height="3" fill="white" /><rect x="15" y="18" width="3" height="3" fill="white" /></svg>
                                    </div>
                                    <span className="text-[#492300] font-medium text-[16px] md:text-[18px]">Ages 24-42</span>
                                </div>
                                <div className="bg-[#F4EFE2] rounded-[6px] flex items-center gap-2.5 px-3 py-2 mt-1 lg:mt-0">
                                    <div className="flex items-center justify-center bg-transparent">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#492300" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="3" /><path d="M16 13c0-2-2-3-4-3s-4 1-4 3v3h8v-3z" /><circle cx="6" cy="8" r="2.5" /><path d="M10 16v-2c0-.52-.16-1.02-.45-1.45A3.95 3.95 0 0 0 6 11c-1.66 0-3 1-3 2.5V16h7z" /><circle cx="18" cy="8" r="2.5" /><path d="M21 16v-2.5c0-1.5-1.34-2.5-3-2.5a3.95 3.95 0 0 0-3.55 1.55c.29.43.45.93.45 1.45v2h6z" /><circle cx="12" cy="17" r="2.5" /><path d="M16 23v-1.5c0-1.5-1.5-2.5-4-2.5s-4 1-4 2.5V23h8z" /></svg>
                                    </div>
                                    <span className="text-[#492300] font-medium text-[16px] md:text-[18px]">7 Mothers, 3 Fathers</span>
                                </div>
                                <div className="bg-[#F4EFE2] rounded-[6px] flex items-center gap-2.5 px-3 py-2 mt-1 lg:mt-0">
                                    <div className="flex items-center justify-center bg-transparent">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#492300" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="14" height="20" rx="3" /><circle cx="9" cy="6" r="1.5" fill="white" /><circle cx="9" cy="11" r="1.5" fill="white" /><circle cx="12" cy="8.5" r="1" fill="white" /></svg>
                                    </div>
                                    <span className="text-[#492300] font-medium text-[16px] md:text-[18px]">Mobile-First</span>
                                </div>
                            </div>

                            <ul className="list-disc pl-5 space-y-2 text-[#6F6864] font-normal text-[18px] md:text-[22px] md:leading-[32px] ml-2">
                                <li>Children ranging from <span className="font-medium">newborn to 12 years old</span></li>
                                <li>Mix of <span className="font-medium">working parents</span> and <span className="font-medium">stay-at-home parents</span></li>
                                <li>All participants regularly <span className="font-medium">shop</span> for children's clothing</li>
                                <li>Majority reported using <span className="font-medium">mobile devices</span> for shopping and research</li>
                            </ul>
                        </div>

                        {/* Methodology */}
                        <div>
                            <div className="inline-flex items-center justify-center bg-[#492300] rounded-[6px] px-6 py-2.5 mb-6">
                                <span className="text-white font-medium text-[16px] md:text-[20px]">Methodology</span>
                            </div>
                            <p className="text-[#6F6864] font-medium text-[18px] md:text-[22px] md:leading-[32px] ml-1">
                                The survey was conducted through one-on-one Zoom sessions using a semi-structured format. Each session followed a set of 8 open ended questions designed to encourage participants to share their experiences and challenges in their own words.
                            </p>
                        </div>

                        {/* Sample Questions */}
                        <div>
                            <div className="inline-flex items-center justify-center bg-[#492300] rounded-[6px] px-6 py-2.5 mb-6">
                                <span className="text-white font-medium text-[16px] md:text-[20px]">Sample Questions</span>
                            </div>
                            <ul className="list-disc pl-5 space-y-2 text-[#6F6864] font-medium text-[18px] md:text-[22px] md:leading-[32px] ml-1">
                                <li>How do you <span className="font-semibold">shop</span> for children's clothing?</li>
                                <li>What <span className="font-semibold">challenges do you face</span> when buying or selling secondhand items?</li>
                                <li>What factors help you <span className="font-semibold">trust</span> a secondhand product or seller?</li>
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
                            <div className="flex items-center gap-6">
                                <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full bg-[#F4EFE2] flex items-center justify-center shrink-0">
                                    <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-piggy.png`} alt="" className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] object-contain" />
                                </div>
                                <p className="text-[#6F6864] text-[18px] md:text-[22px] leading-snug md:leading-[30px] font-normal">
                                    Parents value <span className="font-semibold">affordability but prioritize trust and safety</span> when purchasing clothing
                                </p>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full bg-[#F4EFE2] flex items-center justify-center shrink-0">
                                    <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-phones.png`} alt="" className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] object-contain" />
                                </div>
                                <p className="text-[#6F6864] text-[18px] md:text-[22px] leading-snug md:leading-[30px] font-medium">
                                    Many parents use <span className="font-semibold">secondhand platforms</span> but feel uncertain about <span className="font-semibold">product condition and seller credibility.</span>
                                </p>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full bg-[#F4EFE2] flex items-center justify-center shrink-0">
                                    <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-camera.png`} alt="" className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] object-contain" />
                                </div>
                                <p className="text-[#6F6864] text-[18px] md:text-[22px] leading-snug md:leading-[30px] font-medium">
                                    <span className="font-semibold">Clear photos and detailed descriptions</span> play a major role in <span className="font-semibold">purchase confidence</span>
                                </p>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full bg-[#F4EFE2] flex items-center justify-center shrink-0">
                                    <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-chat.png`} alt="" className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] object-contain" />
                                </div>
                                <p className="text-[#6F6864] text-[18px] md:text-[22px] leading-snug md:leading-[30px] font-medium">
                                    Parents often rely on <span className="font-semibold">informal communities</span> such as social media groups, friends, or word-of-mouth for advice.
                                </p>
                            </div>
                        </div>

                        {/* Quote Box */}
                        <div className="bg-[#F4EFE2] rounded-[10px] flex items-center p-8 mt-12 mb-12 relative w-full lg:max-w-[576px] lg:h-[178px]">
                            <span className="absolute top-6 left-6 text-[50px] md:text-[60px] text-[#492300] font-serif leading-none">"</span>
                            <div className="ml-12 md:ml-10 mt-4">
                                <p className="text-[#492300] font-medium text-[16px] md:text-[24px] leading-snug italic relative z-10 pt-2">
                                    I want affordable options, but I need to trust what I’m buying for my child
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
                                <li>Emphasize trust through seller verification and reviews</li>
                                <li>Use detailed photos and transparent product descriptions</li>
                                <li>Design mobile-first for busy parents</li>
                                <li>Leverage community feedback and social proof</li>
                                <li>Balance affordability with safety reassurance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* Competitive Audit */}
            <BabyThriftCompetitiveAuditSection />

            {/* Key Insights */}
            <KeyInsights
                backgroundColor="bg-[#5C3D2E]"
                description="These insights summarize the most important patterns uncovered during research and discovery, highlighting the core challenges parents face when trying to find reliable, trustworthy secondhand options for their children."
                insights={keyInsights}
                textColor="text-white"
            />

            {/* How Might We */}
            <TwoColumnSection
                left={<SectionHeading title="How Might We?" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] leading-tight">
                            Turning insights into opportunity through the right questions.
                        </p>
                        <ul className="list-disc pl-5 space-y-4 text-[#6F6864] text-lg md:text-[30px] md:leading-[36px]">
                            <li>How might we help parents feel confident purchasing secondhand baby items?</li>
                            <li>How might we improve clarity around product condition and quality?</li>
                            <li>How might we simplify product discovery on mobile?</li>
                            <li>How might we create a parent-centered marketplace that builds trust and community?</li>
                        </ul>
                    </div>
                }
            />

            {/* Solution Overview */}
            <TwoColumnSection
                left={<SectionHeading title="Solution Overview:" />}
                right={
                    <div className="flex flex-col">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] leading-tight mb-8">
                            Turning insights into a parent-focused, trustworthy marketplace.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            Baby Thrift is a parent-focused resale marketplace designed to make buying and selling secondhand baby products simple, trustworthy, and efficient.
                        </p>
                        <div className="mt-12 text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            <p className="font-medium text-xl md:text-[34px] md:leading-[41px] mb-6">
                                The solution is shaped by four core goals:
                            </p>
                            <ol className="list-decimal pl-5 space-y-6 md:space-y-8">
                                <li className="pl-2">Enable parents to connect through shared sustainable values</li>
                                <li className="pl-2">Create a safe and trusted environment for secondhand transactions</li>
                                <li className="pl-2">Reduce the clutter of general marketplaces to focus on baby items</li>
                                <li className="pl-2">Support community-building through trusted parent networks</li>
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
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] leading-relaxed">
                            To translate research insights into a clear product structure, I mapped Baby Thrift's core navigation system.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            The information architecture outlines how parents move through key areas of the marketplace, from browsing and evaluating items to purchasing, selling, and engaging with the community.
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
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px]">
                            These user flows outline the key steps veterans take inside the app.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            Mapping them early allowed me to validate the logic of each path and confirm that the experience remains seamless from onboarding to event participation.
                        </p>
                    </div>
                }
            />
            <ContentSection className="max-w-[1100px] mx-auto">
                <div className="flex flex-col gap-12">
                    {/* Account Creation - 2 column layout */}
                    <div>
                        <h3 className="text-2xl font-medium text-[#6e6764] mb-6">Account Creation</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <img src={userFlowImage} alt="Account Creation Flow" className="w-full h-auto rounded-xl" />
                            <div className="flex flex-col gap-4">
                                <p className="text-[#6e6764] text-base md:text-lg leading-relaxed">
                                    <span className="font-semibold">These user flows map the key decision points parents encounter while using Baby Thrift.</span> The account creation flow is presented vertically to emphasize onboarding logic and authentication states, while the purchasing flow is presented horizontally to reflect a linear, end-to-end shopping journey. Mapping these flows early helped validate system logic, reduce friction, and ensure a seamless experience from launch to checkout.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Purchasing */}
                    <div>
                        <h3 className="text-2xl font-medium text-[#6e6764] mb-6">Purchasing</h3>
                        <img src={purchasingFlowImage} alt="Purchasing Flow" className="w-full h-auto rounded-xl" />
                    </div>
                </div>
            </ContentSection>

            {/* Lo-Fi Wireframes */}
            <TwoColumnSection
                left={<SectionHeading title="Lo-Fi Wireframes:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            To support the Baby Thrift application, <span className="font-semibold">I created Lo-Fi wireframes that outline key user journeys and essential functionality.</span> This step prioritized usability, trust, and clear content flow to ensure a safe and intuitive experience before refining visual design.
                        </p>
                    </div>
                }
            />
            <ContentSection bgColor="bg-[#5C3D1E]">
                <ImageGallery images={lofiImages} columns={4} centerLabels />
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
                            Moving into high-fidelity screens allowed the design to refine trust signals, improve clarity around item condition, and create a warm, approachable interface. Thoughtful color, typography, and layout choices work together to support confident secondhand shopping and community connection.
                        </p>
                    </div>
                }
            />
            <ContentSection className="!py-0">
                <ImageGallery images={hifiImages} columns={4} />
                <div className="mt-20 max-w-[1100px] mx-auto">
                    <p className="text-base md:text-lg text-[#6e6764] mb-10 max-w-3xl leading-relaxed">
                        A collection of key screens from the mobile shopping experience, designed with a focus on consistency, clarity, and visual cohesion. Each screen reflects a unified design system and supports an intuitive, easy-to-navigate interface.
                    </p>
                    <img src={hifiCollectionImage} alt="HiFi Collection" className="w-full h-auto rounded-2xl" />
                </div>
            </ContentSection>

            {/* Key Features */}
            <TwoColumnSection
                left={<SectionHeading title="Key Features:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px]">
                            Designing for Trust, Clarity, and Ease of Use
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            <span className="font-medium">Parents shopping for secondhand baby products must balance affordability with trust and safety.</span> Research focused on how parents evaluate product quality, navigate resale marketplaces, and make purchasing decisions on mobile.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed">
                            <span className="font-medium">Through early exploration, several recurring themes emerged.</span> Parents expressed concerns around unclear product conditions, inconsistent seller information, and overwhelming navigation. <span className="font-medium">These issues often led to hesitation, reduced trust, and abandoned purchase attempts within existing secondhand marketplaces.</span>
                        </p>
                    </div>
                }
            />
            <ContentSection bgColor="bg-[#3E2613]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="bg-white rounded-xl p-6 flex flex-col items-start">
                        <div className="mb-4 bg-[#F5F0EB] w-12 h-12 rounded-full flex items-center justify-center">
                            <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-chat.png`} alt="" className="w-6 h-6 object-contain" />
                        </div>
                        <h4 className="text-lg font-semibold text-[#3E2613] mb-2">Parenthood Support</h4>
                        <p className="text-sm text-[#6F6864] leading-relaxed">Access community advice, guides, and tips to help parents make confident secondhand purchases.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 flex flex-col items-start">
                        <div className="mb-4 bg-[#F5F0EB] w-12 h-12 rounded-full flex items-center justify-center">
                            <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-piggy.png`} alt="" className="w-6 h-6 object-contain" />
                        </div>
                        <h4 className="text-lg font-semibold text-[#3E2613] mb-2">Trusted Sellers</h4>
                        <p className="text-sm text-[#6F6864] leading-relaxed">Shop from verified sellers with clear ratings, reviews, and transparent product details.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 flex flex-col items-start">
                        <div className="mb-4 bg-[#F5F0EB] w-12 h-12 rounded-full flex items-center justify-center">
                            <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-phones.png`} alt="" className="w-6 h-6 object-contain" />
                        </div>
                        <h4 className="text-lg font-semibold text-[#3E2613] mb-2">Localized Events</h4>
                        <p className="text-sm text-[#6F6864] leading-relaxed">Discover nearby swaps, meetups, and resale events tailored to local parenting community.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 flex flex-col items-start">
                        <div className="mb-4 bg-[#F5F0EB] w-12 h-12 rounded-full flex items-center justify-center">
                            <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-camera.png`} alt="" className="w-6 h-6 object-contain" />
                        </div>
                        <h4 className="text-lg font-semibold text-[#3E2613] mb-2">Eco-Friendly</h4>
                        <p className="text-sm text-[#6F6864] leading-relaxed">Reduce waste and support sustainability by extending the life of baby products through reuse.</p>
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
                <p className="mt-12 text-center text-[#6F6864] text-base md:text-[28px] md:leading-[33px] max-w-5xl mx-auto">
                    Thank you for reviewing this case study. I'm always open to feedback and would love to discuss how these design solutions could be applied to your projects.
                </p>
            </ContentSection>

            {/* Contact CTA */}
            <GetInTouchSection theme="dark" bgColor="bg-[#492300]" buttonBgColor="#B6936E" buttonTextColor="white" />

        </div>
    );
};

export default BabyThriftPage;
