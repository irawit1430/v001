import React from 'react';
import { ScrollReveal } from '../../ui/ScrollReveal';

// Default Icons
import discoveryIcon from '../../../assets/Discovery.svg';
import competitiveAuditIcon from '../../../assets/Competitive Audit.svg';
import userTestingIcon from '../../../assets/User Testing.svg';
import insightIcon from '../../../assets/Insight.svg';

export interface ResearchCard {
    label: string;
    icon?: string;
    emoji?: string;
}

interface ResearchOverviewProps {
    title?: string;
    description: string;
    cards?: ResearchCard[];
    backgroundColor?: string; // Tailwind class like 'bg-taupe' or 'bg-[#212873]'
    textColor?: string; // Tailwind class like 'text-white'
    className?: string;
}

const defaultCards: ResearchCard[] = [
    { label: 'Discovery', icon: discoveryIcon },
    { label: 'Competitive Audit', icon: competitiveAuditIcon },
    { label: 'User Testing', icon: userTestingIcon },
    { label: 'Insight', icon: insightIcon },
];

const ResearchOverview: React.FC<ResearchOverviewProps> = ({
    title = 'Research Overview:',
    description,
    cards = defaultCards,
    backgroundColor = 'bg-taupe',
    textColor = 'text-white',
    className = '',
}) => {
    return (
        <section className={`w-full ${backgroundColor} py-16 md:py-24 ${className}`}>
            <div className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-24">
                {/* Header Row - 2 Column Layout */}
                <ScrollReveal width="100%">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 mb-16">
                        {/* Left Column - Header */}
                        <div className="lg:w-1/3">
                            <h2 className={`text-[32px] md:text-[40px] font-medium ${textColor} leading-tight whitespace-nowrap`}>
                                {title}
                            </h2>
                        </div>

                        {/* Right Column - Description */}
                        <div className="lg:w-2/3 lg:pt-[52px]">
                            <p className={`text-[20px] md:text-[28px] font-normal ${textColor} leading-relaxed`}>
                                {description}
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Cards Grid - 4 columns */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    {cards.map((card, index) => (
                        <ScrollReveal key={index} width="100%" delay={index * 0.1}>
                            <div className="flex flex-col items-center gap-4">
                                {/* Card with Icon */}
                                <div className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] bg-white rounded-[20px] flex items-center justify-center shadow-lg">
                                    {card.icon ? (
                                        <img
                                            src={card.icon}
                                            alt={card.label}
                                            className="w-20 h-20 object-contain"
                                        />
                                    ) : (
                                        <span className="text-5xl">{card.emoji || '💭'}</span>
                                    )}
                                </div>
                                {/* Label */}
                                <span className={`text-[18px] md:text-[22px] font-medium ${textColor} text-center`}>
                                    {card.label}
                                </span>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchOverview;
