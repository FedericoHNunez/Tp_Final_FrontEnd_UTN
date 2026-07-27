import "./ModalNewMessage.css";
import { useContext, useState } from "react";
import { ContactContext } from "../../Context/ContactContext";
import { InputSearchContact } from "../InputSearchContact/InputSearchContact";
import { Link, useNavigate } from "react-router";

export const ModalNewMessage = ({ onClose }) => {
    const { contacts, startChat } = useContext(ContactContext);
    const navigate = useNavigate();
    const [searchChatsValue, setSearchChatsValue] = useState("");

    return (
        <section className="ModalNewMessage">
            <header className="ModalNewMessage-header">
                <button title="Cerrar" onClick={onClose}>
                    <span aria-hidden="true" className="x1qx5ct2 xw4jnvo"><svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor"><title>Volver atras</title><path fill="currentColor" d="M18.4 11.6l4.24-4.24a.5.5 0 1 0-.71-.71L17.7 10.9a1.5 1.5 0 0 0 0 2.2l4.24 4.24a.5.5 0 1 0 .71-.71L18.4 12.3a.76.76 0 0 1-.22-.53.75.75 0 0 1 .22-.53Z"></path></svg></span>
                    <p>contactos {contacts.length}</p>
                </button>

            </header>

            <section className="ModalNewMessage-contacts-list">

                <InputSearchContact
                    searchChatsValue={searchChatsValue}
                    setSearchChatsValue={setSearchChatsValue}
                    placeholder="Buscar contactos"
                />


                <Link to="/chats/new-contact" onClick={onClose}>
                    <span>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="xh8yej3 x5yr21d" fill="currentColor"><title>Agregar nuevo contacto</title><path fill="currentColor" d="M18 11h-2a.97.97 0 0 1-.71-.29A.97.97 0 0 1 15 10c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h2V7c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v2h2c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 22 11h-2v2c0 .28-.1.52-.29.71A.94.94 0 0 1 19 14a.97.97 0 0 1-.71-.29A.97.97 0 0 1 18 13v-2Zm-9 1a3.9 3.9 0 0 1-2.83-1.18A3.85 3.85 0 0 1 5 8c0-1.1.4-2.04 1.17-2.83A3.85 3.85 0 0 1 9 4c1.1 0 2.04.4 2.82 1.17A3.85 3.85 0 0 1 13 8c0 1.1-.4 2.04-1.18 2.82A3.85 3.85 0 0 1 9 12Zm-8 6v-.8c0-.57.15-1.09.44-1.56a2.9 2.9 0 0 1 1.16-1.09 13.76 13.76 0 0 1 9.65-1.16c1.07.26 2.12.64 3.15 1.16.48.25.87.61 1.16 1.09.3.47.44 1 .44 1.56v.8c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H3c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41Z"></path></svg>
                    </span>
                    <p>Nuevo contacto</p>
                </Link>

                {contacts
                    .filter(contact => contact.alias.toLowerCase().includes(searchChatsValue.toLowerCase()))
                    .map(contact => (
                        <div
                            key={contact.id}
                            className="ModalNewMessage-contact-item"
                            onClick={() => {
                                startChat(contact.id)
                                onClose()
                                navigate(`/chats/${contact.id}`)
                            }}
                        >
                            <article>
                                <img src={contact.picture.thumbnail} alt={contact.alias} />
                                <p>{contact.alias}</p>
                            </article>
                        </div>
                    ))}
            </section>
        </section>
    );
};