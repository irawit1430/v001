const ASSETS = {
    sketch1: 'bg-gray-200',
    sketch2: 'bg-gray-200',
    sketch3: 'bg-gray-200',
};

const WireframeGallery = () => {
    return (
        <section className="w-full bg-white py-8">
            <div className="max-w-container mx-auto px-4 md:px-24">
                {/* 3-column grid for wireframe images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Sketch 1 - Mobile wireframe drawings */}
                    <div className={`w-full aspect-[460/500] rounded-[10px] ${ASSETS.sketch1} flex items-center justify-center text-taupe/40 text-lg overflow-hidden`}>
                        <span>Sketch 1 - Wireframe Drawings</span>
                    </div>

                    {/* Sketch 2 - User flow with sticky notes */}
                    <div className={`w-full aspect-[460/500] rounded-[10px] ${ASSETS.sketch2} flex items-center justify-center text-taupe/40 text-lg overflow-hidden`}>
                        <span>Sketch 2 - User Flow Mapping</span>
                    </div>

                    {/* Sketch 3 - Detailed mockups */}
                    <div className={`w-full aspect-[460/500] rounded-[10px] ${ASSETS.sketch3} flex items-center justify-center text-taupe/40 text-lg overflow-hidden`}>
                        <span>Sketch 3 - Detailed Mockups</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WireframeGallery;
