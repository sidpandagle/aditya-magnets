import React from "react";

export const meta = () => [{ title: "Shipping | Aaditya Magnets" }];

export default function ShippingPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-semibold mb-4">Shipping</h1>
      <p className="text-slate-700 max-w-2xl">
        Orders typically ship within 2-4 business days. You’ll receive tracking as soon as it’s on the way.
      </p>
    </div>
  );
}
