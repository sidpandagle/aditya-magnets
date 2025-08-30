import React from "react";
import { categories } from "../lib/catalog";
import { ProductGallery } from "../components/ProductGallery";
import ProductOptions from "../components/ProductOptions";
import { Link, useParams } from "react-router";

function findProduct(slug: string) {
  for (const key of Object.keys(categories)) {
    const cat = categories[key as keyof typeof categories];
    const p = cat.products.find((x: any) => x.slug === slug);
    if (p) return { ...p, category: cat } as any;
  }
  return null;
}

export function meta() {
  // no access to params here without typegen; keep generic
  const prod = null;
  if (!prod) return [{ title: "Product not found" }];
  return [
    { title: `Product | SnapStickSmile` },
    { name: "description", content: `Details and options for the product. Message us on WhatsApp to order or ask questions.` },
  ];
}

export default function ProductDetail() {
  const { slug = "" } = useParams();
  const prod = findProduct(slug);
  if (!prod) {
    return <div className="container py-10">Product not found.</div>;
  }

  return (
      <div className="container section" style={{ paddingTop: "2rem" }}>
        <div className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="sep">/</span>
          <Link to={`/${prod.category.slug}`}>{prod.category.title}</Link>
          <span className="sep">/</span>
          <span>{prod.name}</span>
        </div>
        <div
          style={{
            display: "grid",
            gap: "3rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            marginTop: "1.5rem",
            alignItems: "start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
            <ProductGallery
              images={[
                "https://picsum.photos/id/1035/800/600",
                "https://picsum.photos/id/1045/800/600",
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                "https://picsum.photos/id/1055/800/600",
              ]}
              alt={prod.name}
            />
          </div>
          <div>
            <h1 style={{ marginTop: 0, fontSize: "2rem", lineHeight: 1.1 }}>{prod.name}</h1>
            <div style={{ display: "flex", gap: ".75rem", alignItems: "center", marginBottom: ".75rem" }}>
              <div className="rating-stars" aria-label="rating">{"★★★★★".slice(0, 5)}</div>
              <span style={{ fontSize: ".75rem", color: "#6b7280" }}>Rated {prod.rating ?? "5"} ★★★★★</span>
            </div>

            <ProductOptions name={prod.name} />

            <div className="prose" style={{ marginTop: "2rem" }}>
              <h3>About this product</h3>
              <p>
                High-quality, customizable magnets made to showcase your photos. Durable backing, archival inks and
                multiple finish options.
              </p>
              <div className="table-icon-points">
                <div className="point">
                  <div className="point-icon" aria-hidden="true">
                    🌍
                  </div>
                  <div>
                    <h4>Worldwide Shipping</h4>
                    <p>Reliable delivery no matter where you are located.</p>
                  </div>
                </div>
                <div className="point">
                  <div className="point-icon" aria-hidden="true">
                    ⚡
                  </div>
                  <div>
                    <h4>Fast & Simple</h4>
                    <p>Upload and order in minutes with a streamlined experience.</p>
                  </div>
                </div>
                <div className="point">
                  <div className="point-icon" aria-hidden="true">
                    🛡️
                  </div>
                  <div>
                    <h4>Premium Quality</h4>
                    <p>Archival inks and durable magnet backing for lasting vibrancy.</p>
                  </div>
                </div>
                <div className="point">
                  <div className="point-icon" aria-hidden="true">
                    ♻️
                  </div>
                  <div>
                    <h4>Eco-Friendly</h4>
                    <p>Produced with sustainability in mind at every step.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
  );
}
