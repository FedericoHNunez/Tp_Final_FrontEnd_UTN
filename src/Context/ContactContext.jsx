import { createContext, useState } from "react";
import { Outlet, useParams } from "react-router";
import { contactsList } from "../Data/contactsList.js";

const server_contacts = contactsList;
const ContactContext = createContext();

function ContactContextProvider() {
  const [contacts, setContacts] = useState(server_contacts);
  const { contact_id } = useParams();

  let contact_selected = null;

  if (contact_id) {
    contact_selected = contacts.find(
      (contact) => contact.id === Number(contact_id)
    );
  }

  function deleteMessageById(contactId, messageId) {
    const targetContactId = messageId !== undefined ? contactId : contact_id;
    const targetMessageId = messageId !== undefined ? messageId : contactId;

    const contacts_modified = contacts.map((contact) => {
      if (contact.id === Number(targetContactId)) {
        return {
          ...contact,
          messages: contact.messages.filter(
            (message) => message.id !== Number(targetMessageId)
          ),
        };
      }

      return contact;
    });
    setContacts(contacts_modified);
  }

  function createMessage(value, sender) {
    const contacts_modified = contacts.map((contact) => {
      if (contact.id === Number(contact_id)) {
        const new_message = {
          id: Math.max(0, ...contact.messages.map((message) => message.id)) + 1,
          sender: sender,
          text: value,
          timestamp: new Date().toISOString(),
        };
        return {
          ...contact,
          messages: [...contact.messages, new_message],
          chatStarted: true,
        };
      }
      return contact;
    });
    setContacts(contacts_modified);
  }

  function deleteAllMessages() {
    const contacts_modified = contacts.map((contact) => {
      if (contact.id === Number(contact_id)) {
        return {
          ...contact,
          messages: [],
        };
      }

      return contact;
    });
    setContacts(contacts_modified);
  }

  function deleteContactById(contactId) {
    const contacts_modified = contacts.filter(
      (contact) => contact.id !== Number(contactId)
    );
    setContacts(contacts_modified);
  }

  function deleteChat(contactId) {
    const contacts_modified = contacts.map((contact) => {
      if (contact.id === Number(contactId)) {
        return {
          ...contact,
          messages: [],
          chatStarted: false,
        };
      }
      return contact;
    });
    setContacts(contacts_modified);
  }

  function startChat(contactId) {
    const contacts_modified = contacts.map((contact) => {
      if (contact.id === Number(contactId) && contact.messages.length !== 0) {
        return {
          ...contact,
          chatStarted: true,
        };
      }
      return contact;
    });
    setContacts(contacts_modified);
  }

  function createContact(firstName, lastName, phoneNumber) {
    const new_contact = {
      id: Math.max(0, ...contacts.map((contact) => contact.id)) + 1,
      name: {
        first: firstName,
        last: lastName || "",
      },
      alias: `${firstName} ${lastName || ""}`.trim(),
      unreadCount: 0,
      messages: [],
      cell: phoneNumber,
      picture: {
        large: "/img/avatarDefault.webp",
        medium: "/img/avatarDefault.webp",
        thumbnail: "/img/avatarDefault.webp",
      },
      chatStarted: false,
    };
    setContacts((prev) => [...prev, new_contact]);
  }

  const updateContactById = (contactId, data) => {
    const contacts_modified = contacts.map((contact) => {
      if (contact.id === Number(contactId)) {
        return {
          ...contact,
          name: {
            first: data.first,
            last: data.last || "",
          },
          alias: `${data.first} ${data.last || ""}`.trim(),
          cell: data.cell,
        };
      }
      return contact;
    });
    setContacts(contacts_modified);
  };

  const updateContactUnreadCount = (contactId) => {
    const contacts_modified = contacts.map((contact) => {
      if (contact.id === Number(contactId)) {
        return {
          ...contact,
          unreadCount: 0,
        };
      }
      return contact;
    });
    setContacts(contacts_modified);
  };

  const provider_values = {
    contacts,
    contact_selected,
    deleteMessageById,
    createMessage,
    deleteAllMessages,
    deleteContactById,
    deleteChat,
    startChat,
    createContact,
    updateContactById,
    updateContactUnreadCount,
  };
  return (
    <ContactContext.Provider value={provider_values}>
      { }
      <Outlet />
    </ContactContext.Provider>
  );
}

export { ContactContext, ContactContextProvider };
