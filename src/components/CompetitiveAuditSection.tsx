import React from 'react';
import './CompetitiveAuditSection.css';
import auditTableImage from '../assets/competitive-audit-table.png';

const CompetitiveAuditSection: React.FC = () => {
    return (
        <section className="bt-section bt-competitive-audit">
            <div className="bt-audit-header">
                <h2 className="bt-section-title">Competitive Audit:</h2>
                <p className="bt-text-medium bt-audit-desc">
                    Analyzing competing resale platforms showed that while many support secondhand transactions, they fail to create a meaningful community for parents. The absence of trust-building and peer connection highlights an opportunity for Baby Thrift to design a more parent-centered resale experience.
                </p>
            </div>

            <div className="bt-audit-table-container">
                <img src={auditTableImage} alt="Competitive Audit Table comparing Thred Up, Offer Up, Pat Pat, and Mercari" className="bt-full-image bt-audit-image" />
            </div>
        </section>
    );
};

export default CompetitiveAuditSection;
