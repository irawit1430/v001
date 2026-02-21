import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';

interface GetInTouchSectionProps {
    theme?: 'light' | 'dark';
    bgColor?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
}

const GetInTouchSection: React.FC<GetInTouchSectionProps> = ({
    theme = 'light',
    bgColor,
    buttonBgColor = 'white',
    buttonTextColor = 'black'
}) => {
    const isDark = theme === 'dark';
    const sectionBg = bgColor || (isDark ? 'bg-[#2E3278]' : 'bg-white');

    return (
        <section className={`w-full py-20 ${sectionBg}`}>
            <div className="max-w-[1244px] mx-auto px-5 md:px-8 text-center">
                <ScrollReveal width="100%">
                    <h2 className={`font-['SF_Pro_Display',sans-serif] text-[40px] font-medium leading-tight mb-4 ${isDark ? 'text-white' : 'text-[#2E211B]'}`}>
                        Get in Touch!
                    </h2>

                    <p className={`font-['SF_Pro_Display',sans-serif] text-[24px] md:text-[30px] md:leading-[36px] font-normal leading-relaxed max-w-[674px] mx-auto mb-10 text-center ${isDark ? 'text-[#d9d9d9]' : 'text-[#6F6864]'}`}>
                        If you'd like to connect or learn more about this project, feel free to reach out.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 mt-6 justify-center">
                        <motion.a
                            href="mailto:desireewalkerux@yahoo.com"
                            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
                            className="px-6 py-3 rounded-xl font-medium font-['SF_Pro_Display',sans-serif] text-[20px] md:text-[24px] min-w-[180px] text-center transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Email
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/desiree-walker/"
                            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
                            className="px-6 py-3 rounded-xl font-medium font-['SF_Pro_Display',sans-serif] text-[20px] md:text-[24px] min-w-[180px] text-center transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Linkedin
                        </motion.a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default GetInTouchSection;
