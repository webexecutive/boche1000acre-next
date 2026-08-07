import Image from "next/image";
import Button from "@/components/Button";
import BookingForm from "./BookingForm";

export const metadata = {
    title: "Book Your Stay in Wayanad",
    description: "Submit your enquiry to book a stay at boCHE 1000 Acres, Wayanad. Fill in your details and our team will get back to you shortly to confirm your reservation.",
    keywords: "wayanad resort booking, boche 1000 acre booking, book resort wayanad, wayanad enquiry form",
    alternates: {
        canonical: "https://boche1000acre.com/booking",
    },
    openGraph: {
        title: "Book Your Stay in Wayanad | boCHE 1000 Acres",
        description: "Submit your enquiry to book a stay at boCHE 1000 Acres, Wayanad. Fill in your details and our team will get back to you shortly to confirm your reservation.",
        url: "https://boche1000acre.com/booking",
        siteName: "boCHE 1000 Acre",
        images: [
            {
                url: "/images/gallery/banner/190/large.webp",
                width: 1200,
                height: 630,
                alt: "Book Stay at boCHE 1000 Acres Wayanad",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Book Your Stay in Wayanad | boCHE 1000 Acres",
        description: "Submit your enquiry to book a stay at boCHE 1000 Acres, Wayanad. Fill in your details and our team will get back to you shortly to confirm your reservation.",
        images: ["/images/gallery/banner/190/large.webp"],
    },
};

export default function BookingPage() {
    return (
        <section className="py-24 px-4">
            <div className="max-w-6xl mx-auto space-y-10">

                {/* Banner */}
                <div className="flex justify-center">
                    <div className="bg-[#dfe8cf] rounded-2xl shadow-md py-6 px-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-7 w-full max-w-md sm:max-w-xl">

                        <Image
                            src="/logos/hello-boche.webp"
                            alt="Hello boCHE"
                            title="Hello boCHE"
                            width={112}
                            height={112}
                            className="h-24 sm:h-28 w-auto rounded-lg shrink-0"
                            style={{ width: "auto" }}
                        />

                        <div className=" sm:flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
                            <div>
                                <p className="text-[11px] sm:text-xs uppercase tracking-wide text-[#5a6b4a] font-medium">
                                    For booking call
                                </p>
                                <p className="text-base sm:text-lg font-medium text-[#1a1a1a]">
                                    +91 9961008008
                                </p>
                            </div>
                        </div>

                        <a href="tel:+919961008008" title="Call boCHE 1000 Acres Reservation Hotline at +91 9961008008">
                            <Button size="sm">
                                Call Now
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Form Card (client-side interactivity) */}
                <div>
                    <h1 className="text-center text-2xl md:text-3xl mb-8">
                        Enquiry Form
                    </h1>

                    <BookingForm />
                </div>

            </div>
        </section>
    );
}