const InfoArchitectureSection = () => {
    const columns = [
        {
            title: 'Circle',
            items: ['Member\nDashboard', 'Recommended\nEvents', 'Groups\npreview']
        },
        {
            title: 'Events',
            items: ['Event Feed\n(Browse)', 'Curated\nEvents']
        },
        {
            title: 'Community',
            items: ['Suggested\nGroups', 'Group\nDetails', 'Create\nGroup']
        },
        {
            title: 'Messages',
            items: ['Advisor/\nStaff Chat', 'Event\nChats']
        },
        {
            title: 'Profile',
            items: ['Settings', 'Interest &\nPreferences']
        }
    ];

    return (
        <section className="w-full py-2">
            <div className="max-w-container mx-auto">
                <div className="w-full flex justify-center overflow-x-auto pb-8">
                    <div className="min-w-[900px] w-full max-w-[1200px] flex flex-col items-center font-sans">

                        {/* Top Levels */}
                        <div className="flex flex-col items-center z-10 w-full relative">
                            <div className="bg-[#7A726D] text-white px-10 py-4 rounded-lg text-2xl font-medium shadow-sm">
                                Sign in / Create Account
                            </div>

                            <div className="w-px h-6 bg-[#A0AAB4]"></div>

                            <div className="bg-[#7A726D] text-white px-10 py-4 rounded-lg text-2xl font-medium shadow-sm">
                                Verify Lifetime Member
                            </div>

                            <div className="w-px h-6 bg-[#A0AAB4]"></div>

                            <div className="bg-[#7A726D] text-white px-10 py-4 rounded-lg text-2xl font-medium shadow-sm z-20">
                                Interest and Location
                            </div>

                            <div className="w-px h-8 bg-[#A0AAB4]"></div>
                        </div>

                        {/* Columns Container */}
                        <div className="w-[95%] flex justify-between relative mt-[-1px]">
                            {columns.map((col, idx) => (
                                <div key={idx} className="flex flex-col items-center w-[18%]">
                                    {/* Connector Header */}
                                    <div className="w-full relative h-8">
                                        {/* Left horizontal line */}
                                        {idx > 0 && <div className="absolute left-0 right-1/2 top-0 h-px bg-[#A0AAB4]"></div>}
                                        {/* Right horizontal line */}
                                        {idx < columns.length - 1 && <div className="absolute left-1/2 right-0 top-0 h-px bg-[#A0AAB4]"></div>}
                                        {/* Vertical drop line */}
                                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#A0AAB4] -translate-x-1/2"></div>
                                    </div>

                                    {/* Column Header */}
                                    <div className="w-[85%] bg-[#7A726D] text-white py-3 rounded-lg text-center text-xl font-medium shadow-sm z-10 relative">
                                        {col.title}
                                    </div>

                                    {/* Sub-items Container */}
                                    <div className="w-full flex justify-center mt-6 relative">
                                        <div className="w-[85%] flex flex-col gap-4 relative">
                                            {/* Vertical spine line */}
                                            <div className="absolute -left-[16%] top-[-24px] bottom-1/2 w-px bg-[#A0AAB4]"></div>

                                            {col.items.map((item, itemIdx) => (
                                                <div key={itemIdx} className="w-full relative">
                                                    {/* Horizontal connector line */}
                                                    <div className="absolute top-1/2 -left-[16%] w-[16%] h-px bg-[#A0AAB4] -translate-y-1/2"></div>

                                                    {/* Box */}
                                                    <div className="w-full bg-white border border-[#D1D5DB] rounded-lg py-3 px-2 text-center text-[15px] leading-[1.3] text-[#374151] whitespace-pre-line shadow-sm">
                                                        {item}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default InfoArchitectureSection;
