

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
                        <h2 className="text-[32px] font-medium text-black m-0 flex-[0_0_280px] md:text-[26px] md:flex-none">Information Architecture:</h2>
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
                    <div className="w-full overflow-x-auto mt-[30px] py-5">
                        <img src={iaDiagram} alt="Information Architecture Diagram" className="max-w-full h-auto block mx-auto md:min-w-[600px]" />
                    </div>
                </div>
            </section>

            {/* User Flows Section */}
            <section className="pt-[60px] px-5 pb-[80px] max-w-[1244px] mx-auto border-t border-[#E5E5E5]">
                <div className="w-full">
                    {/* Header */}
                    <div className="flex gap-[60px] items-start flex-wrap mb-[50px] md:flex-col md:gap-5">
                        <h2 className="text-[32px] font-medium text-black m-0 flex-[0_0_200px] md:text-[26px] md:flex-none">User Flows:</h2>
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
