import type { ProductMeta } from '../components/ProductGrid';

export interface Category {
  slug: string;
  title: string;
  description: string;
  products: ProductMeta[];
}

const baseWA = (name: string) => `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '15551234567'}?text=${encodeURIComponent('Hi! I am interested in ' + name + '. Could you share details?')}`;

export const categories: Record<string, Category> = {
  'fridge-magnets': {
    slug: 'fridge-magnets',
    title: 'Fridge Magnets',
    description: 'Strong, vivid and customizable magnet styles for everyday display on your fridge or workspace.',
    products: [
      { slug: 'classic-square-fridge-magnets', name: 'Classic Square', price: 0, rating: 5 },
      { slug: 'mini-square-fridge-magnets', name: 'Mini Squares', price: 0, rating: 4.9 },
      { slug: 'photo-strip-fridge-magnets', name: 'Photo Strip', price: 0, rating: 4.8 },
      { slug: 'panorama-fridge-magnets', name: 'Panorama', price: 0, rating: 4.7 },
      { slug: 'rounded-corner-fridge-magnets', name: 'Rounded Corner', price: 0, rating: 4.8 },
      { slug: 'heart-shape-fridge-magnets', name: 'Heart Shape', price: 0, rating: 4.9 },
      { slug: 'premium-wooden-fridge-magnets', name: 'Premium Wooden', price: 0, rating: 4.7 },
      { slug: 'metallic-edge-fridge-magnets', name: 'Metallic Edge', price: 0, rating: 4.6 },
      { slug: 'collage-set-fridge-magnets', name: 'Collage Set', price: 0, rating: 4.8 },
      { slug: 'polaroid-style-fridge-magnets', name: 'Polaroid Style', price: 0, rating: 4.9 },
      { slug: 'glossy-finish-fridge-magnets', name: 'Glossy Finish', price: 0, rating: 4.8 },
      { slug: 'matte-archival-fridge-magnets', name: 'Matte Archival', price: 0, rating: 4.7 }
    ]
  },
  'photo-magnets': {
    slug: 'photo-magnets',
    title: 'Photo Magnets',
    description: 'Turn your favorite snapshots into vibrant magnets—perfect for gifts, collections and mood walls.',
    products: [
      { slug: 'vivid-gloss-photo-magnets', name: 'Vivid Gloss', price: 0, rating: 5 },
      { slug: 'soft-matte-photo-magnets', name: 'Soft Matte', price: 0, rating: 4.9 },
      { slug: 'edge-to-edge-photo-magnets', name: 'Edge to Edge', price: 0, rating: 4.8 },
      { slug: 'collage-photo-magnets', name: 'Collage Grid', price: 0, rating: 4.8 },
      { slug: 'square-photo-magnets', name: 'Square Photo', price: 0, rating: 4.7 },
      { slug: 'circle-photo-magnets', name: 'Circle Photo', price: 0, rating: 4.6 },
      { slug: 'long-strip-photo-magnets', name: 'Long Strip', price: 0, rating: 4.5 },
      { slug: 'panoramic-photo-magnets', name: 'Panoramic', price: 0, rating: 4.6 },
      { slug: 'framed-photo-magnets', name: 'Framed Photo', price: 0, rating: 4.8 },
      { slug: 'mini-photo-pack', name: 'Mini Pack', price: 0, rating: 4.9 },
      { slug: 'duo-photo-magnets', name: 'Duo Set', price: 0, rating: 4.7 },
      { slug: 'magnetic-photo-tabs', name: 'Photo Tabs', price: 0, rating: 4.6 }
    ]
  },
  'retro-prints': {
    slug: 'retro-prints',
    title: 'Retro Prints',
    description: 'Vintage‑inspired magnet prints with classic frames and nostalgic color tones.',
    products: [
      { slug: 'retro-square-set', name: 'Retro Square Set', price: 0, rating: 5 },
      { slug: 'polaroid-frame-magnets', name: 'Polaroid Frame', price: 0, rating: 4.9 },
      { slug: 'sepia-retro-magnets', name: 'Sepia Finish', price: 0, rating: 4.7 },
      { slug: 'vintage-border-retro-magnets', name: 'Vintage Border', price: 0, rating: 4.8 },
      { slug: 'distressed-edge-retro-magnets', name: 'Distressed Edge', price: 0, rating: 4.6 },
      { slug: 'film-strip-retro-magnets', name: 'Film Strip', price: 0, rating: 4.5 },
      { slug: 'polaroid-collage-retro', name: 'Polaroid Collage', price: 0, rating: 4.8 },
      { slug: 'muted-tones-retro', name: 'Muted Tones', price: 0, rating: 4.6 },
      { slug: 'polaroid-mini-retro', name: 'Polaroid Mini', price: 0, rating: 4.7 },
      { slug: 'instant-film-style-retro', name: 'Instant Film Style', price: 0, rating: 4.8 },
      { slug: 'borderless-retro', name: 'Borderless Retro', price: 0, rating: 4.6 },
      { slug: 'classic-film-retro', name: 'Classic Film', price: 0, rating: 4.7 }
    ]
  },
  'save-the-date': {
    slug: 'save-the-date',
    title: 'Save the Date',
    description: 'Magnet keepsakes announcing your special day—memorable, durable and always visible.',
    products: [
      { slug: 'minimal-save-the-date-magnet', name: 'Minimal Modern', price: 0, rating: 5 },
      { slug: 'script-elegant-save-the-date-magnet', name: 'Elegant Script', price: 0, rating: 4.9 },
      { slug: 'photo-collage-save-the-date-magnet', name: 'Photo Collage', price: 0, rating: 4.8 },
      { slug: 'bold-typography-save-the-date-magnet', name: 'Bold Typography', price: 0, rating: 4.7 },
      { slug: 'floral-frame-save-the-date', name: 'Floral Frame', price: 0, rating: 4.8 },
      { slug: 'monogram-save-the-date', name: 'Monogram', price: 0, rating: 4.9 },
      { slug: 'foil-pressed-save-the-date', name: 'Foil Pressed', price: 0, rating: 4.6 },
      { slug: 'vellum-overlay-save-the-date', name: 'Vellum Overlay', price: 0, rating: 4.5 },
      { slug: 'modern-typography-save-the-date', name: 'Modern Typography', price: 0, rating: 4.8 },
      { slug: 'kraft-paper-save-the-date', name: 'Kraft Paper', price: 0, rating: 4.6 },
      { slug: 'illustrated-save-the-date', name: 'Illustrated', price: 0, rating: 4.7 },
      { slug: 'calendar-inset-save-the-date', name: 'Calendar Inset', price: 0, rating: 4.8 }
    ]
  },
  'learn-and-make': {
    slug: 'learn-and-make',
    title: 'Learn & Make',
    description: 'DIY kits, tutorials and starter packs to help you create custom magnets and prints at home.',
    products: [
      { slug: 'starter-diy-magnet-kit', name: 'Starter DIY Kit', price: 0, rating: 4.9 },
      { slug: 'photo-editing-basics-workshop', name: 'Photo Editing Basics', price: 0, rating: 4.8 },
      { slug: 'print-and-cut-guide', name: 'Print & Cut Guide', price: 0, rating: 4.7 },
      { slug: 'mini-polaroid-diy-kit', name: 'Mini Polaroid Kit', price: 0, rating: 4.8 },
      { slug: 'magnet-assembly-tools', name: 'Assembly Tools', price: 0, rating: 4.6 },
      { slug: 'adhesive-selection-kit', name: 'Adhesive Kit', price: 0, rating: 4.5 },
      { slug: 'printing-paper-samples', name: 'Paper Samples', price: 0, rating: 4.7 },
      { slug: 'frame-and-border-tutorial', name: 'Frame & Border Tutorial', price: 0, rating: 4.6 },
      { slug: 'color-correction-cheatsheet', name: 'Color Correction Sheet', price: 0, rating: 4.8 },
      { slug: 'bulk-magnet-pack', name: 'Bulk Magnet Pack', price: 0, rating: 4.6 },
      { slug: 'crafting-workshop-live', name: 'Live Workshop', price: 0, rating: 4.9 },
      { slug: 'holiday-themed-diy-sets', name: 'Holiday DIY Sets', price: 0, rating: 4.7 }
    ]
  }
};
