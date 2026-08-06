import events from '../../../data/events.js';
import EventDetailsClient from './EventDetailsClient';

export async function generateStaticParams() {
    return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const event = events.find((e) => e.slug === slug);

    if (!event?.seo) return {};

    return {
        title: event.seo.title,
        description: event.seo.description,
        keywords: event.seo.keywords,
        alternates: {
            canonical: `https://boche1000acre.com/events/${event.slug}`,
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