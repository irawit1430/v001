import React from "react";
import "./FreshOutSiteMap.css";

// ── Data ─────────────────────────────────────────────────────────

const columns = [
    { title: "Home", items: ["Feed", "Suggested content", "Groups preview"] },
    { title: "Discover", items: ["Suggested vets", "Suggested groups"] },
    { title: "Events", items: ["Event feed", "Suggested groups", "Explore filters"] },
    { title: "Messages", items: ["Chats", "Matches list"] },
    { title: "Profile", items: ["Settings", "Edit profile"] },
];

/* ─── Geometry constants (in viewBox units) ─── */
const VB_W = 1000;
const VB_H = 310;
const LINE_COLOR = "#3C3C3C";
const SW = 2;

// Column centers (evenly spaced across the 1000-unit width)
const COL_CX = [100, 300, 500, 700, 900];

// Y positions
const ROOT_BOTTOM = 50;        // bottom of Authentication box
const HBAR_Y = 75;             // horizontal bar
const HEADER_TOP = 95;         // top of column header boxes
const HEADER_BOTTOM = 135;     // bottom of column header boxes
const ITEMS_START_Y = 160;     // Y where first sub-item row starts
const ITEM_H = 40;             // height of each sub-item row
const ITEM_GAP = 10;           // gap between items
const SPINE_OFFSET = -50;      // spine X offset from column center (to the left)
const BRANCH_LEN = 20;         // horizontal branch from spine to item box

// ── Build all SVG lines ──────────────────────────────────────────
function buildLines() {
    const elements: React.ReactElement[] = [];

    // 1. Vertical: Root → Horizontal bar
    elements.push(
        <line key="root-bar" x1={VB_W / 2} y1={ROOT_BOTTOM} x2={VB_W / 2} y2={HBAR_Y}
            stroke={LINE_COLOR} strokeWidth={SW} />
    );

    // 2. Horizontal bar spanning column centers
    elements.push(
        <line key="hbar" x1={COL_CX[0]} y1={HBAR_Y} x2={COL_CX[4]} y2={HBAR_Y}
            stroke={LINE_COLOR} strokeWidth={SW} />
    );

    columns.forEach((col, i) => {
        const cx = COL_CX[i];
        const spineX = cx + SPINE_OFFSET;

        // 3. Vertical: horizontal bar → header top
        elements.push(
            <line key={`bar-hdr-${i}`} x1={cx} y1={HBAR_Y} x2={cx} y2={HEADER_TOP}
                stroke={LINE_COLOR} strokeWidth={SW} />
        );

        // 4. Vertical: header bottom → first spine junction
        elements.push(
            <line key={`hdr-junc-${i}`} x1={cx} y1={HEADER_BOTTOM} x2={cx} y2={ITEMS_START_Y - 15}
                stroke={LINE_COLOR} strokeWidth={SW} />
        );

        // 5. Horizontal: column center → spine X at junction
        elements.push(
            <line key={`junc-h-${i}`} x1={spineX} y1={ITEMS_START_Y - 15} x2={cx} y2={ITEMS_START_Y - 15}
                stroke={LINE_COLOR} strokeWidth={SW} />
        );

        // 6. Vertical spine from junction down to last item center
        const lastItemCY = ITEMS_START_Y + (col.items.length - 1) * (ITEM_H + ITEM_GAP) + ITEM_H / 2;
        elements.push(
            <line key={`spine-${i}`} x1={spineX} y1={ITEMS_START_Y - 15} x2={spineX} y2={lastItemCY}
                stroke={LINE_COLOR} strokeWidth={SW} />
        );

        // 7. Horizontal branches to each item
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

// ── Main Component ───────────────────────────────────────────────

const FreshOutInformationArchitectureSection = () => {
    const svgLines = buildLines();

    return (
        <div className="fo-sitemap-wrapper">
            <div className="fo-sitemap-svg-container">
                {/* SVG with all lines */}
                <svg
                    viewBox={`0 0 ${VB_W} ${VB_H}`}
                    className="fo-sitemap-svg"
                    preserveAspectRatio="xMidYMid meet"
                >
                    {svgLines}

                    {/* Root box */}
                    <rect x={VB_W / 2 - 90} y={10} width={180} height={40} rx={8} fill="#212873" />
                    <text x={VB_W / 2} y={35} textAnchor="middle" fill="white" fontSize="16" fontWeight="500" fontFamily="inherit">
                        Authentication
                    </text>

                    {/* Column headers */}
                    {columns.map((col, i) => {
                        const cx = COL_CX[i];
                        const boxW = 100;
                        return (
                            <g key={col.title}>
                                <rect x={cx - boxW / 2} y={HEADER_TOP} width={boxW} height={HEADER_BOTTOM - HEADER_TOP} rx={8} fill="#212873" />
                                <text x={cx} y={HEADER_TOP + 25} textAnchor="middle" fill="white" fontSize="14" fontWeight="500" fontFamily="inherit">
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
                            const boxW = Math.max(item.length * 8 + 20, 90);
                            return (
                                <g key={`item-${i}-${j}`}>
                                    <rect
                                        x={itemStartX}
                                        y={itemCY - ITEM_H / 2 + 2}
                                        width={boxW}
                                        height={ITEM_H - 4}
                                        rx={8}
                                        fill="white"
                                        stroke="#D1D5DB"
                                        strokeWidth={1}
                                    />
                                    <text
                                        x={itemStartX + boxW / 2}
                                        y={itemCY + 5}
                                        textAnchor="middle"
                                        fill="#3C3C3C"
                                        fontSize="12"
                                        fontFamily="inherit"
                                    >
                                        {item}
                                    </text>
                                </g>
                            );
                        });
                    })}
                </svg>
            </div>
        </div>
    );
};

export default FreshOutInformationArchitectureSection;
