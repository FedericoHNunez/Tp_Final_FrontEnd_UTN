import { SectionChatsPreview } from "../../Components/Sections/SectionChatsPreview/SectionChatsPreview"
import { SideBarHome } from "../../Components/SideBars/SideBarHome/SideBarHome"
import { useLocation, useParams } from "react-router"
export const HomeScreen = () => {
    return (
        <>  
                <section className="sectionView">
                <SectionChatsPreview/>
                </section>
                <aside className="asideView center backgroundSiderBar"> 
                <SideBarHome/> 
                </aside>
        </>
    )
}
