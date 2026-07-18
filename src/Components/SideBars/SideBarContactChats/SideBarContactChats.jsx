import { useContext } from "react"
import { ContactContext } from "../../../Context/ContactContext"
export const SideBarContactChats = () => {

    const { contact_selected } = useContext(ContactContext)

    return (
        <>
            <header className="contactInfoHeader">
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
            </header>
            <div className="contact-message">
                <div className="contact-message__content">
                    {
                        contact_selected.messages.map((message) => (
                            <div
                                key={message.id}
                                className={
                                    message.sender === "me"
                                        ? "message--me"
                                        : "message--contact"
                                }
                            >
                                <p>{message.text}</p>
                            </div>
                        ))
                    }
                </div>

                <div className="contact-input">
                </div>
            </div>

        </>
    )
}