import { useContext } from "react"
import { ContactContext } from "../../../Context/ContactContext"
import "./SideBarContactChats.css"

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
                    <span>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor"><title>Iniciar video llamada</title><path fill="currentColor" d="M4 20c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6c0-.55.2-1.02.59-1.41C2.98 4.19 3.45 4 4 4h12c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v4.5l3.15-3.15c.17-.17.35-.2.55-.13.2.09.3.25.3.48v8.6c0 .23-.1.4-.3.47-.2.09-.38.05-.55-.12L18 13.5V18c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H4Zm0-2h12V6H4v12Z"></path></svg>
                    </span>
                    <span>
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor"><title>Iniciar llamada</title><path fill="currentColor" d="M19.95 21c-2.08 0-4.14-.45-6.17-1.36a18.3 18.3 0 0 1-5.55-3.87 18.47 18.47 0 0 1-3.87-5.54C3.46 8.18 3 6.13 3 4.04A1.02 1.02 0 0 1 4.05 3H8.1c.23 0 .44.08.63.24a.9.9 0 0 1 .32.56l.65 3.5c.03.27.03.5-.02.67-.05.19-.15.35-.28.48L6.97 10.9c.34.62.73 1.21 1.2 1.79.45.57.96 1.13 1.5 1.66A17.59 17.59 0 0 0 13.1 17l2.35-2.35a1.61 1.61 0 0 1 1.3-.4l3.45.7c.23.07.43.19.57.36.16.18.23.37.23.59v4.05A1.02 1.02 0 0 1 19.95 21ZM6.03 9l1.64-1.65L7.25 5H5.03c.08.68.2 1.36.34 2.03.16.66.37 1.32.66 1.97Zm8.95 8.95a12.42 12.42 0 0 0 4.02 1v-2.2l-2.35-.48-1.67 1.68Z"></path></svg>    
                    </span>
                    <span>
                       <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor"><title>Buscar</title><path fill="currentColor" d="M9.5 16a6.27 6.27 0 0 1-4.61-1.89A6.27 6.27 0 0 1 3 9.5c0-1.82.63-3.35 1.89-4.61A6.27 6.27 0 0 1 9.5 3c1.82 0 3.35.63 4.61 1.89A6.27 6.27 0 0 1 16 9.5a6.1 6.1 0 0 1-1.3 3.8l5.6 5.6c.18.18.27.42.27.7 0 .28-.09.52-.27.7a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27l-5.6-5.6A5.96 5.96 0 0 1 9.5 16Zm0-2c1.25 0 2.31-.44 3.19-1.31A4.34 4.34 0 0 0 14 9.5c0-1.25-.44-2.31-1.31-3.19A4.34 4.34 0 0 0 9.5 5c-1.25 0-2.31.44-3.19 1.31A4.34 4.34 0 0 0 5 9.5c0 1.25.44 2.31 1.31 3.19A4.34 4.34 0 0 0 9.5 14Z"></path></svg> 
                    </span>
                    <span>
                       <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor"><title>Menu mas opciones</title><path fill="currentColor" d="M12 20c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Zm0-6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Zm0-6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Z"></path></svg> 
                    </span>
                </div>  
            </header>
            <div className="contact-messages">
                  
                <div className="contact-messages-container">
               {
                    contact_selected.messages.map((message) => (
                        <div
                            key={message.id}
                            className={
                                message.sender === "me"
                                    ? "message-me"
                                    : "message-contact"
                            }
                        >
                            <p className={
                                message.sender === "me"
                                    ? "message-me-text"
                                    : "message-contact-text"
                            }
                                >{message.text}</p>
                            
                        </div>
                    ))
                }
                </div> 
            </div>
                <footer className="contactMessage-input">
                    <form action="">
                        <label
                            htmlFor="message" 
                            className="contact-input-label">
                            Escriba su mensaje
                        </label>
                        <textarea className="contactMessage-input-textarea"
                            name="message"
                            id="message"
                            placeholder="Escriba su mensaje"        
                         ></textarea>   
                    </form>
                </footer>
        </>
    )
}