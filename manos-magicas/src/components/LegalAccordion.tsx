import { useState } from "react";
import { getLegal } from "../lib/modyoClient";

export default function LegalAccordion() {
  const [open, setOpen] = useState(false);
  const legal = getLegal();

  return (
    <div className="card cardPad">
      <button className="btn" onClick={() => setOpen(v => !v)}>
        {open ? "Ocultar" : "Ver"} envíos y devoluciones
      </button>

      {open && (
        <div style={{ marginTop: 12 }}>
          <div style={{ fontWeight: 900, marginBottom: 6 }}>Envíos</div>
          <div className="small">{legal.shipping}</div>
          <div style={{ height: 10 }} />
          <div style={{ fontWeight: 900, marginBottom: 6 }}>Devoluciones</div>
          <div className="small">{legal.returns}</div>
        </div>
      )}
    </div>
  );
}
