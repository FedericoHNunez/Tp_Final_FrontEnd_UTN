

import { SectionChatsPreview } from "../../Components/Sections/SectionChatsPreview/SectionChatsPreview"
import "./ContactChatScreen.css"
import { HeaderChatsPreview } from '../../Components/HeaderChatsPreview/HeaderChatsPreview'
import { SideBarContactChats } from '../../Components/SideBars/SideBarContactChats/SideBarContactChats'

export const ContactChatScreen = () => {




    return (
        <>
            <section className="sectionView">
                <SectionChatsPreview />
            </section>
            <aside className="asideView">
             <SideBarContactChats />

            </aside>
        </>
    )
}