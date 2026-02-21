

const SolutionOverviewSection: React.FC = () => {
    return (
        <section className="py-20 px-5 max-w-[1244px] mx-auto pb-20">
            <div className="flex gap-10 items-start flex-wrap md:flex-col md:gap-5">
                <div className="flex-1 min-w-[250px]">
                    <h2 className="text-[40px] font-medium text-black mb-[30px] md:text-[32px] whitespace-nowrap">Solution Overview:</h2>
                </div>
                <div className="flex-[2] min-w-[300px]">
                    <p className="text-[28px] text-[#6F6864] mb-5 font-medium md:text-[24px]">
                        Turning insights into opportunity with the right solution.
                    </p>
                    <p className="text-[30px] leading-[1.4] font-normal text-[#6F6864] mb-5 md:text-[20px]">
                        Baby Thrift is a parent-focused resale marketplace designed to make buying and selling secondhand baby products simple, trustworthy, and efficient. The solution prioritizes clarity, safety, and ease of use by addressing common pain points found in existing resale platforms, while creating a more supportive experience for parents.
                    </p>

                    <h3 className="text-[24px] font-medium text-black mt-10 mb-5 md:text-[22px]">The solution is shaped by four core goals:</h3>

                    <ol className="list-decimal pl-5 flex flex-col gap-5">
                        <li className="text-[22px] leading-[1.5] text-[#6F6864] md:text-[20px]">Enable parents to connect through shared sustainable values</li>
                        <li className="text-[22px] leading-[1.5] text-[#6F6864] md:text-[20px]">Create a safe and trusted environment for secondhand transactions</li>
                        <li className="text-[22px] leading-[1.5] text-[#6F6864] md:text-[20px]">Reduce the clutter of general marketplaces to focus on baby items</li>
                        <li className="text-[22px] leading-[1.5] text-[#6F6864] md:text-[20px]">Support community-building through trusted parent networks</li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default SolutionOverviewSection;
