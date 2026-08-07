import StaysGrid from "./StaysGrid";

export const metadata = {
    title: "Rooms & Unique Stays in Wayanad",
    description:
        "Discover unique stays in Wayanad at boCHE 1000 Acre — Bubble Domes, British Bungalows, Mud Houses, and more, set within a 1000-acre tea plantation resort.",
    keywords: "rooms in wayanad, unique stays in wayanad",
    alternates: {
        canonical: "https://boche1000acre.com/stays",
    },
    openGraph: {
        title: "Rooms & Unique Stays in Wayanad | boCHE 1000 Acres",
        description:
            "Discover unique stays in Wayanad at boCHE 1000 Acre — Bubble Domes, British Bungalows, Mud Houses, and more, set within a 1000-acre tea plantation resort.",
        url: "https://boche1000acre.com/stays",
        siteName: "boCHE 1000 Acre",
        images: [
            {
                url: "/images/gallery/stays/79/large.webp",
                width: 1200,
                height: 630,
                alt: "Unique Stays in Wayanad boCHE 1000 Acre",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rooms & Unique Stays in Wayanad | boCHE 1000 Acres",
        description:
            "Discover unique stays in Wayanad at boCHE 1000 Acre — Bubble Domes, British Bungalows, Mud Houses, and more, set within a 1000-acre tea plantation resort.",
        images: ["/images/gallery/stays/79/large.webp"],
    },
};

const StaysPage = () => {
    return (
        <div className="min-h-screen bg-[#F7FDE9]">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-10">
                <p className="text-[11px] font-medium tracking-[0.25em]  text-[#6a8f3a] mb-3">
                    boCHE STAYS
                </p>

                <h1 className="text-[#1e3209]  mb-4">
                    Experience Our Unique Stays
                </h1>

                <div className="w-12 h-px bg-[#c8dba0] mb-5" />

                <p className="text-[15px] font-light text-[#4a5c35] leading-relaxed max-w-6xl">
                    From luxurious Bubble Domes and charming Mud Houses to the
                    iconic British Bungalow and futuristic XPods, discover
                    unforgettable stays nestled within our 1000-acre tea estate
                    in Wayanad.
                </p>
            </div>

            {/* Cards + Sort (client) */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
                <StaysGrid />
            </div>

        </div>
    );
};

export default StaysPage;