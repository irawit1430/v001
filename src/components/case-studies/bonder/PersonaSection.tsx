const ASSETS = {
    personaImage: 'bg-gray-200',
};

const PersonaSection = () => {
    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Left Column - Header */}
                    <div className="lg:w-1/3">
                        <h2 className="text-[40px] font-medium text-black leading-tight">
                            Persona:
                        </h2>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:w-2/3">
                        <p className="text-[30px] font-medium text-taupe leading-relaxed mb-12">
                            I created this persona to capture the needs of a typical Lifetime member who wants to stay engaged but often feels unsure about how to navigate the venue's full range of services. Miles reflects the goals and frustrations observed in research and helped guide the design toward clearer access to events, easier communication with staff, and a more connected membership experience.
                        </p>
                    </div>

                </div>

                {/* Persona Card Placeholder */}
                <div className={`w-full max-w-[1348px] mx-auto h-[600px] md:h-[800px] lg:h-[1000px] mt-12 rounded-[20px] ${ASSETS.personaImage} flex items-center justify-center text-taupe/40 text-2xl`}>
                    Persona Card - Miles (1348x1189px)
                </div>

            </div>
        </section>
    );
};

export default PersonaSection;
