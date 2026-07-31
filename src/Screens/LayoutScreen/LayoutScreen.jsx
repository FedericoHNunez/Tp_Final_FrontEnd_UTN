import { Outlet, useParams, useLocation, Navigate } from "react-router";
import { MainNavigation } from "../../Components/MainNavigation/MainNavigation";
import { useContext } from "react";
import { ContactContext } from "../../Context/ContactContext";

export function LayoutScreen() {
  const { contact_id } = useParams();
  const location = useLocation();
  const { contacts } = useContext(ContactContext);

  // Validate contact_id if present
  if (contact_id) {
    const isValidContact = contacts.some(c => c.id === Number(contact_id));
    if (!isValidContact) {
      return <Navigate to="/chats" replace />;
    }
  }

  const hideNavOnMobile = contact_id || location.pathname === "/chats/new-contact";

  return (
    <>
      <header className={`layout-header ${hideNavOnMobile ? "hide-nav-mobile" : ""}`}>
        <MainNavigation />
      </header>
      <main className={`layout-main ${hideNavOnMobile ? "has-active-contact" : ""}`}>
        <Outlet />
      </main>
    </>
  );
}