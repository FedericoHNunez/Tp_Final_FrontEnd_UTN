import { SectionChatsPreview } from "../../Components/Sections/SectionChatsPreview/SectionChatsPreview"
import { SideBarHome } from "../../Components/SideBars/SideBarHome/SideBarHome"
import { useLocation, useParams } from "react-router"
export const HomeScreen = () => {
    return (
        <>  
                <section className="">
                <SectionChatsPreview/>
                </section>
                <aside className=""> 
                <SideBarHome/> 
                </aside>
        </>
    )
}
