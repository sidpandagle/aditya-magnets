import React from 'react';
import type { Metadata } from 'next';
import { categories } from '../../lib/catalog';
import CategorySection from '../../components/CategorySection';

export const metadata: Metadata = {
  title: 'Save the Date Magnets | Announce Your Day',
  description: 'Memorable Save the Date magnet designs—reach out to customize layouts, colors, and wording.'
};

export default function SaveTheDatePage() {
  const cat = categories['save-the-date'];
  return <CategorySection category={cat} />;
}
