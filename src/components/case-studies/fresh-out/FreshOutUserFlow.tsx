const Box = ({ text, className = "" }: { text: string, className?: string }) => (
    <div className={`bg-[#212873] text-white rounded-lg shadow-md flex items-center justify-center p-3 text-center text-sm md:text-[14px] font-medium leading-tight ${className}`}>
        {text}
    </div>
);

const HArrow = ({ text, className = "" }: { text?: string, className?: string }) => (
    <div className={`flex items-center relative w-full h-full ${className}`}>
        <div className="w-full h-1 bg-[#212873]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[2px] w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-[#212873] border-b-[6px] border-b-transparent" />
        {text && <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[#212873] font-semibold text-sm">{text}</span>}
    </div>
);

const LArrow = ({ text }: { text?: string }) => (
    <div className="relative w-full h-full">
        {/* Vertical down from center of Col 3 (which is 60px from left) */}
        <div className="absolute left-[60px] top-0 w-1 h-[50%] bg-[#212873] -translate-x-1/2" />
        {/* Horizontal right from left-[60px] to right edge */}
        <div className="absolute left-[60px] top-[50%] h-1 w-[100px] bg-[#212873]" />
        {/* Arrow head */}
        <div className="absolute right-0 top-[50%] -translate-y-[4px] translate-x-[2px] w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-[#212873] border-b-[6px] border-b-transparent" />
        {text && <span className="absolute top-[20%] left-[68px] text-[#212873] font-semibold text-sm">{text}</span>}
    </div>
);

const FreshOutUserFlow = () => {
    return (
        <div className="w-full overflow-x-auto py-12 px-4 no-scrollbar">
            <div className="min-w-[1020px] w-max mx-auto relative grid" style={{
                gridTemplateColumns: '120px 40px 120px 40px 120px 40px 120px 40px 120px 40px 120px 40px 120px',
                gridTemplateRows: '120px 120px',
                gap: '20px 0'
            }}>
                {/* Row 1 */}
                {/* Login or Sign up */}
                <div className="col-start-1 col-end-2 row-start-1 flex items-center justify-center z-10">
                    <Box text="Login or Sign Up" className="w-[120px] h-[70px]" />
                </div>

                {/* Arrow */}
                <div className="col-start-2 col-end-3 row-start-1 flex items-center justify-center px-1">
                    <HArrow />
                </div>

                {/* Diamond */}
                <div className="col-start-3 col-end-4 row-start-1 flex items-center justify-center relative w-[120px] h-[120px] z-10">
                    <div className="absolute inset-0 mx-auto my-auto w-[82px] h-[82px] bg-[#212873] rotate-45 rounded shadow-sm" />
                    <div className="relative z-10 text-white text-center text-[12px] font-medium leading-[1.2]">
                        Already<br />have<br />account?
                    </div>
                </div>

                {/* Arrow (No) */}
                <div className="col-start-4 col-end-5 row-start-1 flex items-center justify-center px-1">
                    <HArrow text="No" />
                </div>

                {/* Set up free account */}
                <div className="col-start-5 col-end-6 row-start-1 flex items-center justify-center z-10">
                    <Box text="Set up free account" className="w-[120px] h-[70px]" />
                </div>

                {/* Arrow */}
                <div className="col-start-6 col-end-7 row-start-1 flex items-center justify-center px-1">
                    <HArrow />
                </div>

                {/* Enter name */}
                <div className="col-start-7 col-end-8 row-start-1 flex items-center justify-center z-10">
                    <Box text="Enter name" className="w-[120px] h-[70px]" />
                </div>

                {/* Arrow */}
                <div className="col-start-8 col-end-9 row-start-1 flex items-center justify-center px-1">
                    <HArrow />
                </div>

                {/* Enter email */}
                <div className="col-start-9 col-end-10 row-start-1 flex items-center justify-center z-10">
                    <Box text="Enter email" className="w-[120px] h-[70px]" />
                </div>

                {/* Arrow */}
                <div className="col-start-10 col-end-11 row-start-1 flex items-center justify-center px-1">
                    <HArrow />
                </div>

                {/* Create password */}
                <div className="col-start-11 col-end-12 row-start-1 flex items-center justify-center z-10">
                    <Box text="Create password" className="w-[120px] h-[70px]" />
                </div>

                {/* Arrow */}
                <div className="col-start-12 col-end-13 row-start-1 flex items-center justify-center px-1">
                    <HArrow />
                </div>

                {/* Verify account */}
                <div className="col-start-13 col-end-14 row-start-1 flex items-center justify-center z-10">
                    <Box text="Verify account" className="w-[120px] h-[70px]" />
                </div>

                {/* Row 2 (Yes Path) */}
                {/* L-Shape Arrow from Diamond */}
                <div className="col-start-3 col-end-5 row-start-2 relative z-0">
                    <LArrow text="Yes" />
                </div>

                {/* Enter email */}
                <div className="col-start-5 col-end-6 row-start-2 flex items-center justify-center z-10">
                    <Box text="Enter email" className="w-[120px] h-[70px]" />
                </div>

                {/* Arrow */}
                <div className="col-start-6 col-end-7 row-start-2 flex items-center justify-center px-1">
                    <HArrow />
                </div>

                {/* Enter password */}
                <div className="col-start-7 col-end-8 row-start-2 flex items-center justify-center z-10">
                    <Box text="Enter password" className="w-[120px] h-[70px]" />
                </div>

                {/* Arrow */}
                <div className="col-start-8 col-end-9 row-start-2 flex items-center justify-center px-1">
                    <HArrow />
                </div>

                {/* Verify account */}
                <div className="col-start-9 col-end-10 row-start-2 flex items-center justify-center z-10">
                    <Box text="Verify account" className="w-[120px] h-[70px]" />
                </div>

                {/* Arrow */}
                <div className="col-start-10 col-end-11 row-start-2 flex items-center justify-center px-1">
                    <HArrow />
                </div>

                {/* Home */}
                <div className="col-start-11 col-end-12 row-start-2 flex items-center justify-center z-10">
                    <Box text="Home" className="w-[120px] h-[70px]" />
                </div>
            </div>
        </div>
    );
};

export default FreshOutUserFlow;
