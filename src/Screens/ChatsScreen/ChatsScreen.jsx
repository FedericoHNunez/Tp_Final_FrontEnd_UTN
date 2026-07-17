import { SectionChats } from "../../Components/Sections/SectionChats/SectionChats"
import { SideBarChats } from "../../Components/SideBars/SidebarChats/SidebarChats"

export const ChatsScreen = () => {
    return (
        <>
        <section className="">
            <SectionChats />
        </section>
        <aside className="">
            <SideBarChats />
        </aside>
        </>
    )
}