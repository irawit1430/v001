import React from 'react';
import './RecordzSolutionSection.css';

const RecordzSolutionSection: React.FC = () => {
    return (
        <section className="rz-solution-section">
            <div className="rz-solution-container">
                {/* Header */}
                <div className="rz-solution-header">
                    <h2 className="rz-solution-title">Solution Overview:</h2>
                    <div className="rz-solution-content">
                        <p className="rz-solution-intro">
                            <strong>Turning creative vision into cultural impact with the right platform.</strong>
                        </p>
                        <p className="rz-solution-text">
                            1331 Recordz is a Miami, FL–based independent record label and music studio that empowers artists through <strong>creative freedom</strong>, transparent practices, and hands-on production support. Prioritizing artist ownership and authentic, culturally driven sound, 1331 Recordz combines professional studio access with modern distribution to support artists in South Florida and beyond.
                        </p>
                    </div>
                </div>

                {/* Goals Section */}
                <div className="rz-goals-wrapper">
                    <h3 className="rz-goals-title">The solution is shaped by four core goals:</h3>

                    <div className="rz-goals-grid">
                        <div className="rz-goal-card">
                            <div className="rz-goal-number">1</div>
                            <div className="rz-goal-content">
                                <h4 className="rz-goal-heading">Empower Artists</h4>
                                <p className="rz-goal-desc">
                                    Provide artists with the tools, studio access, and resources needed to maintain control over their music and creative direction
                                </p>
                            </div>
                        </div>

                        <div className="rz-goal-card">
                            <div className="rz-goal-number">2</div>
                            <div className="rz-goal-content">
                                <h4 className="rz-goal-heading">Establish Trust</h4>
                                <p className="rz-goal-desc">
                                    Establish clear communication, fair agreements, and ethical practices that foster long-term artist-label relationships
                                </p>
                            </div>
                        </div>

                        <div className="rz-goal-card">
                            <div className="rz-goal-number">3</div>
                            <div className="rz-goal-content">
                                <h4 className="rz-goal-heading">Reduce Barriers</h4>
                                <p className="rz-goal-desc">
                                    Simplify access to professional recording, production, and distribution for independent artists.
                                </p>
                            </div>
                        </div>

                        <div className="rz-goal-card">
                            <div className="rz-goal-number">4</div>
                            <div className="rz-goal-content">
                                <h4 className="rz-goal-heading">Build a Creative Community</h4>
                                <p className="rz-goal-desc">
                                    Support collaboration, mentorship, and cultural expression rooted in Miami's diverse music scene.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecordzSolutionSection;
