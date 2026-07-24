import { Routes, Route } from "react-router";
import { LayoutScreen } from "./Screens/LayoutScreen/LayoutScreen";
import { ChatsLayout } from "./Screens/ChatsLayout/ChatsLayout";
import { ChatsScreen } from "./Screens/ChatsScreen/ChatsScreen";
import { CallScreen } from "./Screens/CallScreen/CallScreen";
import { ChannelsScreen } from "./Screens/ChannelsScreen/ChannelsScreen";
import { CommunitiesScreen } from "./Screens/CommunitiesScreen/CommunitiesScreen";
import { StatesScreen } from "./Screens/StatesScreen/StatesScreen";
import { ContactContextProvider } from "./Context/ContactContext";
import { MeScreen } from "./Screens/MeScreen/MeScreen";
import { ContactChatScreen } from "./Screens/ContacChatScreen/ContactChatScreen";
import { ContactInfoScreen } from "./Screens/ContactInfoScreen/ContactInfoScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutScreen />}>
        <Route element={<ContactContextProvider />} >
          <Route element={<ChatsLayout />}>
            <Route index element={<ChatsScreen />} />
            <Route path="/home" element={<ChatsScreen />} />
            <Route path="/chats" element={<ChatsScreen />} />
            <Route path="/chats/:contact_id" element={<ContactChatScreen />} />
            <Route path="/chats/contacts/:contact_id" element={<ContactInfoScreen />} />
            <Route path="*" element={<ChatsScreen />} />
          </Route>
          <Route path="/calls" element={<CallScreen />} />
          <Route path="/channels" element={<ChannelsScreen />} />
          <Route path="/communities" element={<CommunitiesScreen />} />
          <Route path="/states" element={<StatesScreen />} />
          <Route path="/profile" element={<MeScreen />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;