import React from 'react';
import CaseStudySideSection from './CaseStudySideSection';

interface CaseStudyProblemProps {
    problemText: React.ReactNode;
    solutionText?: React.ReactNode;
    className?: string;
}

const CaseStudyProblem: React.FC<CaseStudyProblemProps> = ({
    problemText,
    solutionText,
    className = ''
}) => {
    return (
        <CaseStudySideSection title="Problem Statement:" className={className}>
            <div className="flex flex-col gap-8">
                <div className="text-[20px] md:text-[24px] leading-relaxed text-taupe">
                    {problemText}
                </div>
                {solutionText && (
                    <div className="text-[20px] md:text-[24px] leading-relaxed text-taupe">
                        {solutionText}
                    </div>
                )}
            </div>
        </CaseStudySideSection>
    );
};

export default CaseStudyProblem;
