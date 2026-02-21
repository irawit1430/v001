

const RecordzSolutionSection: React.FC = () => {
    return (
        <section className="py-20 px-5 max-w-[1244px] mx-auto">
            <div className="w-full">
                {/* Header */}
                <div className="flex gap-[60px] items-start flex-wrap mb-[60px] md:flex-col md:gap-5">
                    <h2 className="text-[32px] font-medium text-black m-0 flex-[0_0_220px] md:text-[26px] md:flex-none whitespace-nowrap">Solution Overview:</h2>
                    <div className="flex-1 min-w-[300px]">
                        <p className="text-[22px] leading-[1.5] text-[#333] mb-5 md:text-[20px]">
                            <strong>Turning creative vision into cultural impact with the right platform.</strong>
                        </p>
                        <p className="text-[17px] leading-[1.7] text-[#6F6864] m-0 md:text-[16px]">
                            1331 Recordz is a Miami, FL–based independent record label and music studio that empowers artists through <strong className="text-[#333]">creative freedom</strong>, transparent practices, and hands-on production support. Prioritizing artist ownership and authentic, culturally driven sound, 1331 Recordz combines professional studio access with modern distribution to support artists in South Florida and beyond.
                        </p>
                    </div>
                </div>

                {/* Goals Section */}
                <div className="mt-[60px]">
                    <h3 className="text-[24px] font-medium text-[#333] mb-[30px] md:text-[20px]">The solution is shaped by four core goals:</h3>

                    <div className="grid grid-cols-2 gap-5 md:grid-cols-1 md:gap-4">
                        <div className="flex gap-4 p-6 bg-[#FAFAFA] rounded-[12px] border border-[#EEEEEE] items-start transition-shadow duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                            <div className="w-9 h-9 bg-[#6F6864] text-white rounded-full flex items-center justify-center text-[16px] font-semibold shrink-0">1</div>
                            <div className="flex-1">
                                <h4 className="text-[18px] font-semibold text-[#333] mb-2">Empower Artists</h4>
                                <p className="text-[14px] leading-[1.5] text-[#6F6864] m-0">
                                    Provide artists with the tools, studio access, and resources needed to maintain control over their music and creative direction
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-6 bg-[#FAFAFA] rounded-[12px] border border-[#EEEEEE] items-start transition-shadow duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                            <div className="w-9 h-9 bg-[#6F6864] text-white rounded-full flex items-center justify-center text-[16px] font-semibold shrink-0">2</div>
                            <div className="flex-1">
                                <h4 className="text-[18px] font-semibold text-[#333] mb-2">Establish Trust</h4>
                                <p className="text-[14px] leading-[1.5] text-[#6F6864] m-0">
                                    Establish clear communication, fair agreements, and ethical practices that foster long-term artist-label relationships
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-6 bg-[#FAFAFA] rounded-[12px] border border-[#EEEEEE] items-start transition-shadow duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                            <div className="w-9 h-9 bg-[#6F6864] text-white rounded-full flex items-center justify-center text-[16px] font-semibold shrink-0">3</div>
                            <div className="flex-1">
                                <h4 className="text-[18px] font-semibold text-[#333] mb-2">Reduce Barriers</h4>
                                <p className="text-[14px] leading-[1.5] text-[#6F6864] m-0">
                                    Simplify access to professional recording, production, and distribution for independent artists.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-6 bg-[#FAFAFA] rounded-[12px] border border-[#EEEEEE] items-start transition-shadow duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                            <div className="w-9 h-9 bg-[#6F6864] text-white rounded-full flex items-center justify-center text-[16px] font-semibold shrink-0">4</div>
                            <div className="flex-1">
                                <h4 className="text-[18px] font-semibold text-[#333] mb-2">Build a Creative Community</h4>
                                <p className="text-[14px] leading-[1.5] text-[#6F6864] m-0">
                                    Support collaboration, mentorship, and cultural expression rooted in Miami's diverse music scene.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecordzSolutionSection;
