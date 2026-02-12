
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
        <div className="bg-white overflow-hidden w-full">


            <HeroSection
                title="Baby Thrift"
                subtitle="Thrifting Application"
                imageSrc={heroImage}
                imageAlt="Baby Thrift App Screens"
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
                            <span className="font-semibold">
                                Many parents face frustration as their children quickly outgrow clothing,{" "}
                            </span>
                            leading to wasted items and unnecessary spending. This challenge also contributes to environmental waste, prompting parents to seek more resourceful ways to de-clutter and reuse their children's wardrobes.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-2xl leading-relaxed">
                            <span className="font-semibold text-xl md:text-2xl">
                                💡 In response to this problem,
                            </span>{" "}
                            parents seek a reliable and intuitive marketplace experience that supports confident decision-making by emphasizing transparency, usability, and a streamlined path from discovery to checkout.
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
                    <div className="flex flex-col gap-4 md:pt-16">
                        <h3 className="text-xl md:text-2xl font-semibold text-[#6e6764] leading-tight">Understanding the Problem Space:</h3>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            <span className="font-semibold">Parents shopping for secondhand baby products must balance affordability with trust and safety.</span> Research focused on how parents evaluate product quality, navigate resale marketplaces, and make purchasing decisions on mobile.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            <span className="font-semibold">Through early exploration, several recurring themes emerged.</span> Parents expressed concerns around unclear product conditions, inconsistent seller information, and overwhelming navigation. <span className="font-semibold">These issues often led to hesitation, reduced trust, and abandoned purchase attempts within existing secondhand marketplaces.</span>
                        </p>
                    </div>
                }
            />
            <ContentSection>
                <ImageGallery images={discoveryImages} columns={3} />
            </ContentSection>

            {/* User Survey Research */}
            <ContentSection bgColor="bg-[#F9F9F9]">
                <SectionHeading title="User Survey Research:" className="mb-6" />

                {/* Overview */}
                <div className="flex flex-wrap items-start gap-3 mb-4">
                    <span className="bg-[#4A3427] text-white py-1 px-3 rounded-lg text-sm font-medium shrink-0">Overview</span>
                    <p className="text-[#6e6764] text-base md:text-lg leading-relaxed">
                        To better understand parents experiences with parenting, resale habits, and community connection, I <span className="font-semibold">conducted a Zoom-based survey</span> with parents of children ages 0-12.
                    </p>
                </div>

                {/* Goal */}
                <p className="text-[#333] text-lg md:text-xl font-medium leading-relaxed mb-10">
                    The goal of this research was to identify behaviors, pain points, and opportunities related to secondhand shopping, trust, and how parents seek advice and support.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                        {/* Participants */}
                        <div>
                            <span className="bg-[#4A3427] text-white py-1 px-3 rounded-lg text-sm font-medium mb-3 inline-block">Participants</span>
                            <div className="flex flex-wrap gap-2 text-sm text-[#6F6864] mb-4">
                                <span className="bg-white border px-3 py-1.5 rounded-lg flex items-center gap-1">👥 <span className="font-semibold">10 Parents</span></span>
                                <span className="bg-white border px-3 py-1.5 rounded-lg flex items-center gap-1">📅 <span className="font-semibold">Ages 24-42</span></span>
                            </div>
                            <div className="flex flex-wrap gap-2 text-sm text-[#6F6864]">
                                <span className="bg-white border px-3 py-1.5 rounded-lg flex items-center gap-1">👨‍👩‍👧 <span className="font-semibold">7 Mothers, 3 Fathers</span></span>
                                <span className="bg-white border px-3 py-1.5 rounded-lg flex items-center gap-1">📱 <span className="font-semibold">Mobile-First</span></span>
                            </div>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-[#6e6764] text-sm md:text-base">
                            <li>Children ranging from <span className="font-semibold">newborn to 12 years old</span></li>
                            <li>Mix of <span className="font-semibold">working parents</span> and <span className="font-semibold">stay-at-home parents</span></li>
                            <li>All participants regularly <span className="font-semibold">shop</span> for children's clothing</li>
                            <li>Majority reported using <span className="font-semibold">mobile devices</span> for shopping and research</li>
                        </ul>

                        {/* Methodology */}
                        <div>
                            <span className="bg-[#4A3427] text-white py-1 px-3 rounded-lg text-sm font-medium mb-3 inline-block">Methodology</span>
                            <p className="text-[#6e6764] text-sm md:text-base leading-relaxed mb-2">
                                The survey was conducted through one-on-one Zoom sessions using a <span className="font-semibold">semi-structured format.</span>
                            </p>
                            <p className="text-[#6e6764] text-sm md:text-base leading-relaxed">
                                Each session followed a set of <span className="font-semibold">8 open ended questions</span> designed to encourage participants to share their experiences and challenges in their own words.
                            </p>
                        </div>

                        {/* Sample Questions */}
                        <div>
                            <span className="bg-[#4A3427] text-white py-1 px-3 rounded-lg text-sm font-medium mb-3 inline-block">Sample Questions</span>
                            <ul className="list-disc list-inside space-y-2 text-[#6e6764] text-sm md:text-base">
                                <li>How do you <span className="font-semibold">shop</span> for children's clothing?</li>
                                <li>What <span className="font-semibold">challenges do you face</span> when buying or selling secondhand items?</li>
                                <li>What factors help you <span className="font-semibold">trust</span> a secondhand product or seller?</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6">
                        {/* Key Findings */}
                        <div>
                            <span className="bg-[#4A3427] text-white py-1 px-3 rounded-lg text-sm font-medium mb-4 inline-block">Key Findings</span>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-[#4A3427] flex items-center justify-center shrink-0 p-2">
                                        <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-piggy.png`} alt="" className="w-full h-full object-contain invert" />
                                    </div>
                                    <p className="text-[#6e6764] text-sm md:text-base">Parents value <span className="font-semibold">affordability but prioritize trust and safety</span> when purchasing clothing</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-[#4A3427] flex items-center justify-center shrink-0 p-2">
                                        <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-phones.png`} alt="" className="w-full h-full object-contain invert" />
                                    </div>
                                    <p className="text-[#6e6764] text-sm md:text-base">Many parents use <span className="font-semibold">secondhand platforms</span> but feel uncertain about <span className="font-semibold">product condition and seller credibility.</span></p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-[#4A3427] flex items-center justify-center shrink-0 p-2">
                                        <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-camera.png`} alt="" className="w-full h-full object-contain invert" />
                                    </div>
                                    <p className="text-[#6e6764] text-sm md:text-base"><span className="font-semibold">Clear photos and detailed descriptions</span> play a major role in <span className="font-semibold">purchase confidence</span></p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-[#4A3427] flex items-center justify-center shrink-0 p-2">
                                        <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-chat.png`} alt="" className="w-full h-full object-contain invert" />
                                    </div>
                                    <p className="text-[#6e6764] text-sm md:text-base">Parents often rely on <span className="font-semibold">informal communities</span> such as social media groups, friends, or word-of-mouth for advice.</p>
                                </div>
                            </div>
                        </div>

                        {/* Quote */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 relative">
                            <span className="text-[#4A3427] text-3xl font-serif leading-none">"</span>
                            <p className="text-[#4A3427] font-bold text-base mt-1">
                                I want affordable options, but I need to trust what I'm buying for my child
                            </p>
                            <p className="text-[#6e6764] text-sm mt-2 flex items-center gap-1">
                                • Survey Participant
                            </p>
                        </div>

                        {/* Impact on Design */}
                        <div>
                            <span className="bg-[#4A3427] text-white py-1 px-3 rounded-lg text-sm font-medium mb-3 inline-block">Impact on Design</span>
                            <ul className="list-disc list-inside space-y-2 text-[#6e6764] text-sm md:text-base">
                                <li>Emphasize trust through <span className="font-semibold">seller verification</span> and reviews</li>
                                <li>Use <span className="font-semibold">detailed photos</span> and transparent product descriptions</li>
                                <li>Design <span className="font-semibold">mobile-first</span> for busy parents</li>
                                <li>Leverage <span className="font-semibold">community feedback</span> and social proof</li>
                                <li>Balance <span className="font-semibold">affordability</span> with safety reassurance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ContentSection>

            {/* Competitive Audit */}
            <TwoColumnSection
                left={<SectionHeading title="Competitive Audit:" />}
                right={
                    <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed md:pt-16">
                        Analyzing competing resale platforms showed that while many support secondhand transactions, they fail to create a meaningful community for parents.
                    </p>
                }
            />
            <ContentSection className="!pt-0 !pb-16">
                <img src={auditTableImage} alt="Competitive Audit Table" className="w-full h-auto rounded-xl shadow-md" />
            </ContentSection>

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
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl leading-tight">
                            Turning insights into opportunity through the right questions.
                        </p>
                        <ul className="space-y-4 text-[#6e6764] text-lg md:text-xl">
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we help parents feel confident purchasing secondhand baby items?</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we improve clarity around product condition and quality?</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we simplify product discovery on mobile?</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#6e6764] shrink-0" />
                                <span>How might we create a parent-centered marketplace that builds trust and community?</span>
                            </li>
                        </ul>
                    </div>
                }
            />

            {/* Solution Overview */}
            <TwoColumnSection
                left={<SectionHeading title="Solution Overview:" />}
                right={
                    <div className="flex flex-col md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl leading-tight mb-8">
                            Turning insights into a parent-focused, trustworthy marketplace.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            Baby Thrift is a parent-focused resale marketplace designed to make buying and selling secondhand baby products simple, trustworthy, and efficient.
                        </p>
                        <div className="mt-12 text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            <p className="font-medium text-xl md:text-2xl mb-6">
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
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl leading-relaxed">
                            To translate research insights into a clear product structure, I mapped Baby Thrift's core navigation system.
                        </p>
                    </div>
                }
            />
            <ContentSection className="!pt-0 !pb-16 bg-[#F9F9F9] rounded-2xl">
                <img src={iaImage} alt="IA Diagram" className="w-full h-auto object-cover rounded-xl" />
            </ContentSection>

            {/* User Flows */}
            <TwoColumnSection
                left={<SectionHeading title="User Flows:" />}
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl">
                            These user flows outline the key steps parents take inside the app.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            Mapping them early allowed me to validate the logic of each path and confirm that the experience remains seamless from onboarding to event participation.
                        </p>
                    </div>
                }
            />
            <ContentSection className="!pt-0 !pb-16">
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
                                <div>
                                    <p className="font-semibold text-[#6e6764] text-base md:text-lg mb-2">This:</p>
                                    <ul className="list-disc list-inside space-y-1 text-[#6e6764] text-sm md:text-base">
                                        <li>Explains why the layouts differ</li>
                                        <li>Frames it as intentional UX reasoning</li>
                                        <li>Sounds confident and professional</li>
                                        <li>Keeps things concise</li>
                                    </ul>
                                </div>
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
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
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
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl">
                            The Hi-Fi designs brought the app's visual identity to life.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            Moving into high-fidelity screens allowed the design to refine trust signals, improve clarity around item condition, and create a warm, approachable interface. Thoughtful color, typography, and layout choices work together to support confident secondhand shopping and community connection.
                        </p>
                    </div>
                }
            />
            <ContentSection>
                <ImageGallery images={hifiImages} columns={4} />
                <div className="mt-20">
                    <p className="text-base md:text-lg text-[#6e6764] mb-10 max-w-3xl leading-relaxed">
                        A collection of key screens from the mobile shopping experience, designed with a focus on consistency, clarity, and visual cohesion. Each screen reflects a unified design system and supports an intuitive, easy-to-navigate interface.
                    </p>
                    <img src={hifiCollectionImage} alt="HiFi Collection" className="w-full rounded-2xl shadow-lg" />
                </div>
            </ContentSection>

            {/* Key Features */}
            <TwoColumnSection
                left={<SectionHeading title="Key Features:" />}
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="font-medium text-[#6e6764] text-xl md:text-2xl">
                            Designing for Trust, Clarity, and Ease of Use
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            <span className="font-semibold">Parents shopping for secondhand baby products must balance affordability with trust and safety.</span> Research focused on how parents evaluate product quality, navigate resale marketplaces, and make purchasing decisions on mobile.
                        </p>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            <span className="font-semibold">Through early exploration, several recurring themes emerged.</span> Parents expressed concerns around unclear product conditions, inconsistent seller information, and overwhelming navigation. <span className="font-semibold">These issues often led to hesitation, reduced trust, and abandoned purchase attempts within existing secondhand marketplaces.</span>
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
                        <h4 className="text-lg font-bold text-[#3E2613] mb-2">Parenthood Support</h4>
                        <p className="text-sm text-[#6F6864] leading-relaxed">Access community advice, guides, and tips to help parents make confident secondhand purchases.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 flex flex-col items-start">
                        <div className="mb-4 bg-[#F5F0EB] w-12 h-12 rounded-full flex items-center justify-center">
                            <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-piggy.png`} alt="" className="w-6 h-6 object-contain" />
                        </div>
                        <h4 className="text-lg font-bold text-[#3E2613] mb-2">Trusted Sellers</h4>
                        <p className="text-sm text-[#6F6864] leading-relaxed">Shop from verified sellers with clear ratings, reviews, and transparent product details.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 flex flex-col items-start">
                        <div className="mb-4 bg-[#F5F0EB] w-12 h-12 rounded-full flex items-center justify-center">
                            <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-phones.png`} alt="" className="w-6 h-6 object-contain" />
                        </div>
                        <h4 className="text-lg font-bold text-[#3E2613] mb-2">Localized Events</h4>
                        <p className="text-sm text-[#6F6864] leading-relaxed">Discover nearby swaps, meetups, and resale events tailored to local parenting community.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 flex flex-col items-start">
                        <div className="mb-4 bg-[#F5F0EB] w-12 h-12 rounded-full flex items-center justify-center">
                            <img src={`${import.meta.env.BASE_URL}figmaAssets/survey-icon-camera.png`} alt="" className="w-6 h-6 object-contain" />
                        </div>
                        <h4 className="text-lg font-bold text-[#3E2613] mb-2">Eco-Friendly</h4>
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
                <p className="mt-12 text-center text-[#6e6764] text-base md:text-lg max-w-3xl mx-auto">
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

export default BabyThriftPage;
