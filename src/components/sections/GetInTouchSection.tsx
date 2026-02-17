import { ScrollReveal } from '../ui/ScrollReveal';

interface GetInTouchSectionProps {
    theme?: 'light' | 'dark';
}

const GetInTouchSection: React.FC<GetInTouchSectionProps> = ({ theme = 'light' }) => {
    const isDark = theme === 'dark';

    return (
        <section className={`w-full py-20 ${isDark ? 'bg-[#212873]' : 'bg-white'}`}>
            <div className="max-w-[1244px] mx-auto px-5 md:px-8 text-center">
                <ScrollReveal width="100%">
                    <h2 className={`font-['SF_Pro_Display',sans-serif] text-[40px] font-medium leading-tight mb-4 ${isDark ? 'text-white' : 'text-[#2E211B]'}`}>
                        Get in Touch!
                    </h2>

                    <p className={`font-['SF_Pro_Display',sans-serif] text-[24px] md:text-[30px] md:leading-[36px] font-normal leading-relaxed max-w-[674px] mx-auto mb-10 text-center ${isDark ? 'text-[#d9d9d9]' : 'text-[#6F6864]'}`}>
                        If you'd like to connect or learn more about this project, feel free to reach out.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px]">
                        <a
                            href="mailto:desireewalkerux@yahoo.com"
                            className={`min-w-[223px] h-[61px] ${isDark ? 'bg-[#0954E2] rounded-[20px]' : 'bg-gradient-to-r from-[#FF6F61] to-[#FF9E80] rounded-[10px]'} flex items-center justify-center font-['SF_Pro_Display',sans-serif] text-[24px] md:text-[30px] md:leading-[36px] font-medium text-white transition-all shadow-none hover:shadow-[0_8px_20px_rgba(255,111,97,0.4)] hover:scale-105`}
                        >
                            Email
                        </a>
                        <a
                            href="https://www.linkedin.com/in/desiree-walker/"
                            className={`min-w-[223px] h-[61px] ${isDark ? 'bg-[#0954E2] rounded-[20px]' : 'bg-gradient-to-r from-[#FF6F61] to-[#FF9E80] rounded-[10px]'} flex items-center justify-center font-['SF_Pro_Display',sans-serif] text-[24px] md:text-[30px] md:leading-[36px] font-medium text-white transition-all shadow-none hover:shadow-[0_8px_20px_rgba(255,111,97,0.4)] hover:scale-105`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Linkedin
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default GetInTouchSection;
