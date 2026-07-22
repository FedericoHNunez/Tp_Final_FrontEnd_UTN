import { useContext, useRef, useEffect } from "react"
import { ContactContext } from "../../../Context/ContactContext"
import "./SideBarContactChats.css"

const formatTime = (timestamp) => {
    if (!timestamp) return ""
    try {
        const date = new Date(timestamp)
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
    } catch {
        return ""
    }
}
export const SideBarContactChats = () => {

    const { contact_selected } = useContext(ContactContext)
    const textareaRef = useRef(null)

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "5.2rem"
            textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + "px"
        }
    }, [])

    const handleInput = (e) => {
        e.target.style.height = "5.2rem"
        e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px"
    }

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
                    <span className="center">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor"><title>Iniciar video llamada</title><path fill="currentColor" d="M4 20c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V6c0-.55.2-1.02.59-1.41C2.98 4.19 3.45 4 4 4h12c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v4.5l3.15-3.15c.17-.17.35-.2.55-.13.2.09.3.25.3.48v8.6c0 .23-.1.4-.3.47-.2.09-.38.05-.55-.12L18 13.5V18c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H4Zm0-2h12V6H4v12Z"></path></svg>
                    </span>
                    <span className="center">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor"><title>Iniciar llamada</title><path fill="currentColor" d="M19.95 21c-2.08 0-4.14-.45-6.17-1.36a18.3 18.3 0 0 1-5.55-3.87 18.47 18.47 0 0 1-3.87-5.54C3.46 8.18 3 6.13 3 4.04A1.02 1.02 0 0 1 4.05 3H8.1c.23 0 .44.08.63.24a.9.9 0 0 1 .32.56l.65 3.5c.03.27.03.5-.02.67-.05.19-.15.35-.28.48L6.97 10.9c.34.62.73 1.21 1.2 1.79.45.57.96 1.13 1.5 1.66A17.59 17.59 0 0 0 13.1 17l2.35-2.35a1.61 1.61 0 0 1 1.3-.4l3.45.7c.23.07.43.19.57.36.16.18.23.37.23.59v4.05A1.02 1.02 0 0 1 19.95 21ZM6.03 9l1.64-1.65L7.25 5H5.03c.08.68.2 1.36.34 2.03.16.66.37 1.32.66 1.97Zm8.95 8.95a12.42 12.42 0 0 0 4.02 1v-2.2l-2.35-.48-1.67 1.68Z"></path></svg>
                    </span>
                    <span className="center"> 
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor"><title>Buscar</title><path fill="currentColor" d="M9.5 16a6.27 6.27 0 0 1-4.61-1.89A6.27 6.27 0 0 1 3 9.5c0-1.82.63-3.35 1.89-4.61A6.27 6.27 0 0 1 9.5 3c1.82 0 3.35.63 4.61 1.89A6.27 6.27 0 0 1 16 9.5a6.1 6.1 0 0 1-1.3 3.8l5.6 5.6c.18.18.27.42.27.7 0 .28-.09.52-.27.7a.95.95 0 0 1-.7.27.95.95 0 0 1-.7-.27l-5.6-5.6A5.96 5.96 0 0 1 9.5 16Zm0-2c1.25 0 2.31-.44 3.19-1.31A4.34 4.34 0 0 0 14 9.5c0-1.25-.44-2.31-1.31-3.19A4.34 4.34 0 0 0 9.5 5c-1.25 0-2.31.44-3.19 1.31A4.34 4.34 0 0 0 5 9.5c0 1.25.44 2.31 1.31 3.19A4.34 4.34 0 0 0 9.5 14Z"></path></svg>
                    </span>
                    <span className="center">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor"><title>Menu mas opciones</title><path fill="currentColor" d="M12 20c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Zm0-6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Zm0-6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41 0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41 0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Z"></path></svg>
                    </span>
                </div>
            </header>
            <div className="contact-messages">

                <div className="contact-messages-container">
                     {contact_selected.messages.map((message) => (
                        <div
                            key={message.id}
                            className={
                                message.sender === "me"
                                    ? "message-me"
                                    : "message-contact"
                            }
                        >
                            <div className={
                                message.sender === "me"
                                    ? "message-me-text"
                                    : "message-contact-text"
                            }>
                                <p className="message-content-text">{message.text}</p>
                                <span className="message-time">
                                    {formatTime(message.timestamp)}
                                    {message.sender === "me" && (
                                        <span className="message-status-ticks">
                                            <svg viewBox="0 0 16 15" width="16" height="15" fill="currentColor">
                                                <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879 5.817 6.927a.366.366 0 0 0-.51.015l-.475.49a.369.369 0 0 0 .016.511l3.52 3.429a.366.366 0 0 0 .528-.017l6.177-7.527a.366.366 0 0 0-.063-.512zm-4.226.06l-.476-.374a.366.366 0 0 0-.511.062L4.471 9.878 1.621 6.926a.366.366 0 0 0-.51.015l-.475.49a.369.369 0 0 0 .016.511l3.52 3.429a.366.366 0 0 0 .528-.017l6.177-7.527a.366.366 0 0 0-.063-.512z"/>
                                            </svg>
                                        </span>
                                    )}
                                </span>
                            </div>
                        </div>
                    ))}
        
                     {contact_selected.messages.map((message) => (
                        <div
                            key={message.id}
                            className={
                                message.sender === "me"
                                    ? "message-me"
                                    : "message-contact"
                            }
                        >
                            <div className={
                                message.sender === "me"
                                    ? "message-me-text"
                                    : "message-contact-text"
                            }>
                                <p className="message-content-text">{message.text}</p>
                                <span className="message-time">
                                    {formatTime(message.timestamp)}
                                    {message.sender === "me" && (
                                        <span className="message-status-ticks">
                                            <svg viewBox="0 0 16 15" width="16" height="15" fill="currentColor">
                                                <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879 5.817 6.927a.366.366 0 0 0-.51.015l-.475.49a.369.369 0 0 0 .016.511l3.52 3.429a.366.366 0 0 0 .528-.017l6.177-7.527a.366.366 0 0 0-.063-.512zm-4.226.06l-.476-.374a.366.366 0 0 0-.511.062L4.471 9.878 1.621 6.926a.366.366 0 0 0-.51.015l-.475.49a.369.369 0 0 0 .016.511l3.52 3.429a.366.366 0 0 0 .528-.017l6.177-7.527a.366.366 0 0 0-.063-.512z"/>
                                            </svg>
                                        </span>
                                    )}
                                </span>
                            </div>
                        </div>
                    ))}
        
                     {contact_selected.messages.map((message) => (
                        <div
                            key={message.id}
                            className={
                                message.sender === "me"
                                    ? "message-me"
                                    : "message-contact"
                            }
                        >
                            <div className={
                                message.sender === "me"
                                    ? "message-me-text"
                                    : "message-contact-text"
                            }>
                                <p className="message-content-text">{message.text}</p>
                                <span className="message-time">
                                    {formatTime(message.timestamp)}
                                    {message.sender === "me" && (
                                        <span className="message-status-ticks">
                                            <svg viewBox="0 0 16 15" width="16" height="15" fill="currentColor">
                                                <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879 5.817 6.927a.366.366 0 0 0-.51.015l-.475.49a.369.369 0 0 0 .016.511l3.52 3.429a.366.366 0 0 0 .528-.017l6.177-7.527a.366.366 0 0 0-.063-.512zm-4.226.06l-.476-.374a.366.366 0 0 0-.511.062L4.471 9.878 1.621 6.926a.366.366 0 0 0-.51.015l-.475.49a.369.369 0 0 0 .016.511l3.52 3.429a.366.366 0 0 0 .528-.017l6.177-7.527a.366.366 0 0 0-.063-.512z"/>
                                            </svg>
                                        </span>
                                    )}
                                </span>
                            </div>
                        </div>
                    ))}
        
                     {contact_selected.messages.map((message) => (
                        <div
                            key={message.id}
                            className={
                                message.sender === "me"
                                    ? "message-me"
                                    : "message-contact"
                            }
                        >
                            <div className={
                                message.sender === "me"
                                    ? "message-me-text"
                                    : "message-contact-text"
                            }>
                                <p className="message-content-text">{message.text}</p>
                                <span className="message-time">
                                    {formatTime(message.timestamp)}
                                    {message.sender === "me" && (
                                        <span className="message-status-ticks">
                                            <svg viewBox="0 0 16 15" width="16" height="15" fill="currentColor">
                                                <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879 5.817 6.927a.366.366 0 0 0-.51.015l-.475.49a.369.369 0 0 0 .016.511l3.52 3.429a.366.366 0 0 0 .528-.017l6.177-7.527a.366.366 0 0 0-.063-.512zm-4.226.06l-.476-.374a.366.366 0 0 0-.511.062L4.471 9.878 1.621 6.926a.366.366 0 0 0-.51.015l-.475.49a.369.369 0 0 0 .016.511l3.52 3.429a.366.366 0 0 0 .528-.017l6.177-7.527a.366.366 0 0 0-.063-.512z"/>
                                            </svg>
                                        </span>
                                    )}
                                </span>
                            </div>
                        </div>
                    ))}
        
                </div>

            </div>
            <div className="contactMessage-input">
                <div className="contactMessage-input-relative">
                    <div className="more-stikers">
                        <span>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>Mas opciones</title><path fill="currentColor" d="M11 13H5.5a1 1 0 1 1 0-2H11V5.5a1 1 0 1 1 2 0V11h5.5a1 1 0 1 1 0 2H13v5.5a1 1 0 1 1-2 0V13Z"></path></svg>
                        </span>
                        <span >
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor"><title>Boton Stikers</title><path fill="currentColor" d="M8.5 10.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path><path fill="currentColor" fillRule="evenodd" d="M16.82 19.98A6.97 6.97 0 0 1 12 22H9.27A7.27 7.27 0 0 1 2 14.73V9.27A7.27 7.27 0 0 1 9.27 2h5.46A7.27 7.27 0 0 1 22 9.27v2.54c0 1.94-.77 3.8-2.15 5.17l-3.03 3ZM14.72 4H9.28A5.27 5.27 0 0 0 4 9.27v5.46A5.27 5.27 0 0 0 9.27 20h2.06a.9.9 0 0 0 .68-.88l-.02-2.26v-.11a5.5 5.5 0 0 1-4.65-2.6.6.6 0 0 1 .03-.6c.12-.2.3-.3.53-.3h5.7a4.8 4.8 0 0 1 3.22-1.23l2.26.01c.5 0 .9-.4.9-.9V9.07H20A5.27 5.27 0 0 0 14.73 4Zm-.71 15.11c0 .15-.01.3-.04.44a4.96 4.96 0 0 0 1.44-.99l3.03-3c.46-.46.83-.99 1.09-1.56-.15.02-.3.03-.46.03h-2.26A2.8 2.8 0 0 0 14 16.84l.02 2.26Z" clipRule="evenodd"></path></svg>
                        </span>
                    </div>

                    <form action="">
                        <label
                            htmlFor="message"
                            className="contact-input-label">
                            Escriba su mensaje
                        </label>
                        <textarea className="contactMessage-input-textarea"
                            ref={textareaRef}
                            name="message"
                            id="message"
                            placeholder="Escriba su mensaje"
                            onInput={handleInput}
                        ></textarea>
                    </form>
                    <div className="micro">
                        <span data-testid="mic-outlined" aria-hidden="true" data-icon="mic-outlined" className="xxk0z11 xvy4d1p"><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=""><title>Mensaje de audio</title><path fill="currentColor" d="M12 14a2.9 2.9 0 0 1-2.13-.88A2.9 2.9 0 0 1 9 11V5c0-.83.3-1.54.88-2.13A2.9 2.9 0 0 1 12 2c.83 0 1.54.3 2.13.88.58.58.87 1.29.87 2.12v6c0 .83-.3 1.54-.88 2.13A2.9 2.9 0 0 1 12 14Zm0 7a1 1 0 0 1-1-1v-2.07a6.66 6.66 0 0 1-4.3-2.33A6.79 6.79 0 0 1 5.06 12c-.07-.55.39-1 .94-1 .55 0 .99.45 1.09 1a4.8 4.8 0 0 0 1.37 2.54A4.82 4.82 0 0 0 12 16c1.38 0 2.56-.49 3.54-1.46a4.8 4.8 0 0 0 1.37-2.55c.1-.54.54-.99 1.09-.99s1 .45.94 1a6.8 6.8 0 0 1-1.64 3.6 6.66 6.66 0 0 1-4.3 2.33V20a1 1 0 0 1-1 1Zm0-9c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71V5c0-.28-.1-.52-.29-.71A.97.97 0 0 0 12 4c-.28 0-.52.1-.71.29A.94.94 0 0 0 11 5v6c0 .28.1.52.29.71.19.2.43.29.71.29Z"></path></svg></span>
                    </div>
                </div>

            </div>
        </>
    )
}