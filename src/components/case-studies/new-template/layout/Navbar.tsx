import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
    logoSrc?: string;
    logoAlt?: string;
    links: { label: string; href: string }[];
}

export function Navbar({ logoSrc, logoAlt = "Logo", links }: NavbarProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full h-[70px] flex items-center justify-between z-50 px-6 shadow-md backdrop-blur-sm bg-gradient-to-r from-[rgba(255,218,185,0.85)] via-[rgba(255,111,97,0.85)] to-[rgba(255,158,128,0.85)]">
            {logoSrc && (
                <div className="flex items-center">
                    <img className="w-[50px] h-[50px] object-cover" alt={logoAlt} src={logoSrc} />
                </div>
            )}

            <button
                className="md:hidden text-white"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
            >
                {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <nav
                className={`${mobileOpen ? "flex" : "hidden"
                    } md:flex absolute md:relative top-[70px] md:top-0 left-0 w-full md:w-auto flex-col md:flex-row items-center gap-4 md:gap-8 bg-gradient-to-r from-[rgba(255,218,185,0.95)] via-[rgba(255,111,97,0.95)] to-[rgba(255,158,128,0.95)] md:bg-none p-6 md:p-0`}
            >
                {links.map((link, i) => (
                    <Link
                        key={i}
                        to={link.href}
                        className="font-sans text-white text-lg md:text-xl hover:opacity-80 transition-opacity"
                        onClick={() => setMobileOpen(false)}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
