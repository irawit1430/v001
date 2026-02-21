

// Import images
import studioImage from '../../assets/hmw-studio.png';
import meetingImage from '../../assets/hmw-meeting.png';
import wireframeImage from '../../assets/hmw-wireframe.png';
import djImage from '../../assets/hmw-dj.png';

const RecordzHowMightWeSection: React.FC = () => {
    return (
        <section className="py-20 px-5 max-w-[1244px] mx-auto">
            <div className="w-full">
                {/* Header */}
                <div className="flex gap-[60px] items-start flex-wrap mb-[50px] md:flex-col md:gap-5">
                    <h2 className="text-[32px] font-medium text-black m-0 flex-[0_0_200px] md:text-[26px] md:flex-none whitespace-nowrap">How Might We?</h2>
                    <div className="flex-1 min-w-[300px]">
                        <p className="text-[20px] leading-[1.5] text-[#333] mb-6 md:text-[18px]">
                            <strong>Turning insights into opportunity through the right questions.</strong>
                        </p>
                        <ul className="list-disc pl-6 m-0 flex flex-col gap-4">
                            <li className="text-[17px] leading-[1.6] text-[#6F6864] md:text-[16px]">
                                <strong className="text-[#333]">How might we build trust and credibility</strong> for independent artists using 1331 Recordz?
                            </li>
                            <li className="text-[17px] leading-[1.6] text-[#6F6864] md:text-[16px]">
                                <strong className="text-[#333]">How might we simplify service discovery</strong> so artists quickly understand their options?
                            </li>
                            <li className="text-[17px] leading-[1.6] text-[#6F6864] md:text-[16px]">
                                <strong className="text-[#333]">How might we reduce friction and uncertainty</strong> in the booking process?
                            </li>
                            <li className="text-[17px] leading-[1.6] text-[#6F6864] md:text-[16px]">
                                <strong className="text-[#333]">How might we design a platform that feels supportive,</strong> professional, and artist-centered?
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-4 mt-10 md:grid-cols-1 md:gap-3">
                    <div className="overflow-hidden rounded-[8px]">
                        <img src={studioImage} alt="Recording Studio" className="w-full h-[280px] object-cover transition-transform duration-300 hover:scale-[1.03] md:h-[220px]" />
                    </div>
                    <div className="overflow-hidden rounded-[8px]">
                        <img src={meetingImage} alt="Team Meeting" className="w-full h-[280px] object-cover transition-transform duration-300 hover:scale-[1.03] md:h-[220px]" />
                    </div>
                    <div className="overflow-hidden rounded-[8px]">
                        <img src={wireframeImage} alt="Wireframe Design" className="w-full h-[280px] object-cover transition-transform duration-300 hover:scale-[1.03] md:h-[220px]" />
                    </div>
                    <div className="overflow-hidden rounded-[8px]">
                        <img src={djImage} alt="DJ Equipment" className="w-full h-[280px] object-cover transition-transform duration-300 hover:scale-[1.03] md:h-[220px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecordzHowMightWeSection;
