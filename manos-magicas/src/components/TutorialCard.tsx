import { Link } from "react-router-dom";
import type { Tutorial } from "../lib/modyoClient";


export default function TutorialCard({ t }: { t: Tutorial }) {
  return (
    <div className="card">
      {/* Imagen */}
      <div className="thumb">
       <img src={t.image} alt={`Tutorial ${t.title}`} />

      </div>

      {/* Contenido */}
      <div className="cardPad">
        <div className="pillRow">
          <span className="pill pillActive">{t.level}</span>
          <span className="pill">{t.duration}</span>
        </div>

        <div style={{ height: 18 }} />
        <div style={{ fontWeight: 600 }}>{t.title}</div>
        <div style={{ height: 6 }} />
        <p className="p">{t.excerpt}</p>

        <div style={{ height: 18 }} />
        <Link className="btn" to={`/tutorial/${t.id}`}>
          Ver tutorial
        </Link>
      </div>
    </div>
  );
}
