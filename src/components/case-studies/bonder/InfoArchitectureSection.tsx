const ASSETS = {
    iaDiagram: 'bg-gray-100',
};

const InfoArchitectureSection = () => {
    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">

                    {/* Left Column - Header */}
                    <div className="lg:w-1/3">
                        <h2 className="text-[40px] font-medium text-black leading-tight">
                            Information Architecture:
                        </h2>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:w-2/3 flex flex-col gap-6">
                        <p className="text-[34px] font-medium text-taupe leading-relaxed">
                            To translate strategic insights into a clear product structure, I mapped Fresh Out's core navigation system.
                        </p>
                        <p className="text-[30px] font-normal text-taupe leading-relaxed">
                            The information architecture shows how veterans move through key areas of the app, forming the basis for its user flows and interface design.
                        </p>
                    </div>

                </div>

                {/* IA Diagram Placeholder */}
                <div className={`w-full max-w-[1453px] mx-auto h-[500px] md:h-[800px] lg:h-[1000px] rounded-[20px] ${ASSETS.iaDiagram} flex items-center justify-center text-taupe/40 text-2xl border-2 border-dashed border-taupe/20`}>
                    Information Architecture Diagram (1453x1570px)
                </div>

            </div>
        </section>
    );
};

export default InfoArchitectureSection;
