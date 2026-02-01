
import { getCampaign } from "../lib/modyoClient";

export default function Hero() {
  const c = getCampaign();
  return (
    <section className="section">
      <div className="card cardPad">
        <div className="kicker">
        
        </div>
        <h1 className="h1">{c.title}</h1>
        <p className="p">{c.subtitle}</p>

        <div style={{ height: 16 }} />

      
      </div>
    </section>
  );
}
