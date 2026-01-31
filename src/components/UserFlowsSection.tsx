import React from 'react';
import './UserFlowsSection.css';
import userFlowImage from '../assets/user-flow.png';
import purchasingFlowImage from '../assets/purchasing-flow.png';

const UserFlowsSection: React.FC = () => {
    return (
        <section className="bt-section bt-user-flows-section">
            <div className="bt-container">
                {/* Row 1: Title and Intro */}
                <div className="bt-flows-row bt-flows-intro-row">
                    <div className="bt-flows-left">
                        <h2 className="bt-section-title">User Flows:</h2>
                    </div>
                    <div className="bt-flows-right">
                        <p className="bt-text-medium">
                            These user flows outline the key steps veterans take inside the app.
                        </p>
                        <p className="bt-text-small bt-text-gray" style={{ marginTop: '20px' }}>
                            Mapping them early allowed me to validate the logic of each path and confirm that the experience remains seamless from onboarding to event participation.
                        </p>
                    </div>
                </div>

                {/* Row 2: Image and Details */}
                <div className="bt-flows-row bt-flows-details-row">
                    <div className="bt-flows-left">
                        <h3 className="bt-flow-subtitle">Account Creation</h3>
                        <div className="bt-flows-image-wrapper">
                            <img src={userFlowImage} alt="Account Creation User Flow" className="bt-flows-image" />
                        </div>
                    </div>
                    <div className="bt-flows-right">
                        <p className="bt-text-medium">
                            These user flows map the key decision points parents encounter while using Baby Thrift. The account creation flow is presented vertically to emphasize onboarding logic and authentication states, while the purchasing flow is presented horizontally to reflect a linear, end-to-end shopping journey. Mapping these flows early helped validate system logic, reduce friction, and ensure a seamless experience from launch to checkout.
                        </p>

                        <div className="bt-flows-list-container">
                            <p className="bt-text-medium" style={{ marginBottom: '10px' }}>This:</p>
                            <ul className="bt-list bt-flows-list">
                                <li>Explains why the layouts differ</li>
                                <li>Frames it as intentional UX reasoning</li>
                                <li>Sounds confident and professional</li>
                                <li>Keeps things concise</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Row 3: Purchasing Flow */}
                <div className="bt-flows-row bt-flows-purchasing-row">
                    <div style={{ width: '100%' }}>
                        <h3 className="bt-flow-subtitle">Purchasing</h3>
                        <div className="bt-flows-image-wrapper">
                            <img src={purchasingFlowImage} alt="Purchasing User Flow" className="bt-flows-image" style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserFlowsSection;
