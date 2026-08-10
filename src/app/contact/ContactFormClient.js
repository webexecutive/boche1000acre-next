'use client';

import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("./ContactForm"), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center min-h-[300px]">
            <div className="w-8 h-8 rounded-full border-2 border-gray-300 border-t-[#3a5a1c] animate-spin" />
        </div>
    ),
});

export default function ContactFormClient() {
    return <ContactForm />;
}
