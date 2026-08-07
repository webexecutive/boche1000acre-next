import events from '../../../data/events.js';
import EventDetailsClient from './EventDetailsClient';
import { getImageById } from '../../../services/galleryService.js';

export async function generateStaticParams() {
    return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const event = events.find((e) => e.slug === slug);

    if (!event?.seo) return {};

    const imageId = event.bannerId || event.thumbnailId;
    const coverImage = imageId ? getImageById(imageId) : null;
    const imageUrl = coverImage?.variants?.large || "/images/gallery/events/20/large.webp";

    return {
        title: event.seo.title,
        description: event.seo.description,
        keywords: event.seo.keywords,
        alternates: {
            canonical: `https://boche1000acre.com/events/${event.slug}`,
        },
        openGraph: {
            title: event.seo.title,
            description: event.seo.description,
            url: `https://boche1000acre.com/events/${event.slug}`,
            siteName: "boCHE 1000 Acre",
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: event.title,
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: event.seo.title,
            description: event.seo.description,
            images: [imageUrl],
        },
    };
}

export default async function EventDetailsPage({ params }) {
    const { slug } = await params;
    const event = events.find((e) => e.slug === slug);

    if (!event) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#fafaf8]">
                <p className="text-neutral-400 text-lg">Event not found.</p>
            </div>
        );
    }

    return <EventDetailsClient event={event} />;
}