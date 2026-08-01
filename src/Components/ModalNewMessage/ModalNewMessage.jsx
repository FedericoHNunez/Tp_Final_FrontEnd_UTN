import "./ModalNewMessage.css";
import { useContext, useState } from "react";
import { ContactContext } from "../../Context/ContactContext";
import { InputSearchContact } from "../InputSearchContact/InputSearchContact";
import { Link } from "react-router";

export const ModalNewMessage = ({ onClose }) => {
    const { contacts, startChat } = useContext(ContactContext);
    const [searchChatsValue, setSearchChatsValue] = useState("");

    return (
        <div className="ModalNewMessage">
            <div className="ModalNewMessage-header section-header">
                <button title="Cerrar" onClick={onClose}>
                    <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor"><title>Volver a los chats</title><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
                </button>
                <h2>contactos {contacts.length}</h2>

            </div>

            <InputSearchContact
                searchChatsValue={searchChatsValue}
                setSearchChatsValue={setSearchChatsValue}
                placeholder="Buscar contactos"
            />
            <section className="ModalNewMessage-contacts-list">
                <div>
                    <Link to="/chats/new-contact" onClick={onClose} className="ModalNewMessage-contact-item">
                        <span className="center">
                            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="xh8yej3 x5yr21d" fill="currentColor"><title>Agregar nuevo contacto</title><path fill="currentColor" d="M18 11h-2a.97.97 0 0 1-.71-.29A.97.97 0 0 1 15 10c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h2V7c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v2h2c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 22 11h-2v2c0 .28-.1.52-.29.71A.94.94 0 0 1 19 14a.97.97 0 0 1-.71-.29A.97.97 0 0 1 18 13v-2Zm-9 1a3.9 3.9 0 0 1-2.83-1.18A3.85 3.85 0 0 1 5 8c0-1.1.4-2.04 1.17-2.83A3.85 3.85 0 0 1 9 4c1.1 0 2.04.4 2.82 1.17A3.85 3.85 0 0 1 13 8c0 1.1-.4 2.04-1.18 2.82A3.85 3.85 0 0 1 9 12Zm-8 6v-.8c0-.57.15-1.09.44-1.56a2.9 2.9 0 0 1 1.16-1.09 13.76 13.76 0 0 1 9.65-1.16c1.07.26 2.12.64 3.15 1.16.48.25.87.61 1.16 1.09.3.47.44 1 .44 1.56v.8c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H3c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41Z"></path></svg>
                        </span>
                        <h3>Nuevo contacto</h3>
                    </Link>
                </div>
                <ul>
                    {[...contacts]
                        .sort((a, b) => a.alias.localeCompare(b.alias))
                        .filter(contact => contact.alias.toLowerCase().includes(searchChatsValue.toLowerCase()))
                        .map(contact => (
                            <li key={contact.id}>
                                <Link
                                    to={`/chats/${contact.id}`}

                                    className="ModalNewMessage-contact-item"
                                    onClick={() => {
                                        startChat(contact.id)
                                        onClose()
                                    }}
                                >

                                    <img src={contact.picture.thumbnail} alt={contact.alias} />
                                    <h3>{contact.alias}</h3>

                                </Link>
                            </li>
                        ))}
                </ul>
            </section>
        </div>
    );
};