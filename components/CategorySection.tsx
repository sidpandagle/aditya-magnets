import React from 'react';
import Link from 'next/link';
import type { Category } from '../lib/catalog';

interface Props {
  category: Category;
}

export default function CategorySection({ category }: Props) {
  const cat = category;
  return (
    <div className="container section" style={{ paddingTop: '2rem' }}>
      <h1 style={{ marginTop: 0 }}>{cat.title}</h1>
      <p className="section-sub" style={{ marginTop: '0.5rem' }}>{cat.description}</p>
      <div className="product-gallery">
        {cat.products.map((p) => (
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
      <div style={{ marginTop: '3rem' }}>
        <Link href="/">← Back to Home</Link>
      </div>
    </div>
  );
}
