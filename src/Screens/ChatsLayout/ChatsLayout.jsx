
import { Outlet } from "react-router";
import { SectionChatsPreview } from "../../Components/Sections/SectionChatsPreview/SectionChatsPreview";

export const ChatsLayout = () => {
    return (
        <>
            <section className="sectionView">
                <SectionChatsPreview />
            </section>
            <Outlet />
        </>
    );
};
