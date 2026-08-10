import { categories } from '../../../data/gallery';
import GalleryClient from './GalleryClient';

export async function generateStaticParams() {
    return [
        { category: [] },
        { category: ['stays'] },
        { category: ['toddy-pub'] },
        { category: ['estate'] },
        { category: ['adventures'] },
        { category: ['events'] },
    ];
}

export async function generateMetadata({ params }) {
    const { category } = await params;
    const activeCategory = category?.[0] || 'all';
    const matchedCategory = categories.find(c => c.category === activeCategory);
    const catLabel = matchedCategory ? matchedCategory.title : 'Resort';

    return {
        title: `${catLabel} Gallery | boCHE 1000 Acres Resort in Wayanad`,
        description: "Explore photos of boCHE 1000 Acres — luxury stays, tea plantation views, zipline, ATV rides, Toddy Pub, and event venues at our resort in Wayanad Kerala.",
        keywords: "gallery boche 1000 acres, wayanad resort photos, luxury resort wayanad images, boche wayanad gallery",
        alternates: {
            canonical: activeCategory === 'all'
                ? "https://boche1000acre.com/gallery"
                : `https://boche1000acre.com/gallery/${activeCategory}`,
        },
    };
}

export default async function GalleryPage({ params }) {
    const { category } = await params;
    return <GalleryClient categoryParam={category} />;
}