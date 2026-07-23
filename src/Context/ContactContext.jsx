import { createContext, useState } from "react";
import { Outlet, useParams } from "react-router";
import {contactsList} from "../Data/contactsList.js"


const server_contacts = contactsList
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
                    return {
                        ...contact,
                        messages: contact.messages.filter(message => message.id !== Number(message_id))
                    }
                }

                return contact
            }
        )
        setContacts(
            contacts_modified
        )
    }

       function createMessage(value, sender) {
        const contacts_modified = contacts.map(
            (contact) => {
                if (contact.id === Number(contact_id)) {
                    const new_message = {
                       id: Math.max(0, ...contact.messages.map(message => message.id)) + 1,
                        sender: sender,
                        text: value,
                        timestamp: new Date().toISOString()
                    }
                    return {
                        ...contact,
                        messages: [...contact.messages, new_message],
                        chatStarted: true
                    }
                }
                return contact;
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
                    return {
                        ...contact,
                        messages: []
                    }
                }

                return contact
            }
        )
        setContacts(
            contacts_modified
        )
    }

    function deleteContactById(contactId) {
        const contacts_modified = contacts.filter(contact => contact.id !== Number(contactId));
        setContacts(contacts_modified);
    }

    function deleteChat(contactId) {
        const contacts_modified = contacts.map(
            (contact) => {
                if (contact.id === Number(contactId)) {
                    return {
                        ...contact,
                        messages: []
                    };
                }
                return contact;
            }
        );
        setContacts(contacts_modified);
    }

    /* 
    createContact
    updateContactById
    updateMessageById
    */



    const provider_values = {
        contacts,
        contact_selected,
        deleteMessageById,
        createMessage,
        deleteAllMessages,
        deleteContactById,
        deleteChat
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