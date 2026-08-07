import HomeClient from './HomeClient';

export const metadata = {
    title: {
        absolute: "boCHE 1000 Acres | India's Largest Resort & Entertainment Center",
    },
    description: "boCHE 1000 Acres — a luxury resort in Wayanad Kerala offering unique stays, adventure activities, and authentic Kerala cuisine on a 1000-acre tea plantation.",
    keywords: "resorts in wayanad, luxury resorts in wayanad, wayanad resort booking, bubble dome wayanad, adventure activities in wayanad, tea plantation resort wayanad",
    alternates: {
        canonical: "https://boche1000acre.com/",
    },
    openGraph: {
        title: "boCHE 1000 Acres | India's Largest Resort & Entertainment Center",
        description: "boCHE 1000 Acres — a luxury resort in Wayanad Kerala offering unique stays, adventure activities, and authentic Kerala cuisine on a 1000-acre tea plantation.",
        url: "https://boche1000acre.com/",
        siteName: "boCHE 1000 Acre",
        images: [
            {
                url: "/images/gallery/stays/116/large.webp",
                width: 1200,
                height: 630,
                alt: "boCHE 1000 Acres Luxury Resort Wayanad",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "boCHE 1000 Acres | India's Largest Resort & Entertainment Center",
        description: "boCHE 1000 Acres — a luxury resort in Wayanad Kerala offering unique stays, adventure activities, and authentic Kerala cuisine on a 1000-acre tea plantation.",
        images: ["/images/gallery/stays/116/large.webp"],
    },
};

export default function Home() {
    return <HomeClient />;
}