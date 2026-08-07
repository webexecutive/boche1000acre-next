import { aboutData } from '../../../data/aboutData.js';
import AboutClient from './AboutClient';

// Generates static paths at build time for each slug (replaces client-side routing)
export async function generateStaticParams() {
  return aboutData.map((tab) => ({ slug: tab.slug }));
}

// Replaces your <SEO /> component — Next.js reads this and injects <head> tags
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const activeContent = aboutData.find(tab => tab.slug === slug) || aboutData[0];
  const imageUrl = activeContent.heroImage || "/images/gallery/banner/79/large.webp";

  return {
    title: activeContent.seo.title,
    description: activeContent.seo.description,
    keywords: activeContent.seo.keywords,
    alternates: {
      canonical: activeContent.seo.url,
    },
    openGraph: {
      title: activeContent.seo.title,
      description: activeContent.seo.description,
      url: activeContent.seo.url,
      siteName: "boCHE 1000 Acre",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: activeContent.navTitle,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: activeContent.seo.title,
      description: activeContent.seo.description,
      images: [imageUrl],
    },
  };
}

export default function AboutPage() {
  return <AboutClient />;
}