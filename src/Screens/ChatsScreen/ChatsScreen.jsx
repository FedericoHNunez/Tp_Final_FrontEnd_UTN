import { SectionChatsPreview } from "../../Components/Sections/SectionChatsPreview/SectionChatsPreview"
import { SideBarChats } from "../../Components/SideBars/SidebarChats/SidebarChats"

export const ChatsScreen = () => {
    return (
        <>
        <section className="">
            <SectionChatsPreview />
        </section>
        <aside className="">
            <SideBarChats />
        </aside>
        </>
    )
}