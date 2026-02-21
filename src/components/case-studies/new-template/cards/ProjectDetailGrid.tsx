

interface ProjectDetail {
    label: string;
    value: string;
}

interface ProjectDetailGridProps {
    details: ProjectDetail[];
}

export function ProjectDetailGrid({ details }: ProjectDetailGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[20px] gap-y-[30px]">
            {details.map((detail, index) => (
                <div key={index} className="flex flex-col gap-[8px]">
                    <h3 className="font-medium text-[#6F6864] text-[22px] md:text-[28px]">
                        {detail.label}
                    </h3>
                    <p className="font-normal text-[#6F6864] text-[18px] md:text-[24px] whitespace-nowrap">
                        {detail.value}
                    </p>
                    <div className="w-full max-w-[400px] h-px bg-[#6F6864]" />
                </div>
            ))}
        </div>
    );
}
