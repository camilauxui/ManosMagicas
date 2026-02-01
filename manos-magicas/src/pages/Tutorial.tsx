import { Link, useParams } from "react-router-dom";
import { getTutorialById } from "../lib/modyoClient";

export default function Tutorial() {
  const { id } = useParams();
  const t = id ? getTutorialById(id) : undefined;

  if (!t) {
    return (
      <section className="section">
        <div className="container">
          <div className="textColumn" style={{ margin: "0 auto" }}>
            <div className="card cardPad">
              <h1 className="h1">Tutorial no encontrado</h1>
              <Link className="btn" to="/">Volver</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="textColumn" style={{ margin: "0 auto" }}>
          <div className="card cardPad">

            <div className="pillRow">
              <span className="pill pillActive">{t.level}</span>
              <span className="pill">{t.duration}</span>
            </div>

            <h1 className="h1" style={{ marginTop: 12 }}>
              {t.title}
            </h1>

            <p className="p">{t.excerpt}</p>

            <div style={{ height: 14 }} />

            <div style={{ fontWeight: 600, marginBottom: 8 }}>
              Materiales
            </div>

            <ul className="small" style={{ marginTop: 0, lineHeight: 1.7 }}>
              {t.materials.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>

            <div style={{ height: 18 }} />

            <div style={{ fontWeight: 600, marginBottom: 8 }}>
              Paso a paso:
            </div>

            <ol className="small" style={{ marginTop: 0, lineHeight: 1.75 }}>
              {t.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>

            <div style={{ height: 16 }} />

            <Link className="btn" to="/tutoriales">Volver</Link>

          </div>
        </div>
      </div>
    </section>
  );
}
