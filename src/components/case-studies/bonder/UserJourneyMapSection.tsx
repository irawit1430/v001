const UserJourneyMapSection = () => {
    const stages = [
        { name: 'Awareness', color: 'bg-taupe' },
        { name: 'Onboarding', color: 'bg-taupe' },
        { name: 'Discovery', color: 'bg-taupe' },
        { name: 'Engagement', color: 'bg-taupe' },
        { name: 'Retention', color: 'bg-taupe' },
    ];

    const actions = [
        'Users discover the app through social media or word of mouth',
        'Creates profile, selects interest, sets location preferences',
        'Browses events, explores groups, views potential connections',
        'Joins an event, starts conversations, makes first connection',
        'Attends multiple events, forms lasting friendships',
    ];

    const quotes = [
        '"I want to find people with similar interest nearby"',
        '"This should be quick and easy to set up"',
        '"I hope I find people I can actually connect with"',
        '"This feels natural and not awkward"',
        '"I found my community!"',
    ];

    const emotions = [
        { emoji: '🤔', label: 'Curious' },
        { emoji: '😊', label: 'Hopeful' },
        { emoji: '😃', label: 'Excited' },
        { emoji: '😌', label: 'Satisfied' },
        { emoji: '🥳', label: 'Delighted' },
    ];

    const opportunities = [
        'Clear value proposition in marketing',
        'Streamlines sign-up with smart defaults',
        'Personalized recommendations based on interest',
        'Ice-breaker prompts and shared activity context',
        'Community features and recurring events',
    ];

    return (
        <section className="w-full bg-light-grey py-16 md:py-24">
            <div className="max-w-container mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 mb-16">
                    <div className="lg:w-1/3">
                        <h2 className="text-[40px] font-medium text-black leading-tight">
                            User Journey:
                        </h2>
                    </div>
                    <div className="lg:w-2/3">
                        <p className="text-[34px] font-medium text-taupe leading-tight mb-4">
                            Mapping the emotional journey from discovery to lasting connections.
                        </p>
                        <p className="text-[30px] font-normal text-taupe leading-relaxed">
                            This journey illustrates how a first-time Bonder user moves from initial awareness to long-term community engagement. Each stage highlights the user's goals, emotions, and key product opportunities that reduce friction and support meaningful, real-world connections.
                        </p>
                    </div>
                </div>

                {/* Journey Map Grid */}
                <div className="overflow-x-auto">
                    <div className="min-w-[1200px]">

                        {/* Stage Headers */}
                        <div className="grid grid-cols-5 gap-4 mb-4">
                            {stages.map((stage, i) => (
                                <div key={i} className={`${stage.color} rounded-[20px] py-6 px-4 text-center`}>
                                    <span className="text-[30px] font-medium text-white">{stage.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* Actions Row */}
                        <div className="grid grid-cols-5 gap-4 mb-4">
                            {actions.map((action, i) => (
                                <div key={i} className="bg-white border border-[#D9D9D9] rounded-[10px] p-4 min-h-[126px]">
                                    <p className="text-[20px] font-medium text-black leading-normal">{action}</p>
                                </div>
                            ))}
                        </div>

                        {/* Quotes Row */}
                        <div className="grid grid-cols-5 gap-4 mb-4">
                            {quotes.map((quote, i) => (
                                <div key={i} className="bg-white border border-[#D9D9D9] rounded-[10px] p-4 min-h-[126px]">
                                    <p className="text-[20px] font-normal italic text-taupe leading-normal">{quote}</p>
                                </div>
                            ))}
                        </div>

                        {/* Emotions Row */}
                        <div className="grid grid-cols-5 gap-4 mb-4">
                            {emotions.map((emotion, i) => (
                                <div key={i} className="bg-white border border-[#D9D9D9] rounded-[10px] p-4 min-h-[69px] flex items-center justify-center gap-3">
                                    <span className="text-3xl">{emotion.emoji}</span>
                                    <span className="text-[30px] font-medium text-black">{emotion.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Opportunities Row */}
                        <div className="grid grid-cols-5 gap-4">
                            {opportunities.map((opp, i) => (
                                <div key={i} className="bg-white border border-[#D9D9D9] rounded-[10px] p-4 min-h-[126px]">
                                    <p className="text-[20px] font-medium text-black leading-normal">{opp}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default UserJourneyMapSection;
