import { Routes, Route, Navigate } from "react-router";
import { LayoutScreen } from "./Screens/LayoutScreen/LayoutScreen";
import { ChatsLayout } from "./Screens/ChatsLayout/ChatsLayout";
import { SideBarHome } from "./Components/SideBars/SideBarHome/SideBarHome";
import { CallScreen } from "./Screens/CallScreen/CallScreen";
import { ChannelsScreen } from "./Screens/ChannelsScreen/ChannelsScreen";
import { CommunitiesScreen } from "./Screens/CommunitiesScreen/CommunitiesScreen";
import { StatesScreen } from "./Screens/StatesScreen/StatesScreen";
import { ContactContextProvider } from "./Context/ContactContext";
import { MeScreen } from "./Screens/MeScreen/MeScreen";
import { SideBarContactChats } from "./Components/SideBars/SideBarContactChats/SideBarContactChats";
import { SideBarContactInfo } from "./Components/SideBars/SideBarContactInfo/SideBarContactInfo";
import { SideBarNewContact } from "./Components/SideBars/SideBarNewContact/SideBarnewContact";
import { SideBarEditContact } from "./Components/SideBars/SideBarEditContact/SideBarEditContact";

function App() {
  return (
    <Routes>
      <Route element={<ContactContextProvider />}>
        <Route path="/" element={<LayoutScreen />}>
          <Route element={<ChatsLayout />}>
            <Route index element={<SideBarHome />} />
            <Route path="/home" element={<SideBarHome />} />
            <Route path="/chats" element={<SideBarHome />} />
            <Route
              path="/chats/:contact_id"
              element={<SideBarContactChats />}
            />
            <Route path="/chats/new-contact" element={<SideBarNewContact />} />
            <Route
              path="/chats/contacts/:contact_id"
              element={<SideBarContactInfo />}
            />
            <Route
              path="/chats/edit-contact/:contact_id"
              element={<SideBarEditContact />}
            />
          </Route>
          <Route path="/calls" element={<CallScreen />} />
          <Route path="/channels" element={<ChannelsScreen />} />
          <Route path="/communities" element={<CommunitiesScreen />} />
          <Route path="/states" element={<StatesScreen />} />
          <Route path="/profile" element={<MeScreen />} />
          <Route path="*" element={<Navigate to="/chats" replace />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
