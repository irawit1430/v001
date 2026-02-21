
const ASSETS = {
    screenCircle: 'bg-gray-200',
    screenEvent: 'bg-gray-200',
    screenAdvisor: 'bg-gray-200',
    screenHome: 'bg-gray-200',
};

const HiFiShowcase = () => {
    const screens = [
        { label: 'Lifetime Circle Screen', bg: ASSETS.screenCircle },
        { label: 'Lifetime Event Screen', bg: ASSETS.screenEvent },
        { label: 'Advisor View', bg: ASSETS.screenAdvisor },
        { label: 'Home Screen', bg: ASSETS.screenHome },
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-container mx-auto px-4 md:px-8 flex flex-col gap-16">

                {/* Header */}
                <div className="max-w-[800px] flex flex-col gap-6">
                    <h2 className="text-[32px] font-medium text-black leading-tight whitespace-nowrap">
                        Hi-Fi Wireframes
                    </h2>
                    <p className="text-[24px] font-normal text-[#333333] leading-tight">
                        The Hi-Fi designs brought the app’s visual identity to life.
                    </p>
                </div>

                {/* Screens Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {screens.map((screen, index) => (
                        <div key={index} className="flex flex-col items-start gap-6">
                            {/* Phone Placeholder */}
                            <div
                                className={`w-full max-w-[318px] h-[692px] rounded-[30px] shadow-xl ${screen.bg} flex items-center justify-center text-taupe/30 text-xl`}
                            >
                                {screen.label} Mockup
                            </div>
                            {/* Label */}
                            <span className="text-[22px] font-medium text-black text-left leading-tight">
                                {screen.label}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HiFiShowcase;
