import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface CTAButton {
    label: string;
    href?: string;
}

interface CTASectionProps {
    title: string;
    description: string;
    buttons: CTAButton[];
}

export function CTASection({ title, description, buttons }: CTASectionProps) {
    return (
        <section className="w-full bg-[#212873] py-16 md:py-24 px-6 md:px-16">
            <div className="max-w-[700px] mx-auto flex flex-col items-center text-center gap-4">
                <h2 className="font-medium text-white text-3xl md:text-[40px]">{title}</h2>
                <p className="font-normal text-[#d9d9d9] text-lg md:text-2xl text-left">{description}</p>
                <div className="flex flex-wrap gap-3 mt-6 justify-center">
                    {buttons.map((btn, i) => (
                        <Button
                            key={i}
                            className="bg-[#0954e2] rounded-2xl px-10 py-6 text-white text-lg md:text-xl font-medium"
                            asChild={!!btn.href}
                        >
                            {btn.href ? (
                                btn.href.startsWith("http") || btn.href.startsWith("#") ? (
                                    <a href={btn.href}>{btn.label}</a>
                                ) : (
                                    <Link to={btn.href}>{btn.label}</Link>
                                )
                            ) : (
                                btn.label
                            )}
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    );
}
