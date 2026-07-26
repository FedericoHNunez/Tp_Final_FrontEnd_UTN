import { Outlet, useParams, useLocation } from "react-router";
import { Nav } from "../../Components/Nav/Nav";

export function LayoutScreen() {
  const { contact_id } = useParams();
  const location = useLocation();

  const hideNavOnMobile = contact_id || location.pathname === "/chats/new-contact";

  return (
    <>
      <header className={`layout-header ${hideNavOnMobile ? "hide-nav-mobile" : ""}`}>
        <Nav />
      </header>
      <main className={`layout-main ${hideNavOnMobile ? "has-active-contact" : ""}`}>
        <Outlet />
      </main>
    </>
  );
}