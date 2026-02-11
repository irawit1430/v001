import type { ReactNode } from "react";

interface ContentSectionProps {
    children: ReactNode;
    bgColor?: string;
    className?: string;
    id?: string;
}

export function ContentSection({
    children,
    bgColor = "bg-white",
    className = "",
    id,
}: ContentSectionProps) {
    return (
        <section id={id} className={`${bgColor} w-full py-16 md:py-24 px-6 md:px-16 lg:px-24 ${className}`}>
            <div className="max-w-[1200px] mx-auto">{children}</div>
        </section>
    );
}
