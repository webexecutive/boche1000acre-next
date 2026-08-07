"use client";

import { useState } from "react";
import Image from "next/image";

export default function CImage({
  src,
  alt = "",
  title,
  blur,
  fallback = "/images/image-not-found-small.webp",
  className = "",
  imgClassName,
}) {
  const [loaded, setLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  const resolvedTitle = title || alt || "";

  const resolvedImgClass =
    imgClassName ??
    "absolute inset-0 w-full h-full object-cover";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blur placeholder */}
      {blur && !loaded && (
        <Image
          src={blur}
          alt={alt}
          title={resolvedTitle}
          fill
          unoptimized
          className={`${resolvedImgClass} scale-110 blur-xl`}
        />
      )}

      {/* Main image */}
      <Image
        src={imgSrc}
        alt={alt}
        title={resolvedTitle}
        fill
        unoptimized
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (imgSrc !== fallback) {
            setImgSrc(fallback);
          }
        }}
        className={`${resolvedImgClass} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}