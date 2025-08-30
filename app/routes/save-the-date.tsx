import CategorySection from "../components/CategorySection";
import { categories } from "../lib/catalog";

export function meta() {
  return [
    { title: "Save the Date Magnets | Announce Your Day" },
    { name: "description", content: "Memorable Save the Date magnet designs—reach out to customize layouts, colors, and wording." },
  ];
}

export default function Page() {
  const cat = categories["save-the-date"];
  return <CategorySection category={cat} />;
}
