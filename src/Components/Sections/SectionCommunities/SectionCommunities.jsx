import { Link } from "react-router";
import communities from "../../../assets/img/communities.webp";
import "./SectionCommunities.css";

/**
 * Componente SectionCommunities
 * Renderiza la interfaz de la sección "Comunidades", mostrando una explicación
 * sobre cómo funcionan las comunidades y un botón para volver al panel de chats.
 */
export const SectionCommunities = () => {
  return (
    <>
      {/* Encabezado con título y enlace de navegación para regresar a la vista principal */}
      <div className="section-header">
        <div className="communities-header-content">
          <Link
            to="/"
            className="communities-back-link center"
            title="Volver a chats"
          >
            {/* Icono de flecha para regresar */}
            <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
              <title>Volver</title>
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg>
          </Link>
          <h1>Comunidades</h1>
        </div>
      </div>

      {/* Sección principal informativa de las Comunidades */}
      <section className="communities-section center">
        <div>
          <div>
            <img
              className="sideBarHome-img"
              src={communities}
              alt="imagen comunidades"
            />
          </div>
          <h2>Crea una comunidad para mantenerte en contacto </h2>
          <p>
            Las comunidades reúnen a los miembros en grupos por temas y
            facilitan la recepción de avisos de los administradores. Cualquier
            comunidad a la que te añadan aparecerá aquí.
          </p>
        </div>
      </section>
    </>
  );
};
