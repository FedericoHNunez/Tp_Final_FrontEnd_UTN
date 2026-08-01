import { SideBarStatus } from "../../Components/SideBars/SideBarStatus/SideBarStatus";
import { SectionStates } from "../../Components/Sections/SectionStates/SectionStates";

export const StatesScreen = () => {
  return (
    <>
      <section className="mainView">
        <SectionStates />
      </section>
      <aside className="asideView backgroundSiderBar">
        <SideBarStatus />
      </aside>
    </>
  );
};
