'use client';

import { useState, useEffect } from 'react';
import AdventureCard from '../../components/AdventureCard';

export default function AdventureGallery({ adventures }) {
    const [reelModal, setReelModal] = useState(null);

    /* Lock body scroll when modal is open */
    useEffect(() => {
        document.body.style.overflow = reelModal ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [reelModal]);

    useEffect(() => {
        if (reelModal) {
            window.history.pushState({ modal: true }, "");

            const handlePopState = () => {
                setReelModal(null);
            };

            window.addEventListener("popstate", handlePopState);
            return () => window.removeEventListener("popstate", handlePopState);
        }
    }, [reelModal]);

    return (
        <>
            {/* Adventure Cards */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {adventures.map((adventure) => (
                        <AdventureCard
                            key={adventure.id}
                            adventure={adventure}
                            onPlay={() => setReelModal(adventure)}
                        />
                    ))}
                </div>
            </div>

            {/* Reel Modal */}
            {reelModal && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                    onClick={() => setReelModal(null)}
                >
                    <button
                        onClick={() => setReelModal(null)}
                        className="absolute top-4 right-4 z-10 bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center text-lg hover:bg-black transition"
                    >
                        ✕
                    </button>

                    <div
                        className="w-[90vw] sm:w-80 md:w-96 aspect-9/16 rounded-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            key={reelModal.id}
                            src={`${reelModal.videoLink}?autoplay=1&mute=1&controls=1`}
                            className="w-full h-full"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
}