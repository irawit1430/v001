const GetInTouchSection = () => {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-container mx-auto px-4 md:px-8 text-center">

                <h2 className="text-[40px] font-medium text-[#2E211B] leading-tight mb-4">
                    Get in Touch!
                </h2>

                <p className="text-[30px] font-normal text-[#6F6864] leading-relaxed max-w-[674px] mx-auto mb-10 text-left">
                    If you'd like to connect or learn more about this project, feel free to reach out.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-[10px]">
                    <a
                        href="mailto:anuirawit@gmail.com"
                        className="w-[223px] h-[61px] bg-gradient-to-r from-[#FF6F61] to-[#FF9E80] rounded-[20px] flex items-center justify-center text-[30px] font-medium text-white hover:from-[#E6614F] hover:to-[#E68E72] transition-all"
                    >
                        Email
                    </a>
                    <a
                        href="#"
                        className="w-[223px] h-[61px] bg-gradient-to-r from-[#FF6F61] to-[#FF9E80] rounded-[20px] flex items-center justify-center text-[30px] font-medium text-white hover:from-[#E6614F] hover:to-[#E68E72] transition-all"
                    >
                        Linkedin
                    </a>
                </div>

            </div>
        </section>
    );
};

export default GetInTouchSection;
