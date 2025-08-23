import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categories } from '../../lib/catalog';
import { ProductGallery } from '../../components/ProductGallery';
import ProductOptions from '../../components/ProductOptions';

interface Params {
  params: { slug: string };
}

function findProduct(slug: string) {
  for (const key of Object.keys(categories)) {
    const cat = categories[key as keyof typeof categories];
    const p = cat.products.find((x: any) => x.slug === slug);
    if (p) return { ...p, category: cat } as any;
  }
  return null;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const prod = findProduct(params.slug);
  if (!prod) return { title: 'Product not found' };
  return {
    title: `${prod.name} | SnapStickSmile`,
    description: `Details and options for ${prod.name}. Message us on WhatsApp to order or ask questions.`
  };
}

export default function ProductDetailPage({ params }: Params) {
  const prod = findProduct(params.slug);
  if (!prod) return notFound();

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '15551234567';
  const waText = encodeURIComponent(`Hi! I am interested in ${prod.name}. Could you share details?`);
  const waUrl = `https://wa.me/${waNumber}?text=${waText}`;

  return (
    <div className="container section" style={{ paddingTop: '2rem' }}>
      <div className="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a><span className="sep">/</span><a href={`/${prod.category.slug}`}>{prod.category.title}</a><span className="sep">/</span><span>{prod.name}</span>
      </div>
      <div style={{ display:'grid', gap:'3rem', gridTemplateColumns:'repeat(auto-fit, minmax(340px, 1fr))', marginTop:'1.5rem', alignItems:'start' }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'.75rem' }}>
          <ProductGallery
            images={[
              'https://picsum.photos/id/1035/800/600',
              'https://picsum.photos/id/1045/800/600',
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
              'https://picsum.photos/id/1055/800/600',
            ]}
            alt={prod.name}
          />
        </div>
        <div>
          <h1 style={{ marginTop:0, fontSize:'2rem', lineHeight:1.1 }}>{prod.name}</h1>
          <div style={{ display:'flex', gap:'.75rem', alignItems:'center', marginBottom:'.75rem' }}>
            <div className="rating-stars" aria-label="rating">{'★★★★★'.slice(0,5)}</div>
            <span style={{ fontSize:'.75rem', color:'#6b7280' }}>Rated {prod.rating ?? '5'} ★★★★★</span>
          </div>

          <ProductOptions name={prod.name} />

          <div className="prose" style={{ marginTop:'2rem' }}>
            <h3>About this product</h3>
            <p>High-quality, customizable magnets made to showcase your photos. Durable backing, archival inks and multiple finish options.</p>
            <div className="table-icon-points">
              <div className="point">
                <div className="point-icon" aria-hidden="true">🌍</div>
                <div><h4>Worldwide Shipping</h4><p>Reliable delivery no matter where you are located.</p></div>
              </div>
              <div className="point">
                <div className="point-icon" aria-hidden="true">⚡</div>
                <div><h4>Fast & Simple</h4><p>Upload and order in minutes with a streamlined experience.</p></div>
              </div>
              <div className="point">
                <div className="point-icon" aria-hidden="true">🛡️</div>
                <div><h4>Premium Quality</h4><p>Archival inks and durable magnet backing for lasting vibrancy.</p></div>
              </div>
              <div className="point">
                <div className="point-icon" aria-hidden="true">♻️</div>
                <div><h4>Eco-Friendly</h4><p>Produced with sustainability in mind at every step.</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
