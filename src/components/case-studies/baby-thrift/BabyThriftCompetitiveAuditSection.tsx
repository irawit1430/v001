import React from 'react';
import './BabyThriftCompetitiveAuditSection.css';

const BabyThriftCompetitiveAuditSection: React.FC = () => {
    return (
        <section className="bt-audit-section">
            <div className="bt-audit-container">
                {/* Header */}
                <div className="bt-audit-header">
                    <h2 className="bt-audit-title">Competitive Audit:</h2>
                    <div className="bt-audit-content">
                        <p className="bt-audit-text">
                            <strong>Analyzing competing resale platforms showed that while many support secondhand transactions, they fail to create a meaningful community for parents.</strong>
                        </p>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="bt-audit-table-wrapper">
                    <table className="bt-audit-table">
                        <thead>
                            <tr>
                                <th className="bt-table-header bt-row-header"></th>
                                <th className="bt-table-header">Thred Up</th>
                                <th className="bt-table-header">Offer Up</th>
                                <th className="bt-table-header">Pat Pat</th>
                                <th className="bt-table-header">Mercari</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="bt-row-label">Product Summary</td>
                                <td>Online resale platform specializing in secondhand clothing, including kids and baby items.</td>
                                <td>Peer-to-peer marketplace for buying and selling locally across multiple product categories.</td>
                                <td>Affordable children's clothing platform focused on fast fashion and direct-to-consumer sales.</td>
                                <td>Mobile-first resale marketplace for secondhand goods with seller-managed listings.</td>
                            </tr>
                            <tr>
                                <td className="bt-row-label">Website</td>
                                <td><a href="https://www.Thredup.com" target="_blank" rel="noopener noreferrer">www.Thredup.com</a></td>
                                <td><a href="https://www.Offerup.com" target="_blank" rel="noopener noreferrer">www.Offerup.com</a></td>
                                <td><a href="https://www.PatPat.com" target="_blank" rel="noopener noreferrer">www.PatPat.com</a></td>
                                <td><a href="https://www.Mercari.com" target="_blank" rel="noopener noreferrer">www.Mercari.com</a></td>
                            </tr>
                            <tr>
                                <td className="bt-row-label">Target Users</td>
                                <td>Parents and shoppers seeking affordable, secondhand clothing through a trusted resale brand.</td>
                                <td>Local buyers and sellers looking for quick, informal resale transactions.</td>
                                <td>Parents seeking low-cost children's clothing rather than secondhand resale.</td>
                                <td>Users buying and selling secondhand items through mobile-first listings.</td>
                            </tr>
                            <tr>
                                <td className="bt-row-label">Core Features</td>
                                <td>
                                    <ul>
                                        <li>Curated resale inventory</li>
                                        <li>Quality control process</li>
                                        <li>Category-based browsing</li>
                                        <li>Shipping and returns</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Local listings</li>
                                        <li>In-app messaging</li>
                                        <li>Simple posting process</li>
                                        <li>Pickup or shipping options</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Low-cost clothing bundles</li>
                                        <li>Category browsing</li>
                                        <li>Promotional pricing</li>
                                        <li>Direct checkout</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Seller-managed listings</li>
                                        <li>In-app messaging</li>
                                        <li>Rating system</li>
                                        <li>Shipping and payment handling</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="bt-row-label">Strengths</td>
                                <td>
                                    <ul>
                                        <li>Established trust and brand credibility</li>
                                        <li>Quality control for listed items</li>
                                        <li>Clear product categories</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Easy onboarding and listing</li>
                                        <li>Strong local marketplace presence</li>
                                        <li>Quick buyer-seller communication</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Affordable pricing</li>
                                        <li>Simple shopping experience</li>
                                        <li>Clear focus on children's clothing</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Mobile-friendly experience</li>
                                        <li>Large user base</li>
                                        <li>Seller ratings build trust</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="bt-row-label">Weaknesses</td>
                                <td>
                                    <ul>
                                        <li>Limited seller-to-buyer interaction</li>
                                        <li>Less control over individual listings</li>
                                        <li>Slower inventory turnover</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Limited trust indicators</li>
                                        <li>Inconsistent product quality</li>
                                        <li>Navigation can feel cluttered</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Not a resale marketplace</li>
                                        <li>Limited sustainability focus</li>
                                        <li>Less emphasis on trust signals</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Inconsistent product descriptions</li>
                                        <li>Overwhelming listings</li>
                                        <li>Limited guidance for parents purchasing children's items</li>
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

export default BabyThriftCompetitiveAuditSection;
