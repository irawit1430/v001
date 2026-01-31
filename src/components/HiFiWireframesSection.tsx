import React from 'react';
import './HiFiWireframesSection.css';
import hifiScreen1 from '../assets/hifi-screen-1.png';
import hifiScreen2 from '../assets/hifi-screen-2.png';
import hifiScreen3 from '../assets/hifi-screen-3.png';
import hifiScreen4 from '../assets/hifi-screen-4.png';
import hifiCollectionImage from '../assets/hifi-collection.png';

const HiFiWireframesSection: React.FC = () => {
    return (
        <section className="bt-section bt-hifi-section">
            <div className="bt-container">
                <div className="bt-hifi-header">
                    <div className="bt-hifi-title-wrapper">
                        <h2 className="bt-section-title">Hi-Fi Wireframes:</h2>
                    </div>
                    <div className="bt-hifi-intro">
                        <h3 className="bt-text-large" style={{ fontSize: '24px', fontWeight: 500, color: '#6F6864', marginBottom: '20px' }}>
                            The Hi-Fi designs brought the app’s visual identity to life.
                        </h3>
                        <p className="bt-text-medium bt-text-gray">
                            Moving into high-fidelity screens allowed the design to refine trust signals, improve clarity around item condition, and create a warm, approachable interface. Thoughtful color, typography, and layout choices work together to support confident secondhand shopping and community connection.
                        </p>
                    </div>
                </div>

                <div className="bt-hifi-grid">
                    <div className="bt-hifi-card">
                        <div className="bt-hifi-image-wrapper">
                            <img src={hifiScreen1} alt="Hi-Fi Screen 1" className="bt-hifi-image" />
                        </div>
                    </div>
                    <div className="bt-hifi-card">
                        <div className="bt-hifi-image-wrapper">
                            <img src={hifiScreen2} alt="Hi-Fi Screen 2" className="bt-hifi-image" />
                        </div>
                    </div>
                    <div className="bt-hifi-card">
                        <div className="bt-hifi-image-wrapper">
                            <img src={hifiScreen3} alt="Hi-Fi Screen 3" className="bt-hifi-image" />
                        </div>
                    </div>
                    <div className="bt-hifi-card">
                        <div className="bt-hifi-image-wrapper">
                            <img src={hifiScreen4} alt="Hi-Fi Screen 4" className="bt-hifi-image" />
                        </div>
                    </div>
                </div>

                <div className="bt-hifi-collection" style={{ marginTop: '80px' }}>
                    <p className="bt-text-medium bt-text-gray" style={{ marginBottom: '40px', maxWidth: '800px' }}>
                        A collection of key screens from the mobile shopping experience, designed with a focus on consistency, clarity, and visual cohesion. Each screen reflects a unified design system and supports an intuitive, easy-to-navigate interface.
                    </p>
                    <div className="bt-hifi-collection-image-wrapper" style={{ width: '100%', overflow: 'hidden', borderRadius: '20px' }}>
                        <img src={hifiCollectionImage} alt="Key Screens Collection" className="bt-hifi-image" />
                    </div>
                </div>

                {/* Key Features Section */}
                <div className="bt-key-features" style={{ marginTop: '100px' }}>
                    <div className="bt-hifi-header">
                        <div className="bt-hifi-title-wrapper">
                            <h2 className="bt-section-title">Key Features:</h2>
                        </div>
                        <div className="bt-hifi-intro">
                            <h3 className="bt-text-large" style={{ fontSize: '24px', fontWeight: 500, color: '#6F6864', marginBottom: '20px' }}>
                                Designing for Trust, Clarity, and Ease of Use
                            </h3>
                            <p className="bt-text-medium bt-text-gray">
                                Parents shopping for secondhand baby products must balance affordability with trust and safety. Research focused on how parents evaluate product quality, navigate resale marketplaces, and make purchasing decisions on mobile.
                            </p>
                            <p className="bt-text-medium bt-text-gray" style={{ marginTop: '20px' }}>
                                Through early exploration, several recurring themes emerged. Parents expressed concerns around unclear product conditions, inconsistent seller information, and overwhelming navigation. These issues often led to hesitation, reduced trust, and abandoned purchase attempts within existing secondhand marketplaces.
                            </p>
                        </div>
                    </div>

                    <div className="bt-features-grid-container">
                        <div className="bt-feature-card">
                            <div className="bt-feature-icon">👨‍👩‍👧</div>
                            <h4 className="bt-feature-title">Parenthood Support</h4>
                            <p className="bt-feature-desc">Access community advice, guides, and tips to help parents make confident secondhand purchases.</p>
                        </div>
                        <div className="bt-feature-card">
                            <div className="bt-feature-icon">🛡️</div>
                            <h4 className="bt-feature-title">Trusted Sellers</h4>
                            <p className="bt-feature-desc">Shop from verified sellers with clear ratings, reviews, and transparent product details.</p>
                        </div>
                        <div className="bt-feature-card">
                            <div className="bt-feature-icon">📅</div>
                            <h4 className="bt-feature-title">Localized Events</h4>
                            <p className="bt-feature-desc">Discover nearby swaps, meetups, and resale events tailored to local parenting community.</p>
                        </div>
                        <div className="bt-feature-card">
                            <div className="bt-feature-icon">♻️</div>
                            <h4 className="bt-feature-title">Eco-Friendly</h4>
                            <p className="bt-feature-desc">Reduce waste and support sustainability by extending the life of baby products through reuse.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HiFiWireframesSection;
