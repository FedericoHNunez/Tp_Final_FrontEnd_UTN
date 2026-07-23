import { Outlet } from "react-router";
import { Nav } from "../../Components/Nav/Nav";
export function LayoutScreen() {
  return (
    <>
    <header className="layout-header">
        <Nav />
    </header>
    <main className="layout-main">
        <Outlet />
    </main>
    </>
  );
}