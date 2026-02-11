import React from 'react';
import CaseStudyLayout from '../components/case-studies/templates/CaseStudyLayout';
import type { ProjectData } from '../components/case-studies/templates/CaseStudyLayout';

// Import a placeholder image (using the 1331 recordz hero as a reference)
import heroImage from '../assets/1331-recordz-hero.png';

const TestProject: React.FC = () => {
    // Dummy project data to test the GenericCaseStudyLayout
    const testProjectData: ProjectData = {
        // Hero Section
        heroImage: heroImage,
        heroImageAlt: 'Test Project Website Mockup',
        title: 'Test Project',
        subtitle: 'A Test Case Study Page',

        // Overview Section
        overviewItems: [
            { label: 'ROLE', value: 'Lead UX Designer' },
            { label: 'DURATION', value: '8 weeks | 2025' },
            { label: 'PROTOTYPE', value: 'Figma prototype link', isLink: true, href: '#' },
            { label: 'RESPONSIBILITIES', value: 'Research, Design, Prototyping' },
            { label: 'TEAM SIZE', value: 'Solo Project' },
            { label: 'CATEGORY', value: 'Mobile App' },
        ],

        // Problem Statement
        problemStatement: (
            <>
                <strong>This is a test problem statement to verify the layout works correctly.</strong> The challenge was to create a reusable component that could be used across multiple case study pages while maintaining the same visual quality and structure as the original RecordzPage.
            </>
        ),

        // Research Overview
        researchDescription: 'This section demonstrates the research overview component with default cards. It summarizes the research methodology used in this test project.',
        researchBackgroundColor: 'bg-taupe',

        // Competitive Audit
        auditData: {
            title: 'Competitive Audit:',
            description: (
                <>
                    <strong>Analyzing competing products showed key opportunities for differentiation.</strong> This sample audit demonstrates the ComparisonTable component with test data.
                </>
            ),
            competitors: ['Competitor A', 'Competitor B', 'Competitor C', 'Competitor D'],
            rows: [
                {
                    feature: 'Product Summary',
                    values: [
                        'A leading product in the market with strong brand recognition.',
                        'Emerging competitor focused on innovation and user experience.',
                        'Established player with traditional approach to the market.',
                        'Boutique solution targeting niche audiences.',
                    ],
                },
                {
                    feature: 'Website',
                    values: [
                        { type: 'link', text: 'www.competitor-a.com', href: 'https://example.com' },
                        { type: 'link', text: 'www.competitor-b.com', href: 'https://example.com' },
                        { type: 'link', text: 'www.competitor-c.com', href: 'https://example.com' },
                        { type: 'link', text: 'www.competitor-d.com', href: 'https://example.com' },
                    ],
                },
                {
                    feature: 'Target Users',
                    values: [
                        'Enterprise clients and large organizations.',
                        'Startups and small businesses looking for modern solutions.',
                        'Mid-market companies with established workflows.',
                        'Individual professionals and freelancers.',
                    ],
                },
                {
                    feature: 'Core Features',
                    values: [
                        { type: 'list', items: ['Feature 1', 'Feature 2', 'Feature 3'] },
                        { type: 'list', items: ['Modern UI', 'API integrations', 'Real-time sync'] },
                        { type: 'list', items: ['Legacy support', 'Bulk operations', 'Reporting'] },
                        { type: 'list', items: ['Simplicity', 'Speed', 'Customization'] },
                    ],
                },
                {
                    feature: 'Strengths',
                    values: [
                        { type: 'list', items: ['Brand recognition', 'Market share', 'Support'] },
                        { type: 'list', items: ['Innovation', 'User experience', 'Agility'] },
                        { type: 'list', items: ['Reliability', 'Trust', 'Enterprise features'] },
                        { type: 'list', items: ['Personalization', 'Pricing', 'Flexibility'] },
                    ],
                },
                {
                    feature: 'Weaknesses',
                    values: [
                        { type: 'list', items: ['High cost', 'Complex setup', 'Slow updates'] },
                        { type: 'list', items: ['Limited scale', 'Newer brand', 'Smaller team'] },
                        { type: 'list', items: ['Outdated UI', 'Slow innovation', 'Rigid'] },
                        { type: 'list', items: ['Limited features', 'No enterprise support', 'Small community'] },
                    ],
                },
            ],
        },

        // Key Insights
        insightsDescription: 'These insights demonstrate the Key Insights component with test data. Each card shows a different aspect of the project findings.',
        insights: [
            { title: 'Test Insight 1', description: 'This is a sample insight to verify the card layout', emoji: '🎯' },
            { title: 'Test Insight 2', description: 'Another test insight with different content', emoji: '💡' },
            { title: 'Test Insight 3', description: 'Third insight card for testing grid layout', emoji: '🔍' },
            { title: 'Test Insight 4', description: 'Fourth insight to complete the 4-column grid', emoji: '✨' },
        ],
        insightsBackgroundColor: 'bg-taupe',

        // Process Images (for future use)
        processImages: [
            '/placeholder-process-1.png',
            '/placeholder-process-2.png',
        ],

        // Colors (for future use)
        colors: ['#F5A896', '#6F6864', '#1A1A1A', '#FFFFFF'],
    };

    return <CaseStudyLayout projectData={testProjectData} />;
};

export default TestProject;
