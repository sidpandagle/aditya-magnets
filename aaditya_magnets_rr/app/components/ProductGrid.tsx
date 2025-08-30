import React from "react";
import { categories } from "../lib/catalog";
import { Card, CardContent, CardHeader } from "./ui/card";
import { buttonVariants } from "./ui/button";
import { Link } from "react-router";

export interface ProductMeta {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  rating?: number;
  isPopular?: boolean;
}

const magnetCategories = Object.entries(categories).filter(([key]) => key !== "learn-and-make");
const perCatPopular: ProductMeta[][] = magnetCategories.map(([, c]) =>
  (c.products as ProductMeta[]).filter((p) => p.isPopular)
);

function interleavePopular(max: number): ProductMeta[] {
  const result: ProductMeta[] = [];
  let added = true;
  let round = 0;
  while (result.length < max && added) {
    added = false;
    for (const arr of perCatPopular) {
      if (result.length >= max) break;
      const item = arr[round];
      if (item) {
        result.push(item);
        added = true;
      }
    }
    round += 1;
  }
  return result;
}

const interleaved = interleavePopular(4);

const allProducts: ProductMeta[] = magnetCategories.flatMap(([, c]) => c.products as ProductMeta[]);
const products: ProductMeta[] = (interleaved.length > 0
  ? interleaved
  : [...allProducts].sort((a, b) => (b.rating || 0) - (a.rating || 0))
).slice(0, 4);

export const ProductGrid: React.FC = () => (
  <section className="py-16" aria-labelledby="products-heading">
    <div className="container">
      <h2 id="products-heading" className="text-3xl md:text-4xl font-semibold tracking-tight">Popular Magnet Styles</h2>
      <p className="mt-3 max-w-2xl text-slate-600">Choose the shape and style that suits your space. All formats use the same premium print process and strong magnet backing.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
              <Card key={p.slug}>
                <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 text-slate-400 flex items-center justify-center text-3xl">🖼️</div>
            <CardHeader className="pb-2">
                  <strong className="text-sm leading-tight">{p.name}</strong>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-xs text-slate-600">High-quality custom magnet with vibrant colors and strong magnetic backing.</div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="text-amber-500 text-xs" aria-label={`${p.rating || 5} star rating`}>
                    {"★★★★★".slice(0, p.rating || 5)}
                  </div>
                  <span className="text-[11px] text-slate-500">({p.rating || 5})</span>
                </div>
                <Link
                  to={`/${p.slug}`}
                  aria-label={`Buy ${p.name}`}
                  className={buttonVariants({ size: "sm" })}
                >
                  Buy Now
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
