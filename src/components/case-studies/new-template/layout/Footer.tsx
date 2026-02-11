import { Link } from "react-router-dom";

interface FooterSection {
    title: string;
    links: { label: string; href?: string }[];
}

interface FooterProps {
    name: string;
    tagline: string;
    sections: FooterSection[];
    bgColor?: string;
}

export function Footer({
    name,
    tagline,
    sections,
    bgColor = "bg-[#ff9e80]",
}: FooterProps) {
    return (
        <footer className={`${bgColor} w-full py-16 px-8 md:px-16`}>
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
                <div className="flex-shrink-0">
                    <h3 className="font-semibold text-white text-xl md:text-2xl">{name}</h3>
                    <p className="text-white text-base md:text-lg mt-1 max-w-[280px] tracking-wide">
                        {tagline}
                    </p>
                </div>

                <div className="flex flex-wrap gap-12 md:gap-20 flex-1 justify-start md:justify-end">
                    {sections.map((section, i) => (
                        <div key={i} className="min-w-[120px]">
                            <h4 className="font-semibold text-white text-lg mb-4">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link, j) => (
                                    <li key={j}>
                                        {link.href && (link.href.startsWith("http") || link.href.startsWith("#")) ? (
                                            <a
                                                href={link.href || "#"}
                                                className="text-white text-base tracking-wide hover:opacity-80 transition-opacity"
                                            >
                                                {link.label}
                                            </a>
                                        ) : (
                                            <Link
                                                to={link.href || "#"}
                                                className="text-white text-base tracking-wide hover:opacity-80 transition-opacity"
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}
