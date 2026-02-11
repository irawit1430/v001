interface HeroSectionProps {
    title: string;
    subtitle: string;
    imageSrc: string;
    imageAlt?: string;
}

export function HeroSection({ title, subtitle, imageSrc, imageAlt = "" }: HeroSectionProps) {
    return (
        <section className="relative w-full pt-[70px]">
            <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-16 flex flex-col items-start gap-2">
                <h1 className="font-medium text-black text-4xl md:text-5xl lg:text-6xl leading-tight">
                    {title}
                </h1>
                <p className="font-normal text-[#6e6764] text-xl md:text-2xl lg:text-3xl">
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
