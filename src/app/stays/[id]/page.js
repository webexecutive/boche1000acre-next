import rooms from "@/data/roomsData";
import RoomDetailsClient from "./RoomDetailsClient";
import { getImageById } from "@/services/galleryService";

export async function generateStaticParams() {
    return rooms.map((room) => ({ id: room.id }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const room = rooms.find((r) => r.id === id);

    if (!room || !room.seo) {
        return {
            title: "Room Not Found | boCHE 1000 Acre",
            description: "The stay you're looking for could not be found.",
        };
    }

    const coverImage = room.images?.[0] ? getImageById(room.images[0]) : null;
    const imageUrl = coverImage?.variants?.large || "/images/gallery/banner/79/large.webp";

    return {
        title: room.seo.title,
        description: room.seo.description,
        keywords: room.seo.keywords,
        alternates: {
            canonical: `https://boche1000acre.com/stays/${room.id}`,
        },
        openGraph: {
            title: room.seo.title,
            description: room.seo.description,
            url: `https://boche1000acre.com/stays/${room.id}`,
            siteName: "boCHE 1000 Acre",
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: room.name,
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: room.seo.title,
            description: room.seo.description,
            images: [imageUrl],
        },
    };
}

const RoomDetailsPage = async ({ params }) => {
    const { id } = await params;
    return <RoomDetailsClient id={id} />;
};

export default RoomDetailsPage;