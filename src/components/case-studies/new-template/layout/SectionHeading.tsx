import { ScrollReveal } from "../../../ui/ScrollReveal";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    description?: string;
    textColor?: string;
    subtitleColor?: string;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeading({
    title,
    subtitle,
    description,
    textColor = "text-black",
    subtitleColor = "text-[#6e6764]",
    align = "left",
    className = "",
}: SectionHeadingProps) {
    const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

    return (
        <ScrollReveal width="100%">
            <div className={`flex flex-col ${alignClass} gap-3 max-w-3xl ${className}`}>
                <h2 className={`font-medium text-3xl md:text-[40px] ${textColor} leading-tight`}>
                    {title}
                </h2>
                {subtitle && (
                    <p className={`font-medium text-xl md:text-[34px] ${subtitleColor} leading-normal`}>
                        {subtitle}
                    </p>
                )}
                {description && (
                    <p className={`font-normal text-lg md:text-[28px] ${subtitleColor} leading-normal`}>
                        {description}
                    </p>
                )}
            </div>
        </ScrollReveal>
    );
}
