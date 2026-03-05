import { ScrollReveal } from "../../../ui/ScrollReveal";
import { ImageLightbox } from "../../../ui/ImageLightbox";

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
        <div className={`grid ${gridCols} gap-5 items-stretch`}>
            {images.map((image, index) => (
                <ScrollReveal key={index} width="100%" delay={index * 0.1} className="h-full">
                    <div className={`flex flex-col h-full ${centerLabels ? "items-center text-center" : ""}`}>
                        <div className="flex items-end justify-center flex-1 w-full">
                            <ImageLightbox src={image.src} alt={image.alt}>
                                <img
                                    className={`w-full h-auto object-contain ${rounded ? "rounded-lg" : ""} cursor-pointer hover:opacity-90 transition-opacity`}
                                    alt={image.alt}
                                    src={image.src}
                                />
                            </ImageLightbox>
                        </div>
                        {image.label && (
                            <div className="mt-3">
                                <p className={`font-medium text-lg ${textColor}`}>{image.label}</p>
                                {image.sublabel && (
                                    <p className={`font-normal text-base ${textColor} opacity-90 mt-1 whitespace-pre-line text-left`}>{image.sublabel}</p>
                                )}
                            </div>
                        )}
                    </div>
                </ScrollReveal>
            ))}
        </div>
    );
}
