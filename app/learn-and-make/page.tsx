import React from 'react';
import type { Metadata } from 'next';
import { categories } from '../../lib/catalog';
import CategorySection from '../../components/CategorySection';

export const metadata: Metadata = {
  title: 'Learn & Make | DIY Magnet Kits & Guides',
  description: 'DIY kits, guides and workshops to help you create custom magnets at home. Browse starter kits and tutorials.'
};

export default function LearnAndMakePage() {
  const cat = categories['learn-and-make'];
  return <CategorySection category={cat} />;
}
