
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
                        <p className="text-[#6e6764] text-lg md:text-2xl leading-relaxed">
                            Many parents face frustration as their children <strong>quickly outgrow clothing</strong>, leading to wasted items and unnecessary spending. This challenge also contributes to environmental waste.
                        </p>
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                            <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                                💡 <strong>In response to this problem</strong>, parents seek a reliable and intuitive marketplace experience that supports confident decision-making by emphasizing transparency, usability, and a streamlined path from discovery to checkout.
                            </p>
                        </div>
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
                        <h3 className="text-xl md:text-2xl font-semibold text-[#333] leading-tight">Understanding the Problem Space:</h3>
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            Parents shopping for secondhand baby products must balance affordability with trust and safety. Research focused on how parents evaluate product quality, navigate resale marketplaces, and make purchasing decisions on mobile.
                        </p>
                    </div>
                }
            />
            <ContentSection>
                <ImageGallery images={discoveryImages} columns={3} />
            </ContentSection>

            {/* User Survey Research */}
            <ContentSection bgColor="bg-[#F9F9F9]">
                <SectionHeading title="User Survey Research:" className="mb-10" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <span className="bg-[#4A3427] text-white py-1 px-3 rounded-lg text-sm font-medium mb-2 inline-block">Participants</span>
                            <div className="flex flex-wrap gap-2 text-sm text-[#6F6864]">
                                <span className="bg-white border px-2 py-1 rounded">👥 10 Parents</span>
                                <span className="bg-white border px-2 py-1 rounded">📅 Ages 24-42</span>
                                <span className="bg-white border px-2 py-1 rounded">👨‍👩‍👧 7 Mothers, 3 Fathers</span>
                            </div>
                        </div>
                        <ul className="list-disc list-inside space-y-2 text-[#6e6764] text-lg md:text-xl">
                            <li>Children ranging from newborn to 12 years old</li>
                            <li>Mix of working parents and stay-at-home parents</li>
                            <li>All participants regularly shop for children’s clothing</li>
                            <li>Majority reported using mobile devices for shopping and research</li>
                        </ul>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <span className="bg-[#4A3427] text-white py-1 px-3 rounded-lg text-sm font-medium mb-4 inline-block">Key Findings</span>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <span className="text-2xl">🐖</span>
                                    <p className="text-[#6e6764]">Parents value affordability but prioritize trust and safety.</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="text-2xl">📷</span>
                                    <p className="text-[#6e6764]">Clear photos and detailed descriptions play a major role in confidence.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-200 relative italic text-[#4A3427] font-medium">
                            "I want affordable options, but I need to trust what I’m buying for my child"
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
                description="These insights summarize the most important patterns uncovered during research and discovery."
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
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            Baby Thrift is a parent-focused resale marketplace designed to make buying and selling secondhand baby products simple, trustworthy, and efficient.
                        </p>
                        <div>
                            <p className="font-medium text-xl md:text-2xl mb-6">
                                The solution is shaped by four core goals:
                            </p>
                            <ol className="space-y-4 md:space-y-8 text-lg md:text-xl text-[#6e6764]">
                                <li className="flex gap-3 items-start">
                                    <span className="font-bold shrink-0">1.</span>
                                    <span>Enable parents to connect through shared sustainable values</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="font-bold shrink-0">2.</span>
                                    <span>Create a safe and trusted environment for secondhand transactions</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="font-bold shrink-0">3.</span>
                                    <span>Reduce the clutter of general marketplaces to focus on baby items</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="font-bold shrink-0">4.</span>
                                    <span>Support community-building through trusted parent networks</span>
                                </li>
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
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
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
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            These user flows outline the key steps inside the app. Mapping them early allowed me to validate the logic of each path.
                        </p>
                    </div>
                }
            />
            <ContentSection className="!pt-0 !pb-16">
                <div className="flex flex-col gap-12">
                    <div>
                        <h3 className="text-2xl font-medium text-[#6e6764] mb-6">Account Creation</h3>
                        <img src={userFlowImage} alt="Account Creation Flow" className="w-full h-auto rounded-xl" />
                    </div>
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
                            To support the Baby Thrift application, I created Lo-Fi wireframes that outline key user journeys and essential functionality.
                        </p>
                    </div>
                }
            />
            <ContentSection bgColor="bg-[#5C3D1E]">
                <ImageGallery images={lofiImages} columns={4} />
            </ContentSection>

            {/* Hi-Fi Wireframes */}
            <TwoColumnSection
                left={<SectionHeading title="Hi-Fi Wireframes:" />}
                right={
                    <div className="flex flex-col gap-6 md:pt-16">
                        <p className="text-[#6e6764] text-lg md:text-xl leading-relaxed">
                            The Hi-Fi designs brought the app's visual identity to life. Moving into high-fidelity screens allowed the design to refine trust signals and improve clarity.
                        </p>
                    </div>
                }
            />
            <ContentSection>
                <ImageGallery images={hifiImages} columns={4} />
                <div className="mt-20">
                    <p className="text-xl text-[#6e6764] mb-10 max-w-2xl mx-auto text-center">
                        A collection of key screens from the mobile shopping experience, designed with a focus on consistency, clarity, and visual cohesion.
                    </p>
                    <img src={hifiCollectionImage} alt="HiFi Collection" className="w-full rounded-2xl shadow-lg" />
                </div>
            </ContentSection>

            {/* Key Features (Manual grid to keep custom emoji/text layout) */}
            <ContentSection bgColor="bg-[#3E2613]">
                <SectionHeading title="Key Features:" textColor="text-white" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                    <div className="bg-white rounded-xl p-6 text-center flex flex-col items-center">
                        <div className="text-4xl mb-4 bg-[#F5F0EB] w-16 h-16 rounded-full flex items-center justify-center">👨‍👩‍👧</div>
                        <h4 className="text-lg font-bold text-[#3E2613] mb-2">Parenthood Support</h4>
                        <p className="text-sm text-[#6F6864]">Access community advice and tips.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center flex flex-col items-center">
                        <div className="text-4xl mb-4 bg-[#F5F0EB] w-16 h-16 rounded-full flex items-center justify-center">🛡️</div>
                        <h4 className="text-lg font-bold text-[#3E2613] mb-2">Trusted Sellers</h4>
                        <p className="text-sm text-[#6F6864]">Shop from verified sellers with ratings.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center flex flex-col items-center">
                        <div className="text-4xl mb-4 bg-[#F5F0EB] w-16 h-16 rounded-full flex items-center justify-center">📅</div>
                        <h4 className="text-lg font-bold text-[#3E2613] mb-2">Localized Events</h4>
                        <p className="text-sm text-[#6F6864]">Discover nearby swaps and meetups.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center flex flex-col items-center">
                        <div className="text-4xl mb-4 bg-[#F5F0EB] w-16 h-16 rounded-full flex items-center justify-center">♻️</div>
                        <h4 className="text-lg font-bold text-[#3E2613] mb-2">Eco-Friendly</h4>
                        <p className="text-sm text-[#6F6864]">Reduce waste by extending product life.</p>
                    </div>
                </div>
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
            {/* CTA */}
            <GetInTouchSection theme="dark" />

        </div>
    );
};

export default BabyThriftPage;
