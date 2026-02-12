import { ScrollReveal } from '../ui/ScrollReveal';

interface GetInTouchSectionProps {
    theme?: 'light' | 'dark';
}

const GetInTouchSection: React.FC<GetInTouchSectionProps> = ({ theme = 'light' }) => {
    const isDark = theme === 'dark';

    return (
        <section className={`w-full py-20 ${isDark ? 'bg-[#212873]' : 'bg-white'}`}>
            <div className="max-w-container mx-auto px-4 md:px-8 text-center">
                <ScrollReveal width="100%">
                    <h2 className={`text-[40px] font-medium leading-tight mb-4 ${isDark ? 'text-white' : 'text-[#2E211B]'}`}>
                        Get in Touch!
                    </h2>

                    <p className={`text-[30px] font-normal leading-relaxed max-w-[674px] mx-auto mb-10 text-left ${isDark ? 'text-[#d9d9d9]' : 'text-[#6F6864]'}`}>
                        If you'd like to connect or learn more about this project, feel free to reach out.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px]">
                        <a
                            href="mailto:desireewalkerux@yahoo.com"
                            className="w-[223px] h-[61px] bg-gradient-to-r from-[#FF6F61] to-[#FF9E80] rounded-[20px] flex items-center justify-center text-[30px] font-medium text-white hover:from-[#E6614F] hover:to-[#E68E72] transition-all"
                        >
                            Email
                        </a>
                        <a
                            href="https://www.linkedin.com/in/desiree-walker/"
                            className="w-[223px] h-[61px] bg-gradient-to-r from-[#FF6F61] to-[#FF9E80] rounded-[20px] flex items-center justify-center text-[30px] font-medium text-white hover:from-[#E6614F] hover:to-[#E68E72] transition-all"
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
