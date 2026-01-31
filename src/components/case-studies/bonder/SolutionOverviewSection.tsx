const SolutionOverviewSection = () => {
    const goals = [
        'Help members easily discover and join relevant events and communities.',
        'Create a unified space where communication with staff and advisors feels simple and accessible.',
        'Reduce friction caused by fragmented tools, calendars, and discovery channels.',
        'Support long-term engagement through personalized recommendations and connected member journeys.',
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Left Column - Header */}
                    <div className="lg:w-1/3">
                        <h2 className="text-[40px] font-medium text-black leading-tight">
                            Solution Overview:
                        </h2>
                        <p className="text-[34px] font-medium text-taupe leading-tight mt-4">
                            Turning insights into a streamlined, unified member experience.
                        </p>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:w-2/3 flex flex-col gap-8">
                        <p className="text-[30px] font-medium text-taupe leading-relaxed">
                            Bonder streamlines the Lifetime member experience by unifying events, community engagement, and staff communication into one clear platform. It reduces the confusion of scattered tools and helps members stay informed, connected, and engaged with their venue.
                        </p>

                        <div>
                            <p className="text-[34px] font-medium text-taupe leading-relaxed mb-4">
                                The solution is shaped by four core goals:
                            </p>
                            <ul className="flex flex-col gap-4">
                                {goals.map((goal, index) => (
                                    <li key={index} className="text-[30px] font-medium text-taupe leading-relaxed flex items-start gap-3">
                                        <span className="text-peach">•</span>
                                        {goal}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SolutionOverviewSection;
