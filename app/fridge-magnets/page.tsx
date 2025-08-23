import React from 'react';
import type { Metadata } from 'next';
import { categories } from '../../lib/catalog';
import CategorySection from '../../components/CategorySection';

export const metadata: Metadata = {
  title: 'Fridge Magnets | Styles & Ideas',
  description: 'Browse customizable fridge magnet styles. Strong hold, vivid prints and easy WhatsApp ordering.'
};

export default function FridgeMagnetsPage() {
  const cat = categories['fridge-magnets'];
  return <CategorySection category={cat} />;

}
