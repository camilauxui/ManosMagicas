import { Link } from "react-router-dom";
import type { Product } from "../lib/magentoClient";


function formatCLP(value: number) {
  return new Intl.NumberFormat("es-CL").format(value);
}

export default function ProductCard({ p }: { p: Product }) {
  return (
    <div className="card cardPad">
      <div className="thumb">
        <img src={p.image} alt={p.name} />
      </div>

      <div style={{ height: 12 }} />
      <div className="pillRow">
        {p.badges?.map(b => (
          <span key={b} className="pill pillActive">{b}</span>
        ))}
      </div>

      <div style={{ height: 10 }} />
      <div style={{ fontWeight: 900 }}>{p.name}</div>
      <div style={{ height: 6 }} />
      <div className="price">${formatCLP(p.price)} <span className="small">{p.currency}</span></div>

      <div style={{ height: 14 }} />
      <div className="btnRow">
        <Link className="btn btnPrimary" to={`/producto/${p.slug}`}>Ver detalle</Link>
      </div>
    </div>
  );
}
