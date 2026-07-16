import { Routes, Route } from "react-router";


import { LayoutScreen } from "./Screens/LayoutScreen/LayoutScreen";
import { NotFoundScreen } from "./Screens/NotFoundScreen/NotFoundScreen";
import { HomeScreen } from "./Screens/HomeScreen/HomeScreen";
import { ChatsScreen } from "./Screens/ChatsScreen/ChatsScreen";
import { CallScreen } from "./Screens/CallScreen/CallScreen";
import { ChannelsScreen } from "./Screens/ChannelsScreen/ChannelsScreen";
import { CommunitiesScreen } from "./Screens/CommunitiesScreen/CommunitiesScreen";
import { StatesScreen } from "./Screens/StatesScreen/StatesScreen";
import { ContactContextProvider } from "./Context/ContactContext";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutScreen />}>
       <Route element= {<ContactContextProvider />} >
            <Route index element={<HomeScreen />} />
            <Route path="Home" element={<HomeScreen />} />
            <Route path="chats" element={<ChatsScreen />} />
        </Route>
        <Route path="calls" element={<CallScreen />} />
        <Route path="channels" element={<ChannelsScreen />} />
        <Route path="communities" element={<CommunitiesScreen />} />
        <Route path="states" element={<StatesScreen />} />
        <Route path="Me" element={<MeScreen />} />
        <Route path="*" element={<HomeScreen />} />
      </Route>
    </Routes>
  );
}

export default App;