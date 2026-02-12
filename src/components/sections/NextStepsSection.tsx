

const NextStepsSection: React.FC = () => {
    return (
        <section className="py-20 px-5 max-w-[1244px] mx-auto pb-[100px]">
            <div className="max-w-[1440px] mx-auto relative">
                <div className="mb-[60px]">
                    <h2 className="text-[40px] font-medium text-black mb-[30px] md:text-[32px]">Next Steps:</h2>
                    <p className="text-[30px] leading-[1.4] font-normal text-[#6F6864] mb-5 md:text-[20px] max-w-[600px]">
                        Road map for future development and continuous improvement
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-5 mb-20 md:grid-cols-1">
                    <div className="bg-white border border-[#E0E0E0] rounded-[16px] p-[30px] flex items-start gap-5 transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] md:flex-col">
                        <div className="text-[24px] bg-[#E8E2D9] min-w-[50px] h-[50px] rounded-full flex items-center justify-center text-[#5C3D1E]">👨‍👩‍👧‍👦</div>
                        <div className="flex-1">
                            <h4 className="text-[20px] font-semibold text-[#6F6864] mb-[10px]">User Testing</h4>
                            <p className="text-[14px] text-[#888] leading-[1.5]">Conduct usability testing with target users to validate design decisions and identify pain points.</p>
                        </div>
                    </div>
                    <div className="bg-white border border-[#E0E0E0] rounded-[16px] p-[30px] flex items-start gap-5 transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] md:flex-col">
                        <div className="text-[24px] bg-[#E8E2D9] min-w-[50px] h-[50px] rounded-full flex items-center justify-center text-[#5C3D1E]">🔄</div>
                        <div className="flex-1">
                            <h4 className="text-[20px] font-semibold text-[#6F6864] mb-[10px]">Iterate & Refine</h4>
                            <p className="text-[14px] text-[#888] leading-[1.5]">Incorporate feedback to improve the user experience and address any discovered issues.</p>
                        </div>
                    </div>
                    <div className="bg-white border border-[#E0E0E0] rounded-[16px] p-[30px] flex items-start gap-5 transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] md:flex-col">
                        <div className="text-[24px] bg-[#E8E2D9] min-w-[50px] h-[50px] rounded-full flex items-center justify-center text-[#5C3D1E]">📈</div>
                        <div className="flex-1">
                            <h4 className="text-[20px] font-semibold text-[#6F6864] mb-[10px]">Analytics Integration</h4>
                            <p className="text-[14px] text-[#888] leading-[1.5]">Implement tracking to measure key metrics like user engagement and retention rates.</p>
                        </div>
                    </div>
                    <div className="bg-white border border-[#E0E0E0] rounded-[16px] p-[30px] flex items-start gap-5 transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] md:flex-col">
                        <div className="text-[24px] bg-[#E8E2D9] min-w-[50px] h-[50px] rounded-full flex items-center justify-center text-[#5C3D1E]">📑</div>
                        <div className="flex-1">
                            <h4 className="text-[20px] font-semibold text-[#6F6864] mb-[10px]">Future Features</h4>
                            <p className="text-[14px] text-[#888] leading-[1.5]">Explore premium features like event creation, business partnerships, and community moderation tools.</p>
                        </div>
                    </div>
                </div>

                <div className="text-center max-w-[700px] mx-auto text-[#6F6864]">
                    <p className="text-[30px] leading-[1.4] font-normal text-[#6F6864] mb-5 md:text-[20px]">
                        Thank you for reviewing this case study. I’m always open to feedback and would love to discuss how these design solutions could be applied to your projects.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NextStepsSection;
