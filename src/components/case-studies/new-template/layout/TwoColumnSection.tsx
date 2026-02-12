import type { ReactNode } from "react";
import { ScrollReveal } from "../../../ui/ScrollReveal";

interface TwoColumnSectionProps {
    left: ReactNode;
    right: ReactNode;
    bgColor?: string;
    className?: string;
    reverseOnMobile?: boolean;
}

export function TwoColumnSection({
    left,
    right,
    bgColor = "bg-white",
    className = "",
    reverseOnMobile = false,
}: TwoColumnSectionProps) {
    return (
        <section className={`${bgColor} w-full py-16 md:py-24 px-6 md:px-16 lg:px-24 ${className}`}>
            <div
                className={`max-w-[1200px] mx-auto flex flex-col ${reverseOnMobile ? "flex-col-reverse" : ""
                    } md:flex-row gap-10 md:gap-16`}
            >
                <div className="lg:w-1/3">
                    <ScrollReveal width="100%">
                        {left}
                    </ScrollReveal>
                </div>
                <div className="lg:w-2/3">
                    <ScrollReveal width="100%" delay={0.2}>
                        {right}
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
