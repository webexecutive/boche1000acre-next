'use client';

import { useState } from 'react';
import Link from 'next/link';
import CImage from '@/components/CImage';
import { getImageById } from '@/services/galleryService';

export default function BlogFilter({ blogData }) {
    const categories = ['All', ...Array.from(new Set(blogData.map((b) => b.category)))];
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = activeCategory === 'All'
        ? blogData
        : blogData.filter((b) => b.category === activeCategory);

    const featured = blogData.find((b) => b.featured);
    const featuredImage = featured ? getImageById(featured.coverImageId) : null;

    return (
        <div className="max-w-7xl mx-auto px-6 pb-24">

            {/* Featured Post */}
            {featured && (
                <div className="mb-16">
                    <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#6a8f3a] mb-4">
                        Featured Story
                    </p>
                    <Link href={`/blog/${featured.slug}`} className="group block">
                        <div className="relative overflow-hidden rounded-3xl aspect-video md:aspect-[16/6] bg-gray-100">
                            {featuredImage && (
                                <CImage
                                    src={featuredImage.variants?.large}
                                    blur={featuredImage.variants?.blur}
                                    alt={featured.title}
                                    title={featured.title}
                                    className="absolute inset-0 h-full w-full"
                                    imgClassName="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                <span className="inline-block text-[11px] font-medium tracking-widest uppercase text-[#b8d98a] mb-3">
                                    {featured.category}
                                </span>
                                <h2 className="text-2xl md:text-4xl text-white leading-tight mb-3 group-hover:text-[#b8d98a] transition-colors">
                                    {featured.title}
                                </h2>
                                <p className="text-white/80 text-sm md:text-base max-w-2xl leading-relaxed hidden md:block">
                                    {featured.excerpt}
                                </p>
                                <p className="text-white/50 text-xs mt-4">{featured.date}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )}

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                            activeCategory === cat
                                ? 'bg-[#3a5a1c] text-white shadow-sm'
                                : 'bg-white border border-[#c8dba0] text-[#4a5c35] hover:border-[#3a5a1c] hover:bg-[#f2f7ec]'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((blog) => {
                    const coverImage = getImageById(blog.coverImageId);
                    return (
                        <Link
                            key={blog.id}
                            href={`/blog/${blog.slug}`}
                            className="group block bg-white rounded-3xl overflow-hidden shadow-sm border border-[#e8f0dc] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="relative aspect-video overflow-hidden bg-gray-100">
                                {coverImage && (
                                    <CImage
                                        src={coverImage.variants?.small}
                                        blur={coverImage.variants?.blur}
                                        alt={blog.title}
                                        title={blog.title}
                                        className="absolute inset-0 h-full w-full"
                                        imgClassName="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                )}
                            </div>
                            <div className="p-6">
                                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#6a8f3a] mb-2 block">
                                    {blog.category}
                                </span>
                                <h3 className="text-[#1e3209] text-lg leading-snug mb-2 group-hover:text-[#3a5a1c] transition-colors line-clamp-2">
                                    {blog.title}
                                </h3>
                                <p className="text-[#4a5c35] text-sm leading-relaxed line-clamp-2 mb-4">
                                    {blog.excerpt}
                                </p>
                                <p className="text-[#8aaa60] text-xs">{blog.date}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>

        </div>
    );
}