
import welcomeScreen from '../../assets/lofi-welcome.png';
import newArrivalScreen from '../../assets/lofi-new-arrival.png';
import donateScreen from '../../assets/lofi-donate.png';
import itemDetailsScreen from '../../assets/lofi-item-details.png';

const LoFiWireframesSection: React.FC = () => {
    return (
        <section className="py-20 px-5 max-w-[1244px] mx-auto pb-20">
            <div className="max-w-[1440px] mx-auto relative">
                <div className="flex gap-10 items-start flex-wrap mb-[60px] md:flex-col md:gap-5">
                    <div className="flex-1 min-w-[250px]">
                        <h2 className="text-[40px] font-medium text-black mb-[30px] md:text-[32px] whitespace-nowrap">Lo-Fi Wireframes:</h2>
                    </div>
                    <div className="flex-[2] min-w-[300px]">
                        <p className="text-[30px] leading-[1.4] font-normal text-[#6F6864] mb-5 md:text-[20px]">
                            To support the Baby Thrift application, I created Lo-Fi wireframes that outline key user journeys and essential functionality. This step prioritized usability, trust, and clear content flow to ensure a safe and intuitive experience before refining visual design.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-5 bg-[#5C3D1E] p-10 rounded-[20px] lg:grid-cols-2 md:grid-cols-1 md:p-5">
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-white rounded-[10px] overflow-hidden mb-5 w-full">
                            <img src={welcomeScreen} alt="Welcome Screen Wireframe" className="w-full h-auto block" />
                        </div>
                        <div className="text-white">
                            <h4 className="text-[18px] font-semibold mb-[5px] text-white">Welcome Screen</h4>
                            <p className="text-[14px] text-[#E0E0E0]">Login or sign up</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-white rounded-[10px] overflow-hidden mb-5 w-full">
                            <img src={newArrivalScreen} alt="New Arrival Screen Wireframe" className="w-full h-auto block" />
                        </div>
                        <div className="text-white">
                            <h4 className="text-[18px] font-semibold mb-[5px] text-white">New Arrival Screen</h4>
                            <p className="text-[14px] text-[#E0E0E0]">Explore curated new items</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-white rounded-[10px] overflow-hidden mb-5 w-full">
                            <img src={donateScreen} alt="Donate Screen Wireframe" className="w-full h-auto block" />
                        </div>
                        <div className="text-white">
                            <h4 className="text-[18px] font-semibold mb-[5px] text-white">Donate Screen</h4>
                            <p className="text-[14px] text-[#E0E0E0]">Donate children's items</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-white rounded-[10px] overflow-hidden mb-5 w-full">
                            <img src={itemDetailsScreen} alt="Item Details Screen Wireframe" className="w-full h-auto block" />
                        </div>
                        <div className="text-white">
                            <h4 className="text-[18px] font-semibold mb-[5px] text-white">Item Details Screen</h4>
                            <p className="text-[14px] text-[#E0E0E0]">Main home screen</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoFiWireframesSection;
