import { SideBarChannels } from "../../Components/SideBars/SideBarChannels/SideBarChannels";
import { SectionChannels } from "../../Components/Sections/SectionChannels/SectionChannels";

export const ChannelsScreen = () => {
  return (
    <>
      <section className="mainView paddingView">
        <SectionChannels />
      </section>
      <aside className="asideView backgroundSiderBar">
        <SideBarChannels />
      </aside>
    </>
  );
};
