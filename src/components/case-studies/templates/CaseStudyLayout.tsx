import React, { useEffect } from 'react';
import CaseStudyHero from '../shared/CaseStudyHero';
import CaseStudyOverview from '../shared/CaseStudyOverview';
import type { OverviewItem } from '../shared/CaseStudyOverview';
import CaseStudyProblem from '../shared/CaseStudyProblem';
import ResearchOverview from '../shared/ResearchOverview';
import type { ResearchCard } from '../shared/ResearchOverview';
import KeyInsights from '../shared/KeyInsights';
import type { InsightCard } from '../shared/KeyInsights';
import ComparisonTable from '../../ui/ComparisonTable';
import type { AuditData } from '../../ui/ComparisonTable';
import GetInTouchSection from '../../sections/GetInTouchSection';

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
    insightsAlign?: 'left' | 'center';
    insightsTextColor?: string;

    // Process Images (optional - for future expansion)
    processImages?: string[];

    // Colors (optional - for future expansion)
    colors?: string[];

    // Custom content sections (flexible placement)
    afterProblemContent?: React.ReactNode;
    afterResearchContent?: React.ReactNode;
    afterAuditContent?: React.ReactNode;
    customSections?: React.ReactNode; // Appears after Insights
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
            {projectData.afterProblemContent}

            {/* Research Overview (if provided) */}
            {projectData.researchDescription && (
                <>
                    <ResearchOverview
                        description={projectData.researchDescription}
                        cards={projectData.researchCards}
                        backgroundColor={projectData.researchBackgroundColor || 'bg-taupe'}
                    />
                    {projectData.afterResearchContent}
                </>
            )}

            {/* Competitive Audit (if provided) */}
            {projectData.auditData && (
                <>
                    <ComparisonTable auditData={projectData.auditData} />
                    {projectData.afterAuditContent}
                </>
            )}

            {/* Key Insights (if provided) */}
            {projectData.insights && projectData.insightsDescription && (
                <KeyInsights
                    description={projectData.insightsDescription}
                    insights={projectData.insights}
                    backgroundColor={projectData.insightsBackgroundColor || 'bg-taupe'}
                    align={projectData.insightsAlign || 'center'}
                    textColor={projectData.insightsTextColor}
                />
            )}

            {/* Custom Sections (for project-specific content - after Insights) */}
            {projectData.customSections}

            {/* Get in Touch Section */}
            <GetInTouchSection />
        </div>
    );
};

export default GenericCaseStudyLayout;
