import { SectionChats } from "../../Components/Sections/SectionChats/SectionChats"
import { SideBarHome } from "../../Components/SideBars/SideBarHome/SideBarHome"
import { useLocation, useParams } from "react-router"
export const HomeScreen = () => {
    return (
        <>  
                <section className="">
                <SectionChats/>  
                </section>
                <aside className=""> 
                <SideBarHome/> 
                </aside>
        </>
    )
}
