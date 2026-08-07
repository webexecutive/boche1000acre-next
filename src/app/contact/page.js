import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdDirections } from "react-icons/md";
import Button from "../../components/Button";
import ContactForm from "./ContactForm";

export const metadata = {
    title: "Contact & Resort Booking in Wayanad",
    description: "Get in touch with boCHE 1000 Acres, a luxury nature resort in Wayanad. Contact us for bookings, stay enquiries, events, adventure activities, and resort information.",
    keywords: "contact boche 1000 acres, wayanad resort contact, resort booking wayanad, luxury resort kerala contact, boche wayanad phone number, wayanad stay enquiry, resort near meppadi",
    alternates: {
        canonical: "https://boche1000acre.com/contact",
    },
    openGraph: {
        title: "Contact Us & Resort Booking | boCHE 1000 Acres",
        description: "Get in touch with boCHE 1000 Acres, a luxury nature resort in Wayanad. Contact us for bookings, stay enquiries, events, adventure activities, and resort information.",
        url: "https://boche1000acre.com/contact",
        siteName: "boCHE 1000 Acre",
        images: [
            {
                url: "/images/gallery/banner/190/large.webp",
                width: 1200,
                height: 630,
                alt: "Contact boCHE 1000 Acres Wayanad",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us & Resort Booking | boCHE 1000 Acres",
        description: "Get in touch with boCHE 1000 Acres, a luxury nature resort in Wayanad. Contact us for bookings, stay enquiries, events, adventure activities, and resort information.",
        images: ["/images/gallery/banner/190/large.webp"],
    },
};

export default function ContactPage() {
    return (
        <section className="py-20 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm text-justify">
                        We'd love to hear from you whether you have questions, need support,
                        want to learn more about our services or for booking please contact us.
                    </p>
                </div>

                {/* Map Section */}
                <div className="relative w-full max-w-3xl mx-auto h-72 md:h-96 rounded-2xl overflow-hidden shadow-md mb-12">
                    <iframe
                        src="https://www.google.com/maps?q=11.530258170742771,76.12723070987565&z=15&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, display: "block" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="boCHE 1000 Acre Location"
                    />
                    <a
                        href="https://maps.app.goo.gl/eL9urRpNbi4rnPyw5"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open boCHE 1000 Acres on Google Maps for directions"
                        className="absolute top-4 right-4 z-10"
                    >
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border gap-1.5">
                            <MdDirections className="h-4 w-4" />
                            Get Direction
                        </Button>
                    </a>
                </div>

                {/* Info Section */}
                <div className="relative py-10">
                    <div className="absolute top-0 left-0 w-full h-px bg-gray-300"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>

                    <div className="grid md:grid-cols-3 text-center relative">

                        {/* Address */}
                        <div className="relative py-6 md:py-0 px-4 space-y-3">
                            <div className="flex items-center justify-center gap-2">
                                <FaMapMarkerAlt className="text-gray-600 text-lg" />
                                <h3 className="text-lg">Address</h3>
                            </div>
                             <p className="text-sm text-gray-500 leading-relaxed">
                                    boCHE 1000 Acre,<br />
                                    boCHE Junction, Meppadi<br />
                                    Wayanad, Kerala 673577
                                </p>

                            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-300"></div>
                            <div className="md:hidden absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
                        </div>

                        {/* Call Us */}
                        <div className="relative py-6 md:py-0 px-4 space-y-3">
                            <div className="flex items-center justify-center gap-2">
                                <FaPhoneAlt className="text-gray-600 text-lg" />
                                <h3 className="text-lg">Call Us</h3>
                            </div>
                            <p className="text-sm text-gray-500">Reception</p>
                            <p className="text-sm text-gray-700">
                                <a href="tel:+917034048884" title="Call boCHE 1000 Acres Reception at +91 70340 48884" className="hover:underline hover:text-[#3a5a1c] transition-colors">
                                    +91 70340 48884
                                </a>
                            </p>
                            <p className="text-sm text-gray-700">
                                <a href="tel:+918086004747" title="Call boCHE 1000 Acres Reception at +91 80860 04747" className="hover:underline hover:text-[#3a5a1c] transition-colors">
                                    +91 80860 04747
                                </a>
                            </p>
                            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-300"></div>
                            <div className="md:hidden absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
                        </div>

                        {/* Mail */}
                        <div className="py-6 md:py-0 px-4 space-y-3">
                            <div className="flex items-center justify-center gap-2">
                                <FaEnvelope className="text-gray-600 text-lg" />
                                <h3 className="text-lg">Mail Id</h3>
                            </div>
                            <p className="text-sm text-gray-700">
                                <a href="mailto:booking@bochehg.com" title="Send email enquiry to booking@bochehg.com" className="hover:underline hover:text-[#3a5a1c] transition-colors">
                                    booking@bochehg.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form (client-side interactivity) */}
                <div className="mt-16">
                    <h4 className="mb-6">Write to Us</h4>
                    <ContactForm />
                </div>

            </div>
        </section>
    );
}