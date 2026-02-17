import React from 'react';

export interface OverviewItem {
    label: string;
    value: string;
    isLink?: boolean;
    href?: string;
}

interface CaseStudyOverviewProps {
    items: OverviewItem[];
    className?: string;
}

const CaseStudyOverview: React.FC<CaseStudyOverviewProps> = ({ items, className = '' }) => {
    return (
        <section className={`w-full bg-light-grey py-12 ${className}`}>
            <div className="max-w-container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-16">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            {/* Label */}
                            <span className="text-[16px] font-medium text-taupe leading-tight uppercase tracking-wider">
                                {item.label}
                            </span>

                            {/* Value */}
                            {item.isLink ? (
                                <a
                                    href={item.href}
                                    className="text-[20px] font-medium text-taupe hover:text-peach transition-colors"
                                >
                                    {item.value}
                                </a>
                            ) : (
                                <span className="text-[20px] font-medium text-taupe">
                                    {item.value}
                                </span>
                            )}

                            {/* Underline */}
                            <div className="w-full h-[1px] bg-taupe mt-2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudyOverview;
