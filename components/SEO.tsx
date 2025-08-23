import { NextSeo, ProductJsonLd } from 'next-seo';
import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  images?: { url: string; alt?: string; width?: number; height?: number }[];
  product?: {
    name: string;
    images: string[];
    description: string;
    brand?: string;
    sku?: string;
    price: string;
    currency: string;
    availability?: string;
  };
}

export const SEO: React.FC<SEOProps> = ({ title, description, url, images, product }) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: images?.map(i => ({
            url: i.url,
            alt: i.alt || title,
            width: i.width,
            height: i.height
          }))
        }}
        additionalLinkTags={[{ rel: 'icon', href: '/favicon.ico' }]}
      />
      {product && (
        <ProductJsonLd
          productName={product.name}
          images={product.images}
          description={product.description}
          brand={product.brand}
          offers={[{
            price: product.price,
            priceCurrency: product.currency,
            availability: product.availability || 'https://schema.org/InStock',
            url: url || '',
          }]}
          sku={product.sku}
        />
      )}
    </>
  );
};
