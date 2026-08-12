"use client";

import { useState } from "react";
import { LuZoomIn, LuZoomOut, LuRotateCcw } from "react-icons/lu";

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
  const [zoomLevel, setZoomLevel] = useState(1);

  const prevPage = () => {
    setPageIndex((prev) => Math.max(prev - 1, 0));
    setZoomLevel(1);
  };

  const nextPage = () => {
    setPageIndex((prev) => Math.min(prev + 1, MENU_PAGES.length - 1));
    setZoomLevel(1);
  };

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 1));
  const resetZoom = () => setZoomLevel(1);

  const toggleZoom = () => {
    setZoomLevel((prev) => (prev > 1 ? 1 : 1.5));
  };

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

          {/* Zoom & Close controls */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-gray-100 rounded-lg p-1 space-x-1">
              <button
                onClick={zoomOut}
                disabled={zoomLevel <= 1}
                title="Zoom Out"
                className="p-1.5 rounded-md hover:bg-gray-200 text-gray-700 disabled:opacity-30 disabled:hover:bg-transparent transition cursor-pointer"
              >
                <LuZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-semibold text-gray-600 px-1 min-w-[42px] text-center select-none">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={zoomIn}
                disabled={zoomLevel >= 2.5}
                title="Zoom In"
                className="p-1.5 rounded-md hover:bg-gray-200 text-gray-700 disabled:opacity-30 disabled:hover:bg-transparent transition cursor-pointer"
              >
                <LuZoomIn className="w-4 h-4" />
              </button>
              {zoomLevel > 1 && (
                <button
                  onClick={resetZoom}
                  title="Reset Zoom"
                  className="p-1.5 rounded-md hover:bg-gray-200 text-gray-700 transition cursor-pointer"
                >
                  <LuRotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="bg-gray-100 text-black w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-200 transition cursor-pointer ml-2"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Menu Image Container */}
        <div
          className="overflow-auto flex items-center justify-center p-2 sm:p-4 bg-gray-50 flex-1 relative"
          style={{ maxHeight: "calc(95dvh - 110px)" }}
        >
          <div
            className="relative transition-transform duration-200 ease-out origin-center cursor-zoom-in"
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: "top center",
            }}
            onDoubleClick={toggleZoom}
          >
            <img
              src={MENU_PAGES[pageIndex]}
              alt={`Menu Page ${pageIndex + 1}`}
              title="Double-click to zoom in/out"
              className="max-h-[calc(95dvh-130px)] w-auto object-contain rounded shadow-md select-none"
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