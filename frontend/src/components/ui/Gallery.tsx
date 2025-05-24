'use client';

import { useState } from 'react';

interface ImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  color?: string;
}

interface GalleryProps {
  images: ImageData[];
}

export const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  return (
    <div className="space-y-4">
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(image)}
          >
            <div
              className="w-full h-full transition-transform hover:scale-105"
              style={{
                backgroundColor: image.color || `hsl(${index * 120}, 70%, 50%)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full aspect-[4/3]">
            <div
              className="w-full h-full"
              style={{
                backgroundColor: selectedImage.color || `hsl(${images.indexOf(selectedImage) * 120}, 70%, 50%)`,
              }}
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-yellow-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}; 