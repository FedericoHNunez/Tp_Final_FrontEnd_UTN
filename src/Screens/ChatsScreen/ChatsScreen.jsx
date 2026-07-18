import { SectionChatsPreview } from "../../Components/Sections/SectionChatsPreview/SectionChatsPreview"
import { SideBarChats } from "../../Components/SideBars/SidebarChats/SidebarChats"

export const ChatsScreen = () => {
    return (
        <>
        <section className="sectionView">
            <SectionChatsPreview />
        </section>
        <aside className="asideView no-display">
            <SideBarChats />
        </aside>
        </>
    )
}