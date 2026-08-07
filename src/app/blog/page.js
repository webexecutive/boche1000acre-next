import blogData from '../../data/blogData';
import BlogFilter from './BlogFilter';

export const metadata = {
    title: "Stories from the Heart of Nature",
    description: "Explore travel stories, nature guides, Kerala cuisine, adventure tips, and sustainability insights from boCHE 1000 Acres — a luxury resort in Wayanad, Kerala.",
    keywords: "wayanad blog, things to do in wayanad, wayanad travel guide, kerala nature stories, boCHE 1000 acres blog, tea plantation wayanad, wayanad adventure, kerala cuisine",
    alternates: {
        canonical: "https://boche1000acre.com/blog",
    },
    openGraph: {
        title: "Blog | Stories from the Heart of Nature | boCHE 1000 Acres",
        description: "Explore travel stories, nature guides, Kerala cuisine, adventure tips, and sustainability insights from boCHE 1000 Acres — a luxury resort in Wayanad, Kerala.",
        url: "https://boche1000acre.com/blog",
        siteName: "boCHE 1000 Acre",
        images: [
            {
                url: "/images/gallery/estate/178/large.webp",
                width: 1200,
                height: 630,
                alt: "boCHE 1000 Acres Travel Blog",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Stories from the Heart of Nature | boCHE 1000 Acres",
        description: "Explore travel stories, nature guides, Kerala cuisine, adventure tips, and sustainability insights from boCHE 1000 Acres — a luxury resort in Wayanad, Kerala.",
        images: ["/images/gallery/estate/178/large.webp"],
    },
};

export default function BlogPage() {
    return (
        <div className="min-h-screen  bg-[#F7FDE9] ">

            {/* Page Header */}
            <div className="max-w-7xl mx-auto px-6  pt-28 pb-10">
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#6a8f3a] mb-3">
                    boCHE Stories
                </p>
                <h1 className="text-[#1e3209]  mb-4">
                    Stories from the Heart of Nature
                </h1>
                <div className="w-12 h-px bg-[#c8dba0] mb-5" />
                <p className="text-[15px] font-light text-[#4a5c35] leading-relaxed max-w-2xl">
                    Discover the art of the harvest and the soul of the mountains through stories from our estate in Wayanad.
                </p>
            </div>

            {/* Featured post + Category filter + Grid (client-side interactivity) */}
            <BlogFilter blogData={blogData} />

        </div>
    );
}