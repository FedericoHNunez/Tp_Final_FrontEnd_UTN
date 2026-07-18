


import { ContactContext } from '../../Context/ContactContext'

import { SectionChatsPreview } from "../../Components/Sections/SectionChatsPreview/SectionChatsPreview"
import { useContext } from "react"
import "./ContactChatScreen.css"
import { HeaderChatsPreview } from '../../Components/HeaderChatsPreview/HeaderChatsPreview'

export const ContactChatScreen = () => {
    const { contact_selected } = useContext(ContactContext)



    return (
        <>
            <section className="sectionView">
                <SectionChatsPreview />
            </section>
            <aside className="asideView">
                <div className="contactInfoHeader">
                    <div className="contactInfoHeader-left">
                        <div>
                            <img src={contact_selected.picture.thumbnail} alt={contact_selected.alias} />
                        </div>
                        <h2>{contact_selected.alias}</h2>
                    </div>
                    <div className="contactInfoHeader-right">
                        <span>video</span>
                        <span>call</span>
                        <span>search</span>
                        <span>more</span>
                    </div>
                </div>
                <div className="contact-message">

                    <div className="contact-input">
                    </div>
                </div>


            </aside>
        </>
    )
}