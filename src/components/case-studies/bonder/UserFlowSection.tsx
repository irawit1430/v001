const ASSETS = {
    userFlowDiagram: 'bg-gray-100',
};

const UserFlowSection = () => {
    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-[60px] mb-16">

                    {/* Left Column - Header */}
                    <div className="lg:w-1/3 max-w-[200px]">
                        <h2 className="text-[32px] font-medium text-black leading-tight">
                            User Journey:
                        </h2>
                        <p className="text-[24px] font-normal text-[#333333] leading-tight mt-2">
                            Events
                        </p>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:w-2/3 flex flex-col gap-6">
                        <p className="text-[18px] font-medium text-[#6F6864] leading-[1.7]">
                            These user flows outline the event flow within the Bonder app, mapping how users discover, join, and engage with Life Time Fitness events.
                        </p>
                        <p className="text-[18px] font-normal text-[#6F6864] leading-[1.7]">
                            Defining this flow early helped validate system logic, reduce friction for Life Time members, and ensure a seamless experience from entry to participation.
                        </p>
                    </div>

                </div>

                {/* User Flow Diagram Placeholder */}
                <div className={`w-full max-w-[1504px] mx-auto h-[200px] md:h-[313px] rounded-[10px] ${ASSETS.userFlowDiagram} flex items-center justify-center text-taupe/40 text-xl border-2 border-dashed border-taupe/20`}>
                    User Flow Diagram (1504x313px)
                </div>

            </div>
        </section>
    );
};

export default UserFlowSection;
