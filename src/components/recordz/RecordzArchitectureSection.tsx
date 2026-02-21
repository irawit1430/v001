

// Import diagram images
import iaDiagram from '../../assets/ia-diagram.png';
import userFlowDiagram from '../../assets/user-flow-diagram.png';

const RecordzArchitectureSection: React.FC = () => {
    return (
        <>
            {/* Information Architecture Section */}
            <section className="py-20 px-5 max-w-[1244px] mx-auto">
                <div className="w-full">
                    {/* Header */}
                    <div className="flex gap-[60px] items-start flex-wrap mb-[50px] md:flex-col md:gap-5">
                        <h2 className="text-[32px] font-medium text-black m-0 flex-[0_0_280px] md:text-[26px] md:flex-none whitespace-nowrap">Information Architecture:</h2>
                        <div className="flex-1 min-w-[300px]">
                            <p className="text-[20px] leading-[1.5] text-[#333] mb-4 md:text-[18px]">
                                <strong>To translate the brand's vision into a clear and intuitive website structure, I mapped out 1331 Recordz's core navigation system.</strong>
                            </p>
                            <p className="text-[17px] leading-[1.7] text-[#6F6864] m-0 md:text-[16px]">
                                The information architecture shows how users navigate key sections of the site, separating the record label and studio identities while maintaining a cohesive brand experience.
                            </p>
                        </div>
                    </div>

                    {/* IA Diagram */}
                    <div className="w-full overflow-x-auto mt-[30px] pt-5 pb-10">
                        <div className="min-w-[1000px] w-full max-w-[1285px] flex flex-col items-center relative mx-auto pb-8 font-sans">
                            {/* LEVEL 0: 1331 Recordz */}
                            <div className="relative flex flex-col items-center">
                                <div className="bg-[#2D1F1A] text-white text-[24px] px-[45px] py-[14px] rounded-[8px] z-10 shadow-sm relative font-medium tracking-wide">
                                    1331 Recordz
                                </div>
                                <div className="w-[1px] h-[40px] bg-[#8a8a8a]"></div>
                            </div>

                            {/* LEVEL 1: Container */}
                            <div className="flex w-full relative">
                                {/* Horizontal Line connecting Branches (25% left, 25% right) */}
                                <div className="absolute top-0 left-[25%] right-[25%] h-[1px] bg-[#8a8a8a]"></div>

                                {/* BRANCH 1: The Label */}
                                <div className="flex-1 flex flex-col items-center relative">
                                    <div className="w-[1px] h-[40px] bg-[#8a8a8a] absolute top-0"></div>

                                    <div className="bg-[#22AD0A] text-white text-[20px] px-[40px] py-[12px] rounded-[8px] z-10 mt-[40px] shadow-sm relative font-medium">
                                        The Label
                                    </div>

                                    <div className="w-[1px] h-[40px] bg-[#8a8a8a]"></div>

                                    {/* Branch 1 Children Container */}
                                    <div className="flex w-[85%] relative">
                                        <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[1px] bg-[#8a8a8a]"></div>

                                        {[
                                            { name: "Label Home" },
                                            { name: "About" },
                                            { name: "Artist" },
                                            { name: "Contact" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex-1 flex flex-col items-center relative px-2">
                                                <div className="w-[1px] h-[40px] bg-[#8a8a8a] absolute top-0"></div>
                                                <div className="bg-[#716864] text-white text-[17px] px-[16px] py-[10px] rounded-[8px] mt-[40px] z-10 whitespace-nowrap shadow-sm text-center min-w-[110px]">
                                                    {item.name}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* BRANCH 2: The Studio */}
                                <div className="flex-1 flex flex-col items-center relative">
                                    <div className="w-[1px] h-[40px] bg-[#8a8a8a] absolute top-0"></div>

                                    <div className="bg-[#22AD0A] text-white text-[20px] px-[40px] py-[12px] rounded-[8px] z-10 mt-[40px] shadow-sm relative font-medium">
                                        The Studio
                                    </div>

                                    <div className="w-[1px] h-[40px] bg-[#8a8a8a]"></div>

                                    {/* Branch 2 Children Container */}
                                    <div className="flex w-[85%] relative">
                                        <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[1px] bg-[#8a8a8a]"></div>

                                        {[
                                            { name: "Studio Home" },
                                            { name: "About" },
                                            { name: "Services" },
                                            { name: "Contact" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex-1 flex flex-col items-center relative px-2">
                                                <div className="w-[1px] h-[40px] bg-[#8a8a8a] absolute top-0"></div>
                                                <div className="bg-[#716864] text-white text-[17px] px-[16px] py-[10px] rounded-[8px] mt-[40px] z-10 whitespace-nowrap shadow-sm text-center min-w-[110px]">
                                                    {item.name}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* User Flows Section */}
            <section className="pt-[60px] px-5 pb-[80px] max-w-[1244px] mx-auto border-t border-[#E5E5E5]">
                <div className="w-full">
                    {/* Header */}
                    <div className="flex gap-[60px] items-start flex-wrap mb-[50px] md:flex-col md:gap-5">
                        <h2 className="text-[32px] font-medium text-black m-0 flex-[0_0_200px] md:text-[26px] md:flex-none whitespace-nowrap">User Flows:</h2>
                        <div className="flex-1 min-w-[300px]">
                            <p className="text-[20px] leading-[1.5] text-[#333] mb-4 md:text-[18px]">
                                <strong>The site architecture was designed to clearly separate 1331 Recordz's record label and studio offerings while maintaining a cohesive brand experience.</strong>
                            </p>
                            <p className="text-[17px] leading-[1.7] text-[#6F6864] mb-4 md:text-[16px]">
                                By guiding users to choose their path early, the navigation supports intuitive exploration and reduces friction.
                            </p>
                            <p className="text-[17px] leading-[1.7] text-[#6F6864] m-0 md:text-[16px]">
                                The studio booking flow was intentionally kept simple and inquiry-based, allowing users to request a session with an engineer without account creation. This approach prioritizes accessibility and mirrors real-world studio workflows, enabling efficient follow-up by the 1331 Recordz team.
                            </p>
                        </div>
                    </div>

                    {/* User Flow Title */}
                    <h3 className="text-[24px] font-medium text-[#333] mb-[30px] md:text-[20px]">Book Studio Time</h3>

                    {/* User Flow Diagram */}
                    <div className="w-full overflow-x-auto mt-[30px] py-5">
                        <img src={userFlowDiagram} alt="Book Studio Time User Flow" className="max-w-full h-auto block mx-auto md:min-w-[600px]" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default RecordzArchitectureSection;
