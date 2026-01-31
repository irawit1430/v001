import React from 'react';
import './SolutionOverviewSection.css';

const SolutionOverviewSection: React.FC = () => {
    return (
        <section className="bt-section bt-solution-overview">
            <div className="bt-solution-content">
                <div className="bt-solution-header">
                    <h2 className="bt-section-title">Solution Overview:</h2>
                </div>
                <div className="bt-solution-body">
                    <p className="bt-text-medium bt-solution-intro">
                        Turning insights into opportunity with the right solution.
                    </p>
                    <p className="bt-text-medium">
                        Baby Thrift is a parent-focused resale marketplace designed to make buying and selling secondhand baby products simple, trustworthy, and efficient. The solution prioritizes clarity, safety, and ease of use by addressing common pain points found in existing resale platforms, while creating a more supportive experience for parents.
                    </p>

                    <h3 className="bt-solution-goals-title">The solution is shaped by four core goals:</h3>

                    <ol className="bt-solution-list">
                        <li>Enable parents to connect through shared sustainable values</li>
                        <li>Create a safe and trusted environment for secondhand transactions</li>
                        <li>Reduce the clutter of general marketplaces to focus on baby items</li>
                        <li>Support community-building through trusted parent networks</li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default SolutionOverviewSection;
