import { Link, useParams } from "react-router-dom";
import { getProductBySlug } from "../lib/magentoClient";
import { getTutorialBySku } from "../lib/modyoClient";
import LegalAccordion from "../components/LegalAccordion";

function formatCLP(value: number) {
  return new Intl.NumberFormat("es-CL").format(value);
}

export default function Producto() {
  const { slug } = useParams();
  const p = slug ? getProductBySlug(slug) : undefined;

  if (!p) {
    return (
      <section className="section">
        <div className="container">
          <div className="narrow">
            <div className="card cardPad">
              <h1 className="h1">Producto no encontrado</h1>
              <Link className="btn" to="/">Volver</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const tutorial = getTutorialBySku(p.sku);

  return (
    <section className="section">
      <div className="container">
        <div className="narrow">
          <div className="grid grid2">
            <div className="card cardPad">
              <div className="thumb">
                <img src={p.image} alt={p.name} />
              </div>

              <div style={{ height: 14 }} />

              <div className="pillRow">
                {p.badges?.map((b) => (
                  <span key={b} className="pill pillActive">{b}</span>
                ))}
              </div>

              <div style={{ height: 10 }} />

              <div style={{ fontWeight: 600, fontSize: 28 }}>{p.name}</div>

              <div style={{ height: 7 }} />

              <div className="price">
                ${formatCLP(p.price)} <span className="small">{p.currency}</span>
              </div>

              <div style={{ height: 10 }} />

              <div style={{ fontWeight: 700, marginBottom: 8 }}>Incluye</div>

              <ul className="small" style={{ marginTop: 0, lineHeight: 2 }}>
                {p.includes?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div style={{ height: 18 }} />

              <div className="btnRow">
                <button className="btn btnPrimary">Agregar al carrito (demo)</button>
                <Link className="btn" to="/">Volver</Link>
              </div>
            </div>

            <div className="grid" style={{ gap: 26 }}>
              <div className="card cardPad">
                <div className="kicker">
                  <span>Tutorial</span>
                </div>

                <div style={{ height: 12 }} />

                {tutorial ? (
                  <>
                    <div className="pillRow">
                      <span className="pill pillActive">{tutorial.level}</span>
                      <span className="pill">{tutorial.duration}</span>
                    </div>

                    <div style={{ height: 10 }} />

                    <div style={{ fontWeight: 500, fontSize: 20 }}>
                      {tutorial.title}
                    </div>

                    <div style={{ height: 6 }} />

                    <p className="p">{tutorial.excerpt}</p>

                    <div style={{ height: 12 }} />

                    <Link className="btn" to={`/tutorial/${tutorial.id}`}>
                      Ir al tutorial
                    </Link>
                  </>
                ) : (
                  <p className="p">Este producto no tiene tutorial asociado.</p>
                )}
              </div>

              <LegalAccordion />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
