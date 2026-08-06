import adventures from '../../data/adventuresData';
import AdventureGallery from './AdventureGallery';

export const metadata = {
    title: "Adventure Activities in Wayanad | Zipline | boCHE 1000 Acre",
    description: "Experience thrilling adventure activities in Wayanad at boCHE 1000 Acre. Enjoy Zipline, Giant Swing, ATV Rides, Sky Cycling, and exciting outdoor experiences amidst a breathtaking 1000-acre tea plantation.",
    keywords: "adventure activities in wayanad, zipline wayanad, ATV ride wayanad, sky cycling wayanad, giant swing wayanad, adventure resort wayanad, wayanad resorts with activities, outdoor activities in wayanad",
};

export default function AdventuresPage() {
    return (
        <div className="min-h-screen bg-[#F7FDE9]">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-10">
                <p className="text-[11px] font-medium tracking-[0.25em] text-[#6a8f3a] mb-3">
                    boCHE ADVENTURES
                </p>

                <h1 className="text-[#1e3209]  mb-4">
                    Adventures in the Heart of Wayanad
                </h1>

                <div className="w-12 h-px bg-[#c8dba0] mb-5" />

                <p className="text-[15px] font-light text-[#4a5c35] leading-relaxed max-w-6xl">
                    Experience thrilling outdoor adventures amidst our 1000-acre tea plantation.
                    From sky cycling and giant swings to ATV rides and ziplines, every activity
                    is designed to create unforgettable memories.
                </p>
            </div>

            {/* Adventure Cards + Modal (client-side interactivity) */}
            <AdventureGallery adventures={adventures} />

        </div>
    );
}