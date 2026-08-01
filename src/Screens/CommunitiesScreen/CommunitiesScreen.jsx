import { SidebarCommunities } from "../../Components/SideBars/SideBarCommunities/SidebarCommunities";
import { SectionCommunities } from "../../Components/Sections/SectionCommunities/SectionCommunities";

export const CommunitiesScreen = () => {
  return (
    <>
      <section className="mainView">
        <SectionCommunities />
      </section>
      <aside className="asideView backgroundSiderBar">
        <SidebarCommunities />
      </aside>
    </>
  );
};
