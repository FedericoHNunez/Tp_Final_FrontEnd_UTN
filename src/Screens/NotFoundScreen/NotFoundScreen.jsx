import { Link } from "react-router";
import "./NotFoundScreen.css";

export function NotFoundScreen() {
  return (
    <section className="notfound">
      <div className="notfound__content">
        <span className="notfound__code">404</span>

        <h1 className="notfound__title">
          Página no encontrada
        </h1>

        <p className="notfound__text">
          La ruta que intentaste visitar no existe.
        </p>

        <Link to="/" className="notfound__link">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}