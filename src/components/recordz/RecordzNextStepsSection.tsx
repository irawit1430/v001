import React from 'react';
import './RecordzNextStepsSection.css';

const RecordzNextStepsSection: React.FC = () => {
    return (
        <section className="rz-nextsteps-section">
            <div className="rz-nextsteps-container">
                {/* Header */}
                <div className="rz-nextsteps-header">
                    <h2 className="rz-nextsteps-title">Next Steps:</h2>
                    <p className="rz-nextsteps-subtitle">
                        Road map for future development and continuous improvement
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="rz-nextsteps-grid">
                    <div className="rz-nextstep-card">
                        <div className="rz-nextstep-icon">
                            <span>👥</span>
                        </div>
                        <div className="rz-nextstep-content">
                            <h3>User Testing</h3>
                            <p>Conduct usability testing with target users to validate design decisions and identify pain points.</p>
                        </div>
                    </div>

                    <div className="rz-nextstep-card">
                        <div className="rz-nextstep-icon">
                            <span>🔄</span>
                        </div>
                        <div className="rz-nextstep-content">
                            <h3>Iterate & Refine</h3>
                            <p>Incorporate feedback to improve the user experience and address any discovered issues.</p>
                        </div>
                    </div>

                    <div className="rz-nextstep-card">
                        <div className="rz-nextstep-icon">
                            <span>📊</span>
                        </div>
                        <div className="rz-nextstep-content">
                            <h3>Analytics Integration</h3>
                            <p>Implement tracking to measure key metrics like user engagement and retention rates.</p>
                        </div>
                    </div>

                    <div className="rz-nextstep-card">
                        <div className="rz-nextstep-icon">
                            <span>📋</span>
                        </div>
                        <div className="rz-nextstep-content">
                            <h3>Future Features</h3>
                            <p>Explore premium features like event creation, business partnerships, and community moderation tools.</p>
                        </div>
                    </div>
                </div>

                {/* Thank You Message */}
                <div className="rz-thankyou-message">
                    <p>
                        Thank you for reviewing this case study. I'm always open to feedback and would love to discuss how these design solutions could be applied to your projects.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RecordzNextStepsSection;
