import React from 'react';
import './InformationArchitectureSection.css';
import iaImage from '../assets/information-architecture.png';

const InformationArchitectureSection: React.FC = () => {
    return (
        <section className="bt-section bt-ia-section">
            <div className="bt-container">
                <div className="bt-ia-content">
                    <div className="bt-ia-header">
                        <h2 className="bt-section-title">Information Architecture:</h2>
                    </div>
                    <div className="bt-ia-body">
                        <p className="bt-text-medium bt-ia-intro">
                            To translate research insights into a clear product structure, I mapped Baby Thrift's core navigation system.
                        </p>
                        <p className="bt-text-medium">
                            The information architecture outlines how parents move through key areas of the marketplace, from browsing and evaluating items to purchasing, selling, and engaging with the community.
                        </p>
                    </div>
                </div>

                <div className="bt-ia-image-wrapper">
                    <img src={iaImage} alt="Information Architecture Diagram" className="bt-ia-image" />
                </div>
            </div>
        </section>
    );
};

export default InformationArchitectureSection;
