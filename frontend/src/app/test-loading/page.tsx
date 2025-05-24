'use client';

import { useState } from 'react';
import {
  Spinner,
  SkeletonText,
  SkeletonTitle,
  SkeletonImage,
  SkeletonCard,
  SkeletonGallery,
  SkeletonBlogPost,
  LoadingOverlay,
  LoadingPage,
} from '@/components/ui/Loading';
import { Button } from '@/components/ui/Button';

export default function TestLoadingPage() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="container mx-auto py-8 space-y-12">
      <h1 className="text-3xl font-bold mb-8">Loading Components Test Page</h1>

      {/* Spinner Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Spinners</h2>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Spinner size="sm" />
            <span className="text-sm">Small</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="md" />
            <span className="text-sm">Medium</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="lg" />
            <span className="text-sm">Large</span>
          </div>
        </div>
      </section>

      {/* Basic Skeletons Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Skeletons</h2>
        <div className="space-y-4">
          <SkeletonTitle />
          <SkeletonText />
          <SkeletonText className="w-2/3" />
          <SkeletonImage />
        </div>
      </section>

      {/* Card Skeleton Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Skeleton</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </section>

      {/* Gallery Skeleton Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Gallery Skeleton</h2>
        <SkeletonGallery />
      </section>

      {/* Blog Post Skeleton Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Blog Post Skeleton</h2>
        <SkeletonBlogPost />
      </section>

      {/* Loading Overlay Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Loading Overlay</h2>
        <Button onClick={() => setShowOverlay(true)}>
          Show Loading Overlay
        </Button>
        {showOverlay && (
          <LoadingOverlay />
        )}
      </section>

      {/* Full Page Loading Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Full Page Loading</h2>
        <div className="border rounded-lg overflow-hidden">
          <LoadingPage />
        </div>
      </section>
    </div>
  );
} 