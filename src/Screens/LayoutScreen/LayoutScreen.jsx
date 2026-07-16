import { Outlet } from "react-router";
import { Nav } from "../../Components/Nav/Nav";
import "./LayoutScreen.css";

export function LayoutScreen() {
  return (
    <>
    <header className="header">
        <Nav />
    </header>
    <main className="layout-main">
        <Outlet />
    </main>
    </>
  );
}