import CategorySection from "../components/CategorySection";
import { categories } from "../lib/catalog";

export function meta() {
  return [
    { title: "Retro Prints | Vintage Magnet Styles" },
    { name: "description", content: "Explore nostalgic magnet print styles with classic borders & tones—contact us to create yours." },
  ];
}

export default function Page() {
  const cat = categories["retro-prints"];
  return <CategorySection category={cat} />;
}
