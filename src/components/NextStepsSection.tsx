import React from 'react';
import './NextStepsSection.css';

const NextStepsSection: React.FC = () => {
    return (
        <section className="bt-section bt-next-steps-section">
            <div className="bt-container">
                <div className="bt-next-steps-header">
                    <h2 className="bt-section-title">Next Steps:</h2>
                    <p className="bt-text-medium bt-text-gray" style={{ maxWidth: '600px' }}>
                        Road map for future development and continuous improvement
                    </p>
                </div>

                <div className="bt-next-steps-grid">
                    <div className="bt-next-step-card">
                        <div className="bt-next-step-icon">👨‍👩‍👧‍👦</div>
                        <div className="bt-next-step-content">
                            <h4 className="bt-next-step-title">User Testing</h4>
                            <p className="bt-next-step-desc">Conduct usability testing with target users to validate design decisions and identify pain points.</p>
                        </div>
                    </div>
                    <div className="bt-next-step-card">
                        <div className="bt-next-step-icon">🔄</div>
                        <div className="bt-next-step-content">
                            <h4 className="bt-next-step-title">Iterate & Refine</h4>
                            <p className="bt-next-step-desc">Incorporate feedback to improve the user experience and address any discovered issues.</p>
                        </div>
                    </div>
                    <div className="bt-next-step-card">
                        <div className="bt-next-step-icon">📈</div>
                        <div className="bt-next-step-content">
                            <h4 className="bt-next-step-title">Analytics Integration</h4>
                            <p className="bt-next-step-desc">Implement tracking to measure key metrics like user engagement and retention rates.</p>
                        </div>
                    </div>
                    <div className="bt-next-step-card">
                        <div className="bt-next-step-icon">📑</div>
                        <div className="bt-next-step-content">
                            <h4 className="bt-next-step-title">Future Features</h4>
                            <p className="bt-next-step-desc">Explore premium features like event creation, business partnerships, and community moderation tools.</p>
                        </div>
                    </div>
                </div>

                <div className="bt-next-steps-footer">
                    <p className="bt-text-medium bt-text-center">
                        Thank you for reviewing this case study. I’m always open to feedback and would love to discuss how these design solutions could be applied to your projects.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NextStepsSection;
