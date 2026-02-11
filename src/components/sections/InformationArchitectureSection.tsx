
import iaImage from '../../assets/information-architecture.png';

const InformationArchitectureSection: React.FC = () => {
    return (
        <section className="py-20 px-5 max-w-[1244px] mx-auto pb-20">
            <div className="max-w-[1440px] mx-auto relative">
                <div className="flex gap-10 items-start flex-wrap mb-[60px] md:flex-col md:gap-5">
                    <div className="flex-1 min-w-[250px]">
                        <h2 className="text-[40px] font-medium text-black mb-[30px] md:text-[32px]">Information Architecture:</h2>
                    </div>
                    <div className="flex-[2] min-w-[300px]">
                        <p className="text-[24px] text-[#6F6864] mb-5 font-medium md:text-[22px]">
                            To translate research insights into a clear product structure, I mapped Baby Thrift's core navigation system.
                        </p>
                        <p className="text-[30px] leading-[1.4] font-normal text-[#6F6864] mb-5 md:text-[20px]">
                            The information architecture outlines how parents move through key areas of the marketplace, from browsing and evaluating items to purchasing, selling, and engaging with the community.
                        </p>
                    </div>
                </div>

                <div className="w-full flex justify-center bg-[#F9F9F9] p-10 rounded-[20px] md:p-5">
                    <img src={iaImage} alt="Information Architecture Diagram" className="max-w-full h-auto block" />
                </div>
            </div>
        </section>
    );
};

export default InformationArchitectureSection;
