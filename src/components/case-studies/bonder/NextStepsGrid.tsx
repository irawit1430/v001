
const ASSETS = {
    iconUserTesting: 'bg-gray-300',
    iconIterate: 'bg-gray-300',
    iconAnalytics: 'bg-gray-300',
    iconFeatures: 'bg-gray-300',
};

const NextStepsGrid = () => {
    const steps = [
        {
            title: 'User Testing',
            desc: 'Conduct usability testing with target users to validate design decisions and identify pain points.',
            icon: ASSETS.iconUserTesting
        },
        {
            title: 'Iterate & Refine',
            desc: 'Incorporate feedback to improve the user experience and address any discovered issues.',
            icon: ASSETS.iconIterate
        },
        {
            title: 'Analytics Integration',
            desc: 'Implement tracking to measure key metrics like user engagement and retention rates.',
            icon: ASSETS.iconAnalytics
        },
        {
            title: 'Future Features',
            desc: 'Explore premium features like event creation, business partnerships, and community moderation tools.',
            icon: ASSETS.iconFeatures
        },
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-container mx-auto px-4 md:px-8 flex flex-col gap-12">

                <h2 className="text-[40px] font-medium text-black leading-tight">
                    Next Steps:
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white border border-[#D9D9D9] rounded-[20px] p-8 flex flex-col gap-6 hover:shadow-lg transition-shadow"
                        >
                            {/* Icon Placeholder */}
                            <div className={`w-[60px] h-[60px] rounded-full ${step.icon}`} />

                            <div className="flex flex-col gap-2">
                                <h3 className="text-[30px] font-medium text-taupe leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-[20px] font-normal text-taupe leading-normal">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default NextStepsGrid;
