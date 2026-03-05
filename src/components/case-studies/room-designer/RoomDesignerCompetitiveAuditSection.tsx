import React from 'react';
import './RoomDesignerCompetitiveAuditSection.css';

const RoomDesignerCompetitiveAuditSection: React.FC = () => {
    return (
        <section className="rd-audit-section">
            <div className="rd-audit-container">
                {/* Header */}
                <div className="rd-audit-header">
                    <h2 className="rd-audit-title">Competitive Audit:</h2>
                    <div className="rd-audit-content">
                        <p className="rd-audit-text">
                            <strong>Analyzing competing room design platforms showed that while many support visualization, they fail to create an intuitive, accessible experience for everyday users.</strong> The absence of personalization and ease-of-use highlights an opportunity for Room Designer to create a more user-centered design experience.
                        </p>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="rd-audit-table-wrapper">
                    <table className="rd-audit-table">
                        <thead>
                            <tr>
                                <th className="rd-table-header rd-row-header"></th>
                                <th className="rd-table-header">Havenly</th>
                                <th className="rd-table-header">Modsy</th>
                                <th className="rd-table-header">RoomSketcher</th>
                                <th className="rd-table-header">Planner 5D</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="rd-row-label">Product name</td>
                                <td>Online interior design service connecting users with professional designers for personalized room makeovers.</td>
                                <td>Virtual room design platform using 3D rendering to visualize furniture and décor in real spaces.</td>
                                <td>Floor plan and home design software for creating 2D/3D room layouts and walkthroughs.</td>
                                <td>Mobile-first home design app with drag-and-drop furniture placement and 3D visualization.</td>
                            </tr>
                            <tr>
                                <td className="rd-row-label">Website</td>
                                <td><a href="https://www.havenly.com" target="_blank" rel="noopener noreferrer">www.havenly.com</a></td>
                                <td><a href="https://www.modsy.com" target="_blank" rel="noopener noreferrer">www.modsy.com</a></td>
                                <td><a href="https://www.roomsketcher.com" target="_blank" rel="noopener noreferrer">www.roomsketcher.com</a></td>
                                <td><a href="https://www.planner5d.com" target="_blank" rel="noopener noreferrer">www.planner5d.com</a></td>
                            </tr>
                            <tr>
                                <td className="rd-row-label">Target Users</td>
                                <td>Homeowners and renters seeking professional design guidance without hiring a full-service designer.</td>
                                <td>Users who want photorealistic room mock-ups based on their actual room dimensions and photos.</td>
                                <td>DIY enthusiasts and professionals who need precise floor plans and 3D home visualizations.</td>
                                <td>Casual users and hobbyists looking for an easy, intuitive way to experiment with room layouts.</td>
                            </tr>
                            <tr>
                                <td className="rd-row-label">Core Features</td>
                                <td>
                                    <ul>
                                        <li>Professional designer matching</li>
                                        <li>Style quizzes</li>
                                        <li>Curated product shopping</li>
                                        <li>Multiple design concepts</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>3D room rendering</li>
                                        <li>Photo-based room scanning</li>
                                        <li>Furniture swapping</li>
                                        <li>Shoppable designs</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>2D/3D floor plans</li>
                                        <li>Live 3D walkthroughs</li>
                                        <li>Measurement tools</li>
                                        <li>Furnishing library</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Drag-and-drop design</li>
                                        <li>AR room preview</li>
                                        <li>Community gallery</li>
                                        <li>Cross-platform sync</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="rd-row-label">Strengths</td>
                                <td>
                                    <ul>
                                        <li>Expert design guidance</li>
                                        <li>Personalized style recommendations</li>
                                        <li>Integrated shopping experience</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Realistic 3D visualizations</li>
                                        <li>Uses real room dimensions</li>
                                        <li>Shoppable product integration</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Professional-grade floor plans</li>
                                        <li>Accurate measurement tools</li>
                                        <li>Detailed 3D walkthroughs</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Intuitive mobile interface</li>
                                        <li>Large furniture catalog</li>
                                        <li>Community sharing features</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="rd-row-label">Weaknesses</td>
                                <td>
                                    <ul>
                                        <li>Higher cost for premium plans</li>
                                        <li>Limited DIY customization</li>
                                        <li>Dependent on designer availability</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Service discontinued for new users</li>
                                        <li>Slow rendering times</li>
                                        <li>Limited furniture catalog</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Steep learning curve</li>
                                        <li>Desktop-focused interface</li>
                                        <li>Limited free tier features</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Less accurate rendering</li>
                                        <li>Ads in free version</li>
                                        <li>Limited professional-grade tools</li>
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

export default RoomDesignerCompetitiveAuditSection;
