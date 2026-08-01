import { SideBarStates } from "../../Components/SideBars/SideBarStates/SideBarStates";
import { SectionStates } from "../../Components/Sections/SectionStates/SectionStates";

export const StatesScreen = () => {
  return (
    <>
      <section className="mainView">
        <SectionStates />
      </section>
      <aside className="asideView backgroundSiderBar">
        <SideBarStates />
      </aside>
    </>
  );
};
