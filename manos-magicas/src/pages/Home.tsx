
import TutorialCard from "../components/TutorialCard";
import LegalAccordion from "../components/LegalAccordion";
import { getTutorials } from "../lib/modyoClient";

export default function Home() {
  const tutorials = getTutorials();

  return (
    <>
       <section className="section">
        <div className="container">
          <div className="card cardPad">
          <h1 className="h1" style={{ marginTop: 3 }}>
              Tutoriales
            </h1>
            <p className="p">
              Elige el proyecto que más te guste y sigue el paso a paso para crear con tus propias manos:
            </p>
            <div style={{ height: 12 }} />
            <div className="grid grid2">
              {tutorials.map((t) => (
                <TutorialCard key={t.id} t={t} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <LegalAccordion />
        </div>
      </section>
    </>
  );
}
