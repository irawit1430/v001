import React from 'react';
import './LoFiWireframesSection.css';
import welcomeScreen from '../assets/lofi-welcome.png';
import newArrivalScreen from '../assets/lofi-new-arrival.png';
import donateScreen from '../assets/lofi-donate.png';
import itemDetailsScreen from '../assets/lofi-item-details.png';

const LoFiWireframesSection: React.FC = () => {
    return (
        <section className="bt-section bt-lofi-section">
            <div className="bt-container">
                <div className="bt-lofi-header">
                    <div className="bt-lofi-title-wrapper">
                        <h2 className="bt-section-title">Lo-Fi Wireframes:</h2>
                    </div>
                    <div className="bt-lofi-intro">
                        <p className="bt-text-medium bt-text-gray">
                            To support the Baby Thrift application, I created Lo-Fi wireframes that outline key user journeys and essential functionality. This step prioritized usability, trust, and clear content flow to ensure a safe and intuitive experience before refining visual design.
                        </p>
                    </div>
                </div>

                <div className="bt-lofi-grid">
                    <div className="bt-lofi-card">
                        <div className="bt-lofi-image-wrapper">
                            <img src={welcomeScreen} alt="Welcome Screen Wireframe" className="bt-lofi-image" />
                        </div>
                        <div className="bt-lofi-caption">
                            <h4 className="bt-lofi-screen-title">Welcome Screen</h4>
                            <p className="bt-lofi-screen-desc">Login or sign up</p>
                        </div>
                    </div>
                    <div className="bt-lofi-card">
                        <div className="bt-lofi-image-wrapper">
                            <img src={newArrivalScreen} alt="New Arrival Screen Wireframe" className="bt-lofi-image" />
                        </div>
                        <div className="bt-lofi-caption">
                            <h4 className="bt-lofi-screen-title">New Arrival Screen</h4>
                            <p className="bt-lofi-screen-desc">Explore curated new items</p>
                        </div>
                    </div>
                    <div className="bt-lofi-card">
                        <div className="bt-lofi-image-wrapper">
                            <img src={donateScreen} alt="Donate Screen Wireframe" className="bt-lofi-image" />
                        </div>
                        <div className="bt-lofi-caption">
                            <h4 className="bt-lofi-screen-title">Donate Screen</h4>
                            <p className="bt-lofi-screen-desc">Donate children's items</p>
                        </div>
                    </div>
                    <div className="bt-lofi-card">
                        <div className="bt-lofi-image-wrapper">
                            <img src={itemDetailsScreen} alt="Item Details Screen Wireframe" className="bt-lofi-image" />
                        </div>
                        <div className="bt-lofi-caption">
                            <h4 className="bt-lofi-screen-title">Item Details Screen</h4>
                            <p className="bt-lofi-screen-desc">Main home screen</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoFiWireframesSection;
