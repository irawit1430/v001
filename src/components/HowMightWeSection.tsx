import React from 'react';
import './HowMightWeSection.css';
import discoveryImage1 from '../assets/discovery-1.png';
import discoveryImage2 from '../assets/discovery-2.png';
import discoveryImage3 from '../assets/discovery-3.png';

const HowMightWeSection: React.FC = () => {
    return (
        <section className="bt-section bt-hmw-section">
            <div className="bt-hmw-content">
                <div className="bt-hmw-header">
                    <h2 className="bt-section-title">How Might We?</h2>
                </div>
                <div className="bt-hmw-body">
                    <p className="bt-text-medium bt-hmw-intro">
                        Turning insights into opportunity through the right questions.
                    </p>
                    <ul className="bt-hmw-list">
                        <li>How might we help parents feel confident purchasing secondhand baby items?</li>
                        <li>How might we improve clarity around product condition and quality?</li>
                        <li>How might we simplify product discovery on mobile?</li>
                        <li>How might we create a parent-centered marketplace that builds trust and community?</li>
                    </ul>
                </div>
            </div>

            <div className="bt-hmw-images">
                <img src={discoveryImage1} alt="Process sketch 1" className="bt-hmw-img" />
                <img src={discoveryImage2} alt="Process sketch 2" className="bt-hmw-img" />
                <img src={discoveryImage3} alt="Process sketch 3" className="bt-hmw-img" />
            </div>
        </section>
    );
};

export default HowMightWeSection;
