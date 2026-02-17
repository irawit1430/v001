import React from 'react';
import { Link } from 'react-router-dom';
import defaultLogo from '../../assets/logo.png';

const Footer: React.FC = () => {
    const resumeUrl = `${import.meta.env.BASE_URL}figmaAssets/Desiree Walker resume 2026.pdf`;

    return (
        <footer className="bg-gradient-to-r from-[rgba(255,218,185,0.9)] via-[rgba(255,111,97,0.9)] to-[rgba(255,158,128,0.9)] py-12">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Logo + Name + Tagline */}
                <div className="flex flex-col items-center mb-8">
                    <img
                        src={defaultLogo}
                        alt="Logo"
                        className="w-[80px] h-[80px] object-cover mb-4"
                    />
                    <h3 className="font-['SF_Pro_Display',sans-serif] font-semibold text-[28px] text-white mb-2">
                        Desiree J. Walker
                    </h3>
                    <p className="font-['SF_Pro_Display',sans-serif] text-[18px] text-white/90 text-center max-w-[500px]">
                        UX Designer creating meaningful digital experiences
                    </p>
                </div>

                {/* Navigation Links — dot-separated */}
                <div className="flex flex-wrap justify-center gap-8 mb-8 font-['SF_Pro_Display',sans-serif] text-[18px] text-white">
                    <Link to="/about" className="hover:text-white/70 transition-colors text-white no-underline">
                        About
                    </Link>
                    <span className="text-white/50">•</span>
                    <a href="#projects" className="hover:text-white/70 transition-colors text-white no-underline">
                        Projects
                    </a>
                    <span className="text-white/50">•</span>
                    <a href="#contact" className="hover:text-white/70 transition-colors text-white no-underline">
                        Contact
                    </a>
                    <span className="text-white/50">•</span>
                    <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white/70 transition-colors text-white no-underline"
                    >
                        Resume
                    </a>
                    <span className="text-white/50">•</span>
                    <a
                        href="https://www.linkedin.com/in/desiree-walker/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white/70 transition-colors text-white no-underline"
                    >
                        LinkedIn
                    </a>
                </div>

                {/* Divider */}
                <div className="border-t border-white/30 mb-6" />

                {/* Copyright */}
                <div className="text-center">
                    <p className="font-['SF_Pro_Display',sans-serif] text-[16px] text-white/80">
                        © 2026 Desiree J. Walker. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
