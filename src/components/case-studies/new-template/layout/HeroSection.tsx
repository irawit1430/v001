interface HeroSectionProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt?: string;
}

export function HeroSection({ title, subtitle, imageSrc, imageAlt = "" }: HeroSectionProps) {
    return (
        <section className="relative w-full pt-[70px]">
            <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-16 flex flex-col items-start gap-1">
                <h1 className="font-medium text-black text-3xl md:text-[50px] leading-tight">
                    {title}
                </h1>
                <p className="font-normal text-[#6F6864] text-xl md:text-[30px] leading-[36px]">
                    {subtitle}
                </p>
            </div>
            <div className="relative z-0 w-full flex justify-center -mt-8 md:-mt-12">
                <img
                    className="w-full max-w-[1200px] h-auto object-contain px-6"
                    alt={imageAlt}
                    src={imageSrc}
                />
            </div>
        </section>
    );
}
