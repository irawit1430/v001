import React from 'react';


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
        <section className={`py-20 px-5 max-w-[1244px] mx-auto ${className}`}>
            <div className="w-full">
                {/* Header */}
                <div className="flex gap-[60px] items-start mb-[50px] md:flex-col md:gap-5">
                    <h2 className="text-[32px] font-medium text-black m-0 flex-[0_0_250px] whitespace-nowrap md:text-[26px] md:flex-none">
                        {auditData.title || 'Competitive Audit:'}
                    </h2>
                    <div className="flex-1">
                        <div className="text-[18px] leading-[1.7] text-[#6F6864] m-0 [&>strong]:text-[#333333] md:text-[16px]">
                            {auditData.description}
                        </div>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="w-full overflow-x-auto rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                    <table className="w-full border-collapse text-[14px] min-w-[900px] md:text-[13px]">
                        <thead>
                            <tr>
                                <th className="bg-[#1A1A1A] text-white font-semibold text-[15px] w-[140px] p-[16px_20px] text-left align-top border-b border-[#E5E5E5] md:p-[12px_14px]"></th>
                                {auditData.competitors.map((competitor, index) => (
                                    <th key={index} className="bg-[#333333] text-white font-semibold text-[15px] p-[16px_20px] text-left align-top border-b border-[#E5E5E5] md:p-[12px_14px]">
                                        {competitor}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {auditData.rows.map((row, rowIndex) => (
                                <tr key={rowIndex} className="even:bg-[#FAFAFA] hover:bg-[#F5F5F5]">
                                    <td className="bg-[#5A5A5A] text-white font-semibold w-[140px] text-[14px] p-[16px_20px] text-left align-top border-b border-[#E5E5E5] md:p-[12px_14px]">
                                        {row.feature}
                                    </td>
                                    {row.values.map((value, colIndex) => (
                                        <td key={colIndex} className="text-[#555555] leading-[1.5] p-[16px_20px] text-left align-top border-b border-[#E5E5E5] md:p-[12px_14px]">
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
