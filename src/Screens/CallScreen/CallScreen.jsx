import { SideBarCalls } from "../../Components/SideBars/SideBarCalls/SideBarCalls"
import { SectionCalls } from "../../Components/Sections/SectionCalls/SectionCalls"

export const CallScreen = () => {
    return (
        <>
            <section className="mainView">
                <SectionCalls />
            </section>
            <aside className="asideView">
                <SideBarCalls />
            </aside>
        </>
    )
}