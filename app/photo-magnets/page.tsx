import React from 'react';
import type { Metadata } from 'next';
import { categories } from '../../lib/catalog';
import CategorySection from '../../components/CategorySection';

export const metadata: Metadata = {
  title: 'Photo Magnets | Personalize Your Memories',
  description: 'Turn photos into vibrant magnets. Explore finishes & styles—message us on WhatsApp to start.'
};

export default function PhotoMagnetsPage() {
  const cat = categories['photo-magnets'];
  return <CategorySection category={cat} />;
}
