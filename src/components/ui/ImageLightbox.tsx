import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageLightboxProps {
    src: string;
    alt: string;
    className?: string;
    children?: React.ReactNode;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ src, alt, className = '', children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = useCallback(() => setIsOpen(false), []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [isOpen, handleClose]);

    return (
        <>
            <div
                className={`cursor-pointer ${className}`}
                onClick={() => setIsOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)}
            >
                {children || (
                    <img
                        src={src}
                        alt={alt}
                        className="w-full h-auto"
                    />
                )}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={handleClose}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 text-white text-4xl font-light hover:opacity-80 transition-opacity z-10 w-12 h-12 flex items-center justify-center"
                            onClick={handleClose}
                            aria-label="Close lightbox"
                        >
                            ×
                        </button>

                        <motion.img
                            src={src}
                            alt={alt}
                            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ImageLightbox;
