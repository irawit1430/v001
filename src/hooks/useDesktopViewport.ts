import { useEffect } from 'react';

export const useDesktopViewport = () => {
    useEffect(() => {
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        const originalContent = viewportMeta?.getAttribute('content') || 'width=device-width, initial-scale=1.0';

        // Apply the miniature desktop layout for this specific page
        if (viewportMeta) {
            viewportMeta.setAttribute('content', 'width=1280');
        }

        return () => {
            // Restore original on component unmount
            if (viewportMeta) {
                viewportMeta.setAttribute('content', originalContent);
            }
        };
    }, []);
};
