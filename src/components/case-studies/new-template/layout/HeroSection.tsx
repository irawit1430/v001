interface HeroSectionProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt?: string;
    imageClassName?: string;
    imageContainerClassName?: string;
}

export function HeroSection({
    title,
    subtitle,
    imageSrc,
    imageAlt = "",
    imageClassName = "w-full max-w-[1000px] h-auto object-contain px-6",
    imageContainerClassName = "relative z-0 w-full flex justify-center mt-2 md:mt-0"
}: HeroSectionProps) {
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
            <div className={imageContainerClassName}>
                <img
                    className={imageClassName}
                    alt={imageAlt}
                    src={imageSrc}
                />
            </div>
        </section>
    );
}
