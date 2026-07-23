import { SideBarContactInfo } from "../../Components/SideBars/SideBarContactInfo/SideBarContactInfo";
import { SectionChatsPreview } from "../../Components/Sections/SectionChatsPreview/SectionChatsPreview";
import "./ContactInfoScreen.css";



export const ContactInfoScreen = () => {
    return (
        <>
           <section className="sectionView">
                    <SectionChatsPreview/>
            </section>
            <aside className="asideView center"> 
            <SideBarContactInfo/> 
            </aside>
        </>
    )
}