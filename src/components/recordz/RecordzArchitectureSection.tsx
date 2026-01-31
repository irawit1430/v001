import React from 'react';
import './RecordzArchitectureSection.css';

// Import diagram images
import iaDiagram from '../../assets/ia-diagram.png';
import userFlowDiagram from '../../assets/user-flow-diagram.png';

const RecordzArchitectureSection: React.FC = () => {
    return (
        <>
            {/* Information Architecture Section */}
            <section className="rz-ia-section">
                <div className="rz-ia-container">
                    {/* Header */}
                    <div className="rz-ia-header">
                        <h2 className="rz-ia-title">Information Architecture:</h2>
                        <div className="rz-ia-content">
                            <p className="rz-ia-intro">
                                <strong>To translate the brand's vision into a clear and intuitive website structure, I mapped out 1331 Recordz's core navigation system.</strong>
                            </p>
                            <p className="rz-ia-text">
                                The information architecture shows how users navigate key sections of the site, separating the record label and studio identities while maintaining a cohesive brand experience.
                            </p>
                        </div>
                    </div>

                    {/* IA Diagram */}
                    <div className="rz-diagram-wrapper">
                        <img src={iaDiagram} alt="Information Architecture Diagram" className="rz-diagram-image" />
                    </div>
                </div>
            </section>

            {/* User Flows Section */}
            <section className="rz-userflow-section">
                <div className="rz-userflow-container">
                    {/* Header */}
                    <div className="rz-userflow-header">
                        <h2 className="rz-userflow-title">User Flows:</h2>
                        <div className="rz-userflow-content">
                            <p className="rz-userflow-intro">
                                <strong>The site architecture was designed to clearly separate 1331 Recordz's record label and studio offerings while maintaining a cohesive brand experience.</strong>
                            </p>
                            <p className="rz-userflow-text">
                                By guiding users to choose their path early, the navigation supports intuitive exploration and reduces friction.
                            </p>
                            <p className="rz-userflow-text">
                                The studio booking flow was intentionally kept simple and inquiry-based, allowing users to request a session with an engineer without account creation. This approach prioritizes accessibility and mirrors real-world studio workflows, enabling efficient follow-up by the 1331 Recordz team.
                            </p>
                        </div>
                    </div>

                    {/* User Flow Title */}
                    <h3 className="rz-flow-subtitle">Book Studio Time</h3>

                    {/* User Flow Diagram */}
                    <div className="rz-diagram-wrapper">
                        <img src={userFlowDiagram} alt="Book Studio Time User Flow" className="rz-diagram-image" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default RecordzArchitectureSection;
