import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider } from "../components/ui/provider";
import { GoogleTagManager } from "@next/third-parties/google";
import schemaData from "../data/schemaData";

export const metadata = {
  metadataBase: new URL("https://boche1000acre.com"),
  title: {
    default: "boCHE 1000 Acres | Luxury Resorts in Wayanad Kerala",
    template: "%s | boCHE 1000 Acres",
  },
  description:
    "boCHE 1000 Acres is one of the best luxury experiential resorts in Wayanad Kerala set within a 1000-acre tea plantation.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    url: "https://boche1000acre.com/",
    siteName: "boCHE 1000 Acre",
    locale: "en_IN",
    title: "boCHE 1000 Acres | Luxury Resorts in Wayanad Kerala",
    description:
      "boCHE 1000 Acres is one of the best luxury experiential resorts in Wayanad Kerala set within a 1000-acre tea plantation.",
    images: [
      {
        url: "/images/gallery/banner/190/large.webp",
        width: 1200,
        height: 630,
        alt: "boCHE 1000 Acres Luxury Resort Wayanad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "boCHE 1000 Acres | Luxury Resorts in Wayanad Kerala",
    description:
      "boCHE 1000 Acres is one of the best luxury experiential resorts in Wayanad Kerala set within a 1000-acre tea plantation.",
    images: ["/images/gallery/banner/190/large.webp"],
  },

  icons: {
    icon: "/boche_1000_acre_favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Adobe Fonts */}
        <link
          rel="stylesheet"
          href="https://use.typekit.net/emx6cqw.css"
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        {/* Performance */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
      </head>

      <body>

          <Provider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="grow">
                {children}
              </main>
              <Footer />
            </div>
          </Provider>


        <GoogleTagManager gtmId="GTM-NZRJ2R62" />
      </body>
    </html>
  );
}