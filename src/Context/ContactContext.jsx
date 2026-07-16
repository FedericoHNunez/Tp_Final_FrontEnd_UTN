import { createContext, useState } from "react";
import { Outlet, useParams } from "react-router";
import {contacts as server_contacts} from '../data/contacts'

const ContactContext = createContext()


function ContactContextProvider() {
    const [contacts, setContacts] = useState(server_contacts)

    const { contact_id } = useParams()

    let contact_selected = null

    if (contact_id) {
        contact_selected = contacts.find(contact => contact.id === Number(contact_id))
    }

    function deleteMessageById(message_id) {
        const contacts_modified = contacts.map(
            (contact) => {
                if (contact.id === Number(contact_id)) {
                    const message_index = contact.messages.findIndex(message => message.id === Number(message_id))
                    contact.messages.splice(message_index, 1)
                }

                return contact
            }
        )
        setContacts(
            contacts_modified
        )
    }

    function createMessage(value, sendByMe) {
        const contacts_modified = contacts.map(
            (contact) => {
                if (contact.id === Number(contact_id)) {

                    const new_message = {
                        content: value,
                        sendByMe: sendByMe,
                        id: contact.messages.length + 1
                    }
                    contact.messages.push(new_message)
                }

                return contact
            }
        )
        setContacts(
            contacts_modified
        )
    }

    function deleteAllMessages() {
        const contacts_modified = contacts.map(
            (contact) => {
                if (contact.id === Number(contact_id)) {
                    contact.messages = []
                }

                return contact
            }
        )
        setContacts(
            contacts_modified
        )
    }

    /* 
    createContact
    deleteContactById
    updateContactById
    updateMessageById
    */



    const provider_values = {
        contacts,
        contact_selected,
        deleteMessageById,
        createMessage,
        deleteAllMessages
    }
    return (
        <ContactContext.Provider value={provider_values}>
            {/* 
            el outlet hace referencia a las subrutas
            */}
            <Outlet />
        </ContactContext.Provider>
    )
}


export { ContactContext, ContactContextProvider }