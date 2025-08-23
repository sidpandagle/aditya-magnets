import React from 'react';
import type { Metadata } from 'next';
import { categories } from '../../lib/catalog';
import CategorySection from '../../components/CategorySection';

export const metadata: Metadata = {
  title: 'Retro Prints | Vintage Magnet Styles',
  description: 'Explore nostalgic magnet print styles with classic borders & tones—contact us to create yours.'
};

export default function RetroPrintsPage() {
  const cat = categories['retro-prints'];
  return <CategorySection category={cat} />;
}
