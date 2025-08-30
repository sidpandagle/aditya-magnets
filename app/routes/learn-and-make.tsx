import CategorySection from "../components/CategorySection";
import { categories } from "../lib/catalog";

export function meta() {
  return [
    { title: "Learn & Make | DIY Magnet Kits & Guides" },
    { name: "description", content: "DIY kits, guides and workshops to help you create custom magnets at home. Browse starter kits and tutorials." },
  ];
}

export default function Page() {
  const cat = categories["learn-and-make"];
  return (
  <CategorySection category={cat} />
  );
}
