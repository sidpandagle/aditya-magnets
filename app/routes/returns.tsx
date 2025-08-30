import React from "react";

export const meta = () => [{ title: "Returns | Aaditya Magnets" }];

export default function ReturnsPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-semibold mb-4">Returns</h1>
      <p className="text-slate-700 max-w-2xl">
        If there’s an issue with your order, contact us within 7 days. We’ll make it right.
      </p>
    </div>
  );
}
