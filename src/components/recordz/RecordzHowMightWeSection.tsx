import React from 'react';
import './RecordzHowMightWeSection.css';

// Import images
import studioImage from '../../assets/hmw-studio.png';
import meetingImage from '../../assets/hmw-meeting.png';
import wireframeImage from '../../assets/hmw-wireframe.png';
import djImage from '../../assets/hmw-dj.png';

const RecordzHowMightWeSection: React.FC = () => {
    return (
        <section className="rz-hmw-section">
            <div className="rz-hmw-container">
                {/* Header */}
                <div className="rz-hmw-header">
                    <h2 className="rz-hmw-title">How Might We?</h2>
                    <div className="rz-hmw-content">
                        <p className="rz-hmw-intro">
                            <strong>Turning insights into opportunity through the right questions.</strong>
                        </p>
                        <ul className="rz-hmw-list">
                            <li>
                                <strong>How might we build trust and credibility</strong> for independent artists using 1331 Recordz?
                            </li>
                            <li>
                                <strong>How might we simplify service discovery</strong> so artists quickly understand their options?
                            </li>
                            <li>
                                <strong>How might we reduce friction and uncertainty</strong> in the booking process?
                            </li>
                            <li>
                                <strong>How might we design a platform that feels supportive,</strong> professional, and artist-centered?
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="rz-hmw-images">
                    <div className="rz-hmw-image-item">
                        <img src={studioImage} alt="Recording Studio" />
                    </div>
                    <div className="rz-hmw-image-item">
                        <img src={meetingImage} alt="Team Meeting" />
                    </div>
                    <div className="rz-hmw-image-item">
                        <img src={wireframeImage} alt="Wireframe Design" />
                    </div>
                    <div className="rz-hmw-image-item">
                        <img src={djImage} alt="DJ Equipment" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecordzHowMightWeSection;
