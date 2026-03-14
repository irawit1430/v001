import React from 'react';
import './RoomDesignerCompetitiveAuditSection.css';

const competitors = [
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/image copy 54.png`,
        name: "Axon Evidence",
        features: "Cloud storage, video management, chain-of-custody tracking",
        takeaway: "Evidence must be organized and securely stored",
    },
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/image copy 55.png`,
        name: "Veritone Redact",
        features: "AI detection for faces, audio, and sensitive content",
        takeaway: "Automation can reduce manual review time",
    },
    {
        icon: `${import.meta.env.BASE_URL}figmaAssets/image copy 56.png`,
        name: "Motorola Command Central Vault",
        features: "Digital evidence management, video storage, case organization",
        takeaway: "Systems integrate recording, evidence storage, and case workflows",
    },
];

const RoomDesignerCompetitiveAuditSection: React.FC = () => {
    return (
        <section className="rd-audit-section">
            <div className="rd-audit-container">
                {/* Header */}
                <div className="rd-audit-header">
                    <h2 className="rd-audit-title">Competitive Audit:</h2>
                    <div className="rd-audit-content">
                        <p className="rd-audit-text">
                            <strong>To understand how body-worn camera footage is currently managed, I analyzed several digital evidence management platforms used by police departments.</strong>
                        </p>
                        <p className="rd-audit-text" style={{ marginTop: '16px' }}>
                            These tools provide systems for recording, reviewing, and securely storing video evidence. The audit helped identify important features and opportunities for improving workflow efficiency.
                        </p>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="rd-audit-table-wrapper">
                    <table className="rd-audit-table">
                        <thead>
                            <tr>
                                <th className="rd-table-header" style={{ width: '30%' }}>Platform</th>
                                <th className="rd-table-header" style={{ width: '35%' }}>Key Features</th>
                                <th className="rd-table-header" style={{ width: '35%' }}>Design Takeaway</th>
                            </tr>
                        </thead>
                        <tbody>
                            {competitors.map((comp, index) => (
                                <tr key={index}>
                                    <td className="rd-row-label" style={{ fontWeight: 600 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <img src={comp.icon} alt={comp.name} style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                                            {comp.name}
                                        </div>
                                    </td>
                                    <td>{comp.features}</td>
                                    <td>{comp.takeaway}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default RoomDesignerCompetitiveAuditSection;
