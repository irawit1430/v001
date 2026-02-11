import iconUserTesting from '../../../assets/icon-user-testing.png';
import iconIterate from '../../../assets/icon-iterate.png';
import iconAnalytics from '../../../assets/icon-analytics.png';
import iconFeatures from '../../../assets/icon-features.png';

const NextStepsGrid = () => {
    const steps = [
        {
            title: 'User Testing',
            desc: 'Conduct usability testing with target users to validate design decisions and identify pain points.',
            icon: iconUserTesting
        },
        {
            title: 'Iterate & Refine',
            desc: 'Incorporate feedback to improve the user experience and address any discovered issues.',
            icon: iconIterate
        },
        {
            title: 'Analytics Integration',
            desc: 'Implement tracking to measure key metrics like user engagement and retention rates.',
            icon: iconAnalytics
        },
        {
            title: 'Future Features',
            desc: 'Explore premium features like event creation, business partnerships, and community moderation tools.',
            icon: iconFeatures
        },
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-container mx-auto px-4 md:px-8 flex flex-col gap-12">

                <h2 className="text-[32px] font-medium text-black leading-tight">
                    Next Steps:
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-[#F9F9F9] rounded-[16px] p-6 flex items-start gap-4 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                        >
                            {/* Icon Container */}
                            <div className="w-[44px] h-[44px] bg-[#EEEEEE] rounded-[12px] flex items-center justify-center shrink-0">
                                <img
                                    src={step.icon}
                                    alt={step.title}
                                    className="w-[24px] h-[24px] object-contain"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-[18px] font-semibold text-[#333333] leading-tight m-0">
                                    {step.title}
                                </h3>
                                <p className="text-[14px] font-normal text-[#6F6864] leading-[1.5] m-0">
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
