

import './RecordzCompetitiveAuditSection.css';

const RecordzCompetitiveAuditSection: React.FC = () => {
    return (
        <section className="rz-audit-section">
            <div className="rz-audit-container">
                {/* Header */}
                <div className="rz-audit-header">
                    <h2 className="rz-audit-title">Competitive Audit:</h2>
                    <div className="rz-audit-content">
                        <p className="rz-audit-text">
                            <strong>Analyzing competing Miami based recording studios and labels showed that while many offer professional production services, they often fail to create an approachable and collaborative experience for emerging artists.</strong> The lack of transparency and creative partnership highlights an opportunity for 1331 Recordz to design a more artist centered digital presence.
                        </p>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="rz-audit-table-wrapper">
                    <table className="rz-audit-table">
                        <thead>
                            <tr>
                                <th className="rz-table-header rz-row-header"></th>
                                <th className="rz-table-header">Criteria Recording Studios</th>
                                <th className="rz-table-header">Circle House Studios</th>
                                <th className="rz-table-header">Hit Factory Criteria</th>
                                <th className="rz-table-header">Art House Studios</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="rz-row-label">Product Summary</td>
                                <td>Legendary Miami based recording studio known for high end production and major industry artists.</td>
                                <td>Miami based recording studio recognized for its influence in hip hop and contemporary music culture.</td>
                                <td>High end Miami recording studio offering professional music production services.</td>
                                <td>Boutique Miami recording studio focused on creative expression and independent artists.</td>
                            </tr>
                            <tr>
                                <td className="rz-row-label">Website</td>
                                <td><a href="https://www.criteriastudios.com" target="_blank" rel="noopener noreferrer">www.criteriastudios.com</a></td>
                                <td><a href="https://www.circlehousestudios.com" target="_blank" rel="noopener noreferrer">www.circlehousestudios.com</a></td>
                                <td><a href="https://www.hitfactorycriteriami.com" target="_blank" rel="noopener noreferrer">www.hitfactorycriteriami.com</a></td>
                                <td><a href="https://www.arthousestudiosmiami.com" target="_blank" rel="noopener noreferrer">www.arthousestudiosmiami.com</a></td>
                            </tr>
                            <tr>
                                <td className="rz-row-label">Target Users</td>
                                <td>Established artists, producers, and industry professionals seeking premium recording services.</td>
                                <td>Independent and established artists seeking a culturally relevant studio environment.</td>
                                <td>Professional musicians, producers, and commercial clients.</td>
                                <td>Independent musicians and creatives seeking a smaller scale studio experience.</td>
                            </tr>
                            <tr>
                                <td className="rz-row-label">Core Features</td>
                                <td>
                                    <ul>
                                        <li>Professional recording studios</li>
                                        <li>High end equipment and engineering</li>
                                        <li>Studio rental services</li>
                                        <li>Industry focused production support</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Recording and production services</li>
                                        <li>Artist focused studio sessions</li>
                                        <li>Strong social media presence</li>
                                        <li>Culture driven brand identity</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Studio booking and rental</li>
                                        <li>Professional engineering services</li>
                                        <li>Industry standard production tools</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Recording and mixing services</li>
                                        <li>Creative focused sessions</li>
                                        <li>Flexible studio environment</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="rz-row-label">Strengths</td>
                                <td>
                                    <ul>
                                        <li>Strong legacy and brand recognition</li>
                                        <li>High production quality</li>
                                        <li>Trusted industry reputation</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Strong community and cultural relevance</li>
                                        <li>Youth driven brand energy</li>
                                        <li>Recognizable Miami presence</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Clean and professional branding</li>
                                        <li>High quality production services</li>
                                        <li>Strong credibility</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>More approachable tone</li>
                                        <li>Artist friendly atmosphere</li>
                                        <li>Emphasis on creativity</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="rz-row-label">Weaknesses</td>
                                <td>
                                    <ul>
                                        <li>Intimidating for emerging artists</li>
                                        <li>Limited clarity for new clients</li>
                                        <li>Minimal emphasis on collaboration or artist development</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Limited service transparency</li>
                                        <li>Minimal onboarding guidance</li>
                                        <li>Website prioritizes branding over usability</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Feels exclusive and corporate</li>
                                        <li>Less approachable for new artists</li>
                                        <li>Limited emphasis on creative collaboration</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Less cohesive digital identity</li>
                                        <li>Limited brand differentiation</li>
                                        <li>Weaker visual consistency</li>
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

export default RecordzCompetitiveAuditSection;
