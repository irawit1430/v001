

// Import images
import interiorImage from '../../assets/recordz-interior.png';
import studioImage from '../../assets/recordz-studio.png';
import visionBoardImage from '../../assets/recordz-vision-board.png';

const RecordzDiscoverySection: React.FC = () => {
    return (
        <section className="py-20 px-5 max-w-[1244px] mx-auto">
            <div className="w-full">
                {/* Header with Title and Description */}
                <div className="flex gap-[60px] items-start flex-wrap mb-[50px] md:flex-col md:gap-5">
                    <h2 className="text-[32px] font-medium text-black m-0 flex-[0_0_200px] md:text-[26px] md:flex-none whitespace-nowrap">Discovery:</h2>
                    <div className="flex-1 min-w-[300px]">
                        <h3 className="text-[24px] font-semibold text-[#333] mb-5 md:text-[20px]">Understanding the Creative Landscape:</h3>
                        <p className="text-[18px] leading-[1.7] text-[#6F6864] m-0 md:text-[16px]">
                            1331 Recordz was created to support independent artists navigating an industry that often values output over identity. Many emerging musicians struggle with visibility, creative ownership, and access to trusted collaborators. Early exploration revealed a common need for spaces that prioritize authentic collaboration, creative freedom, and long-term growth. This discovery phase focused on understanding how artists work and how a studio and label can function as a creative partner and not a gatekeeper.
                        </p>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-3 gap-6 mt-10 md:grid-cols-2 sm:grid-cols-1">
                    <div className="flex flex-col gap-4">
                        <img src={interiorImage} alt="1331 Recordz Interior" className="w-full h-[300px] object-cover rounded-[12px] transition-transform duration-300 hover:scale-[1.02] md:h-[250px]" />
                        <span className="text-[16px] font-medium text-[#333] text-center">1331 Recordz Interior</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src={studioImage} alt="1331 Recordz Studio" className="w-full h-[300px] object-cover rounded-[12px] transition-transform duration-300 hover:scale-[1.02] md:h-[250px]" />
                        <span className="text-[16px] font-medium text-[#333] text-center">1331 Recordz Studio</span>
                    </div>
                    <div className="flex flex-col gap-4 md:col-span-2 sm:col-span-1">
                        <img src={visionBoardImage} alt="1331 Recordz Vision Board" className="w-full h-[300px] object-cover rounded-[12px] transition-transform duration-300 hover:scale-[1.02] md:h-[250px]" />
                        <span className="text-[16px] font-medium text-[#333] text-center">1331 Recordz Vision Board</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecordzDiscoverySection;
