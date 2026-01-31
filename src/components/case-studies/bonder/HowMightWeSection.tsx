const HowMightWeSection = () => {
    const questions = [
        'How might we help members easily understand and navigate Lifetime\'s full ecosystem?',
        'How might we enable faster, more reliable communication between members and staff?',
        'How might we strengthen members\' sense of connection and community within their venue?',
        'How might we simplify onboarding so members immediately see the value of Bonder + Lifetime?',
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Left Column - Header */}
                    <div className="lg:w-1/3">
                        <h2 className="text-[40px] font-medium text-black leading-tight">
                            How Might We?
                        </h2>
                        <p className="text-[34px] font-medium text-taupe leading-tight mt-4">
                            Turning insights into opportunity through the right questions.
                        </p>
                    </div>

                    {/* Right Column - Questions */}
                    <div className="lg:w-2/3">
                        <ul className="flex flex-col gap-6">
                            {questions.map((question, index) => (
                                <li key={index} className="text-[30px] font-normal text-taupe leading-relaxed">
                                    {question}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowMightWeSection;
