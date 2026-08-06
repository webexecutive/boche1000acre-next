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

  return {
    title: activeContent.seo.title,
    description: activeContent.seo.description,
    keywords: activeContent.seo.keywords,
    alternates: {
      canonical: activeContent.seo.url,
    },
  };
}

export default function AboutPage() {
  return <AboutClient />;
}