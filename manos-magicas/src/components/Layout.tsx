import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <>
<header className="nav">
  <div className="container navInner">

    <NavLink to="/" className="brand">
      <span className="badgeDot" />
      <span>Manos Mágicas</span>
    </NavLink>

    <nav className="navLinks">
      <NavLink to="/">Kits creativos</NavLink>
      <NavLink to="/tutoriales">Tutoriales</NavLink>
    </nav>

  </div>
</header>

      <main className="main">
        <Outlet />

        <footer className="section">
          <div className="container">
            <div className="card cardPad">
              <p className="small">
                © 2026 · Manos Mágicas · Proyecto Frontend.
                <br />
                Los tutoriales se consumen como contenido editorial desde un CMS (Modyo). El catálogo utiliza una estructura mock de e-commerce basada en Magento.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
