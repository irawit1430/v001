
import auditTableImage from '../../assets/competitive-audit-table.png';

const CompetitiveAuditSection: React.FC = () => {
    return (
        <section className="py-20 px-5 max-w-[1244px] mx-auto pt-10 pb-20">
            <div className="flex gap-10 items-start flex-wrap mb-10 md:gap-5 md:flex-col">
                <div className="flex-1 min-w-[250px]">
                    <h2 className="text-[40px] font-medium text-black mb-[30px] md:text-[32px] whitespace-nowrap">Competitive Audit:</h2>
                </div>
                <div className="flex-[2] min-w-[300px]">
                    <p className="text-[30px] leading-[1.4] font-normal text-[#6F6864] mb-5 md:text-[20px]">
                        Analyzing competing resale platforms showed that while many support secondhand transactions, they fail to create a meaningful community for parents. The absence of trust-building and peer connection highlights an opportunity for Baby Thrift to design a more parent-centered resale experience.
                    </p>
                </div>
            </div>

            <div className="w-full overflow-x-auto rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <img src={auditTableImage} alt="Competitive Audit Table comparing Thred Up, Offer Up, Pat Pat, and Mercari" className="w-full h-auto m-0 block min-w-[800px] md:min-w-0 md:w-full" />
            </div>
        </section>
    );
};

export default CompetitiveAuditSection;
