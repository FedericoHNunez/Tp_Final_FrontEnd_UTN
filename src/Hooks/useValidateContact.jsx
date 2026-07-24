import { useContext } from "react"
import { ContactContext } from "../Context/ContactContext"
import { Navigate } from "react-router"

export const useValidateContact = (requireChatStarted = true) => {
    const { contact_selected } = useContext(ContactContext)

    if (!contact_selected) {
        return <Navigate to="/chats" replace />
    }

    if (requireChatStarted && !contact_selected.chatStarted) {
        return <Navigate to="/chats" replace />
    }

    return null
}
