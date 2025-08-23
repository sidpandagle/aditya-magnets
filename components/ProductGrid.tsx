import React from 'react';
import Link from 'next/link';
import { categories } from '../lib/catalog';

export interface ProductMeta {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  rating?: number;
}

const products: ProductMeta[] = Object.values(categories).flatMap(c => c.products as ProductMeta[]).slice(0, 4);

export const ProductGrid: React.FC = () => (
  <section className="section" aria-labelledby="products-heading">
    <div className="container">
      <h2 id="products-heading">Popular Magnet Styles</h2>
      <p className="section-sub">Choose the shape and style that suits your space. All formats use the same premium print process and strong magnet backing.</p>
      <div className="product-gallery">
        {products.map(p => (
          <div key={p.slug} className="product-card">
            <div className="img" aria-hidden="true">🖼️</div>
            <div className="body">
              <strong style={{ fontSize: '.85rem' }}>{p.name}</strong>
              <div style={{ fontSize: '.7rem', color: '#4b5563', marginTop: '.25rem', lineHeight: 1.4 }}>
                High-quality custom magnet with vibrant colors and strong magnetic backing.
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.5rem', marginTop: '.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                  <div className="rating-stars" style={{ fontSize: '.65rem' }} aria-label={`${p.rating || 5} star rating`}>
                    {'★★★★★'.slice(0, p.rating || 5)}
                  </div>
                  <span style={{ fontSize: '.6rem', color: '#6b7280' }}>({p.rating || 5})</span>
                </div>
                <Link
                  href={`/${p.slug}`}
                  className="button"
                  style={{ fontSize: '.7rem', padding: '.4rem .75rem', textAlign: 'center' }}
                  aria-label={`Buy ${p.name}`}
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
