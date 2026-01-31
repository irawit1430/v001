import React, { useEffect } from 'react';
import './RecordzPage.css';
import RecordzDetailsSection from '../components/recordz/RecordzDetailsSection';
import ResearchOverview from '../components/case-studies/shared/ResearchOverview';
import RecordzDiscoverySection from '../components/recordz/RecordzDiscoverySection';
import RecordzCompetitiveAuditSection from '../components/recordz/RecordzCompetitiveAuditSection';
import KeyInsights from '../components/case-studies/shared/KeyInsights';
import RecordzHowMightWeSection from '../components/recordz/RecordzHowMightWeSection';
import RecordzSolutionSection from '../components/recordz/RecordzSolutionSection';
import RecordzArchitectureSection from '../components/recordz/RecordzArchitectureSection';
import RecordzWireframesSection from '../components/recordz/RecordzWireframesSection';
import RecordzHiFiSection from '../components/recordz/RecordzHiFiSection';
import RecordzNextStepsSection from '../components/recordz/RecordzNextStepsSection';
import GetInTouchSection from '../components/shared/GetInTouchSection';

// Import Shared Components
import CaseStudyHero from '../components/case-studies/shared/CaseStudyHero';
import CaseStudyOverview from '../components/case-studies/shared/CaseStudyOverview';
import CaseStudyProblem from '../components/case-studies/shared/CaseStudyProblem';

// Import images
import heroImage from '../assets/1331-recordz-hero.png';
import iconShield from '../assets/icon-shield.png';
import iconBadge from '../assets/icon-badge.png';
import iconBooks from '../assets/icon-books.png';
import iconCommunity from '../assets/icon-community.png';

const RecordzPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const overviewItems = [
        { label: 'ROLE', value: 'Lead UX Designer' },
        { label: 'DURATION', value: '12 weeks | 2025' },
        { label: 'PROTOTYPE', value: 'Figma prototype link', isLink: true, href: '#' },
        { label: 'RESPONSIBILITIES', value: 'Ideation, Design, Research, Prototyping' },
        { label: 'TEAM SIZE', value: 'Solo Freelance Project' },
        { label: 'CATEGORY', value: 'Website' },
    ];

    return (
        <div className="recordz-page">
            {/* Hero Section */}
            <CaseStudyHero
                title="1331 Recordz"
                subtitle="Music Studio & Label Website"
                imageSrc={heroImage}
                imageAlt="1331 Recordz Website Mockup"
            />

            {/* Project Details */}
            <CaseStudyOverview items={overviewItems} />

            {/* Client Problem */}
            <CaseStudyProblem
                problemText={
                    <>
                        <strong>1331 Recordz needed a cohesive website that clearly represented both sides of their business:</strong> a professional recording studio and an independent music label. The challenge was to merge these two identities into a single experience while keeping each distinct, using color and visual hierarchy to differentiate studio services from label content without confusing users.
                    </>
                }
            />

            {/* Key Challenges (formerly RecordzDetailsSection) */}
            <RecordzDetailsSection />

            {/* Research Overview */}
            <ResearchOverview
                description="A combination of discovery research, competitive analysis, and early user exploration helped reveal the challenges studios and labels face when building a cohesive digital presence."
                backgroundColor="bg-taupe"
            />

            {/* Discovery Section */}
            <RecordzDiscoverySection />

            {/* Competitive Audit Section */}
            <RecordzCompetitiveAuditSection />

            {/* Key Insights Section */}
            <KeyInsights
                description="These insights summarize the most important patterns uncovered during research and discovery, highlighting the core challenges studios and labels face when building a cohesive digital presence."
                backgroundColor="bg-taupe"
                insights={[
                    { title: 'Trust & Safety', description: 'Clear product conditions and trusted sellers build confidence', icon: iconShield },
                    { title: 'Platform Clarity', description: 'Inconsistent descriptions and images hinder product evaluation', icon: iconBadge },
                    { title: 'Navigation Simplicity', description: 'Cluttered layouts and categories hinder mobile product discovery', icon: iconBooks },
                    { title: 'Artist Community', description: 'Existing platforms lack parent-focused community and trust features', icon: iconCommunity },
                ]}
            />

            {/* How Might We Section */}
            <RecordzHowMightWeSection />

            {/* Solution Overview Section */}
            <RecordzSolutionSection />

            {/* Information Architecture & User Flows */}
            <RecordzArchitectureSection />

            {/* Lo-Fi Wireframes Section */}
            <RecordzWireframesSection />

            {/* Hi-Fi Wireframes Section */}
            <RecordzHiFiSection />

            {/* Next Steps Section */}
            <RecordzNextStepsSection />

            {/* Get in Touch Section */}
            <GetInTouchSection />
        </div>
    );
};

export default RecordzPage;
