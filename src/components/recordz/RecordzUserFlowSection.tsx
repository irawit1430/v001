import { ArrowRight, ArrowDown } from 'lucide-react';

const ArrowR = () => <ArrowRight className="w-8 h-8 text-[#1A1A1A] shrink-0" strokeWidth={2.5} />;
const ArrowD = () => <ArrowDown className="w-8 h-8 text-[#1A1A1A] shrink-0" strokeWidth={2.5} />;

const BlackNode = ({ text }: { text: string }) => (
    <div className="bg-black text-white px-6 py-4 rounded-lg min-w-[140px] text-center text-[15px] font-medium shadow-md shrink-0">
        {text}
    </div>
);

const GreyNode = ({ text }: { text: string }) => (
    <div className="bg-[#D9D9D9] text-[#1A1A1A] px-6 py-4 rounded-lg min-w-[180px] text-center text-[15px] font-medium shadow-md shrink-0">
        {text}
    </div>
);

const WhiteNode = ({ text }: { text: string }) => (
    <div className="bg-[#F8F9FA] border border-gray-200 text-[#1A1A1A] px-6 py-4 rounded-lg min-w-[180px] text-center text-[15px] font-medium shadow-sm shrink-0">
        {text}
    </div>
);

const GreenNode = ({ text }: { text: string }) => (
    <div className="bg-[#2EB82E] text-white px-6 py-4 rounded-lg min-w-[180px] text-center text-[15px] font-medium shadow-md shrink-0">
        {text}
    </div>
);

const DiamondNode = ({ text1, text2 }: { text1: string, text2: string }) => (
    <div className="relative w-[150px] h-[150px] flex flex-col items-center justify-center shrink-0 mx-2">
        <div className="absolute inset-0 bg-[#656565] rotate-45 transform origin-center rounded-sm shadow-md"></div>
        <div className="relative z-10 text-white text-center text-[14px] leading-snug font-medium">
            {text1}<br />{text2}
        </div>
    </div>
);

const RecordzUserFlowSection = () => {
    return (
        <div className="w-full bg-[#FFFFFF] py-10 rounded-2xl border border-gray-100 shadow-sm mt-8">
            <div className="w-full overflow-x-auto custom-scrollbar pb-8">
                <div className="min-w-[1300px] grid grid-cols-[auto_auto_auto_auto_auto_auto_auto_auto_auto_auto_auto_auto_auto] gap-x-6 gap-y-4 items-center justify-items-center px-8">
                    {/* Row 1 */}
                    <div className="col-start-1 row-start-1"><BlackNode text="Launch Site" /></div>
                    <div className="col-start-2 row-start-1"><ArrowR /></div>
                    <div className="col-start-3 row-start-1"><DiamondNode text1="Select Experience" text2="Label or Studio" /></div>
                    <div className="col-start-4 row-start-1"><ArrowR /></div>
                    <div className="col-start-5 row-start-1"><GreyNode text="Studio Landing Page" /></div>
                    <div className="col-start-6 row-start-1"><ArrowR /></div>
                    <div className="col-start-7 row-start-1"><GreyNode text="View Services" /></div>
                    <div className="col-start-8 row-start-1"><ArrowR /></div>
                    <div className="col-start-9 row-start-1"><GreyNode text="Select Studio w/ Engineer" /></div>

                    {/* Row 2 */}
                    <div className="col-start-9 row-start-2"><ArrowD /></div>

                    {/* Row 3 */}
                    <div className="col-start-9 row-start-3"><WhiteNode text="View service details" /></div>
                    <div className="col-start-10 row-start-3"><ArrowR /></div>
                    <div className="col-start-11 row-start-3"><WhiteNode text="Contact tab" /></div>
                    <div className="col-start-12 row-start-3"><ArrowR /></div>
                    <div className="col-start-13 row-start-3"><WhiteNode text="Fill out contact form" /></div>

                    {/* Row 4 */}
                    <div className="col-start-13 row-start-4"><ArrowD /></div>

                    {/* Row 5 */}
                    <div className="col-start-13 row-start-5"><GreenNode text="Submit Request" /></div>

                    {/* Row 6 */}
                    <div className="col-start-13 row-start-6"><ArrowD /></div>

                    {/* Row 7 */}
                    <div className="col-start-13 row-start-7"><WhiteNode text="Request Confirmation" /></div>

                    {/* Row 8 */}
                    <div className="col-start-13 row-start-8"><ArrowD /></div>

                    {/* Row 9 */}
                    <div className="col-start-13 row-start-9"><GreenNode text="1331 Recordz Follow-up" /></div>
                </div>
            </div>
        </div>
    );
};

export default RecordzUserFlowSection;
