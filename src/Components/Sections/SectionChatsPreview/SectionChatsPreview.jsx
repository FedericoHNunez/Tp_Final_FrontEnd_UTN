import { useContext, useState } from "react"
import { ContactContext } from "../../../Context/ContactContext"
import "./SectionChatsPreview.css"
import { HeaderChatsPreview } from "../../HeaderChatsPreview/HeaderChatsPreview"
import { InputSearchContact } from "../../InputSearchContact/InputSearchContact"
import { formatTime } from "../../../utils/Timestamp.js"
import { ModalNewMessage } from "../../ModalNewMessage/ModalNewMessage"
import { ChatBox } from "../../ChatBox/ChatBox"

export const SectionChatsPreview = () => {

  const { contacts } = useContext(ContactContext)
  const [searchChatsValue, setSearchChatsValue] = useState("")
  const [isNewChatOpen, setIsNewChatOpen] = useState(false)

  return (
    <>
      {isNewChatOpen && (
        <ModalNewMessage onClose={() => setIsNewChatOpen(false)} />
      )}
      <HeaderChatsPreview onNewChatClick={() => setIsNewChatOpen(true)} />
      <InputSearchContact
        searchChatsValue={searchChatsValue}
        setSearchChatsValue={setSearchChatsValue}
        placeholder="Buscar chats o grupos"
      />
      <nav className='ChatsPreview-header-nav'>
        <ul>
          <li>
            <button title="Todos los chats">Todos</button>
          </li>
          <li>
            <button title="No leidos">No Leidos </button>
          </li>
          <li>
            <button title="Mas opciones">
              <span aria-hidden="true" className="x1qx5ct2 xw4jnvo"><svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor"><title>Mas opciones</title><path fill="currentColor" d="m11.47 14.47-3.62-3.62a.47.47 0 0 1-.15-.35.5.5 0 0 1 .14-.35c.09-.1.21-.15.36-.15h7.6c.15 0 .27.05.36.15.1.1.14.22.14.35 0 .03-.05.15-.15.35l-3.62 3.63a.76.76 0 0 1-.25.17.73.73 0 0 1-.28.05c-.1 0-.2-.02-.28-.05a.76.76 0 0 1-.25-.18Z"></path></svg></span>
            </button>
          </li>
        </ul>
      </nav>
      {
        contacts
          .filter(contact => contact.chatStarted)
          .filter(contact => contact.alias.toLowerCase().includes(searchChatsValue.toLowerCase()))
          .map(contact => (
            <ChatBox
              key={contact.id}
              imgSrc={contact.picture.thumbnail}
              imgAlt={`Imagen de perfil de ${contact.alias}`}
              title={contact.alias}
              subtitle={
                contact.messages.length > 0
                  ? contact.messages[contact.messages.length - 1].text
                  : "No hay mensajes"
              }
              time={
                contact.messages.length > 0
                  ? formatTime(contact.messages[contact.messages.length - 1].timestamp)
                  : undefined
              }
              imgLink={`/state/${contact.id}`}
              infoLink={`/chats/${contact.id}`}
            />
          ))
      }
    </>
  )
}
