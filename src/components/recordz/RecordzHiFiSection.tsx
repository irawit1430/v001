

// Import hi-fi mockup images
import hifiStudioLanding from '../../assets/hifi-studio-landing.png';
import hifiStudioAbout from '../../assets/hifi-studio-about.png';
import hifiWelcome from '../../assets/hifi-welcome.png';
import hifiLabelAbout from '../../assets/hifi-label-about.png';

const RecordzHiFiSection: React.FC = () => {
    return (
        <section className="py-20 px-5 max-w-[1440px] mx-auto">
            <div className="w-full">
                {/* Header */}
                <div className="flex gap-[60px] items-start flex-wrap mb-[60px] max-w-[1244px] mx-auto md:flex-col md:gap-5">
                    <h2 className="text-[32px] font-medium text-black m-0 flex-[0_0_220px] md:text-[26px] md:flex-none">Hi-Fi Wireframes:</h2>
                    <div className="flex-1 min-w-[300px]">
                        <p className="text-[20px] leading-[1.5] text-[#333] mb-4 md:text-[18px]">
                            <strong>The Hi-Fi designs brought the app's visual identity to life.</strong>
                        </p>
                        <p className="text-[17px] leading-[1.7] text-[#6F6864] m-0 md:text-[16px]">
                            Moving onto high-fidelity screens helped refine the visual system, unify the design language, and ensure the interface felt intuitive and welcoming. Typography, color, and layout choices came together to create a polished experience centered on connection and community.
                        </p>
                    </div>
                </div>

                {/* Large Featured Mockups */}
                <div className="flex flex-col gap-[60px] mb-[60px] items-start">
                    <div className="flex flex-col items-start text-left w-full">
                        <img src={hifiStudioLanding} alt="1331 Recordz Music Studio Landing" className="w-[1301px] h-auto max-w-full rounded-[12px] shadow-[0_10px_40px_rgba(0,0,0,0.15)] object-cover" />
                        <p className="text-[16px] font-medium text-[#333] mt-5 text-left md:text-[14px]">1331 Recordz Music Studio Landing</p>
                    </div>

                    <div className="flex flex-col items-start text-left w-full">
                        <img src={hifiStudioAbout} alt="1331 Recordz Music Studio About" className="w-[1301px] h-auto max-w-full rounded-[12px] shadow-[0_10px_40px_rgba(0,0,0,0.15)] object-cover" />
                        <p className="text-[16px] font-medium text-[#333] mt-5 text-left md:text-[14px]">1331 Recordz Music Studio About</p>
                    </div>
                </div>

                {/* Smaller Mockups Grid */}
                <div className="grid grid-cols-2 gap-10 md:grid-cols-1 md:gap-[30px]">
                    <div className="text-left">
                        <img src={hifiWelcome} alt="1331 Recordz Initial Welcome Screen" className="max-w-full h-auto rounded-[12px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-[1.02]" />
                        <p className="text-[16px] font-medium text-[#333] mt-5 text-left md:text-[14px]">1331 Recordz Initial Welcome Screen</p>
                    </div>

                    <div className="text-left">
                        <img src={hifiLabelAbout} alt="1331 Recordz Label About Screen" className="max-w-full h-auto rounded-[12px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-[1.02]" />
                        <p className="text-[16px] font-medium text-[#333] mt-5 text-left md:text-[14px]">1331 Recordz Label About Screen</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecordzHiFiSection;
