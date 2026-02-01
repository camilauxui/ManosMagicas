import type { Category } from "../lib/magentoClient";


export default function CategoryPills({
  categories,
  active,
  onChange
}: {
  categories: Category[];
  active: string;
  onChange: (k: string) => void;
}) {
  return (
    <div className="pillRow">
      <button className={`pill ${active === "all" ? "pillActive" : ""}`} onClick={() => onChange("all")}>
        Todos
      </button>
      {categories.map(c => (
        <button
          key={c.key}
          className={`pill ${active === c.key ? "pillActive" : ""}`}
          onClick={() => onChange(c.key)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
