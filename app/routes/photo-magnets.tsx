import CategorySection from "../components/CategorySection";
import { categories } from "../lib/catalog";

export function meta() {
  return [
    { title: "Photo Magnets | Personalize Your Memories" },
    { name: "description", content: "Turn photos into vibrant magnets. Explore finishes & styles—message us on WhatsApp to start." },
  ];
}

export default function Page() {
  const cat = categories["photo-magnets"];
  return <CategorySection category={cat} />;
}
