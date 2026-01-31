import React from 'react';
import './RecordzHiFiSection.css';

// Import hi-fi mockup images
import hifiStudioLanding from '../../assets/hifi-studio-landing.png';
import hifiStudioAbout from '../../assets/hifi-studio-about.png';
import hifiWelcome from '../../assets/hifi-welcome.png';
import hifiLabelAbout from '../../assets/hifi-label-about.png';

const RecordzHiFiSection: React.FC = () => {
    return (
        <section className="rz-hifi-section">
            <div className="rz-hifi-container">
                {/* Header */}
                <div className="rz-hifi-header">
                    <h2 className="rz-hifi-title">Hi-Fi Wireframes:</h2>
                    <div className="rz-hifi-content">
                        <p className="rz-hifi-intro">
                            <strong>The Hi-Fi designs brought the app's visual identity to life.</strong>
                        </p>
                        <p className="rz-hifi-text">
                            Moving onto high-fidelity screens helped refine the visual system, unify the design language, and ensure the interface felt intuitive and welcoming. Typography, color, and layout choices came together to create a polished experience centered on connection and community.
                        </p>
                    </div>
                </div>

                {/* Large Featured Mockups */}
                <div className="rz-hifi-featured">
                    <div className="rz-hifi-featured-item">
                        <img src={hifiStudioLanding} alt="1331 Recordz Music Studio Landing" />
                        <p className="rz-hifi-caption">1331 Recordz Music Studio Landing</p>
                    </div>

                    <div className="rz-hifi-featured-item">
                        <img src={hifiStudioAbout} alt="1331 Recordz Music Studio About" />
                        <p className="rz-hifi-caption">1331 Recordz Music Studio About</p>
                    </div>
                </div>

                {/* Smaller Mockups Grid */}
                <div className="rz-hifi-grid">
                    <div className="rz-hifi-grid-item">
                        <img src={hifiWelcome} alt="1331 Recordz Initial Welcome Screen" />
                        <p className="rz-hifi-caption">1331 Recordz Initial Welcome Screen</p>
                    </div>

                    <div className="rz-hifi-grid-item">
                        <img src={hifiLabelAbout} alt="1331 Recordz Label About Screen" />
                        <p className="rz-hifi-caption">1331 Recordz Label About Screen</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecordzHiFiSection;
