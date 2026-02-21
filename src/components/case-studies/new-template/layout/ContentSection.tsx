import type { ReactNode } from "react";
import { ScrollReveal } from "../../../ui/ScrollReveal";

interface ContentSectionProps {
    children: ReactNode;
    bgColor?: string;
    className?: string;
    id?: string;
}

export function ContentSection({
    children,
    bgColor = "bg-transparent",
    className = "",
    id,
}: ContentSectionProps) {
    return (
        <section id={id} className={`${bgColor} w-full py-6 md:py-8 lg:py-10 px-6 md:px-16 lg:px-24 ${className}`}>
            <div className="max-w-[1200px] mx-auto">
                <ScrollReveal width="100%">
                    {children}
                </ScrollReveal>
            </div>
        </section>
    );
}
