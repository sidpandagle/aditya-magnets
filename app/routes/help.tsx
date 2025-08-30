import React from "react";

export const meta = () => [{ title: "Help Center | Aaditya Magnets" }];

export default function HelpPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-semibold mb-4">Help Center</h1>
      <p className="text-slate-700 max-w-2xl">
        Browse FAQs or reach out if you need assistance with ordering, artwork, or delivery.
      </p>
    </div>
  );
}
