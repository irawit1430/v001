import React from 'react';

// ── Data ─────────────────────────────────────────────────────────

const rootNodes = [
    "Sign in / Create Account",
    "Verify Lifetime Member",
    "Interest and Location"
];

const columns = [
    {
        title: 'Circle',
        width: 140, // 137.19
        items: ['Member\nDashboard', 'Recommended\nEvents', 'Groups\npreview']
    },
    {
        title: 'Events',
        width: 175, // 171.26
        items: ['Event Feed\n(Browse)', 'Curated\nEvents']
    },
    {
        title: 'Community',
        width: 175, // 171.26
        items: ['Suggested\nGroups', 'Group\nDetails', 'Create\nGroup']
    },
    {
        title: 'Messages',
        width: 205, // 202.48
        items: ['Advisor/\nStaff Chat', 'Event\nChats']
    },
    {
        title: 'Profile',
        width: 160, // 158.01
        items: ['Settings', 'Interest &\nPreferences']
    }
];

/* ─── Geometry constants (in viewBox units) ─── */
const VB_W = 1200;
const VB_H = 750;
const LINE_COLOR = "#000000";
const SW = 1.5;
const BOX_BG = "#6F6864";
const BOX_BORDER = "#6F6864";

// Column centers (evenly spaced across the width)
const COL_CX = [150, 375, 600, 825, 1050];

// Root box dimensions
const ROOT_W = 450;
const ROOT_H = 75; // 74.55
const ROOT_START_Y = 20;
const ROOT_GAP = 20;

const HBAR_Y = ROOT_START_Y + 3 * ROOT_H + 2 * ROOT_GAP + 30; // ~335
const HEADER_TOP = HBAR_Y + 20; // 355
const HEADER_H = 66; // 66.23
const HEADER_BOTTOM = HEADER_TOP + HEADER_H; // 421

const ITEMS_START_Y = HEADER_BOTTOM + 35;     // 456
const ITEM_H = 76;             // height of each sub-item box (+ padding) // Average 75.69, 66.23, 91.78 -> ~76
const ITEM_GAP = 15;           // gap between items
const SPINE_OFFSET = -80;      // spine X offset from column center (to the left)
const BRANCH_LEN = 15;         // horizontal branch from spine to item box
const ITEM_W = 165;            // width of sub-item box

// ── Build all SVG lines ──────────────────────────────────────────
function buildLines() {
    const elements: React.ReactElement[] = [];

    // 1. Root Vertical connections (between the 3 root boxes)
    for (let i = 0; i < 2; i++) {
        const y1 = ROOT_START_Y + (i + 1) * ROOT_H + i * ROOT_GAP;
        const y2 = y1 + ROOT_GAP;
        elements.push(
            <line key={`root-conn-${i}`} x1={VB_W / 2} y1={y1} x2={VB_W / 2} y2={y2}
                stroke={LINE_COLOR} strokeWidth={SW} />
        );
    }

    // 2. Vertical: Last Root → Horizontal bar
    const lastRootBottom = ROOT_START_Y + 3 * ROOT_H + 2 * ROOT_GAP;
    elements.push(
        <line key="root-bar" x1={VB_W / 2} y1={lastRootBottom} x2={VB_W / 2} y2={HBAR_Y}
            stroke={LINE_COLOR} strokeWidth={SW} />
    );

    // 3. Horizontal bar spanning column centers
    elements.push(
        <line key="hbar" x1={COL_CX[0]} y1={HBAR_Y} x2={COL_CX[4]} y2={HBAR_Y}
            stroke={LINE_COLOR} strokeWidth={SW} />
    );

    columns.forEach((col, i) => {
        const cx = COL_CX[i];
        const spineX = cx + SPINE_OFFSET;

        // 4. Vertical: horizontal bar → header top
        elements.push(
            <line key={`bar-hdr-${i}`} x1={cx} y1={HBAR_Y} x2={cx} y2={HEADER_TOP}
                stroke={LINE_COLOR} strokeWidth={SW} />
        );

        // 5. Vertical: header bottom → first spine junction
        const firstJunctionY = ITEMS_START_Y + ITEM_H / 2;
        elements.push(
            <line key={`hdr-junc-${i}`} x1={cx} y1={HEADER_BOTTOM} x2={cx} y2={firstJunctionY - 20}
                stroke={LINE_COLOR} strokeWidth={SW} />
        );

        // 6. Horizontal: column center → spine X at junction
        elements.push(
            <line key={`junc-h-${i}`} x1={spineX} y1={firstJunctionY - 20} x2={cx} y2={firstJunctionY - 20}
                stroke={LINE_COLOR} strokeWidth={SW} />
        );

        // 7. Vertical spine from junction down to last item center
        const lastItemCY = ITEMS_START_Y + (col.items.length - 1) * (ITEM_H + ITEM_GAP) + ITEM_H / 2;
        elements.push(
            <line key={`spine-${i}`} x1={spineX} y1={firstJunctionY - 20} x2={spineX} y2={lastItemCY}
                stroke={LINE_COLOR} strokeWidth={SW} />
        );

        // 8. Horizontal branches to each item
        col.items.forEach((_, j) => {
            const itemCY = ITEMS_START_Y + j * (ITEM_H + ITEM_GAP) + ITEM_H / 2;
            elements.push(
                <line key={`branch-${i}-${j}`} x1={spineX} y1={itemCY} x2={spineX + BRANCH_LEN} y2={itemCY}
                    stroke={LINE_COLOR} strokeWidth={SW} />
            );
        });
    });

    return elements;
}

