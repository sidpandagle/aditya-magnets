import React from "react";

export const meta = () => [{ title: "About | Aaditya Magnets" }];

export default function AboutPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-semibold mb-4">About Us</h1>
      <p className="text-slate-700 max-w-2xl">
        We craft high-quality custom magnets and prints with care. From fridge magnets to save-the-dates,
        our mission is to help you preserve memories beautifully and affordably.
      </p>
    </div>
  );
}
