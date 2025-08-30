import CategorySection from "../components/CategorySection";
import { categories } from "../lib/catalog";

export function meta() {
  return [
    { title: "Fridge Magnets | Styles & Ideas" },
    { name: "description", content: "Browse customizable fridge magnet styles. Strong hold, vivid prints and easy WhatsApp ordering." },
  ];
}

export default function Page() {
  const cat = categories["fridge-magnets"];
  return <CategorySection category={cat} />;
}
