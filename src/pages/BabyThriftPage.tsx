import React, { useEffect } from 'react';
import './BabyThriftPage.css';

// Import images
import heroImage from '../assets/baby-thrift-hero.png';
import discoveryImage1 from '../assets/discovery-1.png';
import discoveryImage2 from '../assets/discovery-2.png';
import discoveryImage3 from '../assets/discovery-3.png';

// Import Shared Components
import CaseStudyHero from '../components/case-studies/shared/CaseStudyHero';
import CaseStudyOverview from '../components/case-studies/shared/CaseStudyOverview';
import CaseStudyProblem from '../components/case-studies/shared/CaseStudyProblem';
import ResearchOverview from '../components/case-studies/shared/ResearchOverview';

// Import Specific Components
import CompetitiveAuditSection from '../components/CompetitiveAuditSection';
import KeyInsights from '../components/case-studies/shared/KeyInsights';
import HowMightWeSection from '../components/HowMightWeSection';
import SolutionOverviewSection from '../components/SolutionOverviewSection';
import InformationArchitectureSection from '../components/InformationArchitectureSection';
import UserFlowsSection from '../components/UserFlowsSection';
import LoFiWireframesSection from '../components/LoFiWireframesSection';
import HiFiWireframesSection from '../components/HiFiWireframesSection';
import NextStepsSection from '../components/NextStepsSection';
import GetInTouchSection from '../components/shared/GetInTouchSection';

const BabyThriftPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const overviewItems = [
        { label: 'Role', value: 'Lead UX Designer' },
        { label: 'Duration', value: '6 weeks | 2024' },
        { label: 'Prototype', value: 'Figma prototype link', isLink: true, href: '#' },
        { label: 'Responsibilities', value: 'Ideation, Design, Research, Prototyping' },
        { label: 'Team Size', value: 'Solo Project' },
        { label: 'Category', value: 'Social app' },
    ];

    return (
        <div className="baby-thrift-page">
            {/* Hero Section */}
            <CaseStudyHero
                title="Baby Thrift"
                subtitle="Thrifting Application"
                imageSrc={heroImage}
                imageAlt="Baby Thrift App Screens"
            />

            {/* Project Details */}
            <CaseStudyOverview items={overviewItems} />

            {/* Problem Statement */}
            <CaseStudyProblem
                problemText={
                    <>
                        Many parents face frustration as their children <strong>quickly outgrow clothing</strong>, leading to wasted items and unnecessary spending. This challenge also contributes to environmental waste, prompting parents to seek more resourceful ways to de-clutter and reuse their children's wardrobes.
                    </>
                }
                solutionText={
                    <>
                        💡 <strong>In response to this problem</strong>, parents seek a reliable and intuitive marketplace experience that supports confident decision-making by emphasizing transparency, usability, and a streamlined path from discovery to checkout.
                    </>
                }
            />

            {/* Research Overview - Full Width */}
            <ResearchOverview
                description="A combination of discovery research, competitive analysis, and early user exploration helped reveal the challenges parents face when shopping secondhand."
                backgroundColor="bg-[#5C3D2E]"
            />

            <div className="bt-container">
                {/* Discovery Section */}
                <section className="bt-section">
                    <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1', minWidth: '250px' }}>
                            <h2 className="bt-section-title">Discovery:</h2>
                        </div>
                        <div style={{ flex: '2', minWidth: '300px' }}>
                            <h3 className="bt-text-large" style={{ fontSize: '28px', fontWeight: 600, color: '#6F6864', marginBottom: '20px' }}>Understanding the Problem Space:</h3>
                            <p className="bt-text-medium">
                                Parents shopping for secondhand baby products must balance affordability with trust and safety. Research focused on how parents evaluate product quality, navigate resale marketplaces, and make purchasing decisions on mobile.
                            </p>
                            <p className="bt-text-medium" style={{ marginTop: '30px' }}>
                                Through early exploration, several recurring themes emerged. Parents expressed concerns around unclear product conditions, inconsistent seller information, and overwhelming navigation. These issues often led to hesitation, reduced trust, and abandoned purchase attempts within existing secondhand marketplaces.
                            </p>
                        </div>
                    </div>
                    <div className="bt-discovery-images">
                        <img src={discoveryImage1} alt="Discovery Process 1" className="bt-discovery-img" />
                        <img src={discoveryImage2} alt="Discovery Process 2" className="bt-discovery-img" />
                        <img src={discoveryImage3} alt="Discovery Process 3" className="bt-discovery-img" />
                    </div>
                </section>

                {/* User Survey Research Section */}
                <section className="bt-section">
                    <h2 className="bt-section-title">User Survey Research:</h2>
                    <div className="bt-detail-line" style={{ marginBottom: '40px' }}></div>

                    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginBottom: '60px' }}>
                        <span className="bt-badge-dark">Overview</span>
                        <p className="bt-text-medium" style={{ fontSize: '24px', margin: 0 }}>
                            To better understand parents experiences with parenting, resale habits, and community connection, I <strong>conducted a Zoom-based survey</strong> with parents of children ages 0-12.
                        </p>
                    </div>

                    <p className="bt-text-medium" style={{ marginBottom: '60px' }}>
                        The goal of this research was to identify behaviors, pain points, and opportunities related to secondhand shopping, trust, and how parents seek advice and support.
                    </p>

                    <div className="bt-survey-grid">
                        {/* Left Column */}
                        <div className="bt-survey-col">
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                                <span className="bt-badge-dark">Participants</span>
                                <span className="bt-badge-light">👥 10 Parents</span>
                                <span className="bt-badge-light">📅 Ages 24-42</span>
                            </div>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
                                <span className="bt-badge-light">👨‍👩‍👧 7 Mothers, 3 Fathers</span>
                                <span className="bt-badge-light">📱 Mobile-First</span>
                            </div>

                            <ul className="bt-list">
                                <li>Children ranging from newborn to 12 years old</li>
                                <li>Mix of working parents and stay-at-home parents</li>
                                <li>All participants regularly shop for children’s clothing</li>
                                <li>Majority reported using mobile devices for shopping and research</li>
                            </ul>

                            <div style={{ marginTop: '60px', marginBottom: '20px' }}>
                                <span className="bt-badge-dark">Methodology</span>
                            </div>
                            <p className="bt-text-small">
                                The survey was conducted through one-on-one Zoom sessions using a semi-structured format.
                            </p>
                            <p className="bt-text-small">
                                Each session followed a set of 8 open ended questions designed to encourage participants to share their experiences and challenges in their own words.
                            </p>

                            <div style={{ marginTop: '60px', marginBottom: '20px' }}>
                                <span className="bt-badge-dark">Sample Questions</span>
                            </div>
                            <ul className="bt-list">
                                <li><strong>How do you shop</strong> for children's clothing?</li>
                                <li><strong>What challenges do you face</strong> when buying or selling secondhand items?</li>
                                <li><strong>What factors help you trust</strong> a secondhand product or seller?</li>
                            </ul>
                        </div>

                        {/* Right Column */}
                        <div className="bt-survey-col">
                            <div style={{ marginBottom: '30px' }}>
                                <span className="bt-badge-dark">Key Findings</span>
                            </div>

                            <div className="bt-finding-item">
                                <div className="bt-finding-icon">🐖</div>
                                <p className="bt-text-small">Parents <strong>value affordability but prioritize trust and safety</strong> when purchasing clothing</p>
                            </div>
                            <div className="bt-finding-item">
                                <div className="bt-finding-icon">📱</div>
                                <p className="bt-text-small">Many parents use secondhand platforms but feel uncertain about product condition and seller credibility.</p>
                            </div>
                            <div className="bt-finding-item">
                                <div className="bt-finding-icon">📷</div>
                                <p className="bt-text-small">Clear photos and detailed descriptions <strong>play a major role</strong> in purchase confidence</p>
                            </div>
                            <div className="bt-finding-item">
                                <div className="bt-finding-icon">💬</div>
                                <p className="bt-text-small">Parents often rely on informal communities such as social media groups, friends, or word-of-mouth for advice.</p>
                            </div>

                            <div className="bt-quote-box">
                                <span className="bt-quote-mark">❞</span>
                                <p className="bt-quote-text">
                                    I want affordable options, but I <strong>need to trust what I’m buying for my child</strong>
                                </p>
                                <p className="bt-quote-author">• Survey Participant</p>
                            </div>

                            <div style={{ marginTop: '40px', marginBottom: '20px' }}>
                                <span className="bt-badge-dark">Impact on Design</span>
                            </div>
                            <ul className="bt-list">
                                <li><strong>Emphasize trust through seller verification</strong> and reviews</li>
                                <li><strong>Use detailed photos</strong> and transparent product descriptions</li>
                                <li><strong>Design mobile-first for busy parents</strong></li>
                                <li><strong>Leverage community feedback</strong> and social proof</li>
                                <li>Balance affordability with safety reassurance</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Competitive Audit Section */}
                <CompetitiveAuditSection />
            </div>

            {/* Key Insights Section - Full Width */}
            <KeyInsights
                description="These insights summarize the most important patterns uncovered during research and discovery, highlighting the core challenges parents face when trying to find trusted products and community in the secondhand market."
                backgroundColor="bg-[#5C3D2E]"
                insights={[
                    { title: 'Trust & Safety', description: 'Clear product conditions and trusted sellers build confidence', emoji: '🛡️' },
                    { title: 'Product Clarity', description: 'Inconsistent descriptions and images hinder product evaluation', emoji: '🏷️' },
                    { title: 'Navigation Simplicity', description: 'Cluttered layouts and categories hinder mobile product discovery', emoji: '📚' },
                    { title: 'Parent Community', description: 'Existing platforms lack parent-focused community and trust features', emoji: '👨‍👩‍👧' },
                ]}
            />

            <div className="bt-container">

                {/* How Might We Section */}
                <HowMightWeSection />

                {/* Solution Overview Section */}
                <SolutionOverviewSection />

                {/* Information Architecture Section */}
                <InformationArchitectureSection />

                {/* User Flows Section */}
                <UserFlowsSection />
            </div>

            {/* Lo-Fi Wireframes Section - Full Width */}
            <LoFiWireframesSection />

            <div className="bt-container">

                {/* Hi-Fi Wireframes Section */}
                <HiFiWireframesSection />

                {/* Next Steps Section */}
                <NextStepsSection />
            </div>

            {/* Get in Touch Section - Full Width */}
            <GetInTouchSection />
        </div>
    );
};

export default BabyThriftPage;
