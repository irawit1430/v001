import React from 'react';

export interface InsightCard {
    title: string;
    description: string;
    emoji?: string;
    icon?: string;
}

interface KeyInsightsProps {
    title?: string;
    description: string;
    insights: InsightCard[];
    backgroundColor?: string; // Tailwind class like 'bg-taupe' or 'bg-[#212873]'
    textColor?: string; // Tailwind class like 'text-white'
    className?: string;
}

const KeyInsights: React.FC<KeyInsightsProps> = ({
    title = 'Key Insights:',
    description,
    insights,
    backgroundColor = 'bg-taupe',
    textColor = 'text-white',
    className = '',
}) => {
    return (
        <section className={`w-full ${backgroundColor} py-16 md:py-24 ${className}`}>
            <div className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-24">
                {/* Header */}
                <div className="mb-8">
                    <h2 className={`text-[32px] md:text-[40px] font-medium ${textColor} leading-tight`}>
                        {title}
                    </h2>
                </div>

                {/* Description */}
                <div className="max-w-[900px] mb-16">
                    <p className={`text-[20px] md:text-[28px] font-normal ${textColor} leading-relaxed`}>
                        {description}
                    </p>
                </div>

                {/* Insight Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {insights.map((insight, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[20px] p-6 md:p-8 shadow-lg flex flex-col items-center text-center min-h-[280px]"
                            style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                        >
                            {/* Icon */}
                            <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center mb-6">
                                {insight.icon ? (
                                    <img
                                        src={insight.icon}
                                        alt={insight.title}
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <div className="w-[60px] h-[60px] rounded-full bg-gray-100 flex items-center justify-center">
                                        <span className="text-3xl">{insight.emoji || '💡'}</span>
                                    </div>
                                )}
                            </div>

                            <h3 className="text-[22px] md:text-[26px] font-medium text-black leading-tight mb-4">
                                {insight.title}
                            </h3>

                            <p className="text-[16px] md:text-[18px] font-normal text-taupe leading-normal">
                                {insight.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyInsights;
