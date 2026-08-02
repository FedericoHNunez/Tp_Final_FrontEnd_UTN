import { SidebarCommunities } from "../../Components/SideBars/SideBarCommunities/SidebarCommunities";
import { SectionCommunities } from "../../Components/Sections/SectionCommunities/SectionCommunities";

/**
 * Componente de Pantalla: CommunitiesScreen
 * Pantalla principal de la sección de Comunidades.
 * Combina la vista principal de la comunidad con su barra lateral respectiva.
 */
export const CommunitiesScreen = () => {
  return (
    <>
      {/* Vista principal (derecha): Información detallada de las comunidades */}
      <section className="mainView">
        <SectionCommunities />
      </section>
      {/* Barra lateral (izquierda): Menú o controles de navegación de la comunidad */}
      <aside className="asideView backgroundSiderBar">
        <SidebarCommunities />
      </aside>
    </>
  );
};
