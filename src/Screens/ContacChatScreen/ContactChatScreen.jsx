

import { SectionChatsPreview } from "../../Components/Sections/SectionChatsPreview/SectionChatsPreview"
import "./ContactChatScreen.css"
import { SideBarContactChats } from '../../Components/SideBars/SideBarContactChats/SideBarContactChats'


export const ContactChatScreen = () => {


    return (
        <>
            <section className="sectionView no-display">
                <SectionChatsPreview />
            </section>
            <aside className="asideView">
             <SideBarContactChats />

            </aside>
        </>
    )
}