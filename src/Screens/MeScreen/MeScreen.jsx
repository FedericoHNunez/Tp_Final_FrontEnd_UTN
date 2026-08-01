import { SideBarHome } from "../../Components/SideBars/SideBarHome/SideBarHome";
import { SectionMe } from "../../Components/Sections/SectionBarMe/SectionMe";

export const MeScreen = () => {
  return (
    <>
      <section className="mainView">
        <SectionMe />
      </section>
      <aside className="asideView center backgroundSiderBar">
        <SideBarHome />
      </aside>
    </>
  );
};
