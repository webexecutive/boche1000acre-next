import rooms from "@/data/roomsData";
import RoomDetailsClient from "./RoomDetailsClient";

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

    return {
        title: room.seo.title,
        description: room.seo.description,
        keywords: room.seo.keywords,
        alternates: {
            canonical: `https://boche1000acre.com/stays/${room.id}`,
        },
    };
}

const RoomDetailsPage = async ({ params }) => {
    const { id } = await params;
    return <RoomDetailsClient id={id} />;
};

export default RoomDetailsPage;