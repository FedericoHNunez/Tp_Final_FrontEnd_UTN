import { useContext, useState } from "react"
import { ContactContext } from "../../../Context/ContactContext"
import "./SectionChatsPreview.css"
import { Link } from "react-router"
import { HeaderChatsPreview } from "../../HeaderChatsPreview/HeaderChatsPreview"
import { formatTime } from "../../../utils/utils.js"

export const SectionChatsPreview = () => {

  const { contacts } = useContext(ContactContext)
  const [searchChatsValue, setSearchChatsValue] = useState("")

  return (
    <>
      <HeaderChatsPreview 
        searchChatsValue={searchChatsValue} 
        setSearchChatsValue={setSearchChatsValue} 
      />
      {
        contacts
          .filter(contact => contact.chatStarted)
          .filter(contact => contact.alias.toLowerCase().includes(searchChatsValue.toLowerCase()))
          .map(contact => (
            <article className="messageBoxPreview" key={contact.id}>
              <Link to={`/state/${contact.id}`} className="messageBoxPreview-img-link">
                <div className="messageBoxPreview-img">
                  <img src={contact.picture.thumbnail} alt={`Imagen de perfil de ${contact.alias}`} />
                </div>
              </Link>
              <Link to={`/chats/${contact.id}`} className="messageBoxPreview-info-link">
                <div className="messageBoxPreview-info">
                  <div className="messageBoxPreview-info-header">
                    <h2 className="messageBoxPreview-alias">{contact.alias}</h2>
                    {contact.messages.length > 0 && (
                      <span className="messageBoxPreview-time">
                        {formatTime(contact.messages[contact.messages.length - 1].timestamp)}
                      </span>
                    )}
                  </div>
                  <p className="messageBoxPreview-message">{
                    contact.messages.length > 0
                      ? contact.messages[contact.messages.length - 1].text
                      : "No hay mensajes"
                  }</p>
                </div>
              </Link>
            </article>
          ))
      }
    </>
  )
}