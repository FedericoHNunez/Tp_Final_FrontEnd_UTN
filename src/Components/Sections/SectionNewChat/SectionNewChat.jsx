import { ContactContext } from "../../../Context/ContactContext"
import { useContext } from "react"


export const SectionNewChat = () => {
    const { contacts } = useContext(ContactContext)

    return (
        <>
            {
                contacts
                    .filter(contact => contact.chatStarted !== true)
                    .map(contact => (
                        <div key={contact.id} className="">
                            {contact.picture ? (
                                <div className="sidebar__newChat__containerImage">
                                    <img
                                        src={contact.picture.thumbnail}
                                        alt={contact.name.first}
                                        className="sidebar__newChat__img"
                                    />
                                </div>
                            ) : (
                                <div className="sidebar__newChat__containerImage">
                                    <img src="./img/avatarDefault.webp" alt={contact.name.first} />
                                </div>
                            )}
                            <div className="">
                                <div className="">
                                    <p className="">
                                        {contact.name.first} {contact.name.last}
                                    </p>
                                </div>
                                <p className="text-gray-500 text-sm truncate">
                                    {contact.cell}
                                </p>
                            </div>
                        </div>
                    ))
            }
        </>
    )
} 