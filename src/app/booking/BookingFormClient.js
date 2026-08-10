'use client';

import dynamic from "next/dynamic";

const BookingForm = dynamic(() => import("./BookingForm"), {
    ssr: false,
    loading: () => (
        <div className="border border-gray-400 p-6 rounded-2xl md:p-10 flex items-center justify-center min-h-[400px]">
            <div className="w-8 h-8 rounded-full border-2 border-gray-300 border-t-[#3a5a1c] animate-spin" />
        </div>
    ),
});

export default function BookingFormClient() {
    return <BookingForm />;
}
