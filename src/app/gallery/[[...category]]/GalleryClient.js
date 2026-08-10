'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { categories } from '../../../data/gallery';
import { getImagesByCategory } from '../../../services/galleryService';

/* Map category ids to display labels for the tab bar */
const DISPLAY_LABELS = {
    all: 'Recent',
    adventures: 'Adventure',
    stays: 'Stays',
    'toddy-pub': 'Toddy Pub',
    events: 'Events',
    estate: 'Estate',
};

const ITEMS_PER_PAGE = 50;

export default function GalleryClient({ categoryParam }) {
    const router = useRouter();
    const galleryRef = useRef(null);
    const [page, setPage] = useState(1);
    const [blursReady, setBlursReady] = useState(false);

    const activeCategory = categoryParam?.[0] || 'all';

    const filteredImages = getImagesByCategory(activeCategory)
        .sort((a, b) => b.id - a.id);

    const totalCount = filteredImages.length;
    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
    const pagedImages = filteredImages.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE,
    );

    /* Preload all blur images before revealing the grid */
    useEffect(() => {
        setBlursReady(false);
        if (pagedImages.length === 0) { setBlursReady(true); return; }

        let loaded = 0;
        pagedImages.forEach((item) => {
            if (typeof window === 'undefined') return;
            const img = new Image();
            img.onload = img.onerror = () => {
                loaded += 1;
                if (loaded === pagedImages.length) setBlursReady(true);
            };
            img.src = item.variants.blur;
        });
    }, [activeCategory, page]);

    /* Initialise / reinitialise PhotoSwipe whenever the visible set changes */
    useEffect(() => {
        if (!galleryRef.current) return;

        const lightbox = new PhotoSwipeLightbox({
            gallery: galleryRef.current,
            children: 'a[data-pswp-src]',
            pswpModule: () => import('photoswipe'),
        });

        lightbox.init();
        return () => lightbox.destroy();
    }, [activeCategory, page, blursReady]);

    const handleTab = (cat) => {
        cat === 'all' ? router.push('/gallery') : router.push(`/gallery/${cat}`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 lg:pt-24 pb-20 space-y-8">

            <h1>Gallery</h1>

            <div className="flex gap-6 border-b border-gray-200 overflow-x-auto scrollbar-none">
                {categories
                    .filter(cat => cat.showInGallery !== false)
                    .map((cat) => {
                        const isActive = activeCategory === cat.category;
                        const label = DISPLAY_LABELS[cat.category] || cat.title;

                        return (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setPage(1);
                                    handleTab(cat.category);
                                }}
                                className={`pb-3 text-sm font-medium transition-colors cursor-pointer border-b-2 whitespace-nowrap ${isActive
                                    ? 'border-[#3a5a1c] text-[#3a5a1c]'
                                    : 'border-transparent text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {label}
                            </button>
                        );
                    })}
            </div>

            {pagedImages.length === 0 ? (
                <p className="text-gray-500 py-12">No images found in this category.</p>
            ) : !blursReady ? (
                <div className="flex items-center justify-center py-32">
                    <div className="w-8 h-8 rounded-full border-2 border-gray-200 border-t-gray-800 animate-spin" />
                </div>
            ) : (
                <div ref={galleryRef} className="columns-2 sm:columns-3 lg:columns-4 gap-3">
                    {pagedImages.map((item) => (
                        <a
                            key={item.id}
                            data-pswp-src={item.variants.large}
                            data-pswp-width="1920"
                            data-pswp-height="1280"
                            href={item.variants.large}
                            className="block mb-3 break-inside-avoid overflow-hidden rounded-xl group cursor-zoom-in"
                        >
                            <div className="relative w-full overflow-hidden">
                                {/* Blurred placeholder */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={item.variants.blur}
                                    alt={item.alt}
                                    title={item.title || item.alt}
                                    aria-hidden="true"
                                    className="w-full h-auto object-cover"
                                />

                                {/* High-res image */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={item.variants.small}
                                    alt={item.alt}
                                    title={item.title || item.alt}
                                    loading="lazy"
                                    onLoad={(e) => {
                                        const img = e.currentTarget;
                                        const a = img.closest('a');
                                        img.style.opacity = 1;
                                        if (a && img.naturalWidth > 0) {
                                            const scale = 1920 / Math.max(img.naturalWidth, img.naturalHeight);
                                            a.dataset.pswpWidth = Math.round(img.naturalWidth * scale);
                                            a.dataset.pswpHeight = Math.round(img.naturalHeight * scale);
                                        }
                                    }}
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = '/images/image-not-found-small.webp';
                                        e.currentTarget.style.opacity = 1;
                                    }}
                                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:scale-105"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex items-center justify-between pt-8 border-t border-gray-200 text-sm">
                    <span className="text-gray-500">
                        Page {page} of {totalPages}
                    </span>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setPage((p) => Math.max(p - 1, 1))}
                            disabled={page === 1}
                            className="px-4 py-2 rounded-lg border border-gray-200 font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                        >
                            Previous
                        </button>

                        <button
                            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                            disabled={page === totalPages}
                            className="px-4 py-2 rounded-lg border border-gray-200 font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}
