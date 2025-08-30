import { Hero } from "../components/Hero";
import { ProductGrid } from "../components/ProductGrid";
import { Features } from "../components/Features";
import { CTA } from "../components/CTA";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <Features />
      <CTA />
    </>
  );
}
