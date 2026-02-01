
import { useMemo, useState } from "react";
import CategoryPills from "../components/CategoryPills";
import ProductCard from "../components/ProductCard";
import {
  getCategories,
  getProducts,
  getProductsByCategory,
} from "../lib/magentoClient";

export default function Catalogo() {
  const categories = getCategories();
  const [active, setActive] = useState<string>("all");

  const products = useMemo(() => {
    return active === "all"
      ? getProducts()
      : getProductsByCategory(active);
  }, [active]);

  return (
    <>
  

      <section className="section">
        <div className="container">
          <div className="card cardPad">
            

            <h1 className="h1" style={{ marginTop: 3 }}>
              Tienda de Kits Creativos
            </h1>
            <p className="p">
              Revisa el catálogo de kits disponibles:
            </p>

            <div style={{ height: 14 }} />
            <CategoryPills
              categories={categories}
              active={active}
              onChange={setActive}
            />

            <div style={{ height: 18 }} />
            <div className="grid grid2">
              {products.map((p) => (
                <ProductCard key={p.sku} p={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
