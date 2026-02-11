
import hifiScreen1 from '../../assets/hifi-screen-1.png';
import hifiScreen2 from '../../assets/hifi-screen-2.png';
import hifiScreen3 from '../../assets/hifi-screen-3.png';
import hifiScreen4 from '../../assets/hifi-screen-4.png';
import hifiCollectionImage from '../../assets/hifi-collection.png';

const HiFiWireframesSection: React.FC = () => {
    return (
        <section className="py-20 px-5 max-w-[1244px] mx-auto pb-20">
            <div className="max-w-[1440px] mx-auto relative">
                <div className="flex gap-5 items-start flex-wrap mb-[60px] md:flex-col">
                    <div className="flex-1 min-w-[200px]">
                        <h2 className="text-[40px] font-medium text-black mb-[30px] md:text-[32px]">Hi-Fi Wireframes:</h2>
                    </div>
                    <div className="flex-[3] min-w-[300px]">
                        <h3 className="text-[24px] font-medium text-[#6F6864] mb-5">
                            The Hi-Fi designs brought the app’s visual identity to life.
                        </h3>
                        <p className="text-[30px] leading-[1.4] font-normal text-[#6F6864] mb-5 md:text-[20px]">
                            Moving into high-fidelity screens allowed the design to refine trust signals, improve clarity around item condition, and create a warm, approachable interface. Thoughtful color, typography, and layout choices work together to support confident secondhand shopping and community connection.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-5 lg:grid-cols-2 md:grid-cols-1 md:px-5">
                    <div className="flex flex-col items-center">
                        <div className="rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-[5px]">
                            <img src={hifiScreen1} alt="Hi-Fi Screen 1" className="w-full h-auto block" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-[5px]">
                            <img src={hifiScreen2} alt="Hi-Fi Screen 2" className="w-full h-auto block" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-[5px]">
                            <img src={hifiScreen3} alt="Hi-Fi Screen 3" className="w-full h-auto block" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-[5px]">
                            <img src={hifiScreen4} alt="Hi-Fi Screen 4" className="w-full h-auto block" />
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <p className="text-[30px] leading-[1.4] font-normal text-[#6F6864] mb-10 max-w-[800px] md:text-[20px]">
                        A collection of key screens from the mobile shopping experience, designed with a focus on consistency, clarity, and visual cohesion. Each screen reflects a unified design system and supports an intuitive, easy-to-navigate interface.
                    </p>
                    <div className="w-full overflow-hidden rounded-[20px]">
                        <img src={hifiCollectionImage} alt="Key Screens Collection" className="w-full h-auto block" />
                    </div>
                </div>

                {/* Key Features Section */}
                <div className="mt-[100px]">
                    <div className="flex gap-5 items-start flex-wrap mb-[60px] md:flex-col">
                        <div className="flex-1 min-w-[200px]">
                            <h2 className="text-[40px] font-medium text-black mb-[30px] md:text-[32px]">Key Features:</h2>
                        </div>
                        <div className="flex-[3] min-w-[300px]">
                            <h3 className="text-[24px] font-medium text-[#6F6864] mb-5">
                                Designing for Trust, Clarity, and Ease of Use
                            </h3>
                            <p className="text-[30px] leading-[1.4] font-normal text-[#6F6864] mb-5 md:text-[20px]">
                                Parents shopping for secondhand baby products must balance affordability with trust and safety. Research focused on how parents evaluate product quality, navigate resale marketplaces, and make purchasing decisions on mobile.
                            </p>
                            <p className="text-[30px] leading-[1.4] font-normal text-[#6F6864] mb-5 md:text-[20px] mt-5">
                                Through early exploration, several recurring themes emerged. Parents expressed concerns around unclear product conditions, inconsistent seller information, and overwhelming navigation. These issues often led to hesitation, reduced trust, and abandoned purchase attempts within existing secondhand marketplaces.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-5 bg-[#3E2613] p-10 mt-10 lg:grid-cols-2 md:grid-cols-1 md:p-5">
                        <div className="bg-white rounded-[10px] p-5 text-center flex flex-col items-center h-full">
                            <div className="text-[32px] mb-[15px] bg-[#F5F0EB] w-[60px] h-[60px] rounded-full flex items-center justify-center">👨‍👩‍👧</div>
                            <h4 className="text-[18px] font-semibold text-[#3E2613] mb-[10px]">Parenthood Support</h4>
                            <p className="text-[14px] text-[#6F6864] leading-[1.5]">Access community advice, guides, and tips to help parents make confident secondhand purchases.</p>
                        </div>
                        <div className="bg-white rounded-[10px] p-5 text-center flex flex-col items-center h-full">
                            <div className="text-[32px] mb-[15px] bg-[#F5F0EB] w-[60px] h-[60px] rounded-full flex items-center justify-center">🛡️</div>
                            <h4 className="text-[18px] font-semibold text-[#3E2613] mb-[10px]">Trusted Sellers</h4>
                            <p className="text-[14px] text-[#6F6864] leading-[1.5]">Shop from verified sellers with clear ratings, reviews, and transparent product details.</p>
                        </div>
                        <div className="bg-white rounded-[10px] p-5 text-center flex flex-col items-center h-full">
                            <div className="text-[32px] mb-[15px] bg-[#F5F0EB] w-[60px] h-[60px] rounded-full flex items-center justify-center">📅</div>
                            <h4 className="text-[18px] font-semibold text-[#3E2613] mb-[10px]">Localized Events</h4>
                            <p className="text-[14px] text-[#6F6864] leading-[1.5]">Discover nearby swaps, meetups, and resale events tailored to local parenting community.</p>
                        </div>
                        <div className="bg-white rounded-[10px] p-5 text-center flex flex-col items-center h-full">
                            <div className="text-[32px] mb-[15px] bg-[#F5F0EB] w-[60px] h-[60px] rounded-full flex items-center justify-center">♻️</div>
                            <h4 className="text-[18px] font-semibold text-[#3E2613] mb-[10px]">Eco-Friendly</h4>
                            <p className="text-[14px] text-[#6F6864] leading-[1.5]">Reduce waste and support sustainability by extending the life of baby products through reuse.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HiFiWireframesSection;
