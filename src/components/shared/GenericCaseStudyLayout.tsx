import React, { useEffect } from 'react';
import CaseStudyHero from '../case-studies/shared/CaseStudyHero';
import CaseStudyOverview from '../case-studies/shared/CaseStudyOverview';
import type { OverviewItem } from '../case-studies/shared/CaseStudyOverview';
import CaseStudyProblem from '../case-studies/shared/CaseStudyProblem';
import ResearchOverview from '../case-studies/shared/ResearchOverview';
import type { ResearchCard } from '../case-studies/shared/ResearchOverview';
import KeyInsights from '../case-studies/shared/KeyInsights';
import type { InsightCard } from '../case-studies/shared/KeyInsights';
import ComparisonTable from './ComparisonTable';
import type { AuditData } from './ComparisonTable';
import GetInTouchSection from './GetInTouchSection';

// Types for dynamic content
export interface ProjectData {
    // Hero Section
    heroImage: string;
    heroImageAlt?: string;
    title: string;
    subtitle: string;

    // Overview Section
    overviewItems: OverviewItem[];

    // Problem Statement
    problemStatement: React.ReactNode;
    solutionStatement?: React.ReactNode;

    // Research Overview (optional)
    researchDescription?: string;
    researchCards?: ResearchCard[];
    researchBackgroundColor?: string;

    // Competitive Audit (optional)
    auditData?: AuditData;

    // Key Insights (optional)
    insightsDescription?: string;
    insights?: InsightCard[];
    insightsBackgroundColor?: string;

    // Process Images (optional - for future expansion)
    processImages?: string[];

    // Colors (optional - for future expansion)
    colors?: string[];

    // Custom content sections (optional)
    customSections?: React.ReactNode;
}

interface GenericCaseStudyLayoutProps {
    projectData: ProjectData;
    className?: string;
}

const GenericCaseStudyLayout: React.FC<GenericCaseStudyLayoutProps> = ({
    projectData,
    className = ''
}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`w-full bg-white overflow-x-hidden font-['SF_Pro_Display',_-apple-system,_BlinkMacSystemFont,_'Segoe_UI',_Roboto,_Oxygen,_Ubuntu,_Cantarell,_'Open_Sans',_'Helvetica_Neue',_sans-serif] text-taupe ${className}`}>
            {/* Hero Section */}
            <CaseStudyHero
                title={projectData.title}
                subtitle={projectData.subtitle}
                imageSrc={projectData.heroImage}
                imageAlt={projectData.heroImageAlt || `${projectData.title} Mockup`}
            />

            {/* Project Details / Overview */}
            <CaseStudyOverview items={projectData.overviewItems} />

            {/* Problem Statement */}
            <CaseStudyProblem
                problemText={projectData.problemStatement}
                solutionText={projectData.solutionStatement}
            />

            {/* Research Overview (if provided) */}
            {projectData.researchDescription && (
                <ResearchOverview
                    description={projectData.researchDescription}
                    cards={projectData.researchCards}
                    backgroundColor={projectData.researchBackgroundColor || 'bg-taupe'}
                />
            )}

            {/* Competitive Audit (if provided) */}
            {projectData.auditData && (
                <ComparisonTable auditData={projectData.auditData} />
            )}

            {/* Key Insights (if provided) */}
            {projectData.insights && projectData.insightsDescription && (
                <KeyInsights
                    description={projectData.insightsDescription}
                    insights={projectData.insights}
                    backgroundColor={projectData.insightsBackgroundColor || 'bg-taupe'}
                />
            )}

            {/* Custom Sections (for project-specific content) */}
            {projectData.customSections}

            {/* Get in Touch Section */}
            <GetInTouchSection />
        </div>
    );
};

export default GenericCaseStudyLayout;
