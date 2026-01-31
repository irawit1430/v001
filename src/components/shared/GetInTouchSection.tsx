const GetInTouchSection = () => {
    return (
        <section className="w-full bg-taupe py-20">
            <div className="max-w-container mx-auto px-4 md:px-8 text-center">

                <h2 className="text-[40px] font-medium text-white leading-tight mb-4">
                    Get in Touch!
                </h2>

                <p className="text-[30px] font-normal text-white leading-relaxed max-w-[674px] mx-auto mb-10">
                    If you'd like to connect or learn more about this project, feel free to reach out.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="mailto:anuirawit@gmail.com"
                        className="w-[223px] h-[61px] bg-[#D9D9D9] rounded-[20px] flex items-center justify-center text-[30px] font-medium text-taupe hover:bg-white transition-colors"
                    >
                        Email
                    </a>
                    <a
                        href="#"
                        className="w-[223px] h-[61px] bg-[#D9D9D9] rounded-[20px] flex items-center justify-center text-[30px] font-medium text-taupe hover:bg-white transition-colors"
                    >
                        Linkedin
                    </a>
                </div>

            </div>
        </section>
    );
};

export default GetInTouchSection;
