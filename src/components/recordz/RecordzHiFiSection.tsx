

// Import hi-fi mockup images
import hifiStudioLanding from '../../assets/hifi-studio-landing.png';
import hifiStudioAbout from '../../assets/hifi-studio-about.png';
import hifiWelcome from '../../assets/hifi-welcome.png';
import hifiLabelAbout from '../../assets/hifi-label-about.png';

const RecordzHiFiSection: React.FC = () => {
    return (
        <section className="py-[120px] px-5 w-full bg-white">
            <div className="max-w-[1301px] mx-auto">
                {/* Header */}
                <div className="flex justify-between items-start mb-[100px] md:flex-col md:gap-8">
                    <h2 className="font-medium text-[40px] leading-[48px] text-[#000000] m-0 md:text-[32px] whitespace-nowrap">
                        Hi-Fi Wireframes:
                    </h2>
                    <div className="max-w-[694px] w-full">
                        <p className="font-medium text-[34px] leading-[41px] text-[#6F6864] mb-[25px] md:text-[26px]">
                            The Hi-Fi designs brought the app's visual identity to life.
                        </p>
                        <p className="font-normal text-[30px] leading-[36px] text-[#6F6864] m-0 md:text-[22px]">
                            Moving onto high-fidelity screens helped refine the visual system, unify the design language, and ensure the interface felt intuitive and welcoming. Typography, color, and layout choices came together to create a polished experience centered on connection and community.
                        </p>
                    </div>
                </div>

                {/* Large Featured Mockups */}
                <div className="flex flex-col gap-[90px] mb-[90px]">
                    <div className="flex flex-col items-start w-full">
                        <img src={hifiStudioLanding} alt="1331 Recordz Music Studio Landing" className="w-full h-auto rounded-[12px] shadow-[0_10px_40px_rgba(0,0,0,0.15)] object-cover" />
                        <p className="font-medium text-[34px] leading-[41px] text-[#6F6864] mt-8 text-left md:text-[24px]">1331 Recordz Music Studio Landing</p>
                    </div>

                    <div className="flex flex-col items-start w-full">
                        <img src={hifiStudioAbout} alt="1331 Recordz Music Studio About" className="w-full h-auto rounded-[12px] shadow-[0_10px_40px_rgba(0,0,0,0.15)] object-cover" />
                        <p className="font-medium text-[34px] leading-[41px] text-[#6F6864] mt-8 text-left md:text-[24px]">1331 Recordz Music Studio About</p>
                    </div>
                </div>

                {/* Smaller Mockups Grid */}
                <div className="grid grid-cols-2 gap-[40px] md:grid-cols-1 md:gap-[50px]">
                    <div className="flex flex-col items-start text-left">
                        <img src={hifiWelcome} alt="1331 Recordz Initial Welcome Screen" className="w-full h-auto rounded-[12px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-[1.02]" />
                        <p className="font-medium text-[34px] leading-[41px] text-[#6F6864] mt-8 text-left md:text-[24px]">1331 Recordz Initial Welcome Screen</p>
                    </div>

                    <div className="flex flex-col items-start text-left">
                        <img src={hifiLabelAbout} alt="1331 Recordz Label About Screen" className="w-full h-auto rounded-[12px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-[1.02]" />
                        <p className="font-medium text-[34px] leading-[41px] text-[#6F6864] mt-8 text-left md:text-[24px]">1331 Recordz Label About Screen</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecordzHiFiSection;
