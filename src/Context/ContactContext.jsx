import { createContext, useState } from "react";
import { Outlet, useParams } from "react-router";
import { contactsList } from "../Data/contactsList.js";

// Datos de contactos precargados (servidor simulado)
const server_contacts = contactsList;

// Creación del contexto de Contactos
const ContactContext = createContext();

/**
 * Proveedor de Contexto: ContactContextProvider
 * Administra el estado global de los contactos, los chats y sus respectivos mensajes en la aplicación.
 * Ofrece métodos para crear, actualizar y eliminar contactos y mensajes.
 */
function ContactContextProvider() {
  // Estado local que almacena la lista completa de contactos
  const [contacts, setContacts] = useState(server_contacts);
  
  // Obtiene el ID del contacto seleccionado de los parámetros de la URL activa
  const { contact_id } = useParams();

  // Encuentra el objeto del contacto seleccionado en base al ID de la ruta activa
  let contact_selected = null;
  if (contact_id) {
    contact_selected = contacts.find(
      (contact) => contact.id === Number(contact_id)
    );
  }

  /**
   * Elimina un mensaje específico de un contacto por su ID.
   * Si no se proveen parámetros específicos, asume el contacto activo y el ID provisto.
   * @param {number|string} contactId - ID del contacto al que pertenece el mensaje.
   * @param {number|string} messageId - ID del mensaje que se desea borrar.
   */
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

  /**
   * Crea y añade un nuevo mensaje al chat del contacto actualmente seleccionado.
   * Genera un ID autoincremental para el nuevo mensaje.
   * @param {string} value - El texto del mensaje.
   * @param {string} sender - Quién envía el mensaje ('me' o el alias del contacto).
   */
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
          chatStarted: true, // Marca el chat como iniciado al enviar un mensaje
        };
      }
      return contact;
    });
    setContacts(contacts_modified);
  }

  /**
   * Elimina todos los mensajes del chat del contacto activo.
   */
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

  /**
   * Elimina un contacto completo de la lista general de contactos.
   * @param {number|string} contactId - ID del contacto a eliminar.
   */
  function deleteContactById(contactId) {
    const contacts_modified = contacts.filter(
      (contact) => contact.id !== Number(contactId)
    );
    setContacts(contacts_modified);
  }

  /**
   * Vacía los mensajes de un chat y restablece el estado a 'chat no iniciado'.
   * @param {number|string} contactId - ID del contacto del cual limpiar el chat.
   */
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

  /**
   * Habilita/inicia visualmente el chat con un contacto si tiene mensajes acumulados.
   * @param {number|string} contactId - ID del contacto.
   */
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

  /**
   * Crea un nuevo contacto y lo inserta al final de la lista.
   * Asigna un avatar genérico por defecto.
   * @param {string} firstName - Nombre del contacto.
   * @param {string} lastName - Apellido del contacto.
   * @param {string} phoneNumber - Número de celular.
   */
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

  /**
   * Actualiza la información básica (nombre, apellido, celular) de un contacto existente.
   * @param {number|string} contactId - ID del contacto a modificar.
   * @param {object} data - Contiene el nuevo primer nombre, apellido y celular del contacto.
   */
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

  /**
   * Restablece el contador de mensajes no leídos de un contacto a cero (marca como leído).
   * @param {number|string} contactId - ID del contacto.
   */
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

  // Valores expuestos a través del contexto
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
      {/* Outlet renderiza los componentes hijos definidos en las rutas anidadas */}
      <Outlet />
    </ContactContext.Provider>
  );
}

export { ContactContext, ContactContextProvider };
