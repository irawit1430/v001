const ASSETS = {
    screen1: 'bg-gray-200',
    screen2: 'bg-gray-200',
    screen3: 'bg-gray-200',
    screen4: 'bg-gray-200',
};

const LoFiWireframesSection = () => {
    const screens = [
        { label: 'Bonder Circle Screen', subLabel: 'Join different circles', bg: ASSETS.screen1 },
        { label: 'Lifetime Event Screen', subLabel: 'Explore curated events', bg: ASSETS.screen2 },
        { label: 'Lifetime Advisor Screen', subLabel: 'Advisor view of request', bg: ASSETS.screen3 },
        { label: 'Lifetime Home Screen', subLabel: 'Main home screen', bg: ASSETS.screen4 },
    ];

    return (
        <section className="w-full bg-taupe py-16 md:py-24">
            <div className="max-w-container mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-[60px] mb-16">
                    <div className="lg:w-1/3 max-w-[200px]">
                        <h2 className="text-[32px] font-medium text-white leading-tight">
                            Lo-Fi Wireframes:
                        </h2>
                    </div>
                    <div className="lg:w-2/3">
                        <p className="text-[24px] font-medium text-white leading-tight">
                            Early wireframes helped shape the core structure of the app.
                        </p>
                        <p className="text-[18px] font-normal text-white/90 leading-[1.7] mt-4">
                            To support the Lifetime partnership, I created Lo-Fi wireframes for the Bonder app that map out key user journeys and core functionality. This step prioritized usability, content organization, and flow clarity to ensure an intuitive experience before refining visual design.
                        </p>
                    </div>
                </div>

                {/* Wireframe Screens Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {screens.map((screen, index) => (
                        <div key={index} className="flex flex-col items-start gap-4">
                            {/* Phone Mockup Placeholder */}
                            <div
                                className={`w-full max-w-[318px] h-[692px] rounded-[30px] shadow-xl ${screen.bg} flex items-center justify-center text-taupe/30 text-lg`}
                            >
                                Lo-Fi Mockup
                            </div>
                            {/* Labels */}
                            <span className="text-[22px] font-medium text-white text-left leading-tight">
                                {screen.label}
                            </span>
                            <span className="text-[15px] font-normal text-white/80 text-left leading-snug">
                                {screen.subLabel}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LoFiWireframesSection;
