import React from 'react';
import './ComparisonTable.css';

// Type for a cell value - can be plain text, a link, or a list
export type CellValue =
    | string
    | { type: 'link'; text: string; href: string }
    | { type: 'list'; items: string[] };

// Type for a row in the comparison table
export interface ComparisonRow {
    feature: string;
    values: CellValue[];
}

// Type for the full audit data
export interface AuditData {
    title?: string;
    description: React.ReactNode;
    competitors: string[];
    rows: ComparisonRow[];
}

interface ComparisonTableProps {
    auditData: AuditData;
    className?: string;
}

const renderCellValue = (value: CellValue): React.ReactNode => {
    if (typeof value === 'string') {
        return value;
    }

    if (value.type === 'link') {
        return (
            <a href={value.href} target="_blank" rel="noopener noreferrer">
                {value.text}
            </a>
        );
    }

    if (value.type === 'list') {
        return (
            <ul>
                {value.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        );
    }

    return null;
};

const ComparisonTable: React.FC<ComparisonTableProps> = ({
    auditData,
    className = ''
}) => {
    return (
        <section className={`comparison-section ${className}`}>
            <div className="comparison-container">
                {/* Header */}
                <div className="comparison-header">
                    <h2 className="comparison-title">{auditData.title || 'Competitive Audit:'}</h2>
                    <div className="comparison-content">
                        <p className="comparison-text">
                            {auditData.description}
                        </p>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="comparison-table-wrapper">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th className="comparison-table-header comparison-row-header"></th>
                                {auditData.competitors.map((competitor, index) => (
                                    <th key={index} className="comparison-table-header">
                                        {competitor}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {auditData.rows.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td className="comparison-row-label">{row.feature}</td>
                                    {row.values.map((value, colIndex) => (
                                        <td key={colIndex}>
                                            {renderCellValue(value)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
