import { Outlet, useParams } from "react-router";
import { Nav } from "../../Components/Nav/Nav";

export function LayoutScreen() {
  const { contact_id } = useParams();

  return (
    <>
      <header className={`layout-header ${contact_id ? "hide-nav-mobile" : ""}`}>
        <Nav />
      </header>
      <main className={`layout-main ${contact_id ? "has-active-contact" : ""}`}>
        <Outlet />
      </main>
    </>
  );
}