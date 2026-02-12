import { ScrollReveal } from "../../../ui/ScrollReveal";

interface GalleryImage {
    src: string;
    alt: string;
    label?: string;
    sublabel?: string;
}

interface ImageGalleryProps {
    images: GalleryImage[];
    rounded?: boolean;
    columns?: number;
}

export function ImageGallery({ images, rounded = true, columns = 4, centerLabels = false }: ImageGalleryProps & { centerLabels?: boolean }) {
    const gridCols =
        columns === 2
            ? "grid-cols-1 sm:grid-cols-2"
            : columns === 3
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

    return (
        <div className={`grid ${gridCols} gap-5`}>
            {images.map((image, index) => (
                <ScrollReveal key={index} width="100%" delay={index * 0.1}>
                    <div className={`flex flex-col gap-3 ${centerLabels ? "items-center text-center" : ""}`}>
                        <img
                            className={`w-full h-auto object-cover ${rounded ? "rounded-lg" : ""}`}
                            alt={image.alt}
                            src={image.src}
                        />
                        {image.label && (
                            <div>
                                <p className="font-medium text-lg text-white mt-2">{image.label}</p>
                                {image.sublabel && (
                                    <p className="font-normal text-base text-white opacity-90 mt-1">{image.sublabel}</p>
                                )}
                            </div>
                        )}
                    </div>
                </ScrollReveal>
            ))}
        </div>
    );
}
