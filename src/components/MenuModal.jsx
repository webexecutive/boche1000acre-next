"use client";

import { useState } from "react";

const MENU_PAGES = [
  "/images/menu/Toddy Menu wayanad_page-0001.webp",
  "/images/menu/Toddy Menu wayanad_page-0002.webp",
  "/images/menu/Toddy Menu wayanad_page-0003.webp",
  "/images/menu/Toddy Menu wayanad_page-0004.webp",
  "/images/menu/Toddy Menu wayanad_page-0005.webp",
  "/images/menu/Toddy Menu wayanad_page-0006.webp",
  "/images/menu/Toddy Menu wayanad_page-0007.webp",
  "/images/menu/Toddy Menu wayanad_page-0008.webp",
];

function MenuModal({ onClose }) {
  const [pageIndex, setPageIndex] = useState(0);

  const prevPage = () => setPageIndex((prev) => Math.max(prev - 1, 0));
  const nextPage = () => setPageIndex((prev) => Math.min(prev + 1, MENU_PAGES.length - 1));

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl w-full max-w-4xl flex flex-col overflow-hidden shadow-2xl"
        style={{ maxHeight: "95dvh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 shrink-0">
          <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
            Our Menu
          </span>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="bg-gray-100 text-black w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Menu Image Container */}
        <div
          className="overflow-auto flex items-center justify-center p-2 sm:p-4 bg-gray-50 flex-1"
          style={{ maxHeight: "calc(95dvh - 110px)" }}
        >
          <div className="relative max-w-full h-auto">
            <img
              src={MENU_PAGES[pageIndex]}
              alt={`Menu Page ${pageIndex + 1}`}
              title={`Menu Page ${pageIndex + 1}`}
              className="max-h-[calc(95dvh-130px)] w-auto object-contain rounded shadow-md transition-all duration-200"
            />
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between py-3 px-6 border-t border-gray-200 bg-white shrink-0">
          <button
            onClick={prevPage}
            disabled={pageIndex === 0}
            className="px-4 py-2 text-sm font-medium bg-[#3a5a1c] text-white rounded-lg disabled:opacity-40 hover:bg-[#2e4715] transition cursor-pointer"
          >
            ← Prev
          </button>

          <span className="text-sm font-medium text-gray-600">
            Page {pageIndex + 1} of {MENU_PAGES.length}
          </span>

          <button
            onClick={nextPage}
            disabled={pageIndex === MENU_PAGES.length - 1}
            className="px-4 py-2 text-sm font-medium bg-[#3a5a1c] text-white rounded-lg disabled:opacity-40 hover:bg-[#2e4715] transition cursor-pointer"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuModal;