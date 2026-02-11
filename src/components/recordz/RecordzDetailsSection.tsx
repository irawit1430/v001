

import challengeLaptop from '../../assets/challenge-laptop.png';
import challengeCircle from '../../assets/challenge-circle.png';
import challengeCompass from '../../assets/challenge-compass.png';
import challengeShield from '../../assets/challenge-shield.png';

const RecordzDetailsSection: React.FC = () => {
    return (
        <>
            {/* Key Challenges Section */}
            <section className="py-[60px] px-5 pb-[80px]">
                <h2 className="text-[32px] font-medium text-black mb-10 md:text-[26px]">Key Challenges:</h2>
                <div className="grid grid-cols-[repeat(2,607px)] gap-5 max-w-[1244px] justify-center mx-auto md:grid-cols-1 md:w-full">
                    <div className="flex gap-4 p-6 bg-[#FAFAFA] rounded-[12px] border border-[#EEEEEE] items-center w-[607px] h-[153px] md:w-full md:h-auto">
                        <div className="w-10 h-10 flex items-center justify-center shrink-0">
                            <img src={challengeLaptop} alt="Laptop" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-[18px] font-semibold text-[#333] mb-2">Unified Dual Experience</h3>
                            <p className="text-[14px] leading-[1.5] text-[#6F6864] m-0">Designing a unified experience for two distinct offerings within one site</p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-[#FAFAFA] rounded-[12px] border border-[#EEEEEE] items-center w-[607px] h-[153px] md:w-full md:h-auto">
                        <div className="w-10 h-10 flex items-center justify-center shrink-0">
                            <img src={challengeCircle} alt="Distinct" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-[18px] font-semibold text-[#333] mb-2">Clear Distinction by Color</h3>
                            <p className="text-[14px] leading-[1.5] text-[#6F6864] m-0">Separating studio services and label content through color and visual cues</p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-[#FAFAFA] rounded-[12px] border border-[#EEEEEE] items-center w-[607px] h-[153px] md:w-full md:h-auto">
                        <div className="w-10 h-10 flex items-center justify-center shrink-0">
                            <img src={challengeCompass} alt="Navigation" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-[18px] font-semibold text-[#333] mb-2">Intuitive User Navigation</h3>
                            <p className="text-[14px] leading-[1.5] text-[#6F6864] m-0">Designing a unified experience for two distinct offerings within one site</p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-[#FAFAFA] rounded-[12px] border border-[#EEEEEE] items-center w-[607px] h-[153px] md:w-full md:h-auto">
                        <div className="w-10 h-10 flex items-center justify-center shrink-0">
                            <img src={challengeShield} alt="Identity" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-[18px] font-semibold text-[#333] mb-2">Strong Professional Identity</h3>
                            <p className="text-[14px] leading-[1.5] text-[#6F6864] m-0">Maintaining a strong, professional brand identity across both areas</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RecordzDetailsSection;