const InfoArchitectureSection = () => {
    const svgLines = buildLines();

    return (
        <section className="w-full py-2">
            <div className="max-w-container mx-auto">
                <div className="w-full overflow-x-auto pb-8 px-4">
                    <div className="w-full max-w-[1200px] mx-auto min-w-[900px]">
                        <svg
                            viewBox={`0 0 ${VB_W} ${VB_H}`}
                            className="w-full h-auto block"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <style>
                                {`
                                    text {
                                        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                                    }
                                `}
                            </style>

                            {/* Lines */}
                            {svgLines}

                            {/* Root boxes */}
                            {rootNodes.map((node, i) => {
                                const y = ROOT_START_Y + i * (ROOT_H + ROOT_GAP);
                                return (
                                    <g key={`root-${i}`}>
                                        <rect x={VB_W / 2 - ROOT_W / 2} y={y} width={ROOT_W} height={ROOT_H} rx={10} fill={BOX_BG} />
                                        <text x={VB_W / 2} y={y + ROOT_H / 2 + 8} textAnchor="middle" fill="white" fontSize="26" fontWeight="400">
                                            {node}
                                        </text>
                                    </g>
                                );
                            })}

                            {/* Column headers */}
                            {columns.map((col, i) => {
                                const cx = COL_CX[i];
                                return (
                                    <g key={col.title}>
                                        <rect x={cx - col.width / 2} y={HEADER_TOP} width={col.width} height={HEADER_H} rx={10} fill={BOX_BG} />
                                        <text x={cx} y={HEADER_TOP + HEADER_H / 2 + 6} textAnchor="middle" fill="white" fontSize="22" fontWeight="400">
                                            {col.title}
                                        </text>
                                    </g>
                                );
                            })}

                            {/* Sub-item boxes */}
                            {columns.map((col, i) => {
                                const cx = COL_CX[i];
                                const spineX = cx + SPINE_OFFSET;
                                const itemStartX = spineX + BRANCH_LEN;

                                return col.items.map((item, j) => {
                                    const itemCY = ITEMS_START_Y + j * (ITEM_H + ITEM_GAP) + ITEM_H / 2;
                                    const lines = item.split('\n');
                                    return (
                                        <g key={`item-${i}-${j}`}>
                                            <rect
                                                x={itemStartX}
                                                y={itemCY - ITEM_H / 2}
                                                width={ITEM_W}
                                                height={ITEM_H}
                                                rx={8}
                                                fill="white"
                                                stroke={BOX_BORDER}
                                                strokeWidth={1}
                                            />
                                            {lines.length === 1 ? (
                                                <text
                                                    x={itemStartX + ITEM_W / 2}
                                                    y={itemCY + 5}
                                                    textAnchor="middle"
                                                    fill="#000000"
                                                    fontSize="15"
                                                    fontWeight="400"
                                                >
                                                    {lines[0]}
                                                </text>
                                            ) : (
                                                <>
                                                    <text
                                                        x={itemStartX + ITEM_W / 2}
                                                        y={itemCY - 5}
                                                        textAnchor="middle"
                                                        fill="#000000"
                                                        fontSize="15"
                                                        fontWeight="400"
                                                    >
                                                        {lines[0]}
                                                    </text>
                                                    <text
                                                        x={itemStartX + ITEM_W / 2}
                                                        y={itemCY + 15}
                                                        textAnchor="middle"
                                                        fill="#000000"
                                                        fontSize="15"
                                                        fontWeight="400"
                                                    >
                                                        {lines[1]}
                                                    </text>
                                                </>
                                            )}
                                        </g>
                                    );
                                });
                            })}
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoArchitectureSection;
