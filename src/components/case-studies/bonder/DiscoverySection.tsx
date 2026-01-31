const DiscoverySection = () => {
    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="max-w-container mx-auto px-4 md:px-24">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Left Column - Header */}
                    <div className="lg:w-1/3">
                        <h2 className="text-[40px] font-medium text-black leading-tight">
                            Discovery:
                        </h2>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:w-2/3 flex flex-col gap-8">
                        <h3 className="text-[34px] font-semibold text-taupe leading-tight">
                            Understanding the Problem Space:
                        </h3>
                        <p className="text-[30px] font-medium text-taupe leading-relaxed">
                            <span className="font-semibold">Researching Lifetime's role within Bonder highlighted how scattered and inconsistent</span> wellness and membership experiences can be. My goal was to understand why users often struggle to feel connected, supported, and aware of what their venue offers, especially when navigating services, events, and community activities.
                        </p>
                        <p className="text-[30px] font-medium text-taupe leading-relaxed">
                            <span className="font-semibold">Early exploration revealed a consistent issue:</span> members often feel unsure about how to access or engage with their venue's full ecosystem. They struggle to find events, understand available services, and get support. Current platforms don't offer a unified experience that creates clarity, connection, or a sense of belonging.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DiscoverySection;
