import { Separator } from "../ui/separator";

interface ProjectDetail {
    label: string;
    value: string;
}

interface ProjectDetailGridProps {
    details: ProjectDetail[];
}

export function ProjectDetailGrid({ details }: ProjectDetailGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {details.map((detail, index) => (
                <div key={index} className="flex flex-col gap-2">
                    <h3 className="font-medium text-[#6F6864] text-xl md:text-[28px] leading-[33px]">
                        {detail.label}
                    </h3>
                    <p className="font-medium text-[#6F6864] text-lg md:text-[24px] leading-[29px]">
                        {detail.value}
                    </p>
                    <Separator className="mt-2" />
                </div>
            ))}
        </div>
    );
}
