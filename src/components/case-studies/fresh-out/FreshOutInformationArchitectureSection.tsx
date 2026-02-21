// ── Reusable sub‑components ──────────────────────────────────────

const HeaderBox = ({ text }: { text: string }) => (
    <div className="bg-[#212873] text-white rounded-lg px-6 py-3 text-center text-[15px] md:text-[18px] font-medium whitespace-nowrap shadow-sm">
        {text}
    </div>
);

const SubItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-0">
        {/* horizontal tick from spine */}
        <div className="w-4 h-[2px] bg-[#A0AAB4] shrink-0" />
        <div className="border border-[#E5E7EB] rounded-lg py-2.5 px-4 text-center text-[13px] md:text-[15px] text-[#3C3C3C] bg-white w-full whitespace-nowrap">
            {text}
        </div>
    </div>
);

const Column = ({ title, items }: { title: string; items: string[] }) => (
    <div className="flex flex-col items-center min-w-[140px]">
        {/* vertical connector from horizontal bar to header */}
        <div className="w-[2px] h-5 bg-[#A0AAB4]" />

        <HeaderBox text={title} />

        {/* Sub‑items with a vertical spine on the left */}
        <div className="relative mt-3 w-full pl-5">
            {/* vertical spine */}
            <div className="absolute left-[9px] top-0 bottom-3 w-[2px] bg-[#A0AAB4]" />

            <div className="flex flex-col gap-2.5">
                {items.map((item) => (
                    <SubItem key={item} text={item} />
                ))}
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
