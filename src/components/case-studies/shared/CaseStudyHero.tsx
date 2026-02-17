import React from 'react';
import { motion } from 'framer-motion';

interface CaseStudyHeroProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt: string;
    className?: string;
}

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({
    title,
    subtitle,
    imageSrc,
    imageAlt,
    className = ''
}) => {
    return (
        <section className={`w-full bg-white pt-24 pb-8 overflow-hidden ${className}`}>
            <div className="max-w-[1244px] mx-auto px-4">
                {/* Title Section */}
                <div className="mb-6 mt-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-['SF_Pro_Display',sans-serif] text-[40px] font-semibold text-black leading-tight tracking-tight"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-['SF_Pro_Display',sans-serif] text-[20px] font-normal text-taupe mt-1"
                    >
                        {subtitle}
                    </motion.p>
                </div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full flex justify-center"
                >
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="w-full max-w-[1000px] h-auto object-contain"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default CaseStudyHero;
