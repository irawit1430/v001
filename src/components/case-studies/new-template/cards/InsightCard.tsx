interface InsightCardProps {
    icon: string;
    topIcon?: string;
    title: string;
    description: string;
}

export function InsightCard({ icon, topIcon, title, description }: InsightCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-[inset_0px_4px_4px_rgba(0,0,0,0.1),0px_4px_12px_rgba(0,0,0,0.1)] p-8 flex flex-col items-center text-center gap-4 min-w-[220px] flex-1">
            <div className="relative w-24 h-24 flex items-center justify-center">
                <img className="w-14 h-14 md:w-20 md:h-20 object-contain" alt={title} src={icon} />
                {topIcon && (
                    <img
                        className="absolute w-8 h-8 md:w-10 md:h-10 object-contain pointer-events-none"
                        alt={`${title} top icon`}
                        src={topIcon}
                    />
                )}
            </div>
            <h3 className="font-medium text-xl md:text-2xl text-black">{title}</h3>
            <p className="font-medium text-base md:text-lg text-[#6e6764] leading-relaxed">
                {description}
            </p>
        </div>
    );
}
