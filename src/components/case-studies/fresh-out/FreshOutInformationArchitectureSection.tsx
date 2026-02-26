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
    <div className="flex flex-col items-center" style={{ minWidth: 140 }}>
        {/* vertical connector from horizontal bar down to header box */}
        <div className="w-[2px] h-5 bg-[#A0AAB4]" />

        <HeaderBox text={title} />

        {/* vertical connector from header box down to first sub-item */}
        <div className="w-[2px] h-4 bg-[#A0AAB4]" />

        {/* Sub‑items stacked and centered */}
        <div className="flex flex-col items-center gap-3">
            {items.map((item) => (
                <SubItem key={item} text={item} />
            ))}
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
                    <div className="absolute top-0 left-[70px] right-[70px] h-[2px] bg-[#A0AAB4]" />

                    {/* Columns */}
                    <div className="flex justify-between w-full gap-5">
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
