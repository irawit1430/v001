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
    textColor?: string;
}

export function ImageGallery({ images, rounded = true, columns = 4, centerLabels = false, textColor = "text-white" }: ImageGalleryProps & { centerLabels?: boolean }) {
    const gridCols =
        columns === 2
            ? "grid-cols-1 sm:grid-cols-2"
            : columns === 3
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

    return (
        <div className={`grid ${gridCols} gap-5 items-end`}>
            {images.map((image, index) => (
                <ScrollReveal key={index} width="100%" delay={index * 0.1}>
                    <div className={`flex flex-col ${centerLabels ? "items-center text-center" : ""}`}>
                        <div className="flex items-end flex-1">
                            <img
                                className={`w-full h-auto object-contain ${rounded ? "rounded-lg" : ""}`}
                                alt={image.alt}
                                src={image.src}
                            />
                        </div>
                        {image.label && (
                            <div className="mt-3">
                                <p className={`font-medium text-lg ${textColor}`}>{image.label}</p>
                                {image.sublabel && (
                                    <p className={`font-normal text-base ${textColor} opacity-90 mt-1`}>{image.sublabel}</p>
                                )}
                            </div>
                        )}
                    </div>
                </ScrollReveal>
            ))}
        </div>
    );
}
