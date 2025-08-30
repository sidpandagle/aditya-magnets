import React from "react";
import { Card, CardContent } from "./ui/card";

const data = [
  { title: "High-Resolution Prints", body: "Vivid colors and sharp details on a smooth matte surface built to last." },
  { title: "Durable Magnet Backing", body: "Firmly hugs any magnetic surface without sliding or scratching." },
  { title: "Water & Fade Resistant", body: "Engineered inks protect against moisture, UV rays, and everyday handling." },
  { title: "Fast Turnaround", body: "Upload in minutes—most orders ship within 48 hours." },
  { title: "Eco Conscious Materials", body: "Printed with minimal-waste processes and recyclable packaging." },
  { title: "Loved by Thousands", body: "Thousands of happy customers showcase their favorite moments daily." },
];

export const Features: React.FC = () => (
  <section className="py-16" aria-labelledby="features-heading">
    <div className="container">
      <h2 id="features-heading" className="text-3xl md:text-4xl font-semibold tracking-tight">Why You’ll Love Our Photo Magnets</h2>
      <p className="mt-3 max-w-2xl text-slate-600">Designed for longevity and impact—every magnet is produced with premium substrates, crisp archival inks, and careful finishing for a keepsake that stands up to daily life.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((f) => (
          <Card key={f.title} aria-label={f.title}>
            <CardContent className="pt-4">
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-slate-600">{f.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
