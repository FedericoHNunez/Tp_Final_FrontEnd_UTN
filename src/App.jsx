import { Routes, Route, Navigate } from "react-router";
import { LayoutScreen } from "./Screens/LayoutScreen/LayoutScreen";
import { ChatsLayout } from "./Screens/ChatsLayout/ChatsLayout";
import { SideBarHome } from "./Components/SideBars/SideBarHome/SideBarHome";
import { CallScreen } from "./Screens/CallScreen/CallScreen";
import { ChannelsScreen } from "./Screens/ChannelsScreen/ChannelsScreen";
import { CommunitiesScreen } from "./Screens/CommunitiesScreen/CommunitiesScreen";
import { StatesScreen } from "./Screens/StatesScreen/StatesScreen";
import { ContactContextProvider } from "./Context/ContactContext";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { MeScreen } from "./Screens/MeScreen/MeScreen";
import { SideBarContactChats } from "./Components/SideBars/SideBarContactChats/SideBarContactChats";
import { SideBarContactInfo } from "./Components/SideBars/SideBarContactInfo/SideBarContactInfo";
import { SideBarNewContact } from "./Components/SideBars/SideBarNewContact/SideBarnewContact";
import { SideBarEditContact } from "./Components/SideBars/SideBarEditContact/SideBarEditContact";

/**
 * Componente Principal: App
 * Define el enrutamiento general de la aplicación utilizando React Router.
 * Configura los proveedores de contexto globales (Tema y Contactos) para que envuelvan todas las pantallas.
 */
function App() {
  return (
    <Routes>
      {/* Proveedor de tema visual*/}
      <Route element={<ThemeContextProvider />}>
        {/* Proveedor de estado global de contactos y mensajes */}
        <Route element={<ContactContextProvider />}>

          {/* Estructura base de la aplicación (LayoutScreen) */}
          <Route path="/" element={<LayoutScreen />}>

            {/* Rutas anidadas que comparten el diseño de panel de chats (ChatsLayout) */}
            <Route element={<ChatsLayout />}>
              <Route index element={<SideBarHome />} />
              <Route path="/home" element={<SideBarHome />} />
              <Route path="/chats" element={<SideBarHome />} />

              {/* Rutas de detalle, creación y edición de contactos/chats */}
              <Route
                path="/chats/:contact_id"
                element={<SideBarContactChats />}
              />
              <Route
                path="/chats/new-contact"
                element={<SideBarNewContact />}
              />
              <Route
                path="/chats/contacts/:contact_id"
                element={<SideBarContactInfo />}
              />
              <Route
                path="/chats/edit-contact/:contact_id"
                element={<SideBarEditContact />}
              />
            </Route>

            {/* Pantallas secundarias accesibles desde la barra de navegación principal */}
            <Route path="/calls" element={<CallScreen />} />
            <Route path="/channels" element={<ChannelsScreen />} />
            <Route path="/communities" element={<CommunitiesScreen />} />
            <Route path="/states" element={<StatesScreen />} />
            <Route path="/profile" element={<MeScreen />} />

            {/* Redirección por defecto si la ruta no existe */}
            <Route path="*" element={<Navigate to="/chats" replace />} />
          </Route>

        </Route>
      </Route>
    </Routes>
  );
}

export default App;
