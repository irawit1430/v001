const Box = ({ text, className = "" }: { text: string, className?: string }) => (
    <div className={`bg-[#28377A] text-white rounded-[10px] shadow-sm flex items-center justify-center p-3 text-center text-[15px] font-medium leading-tight ${className}`}>
        {text}
    </div>
);

const HArrow = ({ text, className = "" }: { text?: string, className?: string }) => (
    <div className={`flex items-center relative w-full h-[50px] ${className}`}>
        <div className="w-full h-[3px] bg-[#898E9B]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[2px] w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-[#898E9B] border-b-[6px] border-b-transparent" />
        {text && <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[#898E9B] font-medium text-[15px]">{text}</span>}
    </div>
);

const VArrow = ({ text, className = "" }: { text?: string, className?: string }) => (
    <div className={`flex flex-col items-center relative w-full h-full ${className}`}>
        <div className="w-[3px] h-full bg-[#898E9B]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[2px] w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-[#898E9B] border-r-[6px] border-r-transparent" />
        {text && <span className="absolute top-1/2 -translate-y-1/2 left-[15px] text-[#898E9B] font-medium text-[15px] bg-white px-1">{text}</span>}
    </div>
);

const FreshOutEventFlow = () => {
    return (
        <div className="w-full overflow-x-auto py-8 px-4 no-scrollbar">
            <div className="min-w-[700px] w-max mx-auto relative grid" style={{
                gridTemplateColumns: '120px 50px 140px 50px 120px 110px 120px',
                gridTemplateRows: '75px 40px 75px',
            }}>
                {/* Row 1 */}
                {/* Find an event */}
                <div className="col-start-1 col-end-2 row-start-1 flex items-center justify-center z-10 w-full h-full">
                    <Box text="Find an event" className="w-[120px] h-[75px]" />
                </div>

                {/* Arrow */}
                <div className="col-start-2 col-end-3 row-start-1 flex items-center justify-center px-0 w-full h-full">
                    <HArrow />
                </div>

                {/* Diamond */}
                <div className="col-start-3 col-end-4 row-start-1 flex items-center justify-center relative w-full h-full z-10">
                    <div className="absolute inset-0 mx-auto my-auto w-[100px] h-[100px] bg-[#28377A] rotate-45 rounded shadow-sm" />
                    <div className="relative z-10 text-white text-center text-[15px] font-medium leading-[1.2]">
                        Register<br />for event?
                    </div>
                </div>

                {/* Arrow */}
                <div className="col-start-4 col-end-5 row-start-1 flex items-center justify-center px-0 w-full h-full">
                    <HArrow />
                </div>

                {/* Event */}
                <div className="col-start-5 col-end-6 row-start-1 flex items-center justify-center z-10 w-full h-full">
                    <Box text="Event" className="w-[120px] h-[75px]" />
                </div>

                {/* Long Arrow */}
                <div className="col-start-6 col-end-7 row-start-1 flex items-center justify-center px-0 w-full h-full">
                    <HArrow />
                </div>

                {/* Event */}
                <div className="col-start-7 col-end-8 row-start-1 flex items-center justify-center z-10 w-full h-full">
                    <Box text="Event" className="w-[120px] h-[75px]" />
                </div>

                {/* Row 2 - Vertical Arrow */}
                <div className="col-start-3 col-end-4 row-start-2 flex items-center justify-center relative w-full h-full z-0">
                    <VArrow text="No" />
                </div>

                {/* Row 3 - Register */}
                <div className="col-start-3 col-end-4 row-start-3 flex items-start justify-center pt-2 z-10 w-full h-full">
                    <Box text="Register" className="w-[120px] h-[75px]" />
                </div>

            </div>
        </div>
    );
};

export default FreshOutEventFlow;
