
import React from 'react';
import { HeroSection } from "../components/case-studies/new-template/layout/HeroSection";
import { ContentSection } from "../components/case-studies/new-template/layout/ContentSection";
import { TwoColumnSection } from "../components/case-studies/new-template/layout/TwoColumnSection";
import { SectionHeading } from "../components/case-studies/new-template/layout/SectionHeading";
import RoomDesignerCompetitiveAuditSection from "../components/case-studies/room-designer/RoomDesignerCompetitiveAuditSection";
import { useDesktopViewport } from "../hooks/useDesktopViewport";

import GetInTouchSection from "../components/sections/GetInTouchSection";
import { ProjectDetailGrid } from "../components/case-studies/new-template/cards/ProjectDetailGrid";
import { StepCard } from "../components/case-studies/new-template/cards/StepCard";
import { ImageGallery } from "../components/case-studies/new-template/cards/ImageGallery";
import ResearchOverview from "../components/case-studies/shared/ResearchOverview";
import KeyInsights from "../components/case-studies/shared/KeyInsights";






const projectDetails = [
    { label: "ROLE", value: "Lead UX Designer" },
    { label: "DURATION", value: "3 Months | 2026" },
    { label: "PROTOTYPE", value: "Figma prototype link" },
    { label: "RESPONSIBILITIES", value: "Design, Research, Prototyping" },
    { label: "TEAM SIZE", value: "4 Group Project" },
    { label: "CATEGORY", value: "Body-worn Camera Application" },
];

const keyInsights = [
    { title: 'Efficient Recording', description: 'Users need a quick and reliable way to start recording without navigating through screens', icon: `${import.meta.env.BASE_URL}figmaAssets/image copy 57.png` },
    { title: 'Organization', description: 'Videos must be organized with clear incident details and metadata to support documentation and investigations', icon: `${import.meta.env.BASE_URL}figmaAssets/image copy 58.png` },
    { title: 'Secure Storage', description: 'Body-worn camera footage must be securely uploaded and stored in the cloud to maintain evidence integrity and accountability', icon: `${import.meta.env.BASE_URL}figmaAssets/image copy 59.png` },
    { title: 'Video Review', description: 'Users need simple tools to review recordings, locate important moments, and manage footage after an incident', icon: `${import.meta.env.BASE_URL}figmaAssets/image copy 60.png` },
];

const researchLabels = [
    { icon: `${import.meta.env.BASE_URL}figmaAssets/speech-bubble-removebg-preview-1.svg`, label: "Discovery" },
    { icon: `${import.meta.env.BASE_URL}figmaAssets/twocellphones-removebg-preview--1--1.svg`, label: "Research" },
    { icon: `${import.meta.env.BASE_URL}figmaAssets/chart-removebg-preview-2.svg`, label: "User Testing" },
    { icon: `${import.meta.env.BASE_URL}figmaAssets/lightbuldddd-removebg-preview-1.svg`, label: "Insight" },
];

const discoveryImages = [
    { src: `${import.meta.env.BASE_URL}figmaAssets/image copy 50.png`, alt: "Discovery Process 1", label: "Discovery Process" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/image copy 51.png`, alt: "Discovery Process 2", label: "Ideation" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/image copy 52.png`, alt: "Discovery Process 3", label: "Sketches" },
];

const lofiImages = [
    { src: `${import.meta.env.BASE_URL}figmaAssets/image copy 61.png`, alt: "Main Screen Wireframe", label: "Main Screen", sublabel: "Record, view recordings, edit settings." },
    { src: `${import.meta.env.BASE_URL}figmaAssets/image copy 62.png`, alt: "Cloud Sync Screen Wireframe", label: "Cloud Sync Screen", sublabel: "Upload footage to a secure cloud" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/image copy 63.png`, alt: "Settings Screen Wireframe", label: "Settings Screen", sublabel: "Control the settings of app and camera" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/image copy 64.png`, alt: "Video Review Screen Wireframe", label: "Video Review Screen", sublabel: "Review footage, edit notes, add metadata" },
];

