import React from 'react';
import './FreshOutCompetitiveAuditSection.css';

const FreshOutCompetitiveAuditSection: React.FC = () => {
    return (
        <section className="fo-audit-section">
            <div className="fo-audit-container">
                {/* Header */}
                <div className="fo-audit-header">
                    <h2 className="fo-audit-title">Competitive Audit:</h2>
                    <div className="fo-audit-content">
                        <p className="fo-audit-text">
                            <strong>The competitive audit evaluates key platforms that support veterans in building community, accessing resources, and navigating post-service life.</strong> By comparing core features, strengths, and weaknesses across competitors, this analysis reveals clear opportunities to differentiate the product and address unmet needs within the veteran support landscape.
                        </p>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="fo-audit-table-wrapper">
                    <table className="fo-audit-table">
                        <thead>
                            <tr>
                                <th className="fo-table-header fo-row-header"></th>
                                <th className="fo-table-header">Fresh Out</th>
                                <th className="fo-table-header">RallyPoint</th>
                                <th className="fo-table-header">VetTogether</th>
                                <th className="fo-table-header">Together We Served</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="fo-row-label">Product name</td>
                                <td>Mobile platform helping newly separated veterans build local connections, access resources, and receive emotional support.</td>
                                <td>Military-focused social network centered around discussions, Q&A, and information sharing.</td>
                                <td>Community and fitness-based platform offering in-person events for veterans.</td>
                                <td>Archival, service-history based community for veterans reconnecting with unit members.</td>
                            </tr>
                            <tr>
                                <td className="fo-row-label">Website</td>
                                <td><a href="https://www.freshout.com" target="_blank" rel="noopener noreferrer">www.freshout.com</a></td>
                                <td><a href="https://www.rallypoint.com" target="_blank" rel="noopener noreferrer">www.rallypoint.com</a></td>
                                <td><a href="https://www.vettogether.com" target="_blank" rel="noopener noreferrer">www.vettogether.com</a></td>
                                <td><a href="https://www.togetherweserved.com" target="_blank" rel="noopener noreferrer">www.togetherweserved.com</a></td>
                            </tr>
                            <tr>
                                <td className="fo-row-label">Target Users</td>
                                <td>Recently separated veterans transitioning to civilian life.</td>
                                <td>Active-duty military, veterans, families, and defense professionals.</td>
                                <td>Veterans seeking local events, fitness, and community engagement.</td>
                                <td>Veterans looking to reconnect with old units, branches, and service histories.</td>
                            </tr>
                            <tr>
                                <td className="fo-row-label">Core Features</td>
                                <td>
                                    <ul>
                                        <li>Local meetups</li>
                                        <li>Mood check-ins & support circles</li>
                                        <li>Personalized resource recommendations</li>
                                        <li>Veteran-to-veteran messaging</li>
                                        <li>Profiles with interests/tags</li>
                                        <li>Local mentorship matching</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Military Q&A</li>
                                        <li>Topic forums</li>
                                        <li>News updates</li>
                                        <li>User verification</li>
                                        <li>Networking tools</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>VetTogether local events</li>
                                        <li>Group fitness & wellness activities</li>
                                        <li>Volunteering opportunities</li>
                                        <li>Chapter-based communities</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Unit finder</li>
                                        <li>Service timeline / archives</li>
                                        <li>Memorial pages</li>
                                        <li>Branch communities</li>
                                        <li>Record reconstruction</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="fo-row-label">Strengths</td>
                                <td>
                                    <ul>
                                        <li>Hyper-relevant to early transition</li>
                                        <li>Balances emotional + practical support</li>
                                        <li>Localized community experience</li>
                                        <li>Modern UI with low friction onboarding</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Large, established user base</li>
                                        <li>Strong credibility</li>
                                        <li>Verified profiles</li>
                                        <li>Excellent for discussion + information</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Strong real-world community</li>
                                        <li>Nationally recognized nonprofit</li>
                                        <li>Impactful physical & social events</li>
                                        <li>Great for wellness and belonging</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Best for reconnecting with old units</li>
                                        <li>Extensive military archives</li>
                                        <li>Deep historical value</li>
                                        <li>Strong nostalgia engagement</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="fo-row-label">Weaknesses</td>
                                <td>
                                    <ul>
                                        <li>Small initial user base</li>
                                        <li>Requires trust-building</li>
                                        <li>Community still growing</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Outdated UX</li>
                                        <li>Overwhelming content flow</li>
                                        <li>Low emphasis on in-person connection</li>
                                        <li>Minimal emotional support tools</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Fitness-heavy focus</li>
                                        <li>Not designed for 1:1 matching</li>
                                        <li>Limited mental health support</li>
                                        <li>Basic UI patterns</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Outdated design</li>
                                        <li>Not built for new connections</li>
                                        <li>Not suitable for transition guidance</li>
                                        <li>Complex onboarding</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default FreshOutCompetitiveAuditSection;
