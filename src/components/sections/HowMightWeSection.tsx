
import discoveryImage1 from '../../assets/discovery-1.png';
import discoveryImage2 from '../../assets/discovery-2.png';
import discoveryImage3 from '../../assets/discovery-3.png';

const HowMightWeSection: React.FC = () => {
    return (
        <section className="py-20 px-5 max-w-[1244px] mx-auto pb-10">
            <div className="flex gap-10 items-start flex-wrap mb-[60px] md:gap-5 md:flex-col">
                <div className="flex-1 min-w-[250px]">
                    <div className="w-full">
                        <h2 className="text-[40px] font-medium text-black mb-[30px] md:text-[32px]">How Might We?</h2>
                    </div>
                </div>
                <div className="flex-[2] min-w-[300px]">
                    <p className="text-[28px] text-[#6F6864] mb-[30px] font-medium md:text-[24px]">
                        Turning insights into opportunity through the right questions.
                    </p>
                    <ul className="list-disc pl-5 flex flex-col gap-5">
                        <li className="text-[22px] leading-[1.5] text-[#6F6864] md:text-[20px]">How might we help parents feel confident purchasing secondhand baby items?</li>
                        <li className="text-[22px] leading-[1.5] text-[#6F6864] md:text-[20px]">How might we improve clarity around product condition and quality?</li>
                        <li className="text-[22px] leading-[1.5] text-[#6F6864] md:text-[20px]">How might we simplify product discovery on mobile?</li>
                        <li className="text-[22px] leading-[1.5] text-[#6F6864] md:text-[20px]">How might we create a parent-centered marketplace that builds trust and community?</li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 mt-10 md:grid-cols-1">
                <img src={discoveryImage1} alt="Process sketch 1" className="w-full h-auto rounded-[10px] object-cover aspect-[3/4]" />
                <img src={discoveryImage2} alt="Process sketch 2" className="w-full h-auto rounded-[10px] object-cover aspect-[3/4]" />
                <img src={discoveryImage3} alt="Process sketch 3" className="w-full h-auto rounded-[10px] object-cover aspect-[3/4]" />
            </div>
        </section>
    );
};

export default HowMightWeSection;
