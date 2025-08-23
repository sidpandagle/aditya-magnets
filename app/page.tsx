import React from 'react';
import type { Metadata } from 'next';

import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { ProductGrid } from '../components/ProductGrid';
import { CTA } from '../components/CTA';

export const metadata: Metadata = {
  title: 'Fridge Photo Magnets | Personalized Photo Magnets',
  description: 'Create personalized fridge photo magnets from your images. Premium print quality, durable magnet backing, fast shipping.',
  openGraph: {
    title: 'Fridge Photo Magnets',
    description: 'Premium custom fridge photo magnets with archival quality printing.'
  }
};

export default function HomePage() {

  return (
    <>
      <Hero />
      <ProductGrid />
      <Features />
      <CTA />
    </>
  );
}
