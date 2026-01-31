import React from 'react';

interface CaseStudySectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const CaseStudySection: React.FC<CaseStudySectionProps> = ({
    title,
    children,
    className = '',
    id
}) => {
    return (
        <section id={id} className={`w-full py-16 px-4 md:px-12 ${className}`}>
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-12">
                    {title}
                </h2>
                {children}
            </div>
        </section>
    );
};

export default CaseStudySection;
