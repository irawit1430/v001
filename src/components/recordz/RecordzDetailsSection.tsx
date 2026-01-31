import React from 'react';
import './RecordzDetailsSection.css';

const RecordzDetailsSection: React.FC = () => {
    return (
        <>
            {/* Key Challenges Section */}
            <section className="rz-section rz-challenges-section">
                <h2 className="rz-section-title">Key Challenges:</h2>
                <div className="rz-challenges-grid">
                    <div className="rz-challenge-card">
                        <div className="rz-challenge-icon">
                            <div className="rz-icon-bars">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="rz-challenge-content">
                            <h3 className="rz-challenge-title">Unified Dual Experience</h3>
                            <p className="rz-challenge-desc">Designing a unified experience for two distinct offerings within one site</p>
                        </div>
                    </div>

                    <div className="rz-challenge-card">
                        <div className="rz-challenge-icon">
                            <div className="rz-icon-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="rz-challenge-content">
                            <h3 className="rz-challenge-title">Clear Distinction by Color</h3>
                            <p className="rz-challenge-desc">Separating studio services and label content through color and visual cues</p>
                        </div>
                    </div>

                    <div className="rz-challenge-card">
                        <div className="rz-challenge-icon">
                            <div className="rz-icon-circle"></div>
                        </div>
                        <div className="rz-challenge-content">
                            <h3 className="rz-challenge-title">Intuitive User Navigation</h3>
                            <p className="rz-challenge-desc">Designing a unified experience for two distinct offerings within one site</p>
                        </div>
                    </div>

                    <div className="rz-challenge-card">
                        <div className="rz-challenge-icon">
                            <div className="rz-icon-star">★</div>
                        </div>
                        <div className="rz-challenge-content">
                            <h3 className="rz-challenge-title">Strong Professional Identity</h3>
                            <p className="rz-challenge-desc">Maintaining a strong, professional brand identity across both areas</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RecordzDetailsSection;
