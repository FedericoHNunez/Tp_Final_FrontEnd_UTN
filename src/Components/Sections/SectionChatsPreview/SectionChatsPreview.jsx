import { useContext } from "react"
import { ContactContext } from "../../../Context/ContactContext"
import "./SectionChatsPreview.css"
import { Link } from "react-router"
export const SectionChatsPreview = () => {

  const { contacts } = useContext(ContactContext)

  return (
    <>

      {
        contacts
          .filter(contact => contact.messages?.length > 0)
          .map(contact => (
            <article className="messageBoxPreview" key={contact.id}>
              <Link to={`/state/${contact.id}`}>
                <div className="messageBoxPreview-img">
                  <img src={contact.picture.thumbnail} alt={`Imagen de perfil de ${contact.alias}}`} />
                </div>
              </Link>
              <Link to={`chats/${contact.id}`}>
                <div className="messageBoxPreview-info">
                  <h2 className="messageBoxPreview-alias">{contact.alias}</h2>
                  <p className="messageBoxPreview-message">{contact.messages[contact.messages.length - 1].text}</p>
                </div>
              </Link>
            </article>
          ))
      }

    </>
  )
}