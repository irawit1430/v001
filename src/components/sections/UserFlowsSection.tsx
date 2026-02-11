
import userFlowImage from '../../assets/user-flow.png';
import purchasingFlowImage from '../../assets/purchasing-flow.png';

const UserFlowsSection: React.FC = () => {
    return (
        <section className="py-20 px-5 max-w-[1244px] mx-auto pb-20">
            <div className="max-w-[1440px] mx-auto relative">
                {/* Row 1: Title and Intro */}
                <div className="flex gap-10 items-start flex-wrap mb-[60px] md:flex-col md:mb-10 md:gap-5">
                    <div className="flex-1 min-w-[300px] w-full">
                        <h2 className="text-[40px] font-medium text-black mb-[30px] md:text-[32px]">User Flows:</h2>
                    </div>
                    <div className="flex-[2] min-w-[300px] w-full">
                        <p className="text-[30px] leading-[1.4] font-normal text-[#6F6864] mb-5 md:text-[20px]">
                            These user flows outline the key steps veterans take inside the app.
                        </p>
                        <p className="text-[18px] text-[#6F6864] mt-5">
                            Mapping them early allowed me to validate the logic of each path and confirm that the experience remains seamless from onboarding to event participation.
                        </p>
                    </div>
                </div>

                {/* Row 2: Image and Details */}
                <div className="flex gap-10 items-start flex-wrap mb-[60px] md:flex-col md:mb-10 md:gap-5">
                    <div className="flex-1 min-w-[300px] w-full">
                        <h3 className="text-[24px] font-medium text-[#6F6864] mb-5">Account Creation</h3>
                        <div className="w-full">
                            <img src={userFlowImage} alt="Account Creation User Flow" className="max-w-full h-auto block" />
                        </div>
                    </div>
                    <div className="flex-[2] min-w-[300px] w-full">
                        <p className="text-[30px] leading-[1.4] font-normal text-[#6F6864] mb-5 md:text-[20px]">
                            These user flows map the key decision points parents encounter while using Baby Thrift. The account creation flow is presented vertically to emphasize onboarding logic and authentication states, while the purchasing flow is presented horizontally to reflect a linear, end-to-end shopping journey. Mapping these flows early helped validate system logic, reduce friction, and ensure a seamless experience from launch to checkout.
                        </p>

                        <div className="mt-10">
                            <p className="text-[30px] leading-[1.4] font-normal text-[#6F6864] mb-[10px] md:text-[20px]">This:</p>
                            <ul className="list-disc pl-5">
                                <li className="text-[18px] text-[#6F6864] mb-2">Explains why the layouts differ</li>
                                <li className="text-[18px] text-[#6F6864] mb-2">Frames it as intentional UX reasoning</li>
                                <li className="text-[18px] text-[#6F6864] mb-2">Sounds confident and professional</li>
                                <li className="text-[18px] text-[#6F6864] mb-2">Keeps things concise</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Row 3: Purchasing Flow */}
                <div className="flex gap-10 items-start flex-wrap mb-[60px] md:flex-col md:mb-10 md:gap-5">
                    <div className="w-full">
                        <h3 className="text-[24px] font-medium text-[#6F6864] mb-5">Purchasing</h3>
                        <div className="w-full">
                            <img src={purchasingFlowImage} alt="Purchasing User Flow" className="max-w-full h-auto block w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserFlowsSection;
