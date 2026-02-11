

// Import wireframe images
import wireframeWelcome from '../../assets/wireframe-welcome.png';
import wireframeLanding from '../../assets/wireframe-studio-landing.png';
import wireframeAbout from '../../assets/wireframe-studio-about.png';

const RecordzWireframesSection: React.FC = () => {
    return (
        <section className="bg-[#6F6864] text-white py-20 px-5 my-[60px]">
            <div className="max-w-[1244px] mx-auto">
                {/* Header */}
                <div className="flex gap-[60px] items-start flex-wrap mb-[50px] md:flex-col md:gap-5">
                    <h2 className="text-[32px] font-medium text-white m-0 flex-[0_0_220px] md:text-[26px] md:flex-none">Lo-Fi Wireframes:</h2>
                    <div className="flex-1 min-w-[300px]">
                        <p className="text-[20px] leading-[1.5] text-white mb-4 md:text-[18px]">
                            <strong>Low-fidelity wireframes were created to establish a clear and intuitive layout for 1331 Recordz's dual studio and label platform.</strong>
                        </p>
                        <p className="text-[17px] leading-[1.7] text-[rgba(255,255,255,0.85)] m-0 md:text-[16px]">
                            This phase emphasized information hierarchy, wayfinding, and task flow to ensure users could move smoothly from discovery to action, such as exploring artists or requesting studio services, prior to visual refinement.
                        </p>
                    </div>
                </div>

                {/* Wireframe Images */}
                <div className="grid grid-cols-3 gap-6 md:grid-cols-1 md:gap-[30px]">
                    <div className="flex flex-col items-start">
                        <div className="bg-[#E5E5E5] rounded-[8px] overflow-hidden w-full aspect-[4/3] flex items-center justify-center">
                            <img src={wireframeWelcome} alt="Initial Welcome Screen" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left mt-4">
                            <h4 className="text-[16px] font-semibold text-white mb-1">Initial Welcome Screen</h4>
                            <p className="text-[14px] text-[rgba(255,255,255,0.7)] m-0">Label or Studio entrance</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start">
                        <div className="bg-[#E5E5E5] rounded-[8px] overflow-hidden w-full aspect-[4/3] flex items-center justify-center">
                            <img src={wireframeLanding} alt="Studio Landing Screen" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left mt-4">
                            <h4 className="text-[16px] font-semibold text-white mb-1">Studio Landing Screen</h4>
                            <p className="text-[14px] text-[rgba(255,255,255,0.7)] m-0">Studio main page</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start">
                        <div className="bg-[#E5E5E5] rounded-[8px] overflow-hidden w-full aspect-[4/3] flex items-center justify-center">
                            <img src={wireframeAbout} alt="Studio About Screen" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left mt-4">
                            <h4 className="text-[16px] font-semibold text-white mb-1">Studio About Screen</h4>
                            <p className="text-[14px] text-[rgba(255,255,255,0.7)] m-0">Login or sign up</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecordzWireframesSection;
