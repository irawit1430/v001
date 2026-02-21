import React from 'react';

interface CaseStudySideSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const CaseStudySideSection: React.FC<CaseStudySideSectionProps> = ({
    title,
    children,
    className = '',
    id
}) => {
    return (
        <section id={id} className={`w-full py-16 md:py-24 px-4 ${className}`}>
            <div className="max-w-[1244px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left Column - Header */}
                    <div className="lg:w-1/3">
                        <h2 className="font-['SF_Pro_Display',sans-serif] text-[40px] font-medium text-black leading-tight whitespace-nowrap">
                            {title}
                        </h2>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:w-2/3">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudySideSection;
