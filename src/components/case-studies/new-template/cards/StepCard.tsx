interface StepCardProps {
    icon: string;
    title: string;
    description: string;
}

export function StepCard({ icon, title, description }: StepCardProps) {
    return (
        <div className="bg-white rounded-2xl border border-[#d9d9d9] p-6 flex items-start gap-5 flex-1 min-w-[280px]">
            <div className="w-14 h-14 flex-shrink-0 bg-[#d9d9d9] rounded-full flex items-center justify-center">
                <img className="w-7 h-7 object-contain" alt={title} src={icon} />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="font-medium text-xl md:text-2xl text-[#6e6764]">{title}</h3>
                <p className="font-normal text-base md:text-lg text-[#6e6764] leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
