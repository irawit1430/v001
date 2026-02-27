interface StepCardProps {
    icon: string;
    title: string;
    description: string;
    overlayIcon?: string;
    iconClassName?: string;
    iconContainerClassName?: string;
}

export function StepCard({ icon, title, description, overlayIcon, iconClassName, iconContainerClassName }: StepCardProps) {
    return (
        <div className="bg-white rounded-2xl border border-[#d9d9d9] p-6 flex items-start gap-5 flex-1 min-w-[280px]">
            <div className={`relative flex-shrink-0 flex items-center justify-center ${iconContainerClassName || "w-14 h-14 bg-[#d9d9d9] rounded-full"}`}>
                <img className={`object-contain ${iconClassName || "w-7 h-7"}`} alt={title} src={icon} />
                {overlayIcon && (
                    <img
                        src={overlayIcon}
                        alt="Overlay"
                        className="absolute w-full h-full object-contain pointer-events-none"
                        style={{ top: 0, left: 0 }}
                    />
                )}
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="font-medium text-xl md:text-[30px] md:leading-[36px] text-[#6F6864]">{title}</h3>
                <p className="font-normal text-base md:text-[20px] md:leading-[24px] text-[#6F6864] leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
