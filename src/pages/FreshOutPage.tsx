import React, { useEffect } from 'react';
import './FreshOutPage.css';

// Import images
import heroImage from '../assets/project-fresh-out.png';
import discoveryImage from '../assets/Discovery.png';
import competitiveAuditImage from '../assets/Competitive Audit.png';
import howMightWeImage from '../assets/How Might We.png';
import hiFiImage from '../assets/Hi-Fi Wireframes.png';
import keyFeaturesImage from '../assets/Key Features img.png';

// Import Shared Components
import CaseStudyHero from '../components/case-studies/shared/CaseStudyHero';
import CaseStudyOverview from '../components/case-studies/shared/CaseStudyOverview';
import CaseStudyProblem from '../components/case-studies/shared/CaseStudyProblem';
import ResearchOverview from '../components/case-studies/shared/ResearchOverview';
import KeyInsights from '../components/case-studies/shared/KeyInsights';
import GetInTouchSection from '../components/shared/GetInTouchSection';

const FreshOutPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const overviewItems = [
        { label: 'Role', value: 'Lead UX Designer' },
        { label: 'Duration', value: '5 months | 2023' },
        { label: 'Prototype', value: 'Figma prototype link', isLink: true, href: '#' },
        { label: 'Responsibilities', value: 'Design, Research, Prototyping' },
        { label: 'Team Size', value: 'Solo Project' },
        { label: 'Category', value: 'Social app' },
    ];

    return (
        <div className="fresh-out-page">
            <div className="fo-container">
                {/* Hero Section */}
                <CaseStudyHero
                    title="Fresh Out"
                    subtitle="Veteran Social Application"
                    imageSrc={heroImage}
                    imageAlt="Fresh Out App Screens"
                />

                {/* Project Details */}
                <CaseStudyOverview items={overviewItems} />

                {/* Problem Statement */}
                <CaseStudyProblem
                    problemText="Upon transitioning out of the military, veterans frequently encounter profound feelings of isolation. This period can be exceptionally challenging for them as they are compelled to embark on a fresh journey, encompassing their professional pursuits, place of residence, and social circles."
                    solutionText="💡 In Response to this problem, veterans are actively pursuing avenues to establish connections with fellow veterans, thereby facilitating networking opportunities and fostering meaningful interpersonal bonds."
                />
            </div>

            {/* Research Overview - Full Width */}
            <ResearchOverview
                description="A combination of discovery research, competitive analysis, and early user exploration helped reveal the challenges veterans face during transition."
                backgroundColor="bg-[#212873]"
            />

            <div className="fo-container">

                {/* Discovery */}
                <section className="fo-section">
                    <h2 className="fo-section-title">Discovery:</h2>
                    <img src={discoveryImage} alt="Discovery Process" className="fo-full-image" />
                </section>

                {/* Competitive Audit */}
                <section className="fo-section">
                    <h2 className="fo-section-title">Competitive Audit:</h2>
                    <p className="fo-text-medium">
                        The competitive audit evaluates key platforms that support veterans in building community, accessing resources, and navigating post-service life. By comparing core features, strengths, and weaknesses across competitors, this analysis reveals clear opportunities to differentiate the product and address unmet needs within the veteran support landscape.
                    </p>
                    <img src={competitiveAuditImage} alt="Competitive Audit" className="fo-full-image" />
                </section>
            </div>

            {/* Key Insights - Full Width */}
            <KeyInsights
                description="These insights summarize the most important patterns uncovered during research and discovery, highlighting the core challenges veterans face when trying to build meaningful connections after service."
                backgroundColor="bg-[#212873]"
                insights={[
                    { title: 'Isolation', description: 'Veterans often feel disconnected after transitioning out of service', emoji: '🏠' },
                    { title: 'Trust', description: 'Building new relationships requires a safe, veteran-focused environment', emoji: '🤝' },
                    { title: 'Purpose', description: 'Finding meaning and community after military service is critical', emoji: '🎯' },
                    { title: 'Connection', description: 'Digital tools should facilitate real-world bonds, not replace them', emoji: '💬' },
                ]}
            />

            <div className="fo-container">

                {/* How Might We */}
                <section className="fo-section">
                    <h2 className="fo-section-title">How Might We?</h2>
                    <p className="fo-text-large">
                        Turning insights into opportunity through the right questions.
                    </p>
                    <p className="fo-text-medium">
                        These “How Might We” questions translate research insights into actionable opportunities. They frame the core challenges veterans face and create a foundation for designing solutions that are supportive, intuitive, and empowering.
                    </p>
                    <p className="fo-text-medium" style={{ fontStyle: 'italic', marginTop: '20px' }}>
                        How might we reduce digital overwhelm during transition? How might we build purposeful, meaningful interactions? How might we help veterans feel safe and in control? How might we surface shared military experiences?
                    </p>
                    <img src={howMightWeImage} alt="How Might We" className="fo-full-image" />
                </section>

                {/* Solution Overview */}
                <section className="fo-section">
                    <h2 className="fo-section-title">Solution Overview:</h2>
                    <p className="fo-text-large">
                        Turning insights into opportunity with the right questions.
                    </p>
                    <p className="fo-text-medium">
                        Fresh Out is a veteran-centered social experience built around safety, connection, and purpose. It reduces the overwhelm of traditional social platforms by offering a focused, meaningful space where veterans can build community at any stage of life.
                    </p>
                    <div style={{ marginTop: '40px' }}>
                        <p className="fo-text-medium">The solution is shaped by four core goals:</p>
                        <ol className="fo-text-medium" style={{ paddingLeft: '40px' }}>
                            <li>Enable veterans to connect through shared service experience</li>
                            <li>Create a safe and trusted environment for communication</li>
                            <li>Reduce the noise of traditional social feeds</li>
                            <li>Support identity-building through community and purpose</li>
                        </ol>
                    </div>
                </section>

                {/* Information Architecture */}
                <section className="fo-section">
                    <h2 className="fo-section-title">Information Architecture:</h2>
                    <p className="fo-text-medium">
                        To translate strategic insights into a clear product structure, I mapped Fresh Out’s core navigation system. The information architecture shows how veterans move through key areas of the app, forming the basis for its user flows and interface design.
                    </p>
                </section>

                {/* User Flows */}
                <section className="fo-section">
                    <h2 className="fo-section-title">User Flows:</h2>
                    <p className="fo-text-medium">
                        These user flows outline the key steps veterans take inside the app. Mapping them early allowed me to validate the logic of each path and confirm that the experience remains seamless from onboarding to event participation.
                    </p>
                </section>

                {/* Survey */}
                <section className="fo-section">
                    <h2 className="fo-section-title">Survey:</h2>
                    <p className="fo-text-medium">
                        Survey responses revealed common pain points and opportunities. Veterans reported feeling isolated after service and expressed a need for simpler ways to connect with others who share their background.
                    </p>
                    <p className="fo-text-medium" style={{ fontSize: '24px', marginTop: '20px' }}>
                        Because the survey included 7 participants, these results should be interpreted directionally. They highlight clear trends but are not statistically generalizable. The findings were used to guide early design decisions and will be validated further with additional testing.
                    </p>
                </section>
            </div>

            {/* Lo-Fi Wireframes - Full Width */}
            <section className="fo-dark-section">
                <div className="fo-container">
                    <h2 className="fo-section-title">Lo-Fi Wireframes:</h2>
                    <p className="fo-text-medium">
                        Early wireframes helped shape the core structure of the app. Creating low-fidelity wireframes allowed me to quickly translate research insights into tangible layouts and test the overall flow of the experience. This stage focused on defining navigation, organizing key features, and validating that veterans could easily discover events, connect with others, and access relevant resources.
                    </p>
                </div>
            </section>

            <div className="fo-container">

                {/* Hi-Fi Wireframes */}
                <section className="fo-section">
                    <h2 className="fo-section-title">Hi-Fi Wireframes:</h2>
                    <p className="fo-text-medium">
                        The Hi-Fi designs brought the app’s visual identity to life. Moving onto high-fidelity screens helped refine the visual system, unify the design language, and ensure the interface felt intuitive and welcoming. Typography, color, and layout choices came together to create a polished experience centered on connection and community.
                    </p>
                    <img src={hiFiImage} alt="Hi-Fi Wireframes" className="fo-full-image" />
                </section>

                {/* Key Features */}
                <section className="fo-section">
                    <h2 className="fo-section-title">Key Features:</h2>
                    <p className="fo-text-medium">
                        The key features below highlight the core functionality of the product, each designed to support veterans in staying informed, connected, and in control of their transition journey.
                    </p>
                    <p className="fo-text-medium" style={{ fontWeight: 500, marginTop: '20px' }}>
                        Housing Finder | Roommate Search | Localized Events | Mentor Finder | Community Finder | Veteran Affairs Updates
                    </p>
                    <img src={keyFeaturesImage} alt="Key Features" className="fo-full-image" />
                </section>

                {/* Next Steps */}
                <section className="fo-section">
                    <h2 className="fo-section-title">Next Steps:</h2>
                    <p className="fo-text-medium">
                        Road map for future development and continuous improvement.
                    </p>

                    <div className="fo-next-steps-grid">
                        <div className="fo-step-card">
                            <div className="fo-step-title">User Testing</div>
                            <div className="fo-step-desc">Conduct usability testing with target users to validate design decisions and identify pain points.</div>
                        </div>
                        <div className="fo-step-card">
                            <div className="fo-step-title">Iterate & Refine</div>
                            <div className="fo-step-desc">Incorporate feedback to improve the user experience and address any discovered issues.</div>
                        </div>
                        <div className="fo-step-card">
                            <div className="fo-step-title">Analytics Integration</div>
                            <div className="fo-step-desc">Implement tracking to measure key metrics like user engagement and retention rates.</div>
                        </div>
                        <div className="fo-step-card">
                            <div className="fo-step-title">Future Features</div>
                            <div className="fo-step-desc">Explore premium features like event creation, business partnerships, and community moderation tools.</div>
                        </div>
                    </div>

                    <p className="fo-text-medium" style={{ textAlign: 'center', marginTop: '60px' }}>
                        Thank you for reviewing this case study. I’m always open to feedback and would love to discuss how these design solutions could be applied to your projects.
                    </p>
                </section>
            </div>

            {/* Get in Touch - Full Width */}
            <GetInTouchSection />
        </div>
    );
};

export default FreshOutPage;
