// ── Reusable sub‑components ──────────────────────────────────────

const HeaderBox = ({ text }: { text: string }) => (
    <div className="bg-[#212873] text-white rounded-lg px-6 py-3 text-center text-[15px] md:text-[18px] font-medium whitespace-nowrap shadow-sm">
        {text}
    </div>
);

const SubItem = ({ text }: { text: string }) => (
    <div className="border border-[#E5E7EB] rounded-lg py-2.5 px-5 text-center text-[13px] md:text-[15px] text-[#3C3C3C] bg-white whitespace-nowrap">
        {text}
    </div>
);

const Column = ({ title, items }: { title: string; items: string[] }) => (
    <div className="flex flex-col items-center" style={{ minWidth: 120 }}>
        {/* vertical connector from horizontal bar down to header box */}
        <div className="w-[2px] h-5 bg-[#A0AAB4]" />

        <HeaderBox text={title} />

        {/* Sub‑items with branching lines */}
        <div className="flex flex-col relative w-full items-center mt-4">
            <div className="relative w-max">
                {/* Vertical spine line on the left edge */}
                {items.length > 0 && (
                    <div
                        className="absolute bg-[#A0AAB4]"
                        style={{
                            width: 2,
                            left: 0,
                            top: -16,
                            height: 'calc(100% - 6px)',
                        }}
                    />
                )}
                {/* Horizontal connector from the center of column to the left spine */}
                {items.length > 0 && (
                    <div
                        className="absolute bg-[#A0AAB4]"
                        style={{
                            height: 2,
                            left: 0,
                            width: '50%',
                            top: -16,
                        }}
                    />
                )}
                {/* Vertical drop from HeaderBox */}
                {items.length > 0 && (
                    <div
                        className="absolute bg-[#A0AAB4]"
                        style={{
                            width: 2,
                            left: '50%',
                            top: -16,
                            height: 16,
                        }}
                    />
                )}
                <div className="flex flex-col items-start w-full">
                    {items.map((item, idx) => (
                        <div key={item} className="flex items-center relative" style={{ marginTop: idx === 0 ? 0 : 12 }}>
                            {/* horizontal branch from spine to sub-item */}
                            <div className="w-4 h-[2px] bg-[#A0AAB4]" />
                            <SubItem text={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// ── Data ─────────────────────────────────────────────────────────

const columns: { title: string; items: string[] }[] = [
    { title: "Home", items: ["Feed", "Suggested content", "Groups preview"] },
    { title: "Discover", items: ["Suggested vets", "Suggested groups"] },
    { title: "Events", items: ["Event feed", "Suggested groups", "Explore filters"] },
    { title: "Messages", items: ["Chats", "Matches list"] },
    { title: "Profile", items: ["Settings", "Edit profile"] },
];

// ── Main Component ───────────────────────────────────────────────

const FreshOutInformationArchitectureSection = () => {
    return (
        <div className="w-full overflow-x-auto py-8 px-4 no-scrollbar">
            <div className="w-max min-w-[700px] mx-auto flex flex-col items-center">
                {/* Top‑level root node */}
                <div className="bg-[#212873] text-white rounded-lg px-10 py-3.5 text-[18px] md:text-[22px] font-medium shadow-sm">
                    Authentication
                </div>

                {/* Short vertical line from root to horizontal bar */}
                <div className="w-[2px] h-6 bg-[#A0AAB4]" />

                {/* Horizontal bar spanning all columns */}
                <div className="relative w-full flex items-start">
                    {/* The horizontal connector line */}
                    <div className="absolute top-0 left-[60px] right-[60px] h-[2px] bg-[#A0AAB4]" />

                    {/* Columns */}
                    <div className="flex justify-between w-full gap-3 md:gap-5">
                        {columns.map((col) => (
                            <Column key={col.title} title={col.title} items={col.items} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreshOutInformationArchitectureSection;
