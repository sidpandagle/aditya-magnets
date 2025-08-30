import React from "react";
import type { Category } from "../lib/catalog";
import { Card, CardContent, CardHeader } from "./ui/card";
import { buttonVariants } from "./ui/button";
import { Link } from "react-router";

interface Props {
  category: Category;
}

export default function CategorySection({ category }: Props) {
  const cat = category;
  return (
    <div className="container py-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{cat.title}</h1>
      <p className="mt-2 text-slate-600 max-w-2xl">{cat.description}</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cat.products.map((p) => (
          <Card key={p.slug}>
            <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 text-slate-400 flex items-center justify-center text-3xl" aria-hidden>
              🖼️
            </div>
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
                <Link to={`/${p.slug}`} aria-label={`Buy ${p.name}`} className={buttonVariants({ size: "sm" })}>
                  Buy Now
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12">
        <Link className="text-teal-700 hover:underline" to="/">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
