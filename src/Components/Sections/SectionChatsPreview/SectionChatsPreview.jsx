import { useContext } from "react"
import { ContactContext } from "../../../Context/ContactContext"
import "./SectionChatsPreview.css"
import { Link } from "react-router"
import { HeaderChatsPreview } from "../../HeaderChatsPreview/HeaderChatsPreview"
export const SectionChatsPreview = () => {

  const { contacts } = useContext(ContactContext)

  return (
    <>
          <HeaderChatsPreview />
      {
        contacts
          .filter(contact => contact.chatStarted)
          .map(contact => (
            <article className="messageBoxPreview" key={contact.id}>
              <Link to={`/state/${contact.id}`} className="messageBoxPreview-img-link">
                <div className="messageBoxPreview-img">
                  <img src={contact.picture.thumbnail} alt={`Imagen de perfil de ${contact.alias}`} />
                </div>
              </Link>
              <Link to={`/chats/${contact.id}`} className="messageBoxPreview-info-link">
                <div className="messageBoxPreview-info">
                  <h2 className="messageBoxPreview-alias">{contact.alias}</h2>
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
      {
        contacts
          .filter(contact => contact.chatStarted)
          .map(contact => (
            <article className="messageBoxPreview" key={contact.id}>
              <Link to={`/state/${contact.id}`} className="messageBoxPreview-img-link">
                <div className="messageBoxPreview-img">
                  <img src={contact.picture.thumbnail} alt={`Imagen de perfil de ${contact.alias}`} />
                </div>
              </Link>
              <Link to={`/chats/${contact.id}`} className="messageBoxPreview-info-link">
                <div className="messageBoxPreview-info">
                  <h2 className="messageBoxPreview-alias">{contact.alias}</h2>
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
      {
        contacts
          .filter(contact => contact.chatStarted)
          .map(contact => (
            <article className="messageBoxPreview" key={contact.id}>
              <Link to={`/state/${contact.id}`} className="messageBoxPreview-img-link">
                <div className="messageBoxPreview-img">
                  <img src={contact.picture.thumbnail} alt={`Imagen de perfil de ${contact.alias}`} />
                </div>
              </Link>
              <Link to={`/chats/${contact.id}`} className="messageBoxPreview-info-link">
                <div className="messageBoxPreview-info">
                  <h2 className="messageBoxPreview-alias">{contact.alias}</h2>
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
      {
        contacts
          .filter(contact => contact.chatStarted)
          .map(contact => (
            <article className="messageBoxPreview" key={contact.id}>
              <Link to={`/state/${contact.id}`} className="messageBoxPreview-img-link">
                <div className="messageBoxPreview-img">
                  <img src={contact.picture.thumbnail} alt={`Imagen de perfil de ${contact.alias}`} />
                </div>
              </Link>
              <Link to={`/chats/${contact.id}`} className="messageBoxPreview-info-link">
                <div className="messageBoxPreview-info">
                  <h2 className="messageBoxPreview-alias">{contact.alias}</h2>
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