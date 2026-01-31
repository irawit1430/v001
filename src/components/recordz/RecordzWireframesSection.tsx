import React from 'react';
import './RecordzWireframesSection.css';

// Import wireframe images
import wireframeWelcome from '../../assets/wireframe-welcome.png';
import wireframeLanding from '../../assets/wireframe-studio-landing.png';
import wireframeAbout from '../../assets/wireframe-studio-about.png';

const RecordzWireframesSection: React.FC = () => {
    return (
        <section className="rz-wireframes-section">
            <div className="rz-wireframes-container">
                {/* Header */}
                <div className="rz-wireframes-header">
                    <h2 className="rz-wireframes-title">Lo-Fi Wireframes:</h2>
                    <div className="rz-wireframes-content">
                        <p className="rz-wireframes-intro">
                            <strong>Low-fidelity wireframes were created to establish a clear and intuitive layout for 1331 Recordz's dual studio and label platform.</strong>
                        </p>
                        <p className="rz-wireframes-text">
                            This phase emphasized information hierarchy, wayfinding, and task flow to ensure users could move smoothly from discovery to action, such as exploring artists or requesting studio services, prior to visual refinement.
                        </p>
                    </div>
                </div>

                {/* Wireframe Images */}
                <div className="rz-wireframes-grid">
                    <div className="rz-wireframe-item">
                        <div className="rz-wireframe-image-wrapper">
                            <img src={wireframeWelcome} alt="Initial Welcome Screen" />
                        </div>
                        <div className="rz-wireframe-caption">
                            <h4>Initial Welcome Screen</h4>
                            <p>Label or Studio entrance</p>
                        </div>
                    </div>

                    <div className="rz-wireframe-item">
                        <div className="rz-wireframe-image-wrapper">
                            <img src={wireframeLanding} alt="Studio Landing Screen" />
                        </div>
                        <div className="rz-wireframe-caption">
                            <h4>Studio Landing Screen</h4>
                            <p>Studio main page</p>
                        </div>
                    </div>

                    <div className="rz-wireframe-item">
                        <div className="rz-wireframe-image-wrapper">
                            <img src={wireframeAbout} alt="Studio About Screen" />
                        </div>
                        <div className="rz-wireframe-caption">
                            <h4>Studio About Screen</h4>
                            <p>Login or sign up</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecordzWireframesSection;
