import React from 'react';
import './CompetitiveAuditSection.css';

const CompetitiveAuditSection: React.FC = () => {
    return (
        <section className="bd-audit-section">
            <div className="bd-audit-container">
                {/* Header */}
                <div className="bd-audit-header">
                    <h2 className="bd-audit-title">Competitive Audit:</h2>
                    <div className="bd-audit-content">
                        <p className="bd-audit-text">
                            <strong>Analyzing competitors helped reveal where current fitness and membership apps succeed and where they fall short.</strong> While they offer strong booking and discovery tools, competitors lack unified event flows, real-time support, and connected venue ecosystems. These gaps highlight clear opportunities for Bonder to improve the Lifetime member experience.
                        </p>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="bd-audit-table-wrapper">
                    <table className="bd-audit-table">
                        <thead>
                            <tr>
                                <th className="bd-table-header bd-row-header"></th>
                                <th className="bd-table-header">Equinox+</th>
                                <th className="bd-table-header">ClassPass</th>
                                <th className="bd-table-header">Mindbody</th>
                                <th className="bd-table-header">Soho House App</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="bd-row-label">Product Summary</td>
                                <td>Premium fitness app offering workouts, class booking, and training programs.</td>
                                <td>Flexible fitness platform for booking classes across multiple studios.</td>
                                <td>Scheduling app for booking fitness, wellness, and studio services.</td>
                                <td>Exclusive membership app for curated events and community access.</td>
                            </tr>
                            <tr>
                                <td className="bd-row-label">Website</td>
                                <td><a href="https://www.equinoxplus.com" target="_blank" rel="noopener noreferrer">www.equinoxplus.com</a></td>
                                <td><a href="https://www.classpass.com" target="_blank" rel="noopener noreferrer">www.classpass.com</a></td>
                                <td><a href="https://www.mindbodyonline.com" target="_blank" rel="noopener noreferrer">www.mindbodyonline.com</a></td>
                                <td><a href="https://www.sohohouse.com" target="_blank" rel="noopener noreferrer">www.sohohouse.com</a></td>
                            </tr>
                            <tr>
                                <td className="bd-row-label">Target Users</td>
                                <td>Luxury fitness members seeking high-end wellness content and structured programs.</td>
                                <td>Users wanting flexible access to fitness classes, events, and new studio experiences.</td>
                                <td>People booking wellness services, appointments, and fitness classes through independent studios.</td>
                                <td>Members seeking exclusive social events, creative networking, and curated community experiences.</td>
                            </tr>
                            <tr>
                                <td className="bd-row-label">Core Features</td>
                                <td>
                                    <ul>
                                        <li>Premium on-demand workouts</li>
                                        <li>Program-based training</li>
                                        <li>Health tracking integrations</li>
                                        <li>Class booking for Equinox clubs</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Multi-studio class booking</li>
                                        <li>Credit-based system</li>
                                        <li>Reviews + discovery tools</li>
                                        <li>Intro pricing for new users</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Class and appointment scheduling</li>
                                        <li>Wellness practitioner booking</li>
                                        <li>Promotions + packages</li>
                                        <li>Studio management tools</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Exclusive event RSVPs</li>
                                        <li>Digital ticketing + waitlists</li>
                                        <li>Member directory</li>
                                        <li>Club updates + curated content</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="bd-row-label">Strengths</td>
                                <td>
                                    <ul>
                                        <li>Strong luxury brand identity</li>
                                        <li>Highly produced content</li>
                                        <li>Clear structure for training goals</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Broad discovery across cities</li>
                                        <li>Low-friction onboarding</li>
                                        <li>Diverse fitness + wellness options</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Powerful scheduling tools</li>
                                        <li>Works with thousands of studios</li>
                                        <li>Easy booking across service types</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Strong community and exclusivity</li>
                                        <li>High-quality event curation</li>
                                        <li>Global club presence and recognition</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="bd-row-label">Weaknesses</td>
                                <td>
                                    <ul>
                                        <li>No true community features</li>
                                        <li>Limited real-world event integration</li>
                                        <li>Primarily fitness-focused</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>No loyalty to a single venue</li>
                                        <li>No communication tools</li>
                                        <li>Event flows not designed for exclusivity</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Overwhelming interface</li>
                                        <li>Not built for social engagement</li>
                                        <li>Lacks premium or exclusive event experiences</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Access restricted to members only</li>
                                        <li>Not fitness or wellness driven</li>
                                        <li>Limited communication with staff</li>
                                        <li>Not scalable for partner venues</li>
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

export default CompetitiveAuditSection;