const hifiImages = [
    { src: `${import.meta.env.BASE_URL}figmaAssets/image copy 65.png`, alt: "Main Home Screen", label: "Main Home Screen" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/image copy 66.png`, alt: "Cloud Sync Screen", label: "Cloud Sync Screen" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/image copy 67.png`, alt: "Settings Screen", label: "Settings Screen" },
    { src: `${import.meta.env.BASE_URL}figmaAssets/image copy 68.png`, alt: "Video Review Screen", label: "Video Review Screen" },
];

const nextSteps = [
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/image copy 70.png`,
        title: "User Testing",
        description: "Conduct usability testing with target users to validate design decisions and identify pain points.",
    },
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/image copy 71.png`,
        title: "Iterate & Refine",
        description: "Incorporate feedback to improve the user experience and address any discovered issues.",
    },
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/image copy 72.png`,
        title: "Analytics Integration",
        description: "Implement tracking to measure key metrics like user engagement and retention rates.",
    },
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/image copy 73.png`,
        title: "Future Features",
        description: "Explore premium features like AR room preview, AI design suggestions, and collaborative design sessions.",
    },
];


const RoomDesignerPage = () => {
    useDesktopViewport();

    return (
        <div className="min-h-screen bg-[#FFFFFF] overflow-hidden w-full">


            <HeroSection
                title="Watch Tower"
                subtitle="Camera Management Application"
                imageSrc={`${import.meta.env.BASE_URL}figmaAssets/image copy 49.png`}
                imageAlt="Watch Tower App Screens"
                imageClassName="w-full max-w-[1000px] h-auto object-contain"
                imageContainerClassName="relative z-0 w-full flex justify-center -mt-14 md:-mt-28"
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
                        <p className="text-[#6F6864] leading-relaxed text-center md:text-left">
                            <span className="text-lg md:text-[34px] md:leading-[41px] font-medium">
                                Police departments need a reliable way to manage body-worn camera footage. Officers must be able to start recordings, review videos, and organize evidence from one place.{" "}
                            </span>
                            <span className="text-lg md:text-[30px] md:leading-[36px]">
                                Footage also needs to be uploaded securely to cloud storage for documentation and investigations.
                            </span>
                        </p>
                        <p className="text-[#6F6864] leading-relaxed text-center md:text-left">
                            <span className="text-lg md:text-[30px] md:leading-[36px]">
                                This project focused on designing a mobile app that supports recording, footage management, and secure cloud uploads.
                            </span>
                        </p>
                    </div>
                }
            />

            {/* Research Overview */}
            <ResearchOverview
                backgroundColor="bg-[#5C3D2E]"
                description="Research focused on understanding how body-worn camera systems function. The goal was to identify key features needed for efficient footage management and secure cloud uploads."
                cards={researchLabels}
            />

            {/* Discovery */}
            <TwoColumnSection
                left={<SectionHeading title="Discovery:" />}
                right={
                    <div className="flex flex-col gap-5">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] text-center">Understanding the Problem Space:</p>
                        <div className="text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] text-center md:text-left">
                            <p>
                                <span>Research into body-worn camera systems highlighted how important video documentation has become for police departments. These cameras are used to record incidents, support investigations, and maintain accountability. As their use increases, departments must manage large amounts of video footage and ensure that recordings are stored securely and documented properly.</span>
                            </p>
                            <p className="mt-5">
                                <span>Early in the process, I explored ideas through sketches to understand how the app could support body-worn camera workflows. These sketches focused on key tasks such as recording, reviewing footage, and uploading videos to the cloud. This early ideation helped define the core screens and navigation structure of the application.</span>
                            </p>
                        </div>
                    </div>
                }
            />
            <ContentSection className="!py-0">
                <ImageGallery images={discoveryImages} columns={3} />
            </ContentSection>

            {/* Concept Map */}
            <TwoColumnSection
                left={<SectionHeading title="Concept Map:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            To better understand the system, I created a concept map to organize the main features of the body-worn camera application. This helped visualize how recording, footage management, review tools, and secure uploads connect within the workflow. The map also highlighted important considerations such as privacy, transparency, and evidence accountability.
                        </p>
                    </div>
                }
            />
            <ContentSection className="!py-0 !px-0 !max-w-full">
                <img
                    src={`${import.meta.env.BASE_URL}figmaAssets/image copy 53.png`}
                    alt="Body Worn Camera Concept Map"
                    className="w-full h-auto"
                />
            </ContentSection>

            {/* Competitive Audit */}
            <RoomDesignerCompetitiveAuditSection />

            {/* Key Insights */}
            <KeyInsights
                backgroundColor="bg-[#5C3D2E]"
                description="These insights summarize the most important patterns identified during research and system analysis, highlighting the key challenges police officers face when recording, managing, and reviewing body-worn camera footage."
                insights={keyInsights}
                textColor="text-white"
            />

            {/* User Flow */}
            <TwoColumnSection
                left={<SectionHeading title="User Flow:" />}
                right={
                    <div className="flex flex-col gap-4">
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            User flows map the key interactions officers perform when using the Watchtower application.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            These flows focus on core tasks such as recording incidents, reviewing footage, and uploading video evidence to the cloud.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            Understanding these workflows helped ensure the interface supports efficient evidence management.
                        </p>
                    </div>
                }
            />

            {/* User Flow Diagram */}
            <ContentSection className="!py-4 !pb-16" bgColor="bg-[#D9D9D9]">
                <div className="flex flex-col gap-10 max-w-[1300px] mx-auto">
                    {/* Flow 1 */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center text-white text-xl font-normal shrink-0">1</div>
                            <div className="bg-[#6F6864] rounded-full px-6 py-2.5">
                                <span className="text-white font-medium text-lg md:text-xl">Start Timer and Upload Video</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 ml-4">
                            {["Log in", "Main Screen", "Press Record", "Press stop Record", "Press Upload Button", "Cloud Sync Upload", "Browse Camera files", "Select footage + upload"].map((step, i, arr) => (
                                <React.Fragment key={i}>
                                    <div className="bg-white rounded-2xl px-5 py-4 min-w-[100px] text-center shadow-sm">
                                        <span className="text-black text-sm md:text-base font-normal">{step}</span>
                                    </div>
                                    {i < arr.length - 1 && <span className="text-black text-lg">→</span>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Flow 2 */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center text-white text-xl font-normal shrink-0">2</div>
                            <div className="bg-[#6F6864] rounded-full px-6 py-2.5">
                                <span className="text-white font-medium text-lg md:text-xl">Add Note to Video</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 ml-4">
                            {["Log in", "Main Screen", "Recordings", "Gallery", "Select Video", "Video Review", "Incident details", "Save"].map((step, i, arr) => (
                                <React.Fragment key={i}>
                                    <div className="bg-white rounded-2xl px-5 py-4 min-w-[100px] text-center shadow-sm">
                                        <span className="text-black text-sm md:text-base font-normal">{step}</span>
                                    </div>
                                    {i < arr.length - 1 && <span className="text-black text-lg">→</span>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Flow 3 */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center text-white text-xl font-normal shrink-0">3</div>
                            <div className="bg-[#6F6864] rounded-full px-6 py-2.5">
                                <span className="text-white font-medium text-lg md:text-xl">Connect Camera to App</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 ml-4">
                            {["Log in", "Main Screen", "Settings Gear Icon", "Reconnect Camera", "Scan for Devices", "Select Camera", "Connected"].map((step, i, arr) => (
                                <React.Fragment key={i}>
                                    <div className="bg-white rounded-2xl px-5 py-4 min-w-[100px] text-center shadow-sm">
                                        <span className="text-black text-sm md:text-base font-normal">{step}</span>
                                    </div>
                                    {i < arr.length - 1 && <span className="text-black text-lg">→</span>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Flow 4 */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center text-white text-xl font-normal shrink-0">4</div>
                            <div className="bg-[#6F6864] rounded-full px-6 py-2.5">
                                <span className="text-white font-medium text-lg md:text-xl">Verify Police Dept Info</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 ml-4">
                            {["Log in", "Main Screen", "Hamburger Menu", "Unit Info", "View Overview"].map((step, i, arr) => (
                                <React.Fragment key={i}>
                                    <div className="bg-white rounded-2xl px-5 py-4 min-w-[100px] text-center shadow-sm">
                                        <span className="text-black text-sm md:text-base font-normal">{step}</span>
                                    </div>
                                    {i < arr.length - 1 && <span className="text-black text-lg">→</span>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </ContentSection>


            {/* Lo-Fi Wireframes */}
            <TwoColumnSection
                left={<SectionHeading title="Lo-Fi Wireframes:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            Wireframes were created to translate the user flows into a structured interface layout. This stage focused on organizing key features such as recording controls, video review tools, and cloud uploads while keeping the interface simple and easy to navigate.
                        </p>
                    </div>
                }
            />
            <ContentSection bgColor="bg-[#6F6864]">
                <ImageGallery images={lofiImages} columns={4} centerLabels />
            </ContentSection>

            {/* Hi-Fi Wireframes */}
            <TwoColumnSection
                left={<SectionHeading title="Hi-Fi Wireframes:" />}
                right={
                    <div className="flex flex-col gap-6">
                        <p className="font-medium text-[#6F6864] text-xl md:text-[34px] md:leading-[41px] text-center md:text-left">
                            The Hi-Fi designs brought the app's visual identity to life.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            High fidelity designs were developed to refine visual hierarchy, accessibility, and usability. The interface uses clear status indicators, simplified navigation, and organized evidence tools to support efficient workflows.
                        </p>
                    </div>
                }
            />
            <ContentSection className="!py-0">
                <ImageGallery images={hifiImages} columns={4} />
            </ContentSection>

            {/* Design System / Style Guide */}
            <TwoColumnSection
                left={<SectionHeading title="Design System / Style Guide:" />}
                right={
                    <div className="flex flex-col gap-4">
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            The Watchtower design system was developed to maintain visual consistency and usability across the application.
                        </p>
                        <p className="font-normal text-[#6F6864] text-lg md:text-[30px] md:leading-[36px] leading-relaxed text-center md:text-left">
                            The style guide defines typography, color usage, interface components, and interaction patterns to ensure a clear and accessible experience. These elements help support readability and reliable navigation in high pressure environments.
                        </p>
                    </div>
                }
            />
            <ContentSection className="!py-0 !px-0 !max-w-full">
                <img
                    src={`${import.meta.env.BASE_URL}figmaAssets/image copy 69.png`}
                    alt="Watch Tower Design System Style Guide"
                    className="w-full h-auto"
                />
            </ContentSection>


            {/* Next Steps */}
            < ContentSection >
                <SectionHeading
                    title="Next Steps:"
                    description="Road map for future development and continuous improvement"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                    {nextSteps.map((step, index) => (
                        <StepCard key={index} {...step} iconClassName="w-14 h-14" iconContainerClassName="w-14 h-14 bg-transparent" />
                    ))}
                </div>
                <p className="mt-12 text-center text-[#6F6864] text-base md:text-[28px] md:leading-[33px] max-w-5xl mx-auto">
                    Thank you for reviewing this case study. I'm always open to feedback and would love to discuss how these design solutions could be applied to your projects.
                </p>
            </ContentSection >

            {/* Contact CTA */}
            < GetInTouchSection theme="dark" bgColor="bg-[#492300]" buttonBgColor="#B6936E" buttonTextColor="white" />

        </div >
    );
};

export default RoomDesignerPage;
