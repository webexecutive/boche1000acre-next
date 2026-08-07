import blogData from "../../../data/blogData";
import CImage from "../../../components/CImage";
import { getImageById } from "../../../services/galleryService";
import NotFound from "../../../components/NotFound";

export async function generateStaticParams() {
    return blogData.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const blog = blogData.find((b) => b.slug === slug);

    if (!blog) return {};

    const coverImage = blog.coverImageId ? getImageById(blog.coverImageId) : null;
    const imageUrl = coverImage?.variants?.large || "/images/gallery/banner/79/large.webp";

    return {
        title: blog.seo.title,
        description: blog.seo.description,
        keywords: blog.seo.keywords,
        alternates: {
            canonical: `https://boche1000acre.com/blog/${blog.slug}`,
        },
        openGraph: {
            title: blog.seo.title,
            description: blog.seo.description,
            url: `https://boche1000acre.com/blog/${blog.slug}`,
            siteName: "boCHE 1000 Acre",
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: blog.seo.title,
            description: blog.seo.description,
            images: [imageUrl],
        },
    };
}

export default async function BlogArticle({ params }) {
    const { slug } = await params;
    const blog = blogData.find((b) => b.slug === slug);

    if (!blog) return <NotFound />;

    return (
        <article className="max-w-7xl mx-auto px-6 pt-28 pb-10 ">
            {/* Category */}
            <span className="inline-block text-sm uppercase tracking-wider text-[#6a8f3a] mb-4">
                {blog.category}
            </span>

            {/* Title */}
            <h1 className=" text-[#1e3209] mb-4">
                {blog.title}
            </h1>

            {/* Date */}
            <p className="text-gray-500 mb-10">
                {blog.date}
            </p>

            {/* Cover Image */}
            {(() => {
                const image = getImageById(blog.coverImageId);

                return (
                    <CImage
                        src={image?.variants?.large}
                        blur={image?.variants?.blur}
                        alt={image?.alt || blog.title}
                        className="max-w-2xl aspect-video  rounded-2xl mb-10"
                    />
                );
            })()}

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
                {blog.content.map((section, index) => {
                    switch (section.type) {
                        case "heading":
                            return (
                                <h2
                                    key={index}
                                    className="text-[#1e3209] mt-12 mb-5"
                                >
                                    {section.content}
                                </h2>
                            );

                        case "paragraph":
                            return (
                                <p
                                    key={index}
                                    className="text-gray-700 leading-8 mb-6 text-justify"
                                >
                                    {section.content}
                                </p>
                            );

                        case "image": {
                            const img = getImageById(section.imageId);

                            return (
                                <CImage
                                    key={index}
                                    src={img?.variants?.large}
                                    blur={img?.variants?.blur}
                                    alt={img?.alt || blog.title}
                                    className="max-w-2xl aspect-video rounded-2xl mb-10"
                                />
                            );
                        }

                        case "list":
                            return (
                                <ul
                                    key={index}
                                    className="list-disc pl-6 space-y-2 my-6 text-gray-700"
                                >
                                    {section.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                            );

                        default:
                            return null;
                    }
                })}
            </div>
        </article>
    );
}