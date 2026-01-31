const ASSETS = {
    auditDiagram: 'bg-gray-100',
};

const CompetitiveAuditSection = () => {
    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Left Column - Header */}
                    <div className="lg:w-1/3">
                        <h2 className="text-[40px] font-medium text-black leading-tight">
                            Competitive Audit:
                        </h2>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:w-2/3">
                        <p className="text-[30px] font-medium text-taupe leading-relaxed">
                            Analyzing competitors helped reveal where current fitness and membership apps succeed and where they fall short. While they offer strong booking and discovery tools, competitors lack unified event flows, real-time support, and connected venue ecosystems. These gaps highlight clear opportunities for Bonder to improve the Lifetime member experience.
                        </p>
                    </div>

                </div>

                {/* Competitive Audit Diagram Placeholder */}
                <div className={`w-full max-w-[1446px] mx-auto h-[500px] md:h-[700px] lg:h-[933px] mt-16 rounded-[20px] ${ASSETS.auditDiagram} flex items-center justify-center text-taupe/40 text-2xl border-2 border-dashed border-taupe/20`}>
                    Competitive Audit Diagram (1446x933px)
                </div>

            </div>
        </section>
    );
};

export default CompetitiveAuditSection;
