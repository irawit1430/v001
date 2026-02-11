import React from 'react';

export interface UserJourneyStep {
    phase: string;
    description: string;
    quote: string;
    emotion: {
        icon: string;
        label: string;
        color?: string;
    };
    opportunity: string;
}

interface UserJourneyMapProps {
    steps: UserJourneyStep[];
}

export const UserJourneyMap: React.FC<UserJourneyMapProps> = ({ steps }) => {
    return (
        <div className="w-full overflow-x-auto pb-6">
            <div className="min-w-[1000px] flex flex-col gap-4">
                {/* Header Row */}
                <div className="grid grid-cols-5 gap-4">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-[#6e6764] text-white p-4 rounded-xl text-center font-semibold text-lg flex items-center justify-center">
                            {step.phase}
                        </div>
                    ))}
                </div>

                {/* Description Row */}
                <div className="grid grid-cols-5 gap-4">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-sm text-[#6e6764] leading-relaxed h-full">
                            {step.description}
                        </div>
                    ))}
                </div>

                {/* Quote Row */}
                <div className="grid grid-cols-5 gap-4">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-sm text-[#6e6764] italic h-full flex flex-col justify-center">
                            "{step.quote}"
                        </div>
                    ))}
                </div>

                {/* Emotion Row */}
                <div className="grid grid-cols-5 gap-4">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center gap-3 text-[#6e6764] font-medium">
                            <span className="text-2xl" role="img" aria-label={step.emotion.label}>{step.emotion.icon}</span>
                            <span>{step.emotion.label}</span>
                        </div>
                    ))}
                </div>

                {/* Opportunity Row */}
                <div className="grid grid-cols-5 gap-4">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-sm text-[#6e6764] leading-relaxed h-full">
                            <span className="block font-semibold mb-2 text-black/80">Opportunity</span>
                            {step.opportunity}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
