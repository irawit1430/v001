
import iconUserTesting from '../../assets/icon-user-testing.png';
import iconIterate from '../../assets/icon-iterate.png';
import iconAnalytics from '../../assets/icon-analytics.png';
import iconFeatures from '../../assets/icon-features.png';

const RecordzNextStepsSection: React.FC = () => {
    return (
        <section className="py-20 px-5 max-w-[1244px] mx-auto">
            <div className="w-full">
                {/* Header */}
                <div className="mb-10">
                    <h2 className="text-[32px] font-semibold text-black m-0 mb-3 md:text-[26px]">Next Steps:</h2>
                    <p className="text-[18px] text-[#6F6864] m-0 md:text-[16px]">
                        Road map for future development and continuous improvement
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 gap-5 mb-[60px] md:grid-cols-1">
                    <div className="flex gap-4 p-6 bg-[#F9F9F9] rounded-[16px] items-start transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-[2px]">
                        <div className="w-11 h-11 bg-[#EEEEEE] rounded-[12px] flex items-center justify-center shrink-0">
                            <img src={iconUserTesting} alt="User Testing" className="w-6 h-6 object-contain" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-[18px] font-semibold text-[#333] m-0 mb-2">User Testing</h3>
                            <p className="text-[14px] leading-[1.5] text-[#6F6864] m-0">Conduct usability testing with target users to validate design decisions and identify pain points.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-[#F9F9F9] rounded-[16px] items-start transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-[2px]">
                        <div className="w-11 h-11 bg-[#EEEEEE] rounded-[12px] flex items-center justify-center shrink-0">
                            <img src={iconIterate} alt="Iterate & Refine" className="w-6 h-6 object-contain" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-[18px] font-semibold text-[#333] m-0 mb-2">Iterate & Refine</h3>
                            <p className="text-[14px] leading-[1.5] text-[#6F6864] m-0">Incorporate feedback to improve the user experience and address any discovered issues.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-[#F9F9F9] rounded-[16px] items-start transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-[2px]">
                        <div className="w-11 h-11 bg-[#EEEEEE] rounded-[12px] flex items-center justify-center shrink-0">
                            <img src={iconAnalytics} alt="Analytics Integration" className="w-6 h-6 object-contain" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-[18px] font-semibold text-[#333] m-0 mb-2">Analytics Integration</h3>
                            <p className="text-[14px] leading-[1.5] text-[#6F6864] m-0">Implement tracking to measure key metrics like user engagement and retention rates.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-[#F9F9F9] rounded-[16px] items-start transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-[2px]">
                        <div className="w-11 h-11 bg-[#EEEEEE] rounded-[12px] flex items-center justify-center shrink-0">
                            <img src={iconFeatures} alt="Future Features" className="w-6 h-6 object-contain" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-[18px] font-semibold text-[#333] m-0 mb-2">Future Features</h3>
                            <p className="text-[14px] leading-[1.5] text-[#6F6864] m-0">Explore premium features like event creation, business partnerships, and community moderation tools.</p>
                        </div>
                    </div>
                </div>

                {/* Thank You Message */}
                <div className="text-left py-10 px-5">
                    <p className="text-[20px] leading-[1.6] text-[#333] m-0 max-w-[800px] mx-auto md:text-[18px]">
                        Thank you for reviewing this case study. I'm always open to feedback and would love to discuss how these design solutions could be applied to your projects.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RecordzNextStepsSection;
