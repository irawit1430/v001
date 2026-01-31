import React from 'react';
import './RecordzDiscoverySection.css';

// Import images
import interiorImage from '../../assets/recordz-interior.png';
import studioImage from '../../assets/recordz-studio.png';
import visionBoardImage from '../../assets/recordz-vision-board.png';

const RecordzDiscoverySection: React.FC = () => {
    return (
        <section className="rz-discovery-section">
            <div className="rz-discovery-container">
                {/* Header with Title and Description */}
                <div className="rz-discovery-header">
                    <h2 className="rz-discovery-title">Discovery:</h2>
                    <div className="rz-discovery-content">
                        <h3 className="rz-discovery-subtitle">Understanding the Creative Landscape:</h3>
                        <p className="rz-discovery-text">
                            1331 Recordz was created to support independent artists navigating an industry that often values output over identity. Many emerging musicians struggle with visibility, creative ownership, and access to trusted collaborators. Early exploration revealed a common need for spaces that prioritize authentic collaboration, creative freedom, and long-term growth. This discovery phase focused on understanding how artists work and how a studio and label can function as a creative partner and not a gatekeeper.
                        </p>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="rz-discovery-images">
                    <div className="rz-discovery-image-item">
                        <img src={interiorImage} alt="1331 Recordz Interior" />
                        <span className="rz-discovery-caption">1331 Recordz Interior</span>
                    </div>
                    <div className="rz-discovery-image-item">
                        <img src={studioImage} alt="1331 Recordz Studio" />
                        <span className="rz-discovery-caption">1331 Recordz Studio</span>
                    </div>
                    <div className="rz-discovery-image-item">
                        <img src={visionBoardImage} alt="1331 Recordz Vision Board" />
                        <span className="rz-discovery-caption">1331 Recordz Vision Board</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecordzDiscoverySection;
