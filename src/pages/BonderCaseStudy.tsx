import { useEffect } from 'react';

import CaseStudyHero from '../components/case-studies/shared/CaseStudyHero';
import CaseStudyOverview from '../components/case-studies/shared/CaseStudyOverview';
import CaseStudyProblem from '../components/case-studies/shared/CaseStudyProblem';

// Import existing specific components
import ResearchOverview from '../components/case-studies/shared/ResearchOverview';
import DiscoverySection from '../components/case-studies/bonder/DiscoverySection';
import WireframeGallery from '../components/case-studies/bonder/WireframeGallery';
import PersonaSection from '../components/case-studies/bonder/PersonaSection';
import CompetitiveAuditSection from '../components/case-studies/bonder/CompetitiveAuditSection';
import KeyInsights from '../components/case-studies/shared/KeyInsights';
import HowMightWeSection from '../components/case-studies/bonder/HowMightWeSection';
import SolutionOverviewSection from '../components/case-studies/bonder/SolutionOverviewSection';
import UserJourneyMapSection from '../components/case-studies/bonder/UserJourneyMapSection';
import InfoArchitectureSection from '../components/case-studies/bonder/InfoArchitectureSection';
import UserFlowSection from '../components/case-studies/bonder/UserFlowSection';
import LoFiWireframesSection from '../components/case-studies/bonder/LoFiWireframesSection';
import HiFiShowcase from '../components/case-studies/bonder/HiFiShowcase';
import NextStepsGrid from '../components/case-studies/bonder/NextStepsGrid';
import GetInTouchSection from '../components/shared/GetInTouchSection';

const BonderCaseStudy = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const overviewItems = [
        { label: 'ROLE', value: 'Lead UX Designer' },
        { label: 'DURATION', value: '3 weeks | 2025' },
        { label: 'PROTOTYPE', value: 'Figma prototype link', isLink: true, href: '#' },
        { label: 'RESPONSIBILITIES', value: 'Design, Research, Prototyping' },
        { label: 'TEAM SIZE', value: 'Solo Project' },
        { label: 'CATEGORY', value: 'Social app' },
    ];

    return (
        <div className="bonder-page">
            {/* Hero with 3 phone mockups */}
            <CaseStudyHero
                title="Bonder"
                subtitle="Social Media Application"
                imageSrc="/bonder-hero-mockups.png"
                imageAlt="Bonder App Mockups"
            />

            {/* Meta: Role, Duration, Prototype, etc. */}
            <CaseStudyOverview items={overviewItems} />

            {/* Problem Statement */}
            <CaseStudyProblem
                problemText="Bonder's CEO recognized an opportunity to grow the platform through new partnerships with Lifetime Fitness. However, because these experiences were entirely new, the app lacked the foundational user flows needed to support onboarding, event discovery, and partner engagement."
                solutionText="💡My role was to create net-new interaction flows that define how users navigate, access, and benefit from these partnerships. The challenge was to design intuitive pathways that feel native to Bonder while serving the unique needs of each partner."
            />

            {/* Research Overview */}
            <ResearchOverview
                description="A combination of discovery research, competitive analysis, and early user exploration helped reveal the challenges veterans face during transition."
                backgroundColor="bg-taupe"
            />
            <DiscoverySection />
            <WireframeGallery />
            <PersonaSection />
            <CompetitiveAuditSection />
            <KeyInsights
                description="These insights summarize the most important patterns uncovered during research and discovery, highlighting the core challenges users face when trying to build meaningful connections."
                backgroundColor="bg-taupe"
                insights={[
                    { title: 'Community Focus', description: 'Users prioritize finding genuine connections over quantity of matches', emoji: '🤝' },
                    { title: 'Location Matters', description: 'Proximity-based discovery increases likelihood of in-person meetups', emoji: '📍' },
                    { title: 'Event-Driven', description: 'Shared activities reduce social anxiety & create natural conversation starters', emoji: '🎉' },
                    { title: 'Authentic Profiles', description: 'Users want real interests and personality, not curated perfection', emoji: '✨' },
                ]}
            />
            <HowMightWeSection />
            <SolutionOverviewSection />
            <UserJourneyMapSection />
            <InfoArchitectureSection />
            <UserFlowSection />
            <LoFiWireframesSection />

            {/* Hi-Fi Wireframes */}
            <HiFiShowcase />

            {/* Next Steps Grid */}
            <NextStepsGrid />

            {/* Final Quote */}
            <section className="w-full bg-white py-16 px-4">
                <div className="max-w-[999px] mx-auto text-center">
                    <p className="text-[28px] font-normal text-taupe leading-relaxed">
                        Thank you for reviewing this case study. I'm always open to feedback and would love to discuss how these design solutions could be applied to your projects.
                    </p>
                </div>
            </section>

            {/* Get in Touch CTA */}
            <GetInTouchSection />

        </div>
    );
};

export default BonderCaseStudy;
